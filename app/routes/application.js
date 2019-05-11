import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class ApplicationRoute extends Route {
  @service metrics
  @service router

  init() {
    this._super(...arguments)

    this.on('routeDidChange', () => {
      const page = this.router.currentURL
      const title = this.router.currentRouteName || 'unknown'

      this.metrics.trackPage({ page, title })
    })
  }
}
