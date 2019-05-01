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
    const titleImageObj = new Image()
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

    const imageSources = images.home(
      stageHeight,
      stageWidth,
      baseHeight,
      baseWidth,
      isMobile
    )

    const xFactor = Number((stageWidth / 1920).toFixed(2))
    const yFactor = Number((stageHeight / 1600).toFixed(2))
    const imageScale = { x: xFactor, y: yFactor }
    const imageLoci = images.loci(isMobile)

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
      imageLoci.castCrew.x - 80,
      imageLoci.castCrew.y - 70,
      imageScale,
      false,
      this.navigate,
      'cast_crew'
    )
    const castCrewImg = buildImage(
      castCrewImageObj,
      'castCrew',
      imageLoci.castCrew.x,
      imageLoci.castCrew.y,
      imageScale
    )
    const episodesBtnImg = buildImage(
      episodesBtnImageObj,
      'episodes',
      imageLoci.episodes.x - 80,
      imageLoci.episodes.y - 70,
      imageScale,
      false,
      this.navigate,
      'episodes'
    )
    const episodesImg = buildImage(
      episodesImageObj,
      'episodes',
      imageLoci.episodes.x,
      imageLoci.episodes.y,
      imageScale
    )
    const gamesBtnImg = buildImage(
      gamesBtnImageObj,
      'games',
      imageLoci.games.x - 50,
      imageLoci.games.y - 70,
      imageScale,
      false,
      this.navigate,
      'games'
    )
    const gamesImg = buildImage(
      gamesImageObj,
      'games',
      imageLoci.games.x,
      imageLoci.games.y,
      imageScale
    )
    const giveBackBtnImg = buildImage(
      giveBackBtnImageObj,
      'giveBack',
      imageLoci.giveBack.x - 80,
      imageLoci.giveBack.y - 70,
      imageScale,
      false,
      this.navigate,
      'give_back'
    )
    const giveBackImg = buildImage(
      giveBackImageObj,
      'giveBack',
      imageLoci.giveBack.x,
      imageLoci.giveBack.y,
      imageScale
    )
    const musicBtnImg = buildImage(
      musicBtnImageObj,
      'music',
      imageLoci.music.x - 50,
      imageLoci.music.y - 70,
      imageScale,
      false,
      this.navigate,
      'music'
    )
    const musicImg = buildImage(
      musicImageObj,
      'music',
      imageLoci.music.x,
      imageLoci.music.y,
      imageScale
    )
    const photosBtnImg = buildImage(
      photosBtnImageObj,
      'photos',
      imageLoci.photos.x - 120,
      imageLoci.photos.y - 70,
      imageScale,
      false,
      this.navigate,
      'photos'
    )
    const photosImg = buildImage(
      photosImageObj,
      'photos',
      imageLoci.photos.x,
      imageLoci.photos.y,
      imageScale
    )
    const shopBtnImg = buildImage(
      shopBtnImageObj,
      'shop',
      imageLoci.shop.x - 80,
      imageLoci.shop.y - 70,
      imageScale,
      false,
      this.navigate,
      'shop'
    )
    const shopImg = buildImage(
      shopImageObj,
      'shop',
      imageLoci.shop.x,
      imageLoci.shop.y,
      imageScale
    )
    const titleImg = buildImage(
      titleImageObj,
      'title',
      imageLoci.title.x,
      imageLoci.title.y,
      imageScale
    )
    const trailerBtnImg = buildImage(
      trailerBtnImageObj,
      'trailer',
      imageLoci.trailer.x - 50,
      imageLoci.trailer.y - 70,
      imageScale,
      false,
      this.navigate,
      'trailer'
    )
    const trailerImg = buildImage(
      trailerImageObj,
      'trailer',
      imageLoci.trailer.x,
      imageLoci.trailer.y,
      imageScale
    )
    const youtopiaBtnImg = buildImage(
      youtopiaBtnImageObj,
      'youtopia',
      imageLoci.youtopia.x - 80,
      imageLoci.youtopia.y - 70,
      imageScale,
      false,
      this.navigate,
      'youtopia'
    )
    const youtopiaImg = buildImage(
      youtopiaImageObj,
      'youtopia',
      imageLoci.youtopia.x,
      imageLoci.youtopia.y,
      imageScale
    )

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

    if (isMobile) {
      await imagePromise(titleImageObj, imageSources.title)
    }

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
      title: [titleImg, titleImg],
      trailer: [trailerImg, trailerBtnImg],
      youtopia: [youtopiaImg, youtopiaBtnImg]
    }

    fgLayer.add(
      castCrewBtnImg,
      castCrewImg,
      episodesBtnImg,
      episodesImg,
      gamesBtnImg,
      gamesImg,
      giveBackBtnImg,
      giveBackImg,
      musicBtnImg,
      musicImg,
      photosBtnImg,
      photosImg,
      shopBtnImg,
      shopImg,
      titleImg,
      trailerBtnImg,
      trailerImg,
      youtopiaBtnImg,
      youtopiaImg
    )

    this.stage.add(fgLayer)
    this.resizeFit()

    const resetImages = () => {
      for (let imageName in imageMap) {
        const [originalImage, btnImage] = imageMap[imageName]
        btnImage.hide()
        originalImage.show()
        this.stage.draw()
      }
    }

    bgLayer.on('touchstart', resetImages)

    fgLayer.on('mouseover touchstart', evt => {
      const {
        target: {
          attrs: { name }
        }
      } = evt
      const [originalImage, btnImage] = imageMap[name]

      document.body.style.cursor = 'pointer'
      resetImages()
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
