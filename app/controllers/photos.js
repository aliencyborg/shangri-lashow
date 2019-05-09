import Controller from '@ember/controller'
import images from 'shangri-lashow/util/images'
import { toTitleCase } from 'shangri-lashow/util/strings'

export default class PhotosController extends Controller {
  photoSources = images.photos()

  items = Object.keys(this.photoSources).map(key => {
    const image = new Image()
    image.src = this.photoSources[key]
    const { height, width } = image

    return {
      alt: toTitleCase(key),
      src: this.photoSources[key],
      h: height,
      w: width
    }
  })
}
