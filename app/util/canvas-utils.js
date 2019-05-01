import Konva, { Layer, Stage } from 'konva'

function buildImage(
  imageObj,
  name,
  x,
  y,
  imageScale = {},
  visible = true,
  callback,
  callbackArg
) {
  const { x: xFactor = 1.0, y: yFactor = 1.0 } = imageScale
  const scaledX = parseInt(x * xFactor, 10)
  const scaledY = parseInt(y * yFactor, 10)

  const konvaImg = new Konva.Image({
    image: imageObj,
    name,
    visible,
    x: scaledX,
    y: scaledY
  })

  if (callback) {
    if (callbackArg) {
      konvaImg.on('click touchstart', () => callback(callbackArg))
    } else {
      konvaImg.on('click touchstart', () => callback())
    }
  }

  return konvaImg
}

async function buildLoadingImage(height, width) {
  const LOADING_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/c_scale,h_${height},w_${width}/v1555911626/shangri-lashow/extras/shangri-la-01.png`
  const imageObj = new Image()

  const image = new Konva.Image({
    height,
    image: imageObj,
    width,
    x: 0,
    y: 0
  })

  await imagePromise(imageObj, LOADING_SRC)
  return image
}

function fitStageIntoParentContainer(id, stage, stageHeight, stageWidth) {
  const container = document.querySelector(id)

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

function makeStage(canvasName, height, width) {
  const stageHeight = height || window.innerHeight
  const stageWidth = width || window.innerWidth

  const stage = new Stage({
    container: canvasName,
    height: stageHeight,
    width: stageWidth
  })

  return stage
}

function imagePromise(imageObj, src) {
  return new Promise(resolve => {
    imageObj.onload = () => resolve()
    imageObj.src = src
  })
}

export {
  buildImage,
  buildLoadingImage,
  fitStageIntoParentContainer,
  imagePromise,
  makeLayer,
  makeStage
}
