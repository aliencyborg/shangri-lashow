import Controller from '@ember/controller'
import images from 'shangri-lashow/util/images'
import { toTitleCase } from 'shangri-lashow/util/strings'

export default class PhotosController extends Controller {
  photoSources = images.photos()

  items = Object.keys(this.photoSources).map(key => ({
    alt: toTitleCase(key),
    src: this.photoSources[key]
  }))
}
