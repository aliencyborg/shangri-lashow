import Component from '@glimmer/component'
import Konva from 'konva'
import { inject as service } from '@ember/service'
import {
  buildImage,
  fitStageIntoParentContainer,
  imagePromise,
  makeLayer,
  makeStage
} from 'shangri-lashow/util/canvas-utils'

const TRANSFORM = 'w_0.5,h_0.5'

const TV_BACKGROUND_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555452236/shangri-lashow/Episodes%20Page/TVwithBackground1920w.png'
const BLANK_SCREEN_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${TRANSFORM}/v1554831220/shangri-lashow/Episodes%20Page/Blank_Screen_01.png`
const EP_01_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/c_scale,h_675/v1555476346/shangri-lashow/video/ep01TrailerB.mp4'

export default class EpisodesCanvasComponent extends Component {
  @service router

  navigate = path => {
    this.router.transitionTo(path)
  }

  setup = async () => {
    const backgroundImageObj = new Image()
    const blankScreenImageObj = new Image()

    const videoLayer = makeLayer() // behind the "background"
    const bgLayer = makeLayer()
    const fgLayer = makeLayer()
    const stage = makeStage('episodes-canvas', 1562, 1920)

    const backgroundImg = new Konva.Image({
      height: 1282,
      image: backgroundImageObj,
      width: 1920,
      x: 0,
      y: 216
    })

    const blankScreenImg = buildImage(
      blankScreenImageObj,
      'blankScreen',
      140,
      300
    )

    const imageMap = {}

    function resizeFit() {
      fitStageIntoParentContainer('#episodes-canvas', stage, 1562, 1920)
    }

    stage.add(videoLayer)
    stage.add(bgLayer)
    stage.add(fgLayer)

    const ep01TrailerVideoObj = document.createElement('video')
    ep01TrailerVideoObj.src = EP_01_TRAILER_SRC

    const ep01TrailerVideo = buildImage(
      ep01TrailerVideoObj,
      'ep01Trailer',
      140,
      300
    )

    // await imagePromise(ep01TrailerVideoObj, EP_01_TRAILER_SRC)
    videoLayer.add(ep01TrailerVideo)

    ep01TrailerVideoObj.addEventListener('loadedmetadata', () => {
      console.log('loaded!')
      ep01TrailerVideo.width(ep01TrailerVideoObj.videoWidth)
      ep01TrailerVideo.height(ep01TrailerVideoObj.videoHeight)
    })

    const anim = new Konva.Animation(() => {
      // do nothing, animation just need to update the layer
    }, videoLayer)

    document.getElementById('episodes-canvas').addEventListener('click', () => {
      console.log('click')
      ep01TrailerVideoObj.play()
      anim.start()
    })

    // await imagePromise(blankScreenImageObj, BLANK_SCREEN_SRC)
    // videoLayer.add(blankScreenImg)

    await imagePromise(backgroundImageObj, TV_BACKGROUND_SRC)
    bgLayer.add(backgroundImg)

    resizeFit()

    // fgLayer.on('mouseover', evt => {
    //   const {
    //     target: {
    //       attrs: { name }
    //     }
    //   } = evt
    //   const [originalImage, btnImage] = imageMap[name]

    //   document.body.style.cursor = 'pointer'
    //   originalImage.hide()
    //   btnImage.show()
    //   stage.draw()
    // })

    // fgLayer.on('mouseout', evt => {
    //   const {
    //     target: {
    //       attrs: { name }
    //     }
    //   } = evt
    //   const [originalImage, btnImage] = imageMap[name]

    //   document.body.style.cursor = 'default'
    //   btnImage.hide()
    //   originalImage.show()
    //   stage.draw()
    // })

    window.addEventListener('resize', resizeFit)
  }
}
