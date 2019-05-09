import Konva, { Layer, Stage } from 'konva'

function buildImage(
  imageObj,
  name,
  x,
  y,
  imageScale = {},
  visible = true,
  isMobile,
  callback,
  callbackArg
) {
  const { x: xFactor = 1.0, y: yFactor = 1.0 } = imageScale
  const scaledX = parseInt(x * xFactor, 10)
  const scaledY = parseInt(y * yFactor, 10)

  const konvaImg = new Konva.Image({
    image: imageObj,
    name,
    preventDefault: false,
    visible,
    x: scaledX,
    y: scaledY
  })

  if (callback) {
    const action = isMobile ? 'tap' : 'touchstart'
    konvaImg.on(action, () => callback(callbackArg))
  }

  return konvaImg
}

async function buildVideo(videoObj, name, src, isMobile = false, imageScale) {
  let x = 144
  let y = 300

  if (isMobile) {
    x = 120
    y = 230
  }
  const video = buildImage(videoObj, name, x, y, imageScale)

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
