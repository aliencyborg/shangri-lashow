import Component from '@glimmer/component'
import Konva, { Layer, Stage } from 'konva'

const INTERIOR_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555123412/shangri-lashow/Home%20Page/Home_Page_Canvas_02_1920x1600.png'

function fitStageIntoParentContainer(stage, stageHeight, stageWidth) {
  const container = document.querySelector('#home-canvas')

  const containerWidth = container.offsetWidth
  const xScale = containerWidth / stageWidth

  stage.width(stageWidth * xScale)
  stage.height(stageHeight * xScale)
  stage.scale({ x: xScale, y: xScale })
  stage.draw()
}

function makeLayer() {
  return new Layer()
}

function makeStage(height, width) {
  const stageHeight = height || window.innerHeight
  const stageWidth = width || window.innerWidth

  const stage = new Stage({
    container: 'home-container',
    height: stageHeight,
    width: stageWidth
  })

  return stage
}

export default class HomeCanvasComponent extends Component {
  async setup() {
    const interiorImageObj = new Image()

    const bgLayer = makeLayer()
    const fgLayer = makeLayer()
    const stage = makeStage(1600, 1920)

    const interiorImg = new Konva.Image({
      height: 1600,
      image: interiorImageObj,
      width: 1920,
      x: 0,
      y: 0
    })

    function resizeFit() {
      fitStageIntoParentContainer(stage, 1600, 1920)
    }

    await new Promise(resolve => {
      interiorImageObj.onload = () => resolve()
      interiorImageObj.src = INTERIOR_SRC
    })

    bgLayer.add(interiorImg)

    stage.add(bgLayer)
    stage.add(fgLayer)

    resizeFit()

    window.addEventListener('resize', resizeFit)
  }
}
