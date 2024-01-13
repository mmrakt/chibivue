import { InjectionKey } from './apiInject'
import { Component } from './component'
import { RootRenderFunction } from './renderer'
import { createVNode } from './vnode'

export interface App<HostElement = any> {
  mount(rootContainer: HostElement | string): void
  provide<T>(key: InjectionKey<T> | string, value: T): this
}

export interface AppContext {
  app: App
  provides: Record<string | symbol, any>
}

export function createAppContext(): AppContext {
  return {
    app: null as any,
    provides: Object.create(null),
  }
}

export type CreateAppFunction<HostElement> = (
  rootComponent: Component,
) => App<HostElement>

export function createAppAPI<HostElement>(
  render: RootRenderFunction<HostElement>,
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent) {
    const context = createAppContext()

    const app: App = (context.app = {
      mount(rootContainer: HostElement) {
        const vnode = createVNode(rootComponent, {}, [])
        vnode.appContext = context
        render(vnode, rootContainer)
      },

      provide(key, value) {
        context.provides[key as string | symbol] = value

        return app
      },
    })

    return app
  }
}
