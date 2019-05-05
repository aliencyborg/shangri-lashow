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
    konvaImg.on('click touchstart', () => {
      callback(callbackArg)
    })
  }

  return konvaImg
}

async function buildVideo(videoObj, name, src) {
  const video = buildImage(videoObj, name, 144, 300)

  return new Promise(resolve => {
    videoObj.addEventListener(`loadedmetadata`, () => {
      video.width(videoObj.videoWidth)
      video.height(videoObj.videoHeight)
      resolve(video)
    })
    videoObj.src = src
  })
}

function fitStageIntoParentContainer(id, stage, stageHeight, stageWidth) {
  const container = document.querySelector(id)

  const containerWidth = container.offsetWidth
  const xScale = containerWidth / stageWidth
  console.log('fitStage', {
    id,
    stage,
    stageHeight,
    stageWidth,
    containerWidth,
    xScale
  })

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

async function imagePromise(imageObj, src) {
  return new Promise(resolve => {
    imageObj.onload = () => resolve()
    imageObj.src = src
  })
}

export {
  buildImage,
  buildVideo,
  fitStageIntoParentContainer,
  imagePromise,
  makeLayer,
  makeStage
}
