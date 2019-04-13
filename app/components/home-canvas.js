import Component from '@glimmer/component'
import Konva, { Layer, Stage } from 'konva'

const INTERIOR_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555123412/shangri-lashow/Home%20Page/Home_Page_Canvas_02_1920x1600.png'
const CAST_CREW_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109007/shangri-lashow/Home%20Page/CAST_CREW_01.png'
const CAST_CREW_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831012/shangri-lashow/Home%20Page/CAST_CREW_button_01.png'
const EPISODES_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109008/shangri-lashow/Home%20Page/EPISODES_01.png'
const EPISODES_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831011/shangri-lashow/Home%20Page/EPISODES_button_01.png'
const GAMES_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109006/shangri-lashow/Home%20Page/GAMES_01.png'
const GAMES_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831011/shangri-lashow/Home%20Page/GAMES_button_01.png'
const GIVE_BACK_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109006/shangri-lashow/Home%20Page/GIVE_BACK_01.png'
const GIVE_BACK_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831011/shangri-lashow/Home%20Page/GIVE_BACK_button_01.png'
const MUSIC_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109007/shangri-lashow/Home%20Page/MUSIC_01.png'
const MUSIC_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831012/shangri-lashow/Home%20Page/MUSIC_button_01.png'
const PHOTOS_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109007/shangri-lashow/Home%20Page/PHOTOS_01.png'
const PHOTOS_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831011/shangri-lashow/Home%20Page/PHOTOS_button_01.png'
const SHOP_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109007/shangri-lashow/Home%20Page/SHOP_01.png'
const SHOP_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831012/shangri-lashow/Home%20Page/SHOP_button_01.png'
const TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109008/shangri-lashow/Home%20Page/TRAILER_01.png'
const TRAILER_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831011/shangri-lashow/Home%20Page/TRAILER_button_01.png'
const YOUTOPIA_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555109008/shangri-lashow/Home%20Page/YOUTOPIA_01.png'
const YOUTOPIA_B_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1554831012/shangri-lashow/Home%20Page/YOUTOPIA_button_01.png'

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

function buildImage(imageObj, x, y) {
  return new Konva.Image({
    image: imageObj,
    x,
    y
  })
}

function imagePromise(imageObj, src) {
  return new Promise(resolve => {
    imageObj.onload = () => resolve()
    imageObj.src = src
  })
}

export default class HomeCanvasComponent extends Component {
  async setup() {
    const interiorImageObj = new Image()
    const castCrewImageObj = new Image()
    const episodesImageObj = new Image()
    const gamesImageObj = new Image()
    const giveBackImageObj = new Image()
    const musicImageObj = new Image()
    const photosImageObj = new Image()
    const shopImageObj = new Image()
    const trailerImageObj = new Image()
    const youtopiaImageObj = new Image()

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

    const castCrewImg = buildImage(castCrewImageObj, 1470, 1130)
    const episodesImg = buildImage(episodesImageObj, 560, 1130)
    const gamesImg = buildImage(gamesImageObj, 485, 640)
    const giveBackImg = buildImage(giveBackImageObj, 1545, 1445)
    const musicImg = buildImage(musicImageObj, 500, 1020)
    const photosImg = buildImage(photosImageObj, 1730, 450)
    const shopImg = buildImage(shopImageObj, 20, 920)
    const trailerImg = buildImage(trailerImageObj, 850, 870)
    const youtopiaImg = buildImage(youtopiaImageObj, 1462, 733)

    function resizeFit() {
      fitStageIntoParentContainer(stage, 1600, 1920)
    }

    await imagePromise(interiorImageObj, INTERIOR_SRC)

    bgLayer.add(interiorImg)

    await imagePromise(castCrewImageObj, CAST_CREW_SRC)
    await imagePromise(episodesImageObj, EPISODES_SRC)
    await imagePromise(gamesImageObj, GAMES_SRC)
    await imagePromise(giveBackImageObj, GIVE_BACK_SRC)
    await imagePromise(musicImageObj, MUSIC_SRC)
    await imagePromise(photosImageObj, PHOTOS_SRC)
    await imagePromise(shopImageObj, SHOP_SRC)
    await imagePromise(trailerImageObj, TRAILER_SRC)
    await imagePromise(youtopiaImageObj, YOUTOPIA_SRC)

    fgLayer.add(
      castCrewImg,
      episodesImg,
      gamesImg,
      giveBackImg,
      musicImg,
      photosImg,
      shopImg,
      trailerImg,
      youtopiaImg
    )

    stage.add(bgLayer)
    stage.add(fgLayer)

    resizeFit()

    window.addEventListener('resize', resizeFit)
  }
}
