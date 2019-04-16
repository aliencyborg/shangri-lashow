import Konva, { Layer, Stage } from 'konva'

function buildImage(
  imageObj,
  name,
  x,
  y,
  visible = true,
  callback,
  callbackArg
) {
  const konvaImg = new Konva.Image({
    image: imageObj,
    name,
    visible,
    x,
    y
  })

  if (callback) {
    if (callbackArg) {
      konvaImg.on('click', () => callback(callbackArg))
    } else {
      konvaImg.on('click', () => callback())
    }
  }

  return konvaImg
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
  fitStageIntoParentContainer,
  imagePromise,
  makeLayer,
  makeStage
}
