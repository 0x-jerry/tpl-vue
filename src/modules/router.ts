import type { Plugin } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

export const install: Plugin = (app) => {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  app.use(router)
}
