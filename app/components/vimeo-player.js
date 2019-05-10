import Component from '@glimmer/component'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class VimeoPlayerComponent extends Component {
  @service media
  @service modal

  @action
  hideModal() {
    this.modal.hideModal()
  }

  width = Math.floor(window.innerWidth * 0.9)
  height = Math.floor(this.width * 0.6)
}
