import Controller from '@ember/controller'
import { inject as service } from '@ember/service'
import images from 'shangri-lashow/util/images'

export default class GamesController extends Controller {
  @service media

  isMobile = this.media.isMobile

  bigTimeSource = images.bigTime().button
  pageSource = images.games(this.isMobile).page
}
