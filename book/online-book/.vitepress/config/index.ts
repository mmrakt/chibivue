import { sharedConfig } from './shared.js'
import { jaConfig } from './ja'
import { enConfig } from './en.js'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { defineConfig } from 'vitepress'

// The same situation as the issue below is occurring, so mermaid is rendered only during production build.
// https://github.com/iamkun/dayjs/issues/480
export default (process.env.NODE_ENV === 'production'
  ? withMermaid
  : defineConfig)({
  ...sharedConfig,
  locales: {
    root: { label: 'Japanese', lang: 'ja', link: '/', ...jaConfig },
    en: { label: 'English', lang: 'en', link: '/en/', ...enConfig },
  },
})
