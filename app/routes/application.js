import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import { action } from '@ember/object'

export default class ApplicationRoute extends Route {
  @service metrics

  init() {
    this._super(...arguments)

    this.on('activate', () => {
      const page = window.location.pathname.replace(/^\//, '')

      if (page === '') {
        this.metrics.trackPage({ page: 'home' })
      } else {
        this.metrics.trackPage({ page })
      }
    })
  }

  @action
  willTransition(transition) {
    const page = transition && transition.to && transition.to.name

    if (page) {
      this.metrics.trackPage({ page })
    }
  }
}
