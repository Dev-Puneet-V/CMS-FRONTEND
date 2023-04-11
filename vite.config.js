// @ts-check
import reactPlugin from 'vite-plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  base:'/CMS-FRONTEND/',
  jsx: 'react',
  plugins: [reactPlugin]
}

export default config
