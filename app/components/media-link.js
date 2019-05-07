import Component from '@glimmer/component'
import images from 'shangri-lashow/util/images'

export default class MediaLinkComponent extends Component {
  href = this.args.href || '#'
  iconSources = images.icons()
  name = this.args.name

  iconSrc = this.iconSources[this.name.classify().toLowerCase()]
}
