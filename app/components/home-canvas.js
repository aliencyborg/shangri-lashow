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

const LOADING_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/c_scale,h_1600,w_1920/v1555911626/shangri-lashow/extras/shangri-la-01.png'
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

export default class HomeCanvasComponent extends Component {
  @service router

  navigate = path => {
    this.router.transitionTo(path)
  }

  setup = async () => {
    const loadingImageObj = new Image()
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
    const stage = makeStage('home-canvas', 1600, 1920)

    const loadingImg = new Konva.Image({
      height: 1600,
      image: loadingImageObj,
      width: 1920,
      x: 0,
      y: 0
    })

    await imagePromise(loadingImageObj, LOADING_SRC)
    bgLayer.add(loadingImg)
    stage.add(bgLayer)

    const interiorImg = new Konva.Image({
      height: 1600,
      image: interiorImageObj,
      width: 1920,
      x: 0,
      y: 0
    })

    const castCrewBtnImg = buildImage(
      castCrewBtnImageObj,
      'castCrew',
      1390,
      1060,
      false,
      this.navigate,
      'cast_crew'
    )
    const castCrewImg = buildImage(castCrewImageObj, 'castCrew', 1470, 1130)
    const episodesBtnImg = buildImage(
      episodesBtnImageObj,
      'episodes',
      500,
      1100,
      false,
      this.navigate,
      'episodes'
    )
    const episodesImg = buildImage(episodesImageObj, 'episodes', 560, 1130)
    const gamesBtnImg = buildImage(
      gamesBtnImageObj,
      'games',
      455,
      600,
      false,
      this.navigate,
      'games'
    )
    const gamesImg = buildImage(gamesImageObj, 'games', 485, 640)
    const giveBackBtnImg = buildImage(
      giveBackBtnImageObj,
      'giveBack',
      1520,
      1410,
      false,
      this.navigate,
      'give_back'
    )
    const giveBackImg = buildImage(giveBackImageObj, 'giveBack', 1545, 1445)
    const musicBtnImg = buildImage(
      musicBtnImageObj,
      'music',
      470,
      960,
      false,
      this.navigate,
      'music'
    )
    const musicImg = buildImage(musicImageObj, 'music', 500, 1020)
    const photosBtnImg = buildImage(
      photosBtnImageObj,
      'photos',
      1610,
      420,
      false,
      this.navigate,
      'photos'
    )
    const photosImg = buildImage(photosImageObj, 'photos', 1730, 450)
    const shopBtnImg = buildImage(
      shopBtnImageObj,
      'shop',
      0,
      850,
      false,
      this.navigate,
      'shop'
    )
    const shopImg = buildImage(shopImageObj, 'shop', 20, 910)
    const trailerBtnImg = buildImage(
      trailerBtnImageObj,
      'trailer',
      820,
      820,
      false,
      this.navigate,
      'trailer'
    )
    const trailerImg = buildImage(trailerImageObj, 'trailer', 850, 870)
    const youtopiaBtnImg = buildImage(
      youtopiaBtnImageObj,
      'youtopia',
      1370,
      685,
      false,
      this.navigate,
      'youtopia'
    )
    const youtopiaImg = buildImage(youtopiaImageObj, 'youtopia', 1462, 733)

    function resizeFit() {
      fitStageIntoParentContainer('#home-canvas', stage, 1600, 1920)
    }

    await imagePromise(interiorImageObj, INTERIOR_SRC)

    bgLayer.removeChildren()
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

  teardown = () => {
    // console.log('teardown')
  }
}
