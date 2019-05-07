import Controller from '@ember/controller'
import { inject as service } from '@ember/service'
import images from 'shangri-lashow/util/images'

export default class MusicController extends Controller {
  @service media

  bgSource = images.backgrounds().music
  isMobile = this.media.isMobile
}
