import { EmitsOptions } from './componentEmits'
import {
  ComponentInjectOptions,
  ComponentOptions,
  ComputedOptions,
  MethodOptions,
  ResolveProps,
} from './componentOptions'
import {
  ComponentPublicInstanceConstructor,
  CreateComponentPublicInstance,
} from './componentPublicInstance'
import { SlotsType } from './componentSlots'

type DefineComponent<
  PropOptions = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  I extends ComponentInjectOptions = {},
  S extends SlotsType = {},
  E extends EmitsOptions = {},
  EE extends string = string,
  Props = ResolveProps<PropOptions>,
> = ComponentPublicInstanceConstructor<
  CreateComponentPublicInstance<Props, RawBindings, D, C, M, I, S, E, EE>,
  Props,
  RawBindings,
  D,
  C,
  M,
  I,
  S,
  E,
  EE
>

export function defineComponent<
  PropsOptions = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  I extends ComponentInjectOptions = {},
  S extends SlotsType = {},
  E extends EmitsOptions = {},
  EE extends string = string,
>(
  options: ComponentOptions<PropsOptions, RawBindings, D, C, M, I, S, E, EE>,
): DefineComponent<PropsOptions, RawBindings, D, C, M, I, S, E, EE> {
  return options as any
}
