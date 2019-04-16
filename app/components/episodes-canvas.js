import Component from '@glimmer/component'
// import Konva, { Layer, Stage } from 'konva'
import { inject as service } from '@ember/service'
import {
  buildImage,
  fitStageIntoParentContainer,
  imagePromise,
  makeLayer,
  makeStage
} from 'shangri-lashow/util/canvas-utils'

export default class EpisodesCanvasComponent extends Component {
  @service router

  navigate = path => {
    this.router.transitionTo(path)
  }

  setup = async () => {
    const bgLayer = makeLayer()
    const fgLayer = makeLayer()
    const stage = makeStage('episodes-canvas', 1600, 1920)

    function resizeFit() {
      fitStageIntoParentContainer('#episodes-container', stage, 1600, 1920)
    }

    const imageMap = {}

    stage.add(bgLayer)
    stage.add(fgLayer)

    resizeFit()

    fgLayer.on('mouseover', evt => {
      const {
        target: {
          attrs: { name }
        }
      } = evt
      const [originalImage, btnImage] = imageMap[name]

      document.body.style.cursor = 'pointer'
      originalImage.hide()
      btnImage.show()
      stage.draw()
    })

    fgLayer.on('mouseout', evt => {
      const {
        target: {
          attrs: { name }
        }
      } = evt
      const [originalImage, btnImage] = imageMap[name]

      document.body.style.cursor = 'default'
      btnImage.hide()
      originalImage.show()
      stage.draw()
    })

    window.addEventListener('resize', resizeFit)
  }
}
