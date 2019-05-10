import Service from '@ember/service'
import { tracked } from '@glimmer/tracking'

export default class ModalService extends Service {
  @tracked isShowing = false

  hideModal = () => (this.isShowing = false)
  showModal = () => (this.isShowing = true)
  toggleModal = () => this.toggleProperty('isShowing')
}
