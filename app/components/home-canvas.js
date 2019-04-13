import Component from '@glimmer/component'
import Konva, { Layer, Stage } from 'konva'
import { inject as service } from '@ember/service'

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

function imagePromise(imageObj, src) {
  return new Promise(resolve => {
    imageObj.onload = () => resolve()
    imageObj.src = src
  })
}

export default class HomeCanvasComponent extends Component {
  @service router

  clickBtn(path) {
    this.router.transitionTo(path)
  }

  buildImage(imageObj, name, x, y, path, visible = true) {
    const konvaImg = new Konva.Image({
      image: imageObj,
      name,
      visible,
      x,
      y
    })

    if (path) {
      konvaImg.on('click', () => this.clickBtn(path))
    }

    return konvaImg
  }

  setup = async () => {
    const interiorImageObj = new Image()

    const castCrewBtnImageObj = new Image()
    const castCrewImageObj = new Image()
    const episodesBtnImageObj = new Image()
    const episodesImageObj = new Image()
    const gamesBtnImageObj = new Image()
    const gamesImageObj = new Image()
    const giveBackBtnImageObj = new Image()
    const giveBackImageObj = new Image()
    const musicBtnImageObj = new Image()
    const musicImageObj = new Image()
    const photosBtnImageObj = new Image()
    const photosImageObj = new Image()
    const shopBtnImageObj = new Image()
    const shopImageObj = new Image()
    const trailerBtnImageObj = new Image()
    const trailerImageObj = new Image()
    const youtopiaBtnImageObj = new Image()
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

    const castCrewBtnImg = this.buildImage(
      castCrewBtnImageObj,
      'castCrew',
      1390,
      1060,
      'cast_crew',
      false
    )
    const castCrewImg = this.buildImage(
      castCrewImageObj,
      'castCrew',
      1470,
      1130
    )
    const episodesBtnImg = this.buildImage(
      episodesBtnImageObj,
      'episodes',
      500,
      1100,
      'episodes',
      false
    )
    const episodesImg = this.buildImage(episodesImageObj, 'episodes', 560, 1130)
    const gamesBtnImg = this.buildImage(
      gamesBtnImageObj,
      'games',
      455,
      600,
      'games',
      false
    )
    const gamesImg = this.buildImage(gamesImageObj, 'games', 485, 640)
    const giveBackBtnImg = this.buildImage(
      giveBackBtnImageObj,
      'giveBack',
      1520,
      1410,
      'give_back',
      false
    )
    const giveBackImg = this.buildImage(
      giveBackImageObj,
      'giveBack',
      1545,
      1445
    )
    const musicBtnImg = this.buildImage(
      musicBtnImageObj,
      'music',
      470,
      960,
      'music',
      false
    )
    const musicImg = this.buildImage(musicImageObj, 'music', 500, 1020)
    const photosBtnImg = this.buildImage(
      photosBtnImageObj,
      'photos',
      1610,
      420,
      'photos',
      false
    )
    const photosImg = this.buildImage(photosImageObj, 'photos', 1730, 450)
    const shopBtnImg = this.buildImage(
      shopBtnImageObj,
      'shop',
      0,
      850,
      'shop',
      false
    )
    const shopImg = this.buildImage(shopImageObj, 'shop', 20, 910)
    const trailerBtnImg = this.buildImage(
      trailerBtnImageObj,
      'trailer',
      820,
      820,
      'trailer',
      false
    )
    const trailerImg = this.buildImage(trailerImageObj, 'trailer', 850, 870)
    const youtopiaBtnImg = this.buildImage(
      youtopiaBtnImageObj,
      'youtopia',
      1370,
      685,
      'youtopia',
      false
    )
    const youtopiaImg = this.buildImage(youtopiaImageObj, 'youtopia', 1462, 733)

    function resizeFit() {
      fitStageIntoParentContainer(stage, 1600, 1920)
    }

    await imagePromise(interiorImageObj, INTERIOR_SRC)

    bgLayer.add(interiorImg)

    await imagePromise(castCrewBtnImageObj, CAST_CREW_B_SRC)
    await imagePromise(castCrewImageObj, CAST_CREW_SRC)
    await imagePromise(episodesBtnImageObj, EPISODES_B_SRC)
    await imagePromise(episodesImageObj, EPISODES_SRC)
    await imagePromise(gamesBtnImageObj, GAMES_B_SRC)
    await imagePromise(gamesImageObj, GAMES_SRC)
    await imagePromise(giveBackBtnImageObj, GIVE_BACK_B_SRC)
    await imagePromise(giveBackImageObj, GIVE_BACK_SRC)
    await imagePromise(musicBtnImageObj, MUSIC_B_SRC)
    await imagePromise(musicImageObj, MUSIC_SRC)
    await imagePromise(photosBtnImageObj, PHOTOS_B_SRC)
    await imagePromise(photosImageObj, PHOTOS_SRC)
    await imagePromise(shopBtnImageObj, SHOP_B_SRC)
    await imagePromise(shopImageObj, SHOP_SRC)
    await imagePromise(trailerBtnImageObj, TRAILER_B_SRC)
    await imagePromise(trailerImageObj, TRAILER_SRC)
    await imagePromise(youtopiaBtnImageObj, YOUTOPIA_B_SRC)
    await imagePromise(youtopiaImageObj, YOUTOPIA_SRC)

    const imageMap = {
      castCrew: [castCrewImg, castCrewBtnImg],
      episodes: [episodesImg, episodesBtnImg],
      games: [gamesImg, gamesBtnImg],
      giveBack: [giveBackImg, giveBackBtnImg],
      music: [musicImg, musicBtnImg],
      photos: [photosImg, photosBtnImg],
      shop: [shopImg, shopBtnImg],
      trailer: [trailerImg, trailerBtnImg],
      youtopia: [youtopiaImg, youtopiaBtnImg]
    }

    fgLayer.add(
      castCrewImg,
      episodesImg,
      gamesImg,
      giveBackImg,
      musicImg,
      photosImg,
      shopImg,
      trailerImg,
      youtopiaImg,
      castCrewBtnImg,
      episodesBtnImg,
      gamesBtnImg,
      giveBackBtnImg,
      musicBtnImg,
      photosBtnImg,
      shopBtnImg,
      trailerBtnImg,
      youtopiaBtnImg
    )

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
