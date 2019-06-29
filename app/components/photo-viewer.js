import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import images from 'shangri-lashow/util/images'
import { imagePromise } from 'shangri-lashow/util/canvas-utils'
import { toTitleCase } from 'shangri-lashow/util/strings'

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

export default class PhotoViewerComponent extends Component {
  photoSources = images.photos()
  imageKeys = Object.keys(this.photoSources)
  @tracked items = []

  setup = async () => {
    const shuffledImageKeys = shuffle(this.imageKeys)

    this.items = await Promise.all(
      shuffledImageKeys.map(async key => {
        const image = new Image()

        await imagePromise(image, this.photoSources[key])

        const { height, width } = image

        return {
          alt: toTitleCase(key),
          src: this.photoSources[key],
          h: height,
          w: width
        }
      })
    )

    this.args.stopLoading()
  }
}
