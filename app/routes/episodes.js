import Route from '@ember/routing/route'
import { action } from '@ember/object'

export default class EpisodesRoute extends Route {
  @action didTransition() {
    this._super(...arguments)
    return true
  }
}
