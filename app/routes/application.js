import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class ApplicationRoute extends Route {
  @service metrics
  @service router

  didTransition() {
    this._super(...arguments)

    const page = this.router.currentURL
    const title = this.router.currentRouteName || 'unknown'
    console.log('didTransition', { page, title })

    this.metrics.trackPage({ page, title })
  }

  init() {
    this._super(...arguments)

    const page = '/'
    const title = 'home'
    console.log('init', { page, title })

    this.metrics.trackPage({ page, title })
  }
}
