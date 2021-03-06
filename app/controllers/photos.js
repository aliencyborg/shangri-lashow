import Controller from '@ember/controller'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class PhotosController extends Controller {
  @tracked isLoading = true

  @action
  stopLoading() {
    this.isLoading = false
  }
}
