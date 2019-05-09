import Component from '@glimmer/component'
import Konva from 'konva'
import { debounce } from '@ember/runloop'
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

  isMobile = this.media.isMobile
  resizeFit
  stage

  external = url => {
    window.location.href = url
  }

  navigate = path => this.router.transitionTo(path)

  setup = async () => {
    const interiorImageObj = new Image()

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
    const titleBtnImageObj = new Image()
    const trailerBtnImageObj = new Image()
    const trailerImageObj = new Image()
    const youtopiaBtnImageObj = new Image()
    const youtopiaImageObj = new Image()

    let baseHeight = 1600
    let stageHeight = 1600
    let baseWidth = 1920
    let stageWidth = 1920

    if (this.isMobile) {
      baseHeight = 1400
      baseWidth = 1080
      stageWidth = window.innerWidth
      stageHeight = Math.floor((stageWidth / baseWidth) * baseHeight)
    }

    const xFactor = Number((stageWidth / 1920).toFixed(2))
    const yFactor = Number((stageHeight / 1600).toFixed(2))
    const imageScale = { x: xFactor, y: yFactor }
    const imageLoci = images.homeLoci(this.isMobile)

    const imageSources = images.home(
      stageHeight,
      stageWidth,
      baseHeight,
      baseWidth,
      imageScale,
      this.isMobile
    )

    const bgLayer = makeLayer()
    const fgLayer = makeLayer()
    this.stage = makeStage('home-container', stageHeight, stageWidth)

    const interiorImg = new Konva.Image({
      height: stageHeight,
      image: interiorImageObj,
      width: stageWidth,
      x: 0,
      y: 0
    })

    const episodesBtnImg = buildImage(
      episodesBtnImageObj,
      'episodes',
      imageLoci.episodesBtn.x,
      imageLoci.episodesBtn.y,
      imageScale,
      false,
      this.isMobile,
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
      imageLoci.gamesBtn.x,
      imageLoci.gamesBtn.y,
      imageScale,
      false,
      this.isMobile,
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
      imageLoci.giveBackBtn.x,
      imageLoci.giveBackBtn.y,
      imageScale,
      false,
      this.isMobile,
      this.external,
      'https://www.calfund.org/homela/'
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
      imageLoci.musicBtn.x,
      imageLoci.musicBtn.y,
      imageScale,
      false,
      this.isMobile,
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
      imageLoci.photosBtn.x,
      imageLoci.photosBtn.y,
      imageScale,
      false,
      this.isMobile,
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
      imageLoci.shopBtn.x,
      imageLoci.shopBtn.y,
      imageScale,
      false,
      this.isMobile,
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
    const titleBtnImg = buildImage(
      titleBtnImageObj,
      'title',
      imageLoci.titleBtn.x,
      imageLoci.titleBtn.y,
      imageScale,
      false
      // Action / Navigate ?
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
      imageLoci.trailerBtn.x,
      imageLoci.trailerBtn.y,
      imageScale,
      false,
      this.isMobile
      // this.navigate,
      // 'trailer'
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
      imageLoci.youtopiaBtn.x,
      imageLoci.youtopiaBtn.y,
      imageScale,
      false,
      this.isMobile,
      this.external,
      'http://www.youtopiaindustries.com'
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
        '#home-container',
        this.stage,
        stageHeight,
        stageWidth
      )

    await imagePromise(interiorImageObj, imageSources.interior)

    bgLayer.add(interiorImg)
    this.resizeFit()

    if (this.isMobile) {
      await imagePromise(titleImageObj, imageSources.title)
      await imagePromise(titleBtnImageObj, imageSources.titleBtn)
      fgLayer.add(titleBtnImg, titleImg)
      this.resizeFit()
    }

    await Promise.all([
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
      episodes: [episodesImg, episodesBtnImg],
      games: [gamesImg, gamesBtnImg],
      giveBack: [giveBackImg, giveBackBtnImg],
      music: [musicImg, musicBtnImg],
      photos: [photosImg, photosBtnImg],
      shop: [shopImg, shopBtnImg],
      title: [titleImg, titleBtnImg],
      trailer: [trailerImg, trailerBtnImg],
      youtopia: [youtopiaImg, youtopiaBtnImg]
    }

    fgLayer.add(
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
      trailerBtnImg,
      trailerImg,
      youtopiaBtnImg,
      youtopiaImg
    )

    this.args.stopLoading()
    this.resizeFit()
    this.stage.add(bgLayer)
    this.stage.add(fgLayer)

    const resetImages = () => {
      for (let imageName in imageMap) {
        const [originalImage, btnImage] = imageMap[imageName]
        btnImage.hide()
        originalImage.show()
        this.stage.draw()
      }
    }

    let action = 'mouseover'

    if (this.isMobile) {
      action = 'tap'
      bgLayer.on(action, () => debounce({}, resetImages, 150))
    }

    fgLayer.on(action, evt => {
      const {
        target: {
          attrs: { name }
        }
      } = evt
      const [originalImage, btnImage] = imageMap[name]

      document.body.style.cursor = 'pointer'
      debounce(
        {},
        () => {
          resetImages()
          originalImage.hide()
          btnImage.show()
          this.stage.draw()
        },
        150
      )
    })

    if (!this.isMobile) {
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
    }

    window.addEventListener('resize', this.resizeFit)
  }

  teardown = () => {
    document.body.style.cursor = 'default'
    window.removeEventListener('resize', this.resizeFit)
    this.stage.destroy()
  }
}
