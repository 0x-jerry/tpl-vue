import { Resolver } from 'unplugin-auto-import/types'

/**
 * 自动引入的变量
 */
const globalPropNames: string[] = []

export const globalResolver: Resolver = (name) => {
  if (!globalPropNames.includes(name)) return

  return {
    importName: name,
    path: '@/global',
  }
}
