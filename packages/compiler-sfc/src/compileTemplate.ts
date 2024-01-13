import type {
  CodegenResult,
  CompilerOptions,
  ParserOptions,
  RootNode,
} from '@chibivue/compiler-core'
import * as CompilerDOM from '@chibivue/compiler-dom'

export interface TemplateCompiler {
  compile(template: string, options: CompilerOptions): CodegenResult
  parse(template: string, options: ParserOptions): RootNode
}

export interface SFCTemplateCompileResults {
  code: string
  source: string
  ast?: RootNode
  preamble?: string
}

export interface SFCTemplateCompileOptions {
  source: string
  compiler?: TemplateCompiler
  compilerOptions?: CompilerOptions
}

export function compileTemplate({
  source,
  compiler = CompilerDOM,
  compilerOptions,
}: SFCTemplateCompileOptions): SFCTemplateCompileResults {
  let { code, ast, preamble } = compiler.compile(source, {
    ...compilerOptions,
    isBrowser: false,
  })
  return { code: code, ast, source, preamble }
}
