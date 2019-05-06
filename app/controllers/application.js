import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default class ApplicationController extends Controller {
  @service media

  isMobile = this.media.isMobile
}
