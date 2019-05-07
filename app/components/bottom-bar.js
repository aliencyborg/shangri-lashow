import Component from '@glimmer/component'
import { inject as service } from '@ember/service'
import images from 'shangri-lashow/util/images'

export default class BottomBarComponent extends Component {
  @service media

  isMobile = this.media.isMobile

  iconSources = images.icons(this.isMobile)
}
