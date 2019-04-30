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
import images from 'shangri-lashow/util/images'

export default class HomeCanvasComponent extends Component {
  @service media
  @service router

  resizeFit
  stage

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

    const { isMobile } = this.media

    let baseHeight = 1600
    let stageHeight = 1600
    let baseWidth = 1920
    let stageWidth = 1920

    if (isMobile) {
      baseHeight = 1400
      baseWidth = 1080
      stageHeight = window.innerHeight
      stageWidth = window.innerWidth
    }

    const imageSources = images.home(stageHeight, stageWidth, baseHeight, baseWidth, isMobile)
    const xFactor = Number((stageWidth / 1920).toFixed(2))
    const yFactor = Number((stageWidth / 1600).toFixed(2))
    const imageScale = { x: xFactor, y: yFactor }

    const bgLayer = makeLayer()
    const fgLayer = makeLayer()
    this.stage = makeStage('home-canvas', stageHeight, stageWidth)

    const loadingImg = new Konva.Image({
      height: stageHeight,
      image: loadingImageObj,
      width: stageWidth,
      x: 0,
      y: 0
    })

    await imagePromise(loadingImageObj, imageSources.loading)

    bgLayer.add(loadingImg)
    this.stage.add(bgLayer)

    const interiorImg = new Konva.Image({
      height: stageHeight,
      image: interiorImageObj,
      width: stageWidth,
      x: 0,
      y: 0
    })

    const castCrewBtnImg = buildImage(
      castCrewBtnImageObj,
      'castCrew',
      1390,
      1060,
      imageScale,
      false,
      this.navigate,
      'cast_crew',
    )
    const castCrewImg = buildImage(castCrewImageObj, 'castCrew', 1470, 1130, imageScale)
    const episodesBtnImg = buildImage(
      episodesBtnImageObj,
      'episodes',
      500,
      1100,
      imageScale,
      false,
      this.navigate,
      'episodes',
    )
    const episodesImg = buildImage(episodesImageObj, 'episodes', 560, 1130, imageScale)
    const gamesBtnImg = buildImage(
      gamesBtnImageObj,
      'games',
      455,
      600,
      imageScale,
      false,
      this.navigate,
      'games',
    )
    const gamesImg = buildImage(gamesImageObj, 'games', 485, 640, imageScale)
    const giveBackBtnImg = buildImage(
      giveBackBtnImageObj,
      'giveBack',
      1520,
      1410,
      imageScale,
      false,
      this.navigate,
      'give_back',
    )
    const giveBackImg = buildImage(giveBackImageObj, 'giveBack', 1545, 1445, imageScale)
    const musicBtnImg = buildImage(
      musicBtnImageObj,
      'music',
      470,
      960,
      imageScale,
      false,
      this.navigate,
      'music',
    )
    const musicImg = buildImage(musicImageObj, 'music', 500, 1020, imageScale)
    const photosBtnImg = buildImage(
      photosBtnImageObj,
      'photos',
      1610,
      420,
      imageScale,
      false,
      this.navigate,
      'photos',
    )
    const photosImg = buildImage(photosImageObj, 'photos', 1730, 450, imageScale)
    const shopBtnImg = buildImage(
      shopBtnImageObj,
      'shop',
      0,
      850,
      imageScale,
      false,
      this.navigate,
      'shop',
    )
    const shopImg = buildImage(shopImageObj, 'shop', 20, 910, imageScale)
    const trailerBtnImg = buildImage(
      trailerBtnImageObj,
      'trailer',
      820,
      820,
      imageScale,
      false,
      this.navigate,
      'trailer',
    )
    const trailerImg = buildImage(trailerImageObj, 'trailer', 850, 870, imageScale)
    const youtopiaBtnImg = buildImage(
      youtopiaBtnImageObj,
      'youtopia',
      1370,
      685,
      imageScale,
      false,
      this.navigate,
      'youtopia',
    )
    const youtopiaImg = buildImage(youtopiaImageObj, 'youtopia', 1462, 733, imageScale)

    this.resizeFit = () =>
      fitStageIntoParentContainer(
        '#home-canvas',
        this.stage,
        stageHeight,
        stageWidth
      )

    await imagePromise(interiorImageObj, imageSources.interior)

    bgLayer.removeChildren()
    bgLayer.add(interiorImg)
    this.resizeFit()

    await Promise.all([
      imagePromise(castCrewBtnImageObj, imageSources.castCrewBtn),
      imagePromise(castCrewImageObj, imageSources.castCrew),
      imagePromise(episodesBtnImageObj, imageSources.episodesBtn),
      imagePromise(episodesImageObj, imageSources.episodes),
      imagePromise(gamesBtnImageObj, imageSources.gamesBtn),
      imagePromise(gamesImageObj, imageSources.games),
      imagePromise(giveBackBtnImageObj, imageSources.giveBackBtn),
      imagePromise(giveBackImageObj, imageSources.giveBack),
      imagePromise(musicBtnImageObj, imageSources.musicBtn),
      imagePromise(musicImageObj, imageSources.music),
      imagePromise(photosBtnImageObj, imageSources.photosBtn),
      imagePromise(photosImageObj, imageSources.photos),
      imagePromise(shopBtnImageObj, imageSources.shopBtn),
      imagePromise(shopImageObj, imageSources.shop),
      imagePromise(trailerBtnImageObj, imageSources.trailerBtn),
      imagePromise(trailerImageObj, imageSources.trailer),
      imagePromise(youtopiaBtnImageObj, imageSources.youtopiaBtn),
      imagePromise(youtopiaImageObj, imageSources.youtopia)
    ])

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

    this.stage.add(fgLayer)
    this.resizeFit()

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
      this.stage.draw()
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
      this.stage.draw()
    })

    window.addEventListener('resize', this.resizeFit)
  }

  teardown = () => {
    document.body.style.cursor = 'default'
    window.removeEventListener('resize', this.resizeFit)
    this.stage.destroy()
  }
}
