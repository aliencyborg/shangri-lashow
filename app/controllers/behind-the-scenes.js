import Controller from '@ember/controller'
import { inject as service } from '@ember/service'
import images from 'shangri-lashow/util/images'

export default class BehindTheScenesController extends Controller {
  @service media

  isMobile = this.media.isMobile

  imageSources = images.behindTheScenes(this.isMobile)
}
