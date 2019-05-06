import Controller from '@ember/controller'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class HomeController extends Controller {
  @tracked isLoading = true

  @action
  stopLoading() {
    this.isLoading = false
  }
}
