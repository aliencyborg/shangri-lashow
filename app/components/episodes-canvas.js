import Component from '@glimmer/component'
import Konva from 'konva'
import { debounce } from '@ember/runloop'
import { inject as service } from '@ember/service'
import {
  buildImage,
  buildVideo,
  fitStageIntoParentContainer,
  imagePromise,
  makeLayer,
  makeStage
} from 'shangri-lashow/util/canvas-utils'
import images from 'shangri-lashow/util/images'

function _isLocked(episode) {
  // TODO put this on a calendar
  return episode > 2
}

function _isPlaying(videoObj) {
  if (!videoObj) return false
  return !!(
    videoObj.currentTime > 0 &&
    !videoObj.paused &&
    !videoObj.ended &&
    videoObj.readyState > 2
  )
}

function _isPaused(videoObj) {
  if (!videoObj) return false
  return !!(
    videoObj.currentTime > 0 &&
    videoObj.paused &&
    !videoObj.ended &&
    videoObj.readyState > 2
  )
}

export default class EpisodesCanvasComponent extends Component {
  @service media
  @service router
  @service userAgent

  anim
  currentTape
  isMobile = this.media.isMobile
  resizeFit
  stage

  navigate = path => {
    this.router.transitionTo(path)
  }

  setup = async () => {
    const backgroundImageObj = new Image()
    const blankScreenImageObj = new Image()

    const ep01TitleImageObj = new Image()
    const ep02TitleImageObj = new Image()
    const ep03TitleImageObj = new Image()
    const ep03LockedImageObj = new Image()
    const ep04TitleImageObj = new Image()
    const ep04LockedImageObj = new Image()
    const ep05TitleImageObj = new Image()
    const ep05LockedImageObj = new Image()
    const ep06TitleImageObj = new Image()
    const ep06LockedImageObj = new Image()
    const ep07TitleImageObj = new Image()
    const ep07LockedImageObj = new Image()
    const ep08TitleImageObj = new Image()
    const ep08LockedImageObj = new Image()
    const ep09TitleImageObj = new Image()
    const ep09LockedImageObj = new Image()
    const ep10TitleImageObj = new Image()
    const ep10LockedImageObj = new Image()
    const ep11TitleImageObj = new Image()
    const ep11LockedImageObj = new Image()
    const ep12TitleImageObj = new Image()
    const ep12LockedImageObj = new Image()
    const ep13TitleImageObj = new Image()
    const ep13LockedImageObj = new Image()

    const tape01ImageObj = new Image()
    const tape02ImageObj = new Image()
    const tape03ImageObj = new Image()
    const tape04ImageObj = new Image()
    const tape05ImageObj = new Image()
    const tape06ImageObj = new Image()
    const tape07ImageObj = new Image()
    const tape08ImageObj = new Image()
    const tape09ImageObj = new Image()
    const tape10ImageObj = new Image()
    const tape11ImageObj = new Image()
    const tape12ImageObj = new Image()
    const tape13ImageObj = new Image()

    const stationaryWidth = 1920 // 1920 // 3840
    const stationaryHeight = 1498 // 1498 // 2992

    let factorX = 1
    let mainHeight = 1282
    let titleHeight = 216
    let baseHeight = stationaryHeight
    let stageHeight = stationaryHeight

    let baseWidth = stationaryWidth
    let stageWidth = stationaryWidth

    if (this.isMobile) {
      const tapesHeight = 1800
      baseWidth = 1080
      mainHeight = 1400
      titleHeight = 122

      baseHeight = mainHeight + titleHeight + tapesHeight
      stageWidth = window.innerWidth
      factorX = (stageWidth / baseWidth).toFixed(3)
      stageHeight = Math.floor(factorX * baseHeight)
    }

    const xFactor = Number((stageWidth / baseWidth).toFixed(3))
    const yFactor = Number((stageHeight / baseHeight).toFixed(3))
    const imageScale = { x: xFactor, y: yFactor }
    const imageLoci = images.episodesLoci(this.isMobile)

    const imageSources = images.episodes(
      stageHeight,
      stageWidth,
      baseHeight,
      baseWidth,
      imageScale,
      this.isMobile
    )

    let videoSuffix = 'webm'
    const { browser, os } = this.userAgent

    if (browser.isSafari) {
      videoSuffix = 'mp4'
    }

    if (os.isIOS) {
      videoSuffix = 'mp4'
    }

    const videoSources = images.videos(factorX, videoSuffix)

    const videoLayer = makeLayer() // behind the "background"
    const bgLayer = makeLayer()
    const tapeLayer = makeLayer()
    const titleLayer = makeLayer()
    this.stage = makeStage('episodes-container', stageHeight, stageWidth)

    // do nothing, animation just need to update the layer
    this.anim = new Konva.Animation(() => {}, videoLayer)

    const backgroundImg = new Konva.Image({
      image: backgroundImageObj,
      preventDefault: false,
      x: 0,
      y: Math.floor(titleHeight * factorX)
    })

    const blankScreenImg = buildImage(
      blankScreenImageObj,
      `blankScreen`,
      imageLoci.blankScreen.x,
      imageLoci.blankScreen.y,
      imageScale
    )

    const ep01TitleImg = buildImage(ep01TitleImageObj, `ep01title`, 0, 0)
    const ep02TitleImg = buildImage(ep02TitleImageObj, `ep02title`, 0, 0)
    const ep03TitleImg = buildImage(ep03TitleImageObj, `ep03title`, 0, 0)
    const ep04TitleImg = buildImage(ep04TitleImageObj, `ep04title`, 0, 0)
    const ep05TitleImg = buildImage(ep05TitleImageObj, `ep05title`, 0, 0)
    const ep06TitleImg = buildImage(ep06TitleImageObj, `ep06title`, 0, 0)
    const ep07TitleImg = buildImage(ep07TitleImageObj, `ep07title`, 0, 0)
    const ep08TitleImg = buildImage(ep08TitleImageObj, `ep08title`, 0, 0)
    const ep09TitleImg = buildImage(ep09TitleImageObj, `ep09title`, 0, 0)
    const ep10TitleImg = buildImage(ep10TitleImageObj, `ep10title`, 0, 0)
    const ep11TitleImg = buildImage(ep11TitleImageObj, `ep11title`, 0, 0)
    const ep12TitleImg = buildImage(ep12TitleImageObj, `ep12title`, 0, 0)
    const ep13TitleImg = buildImage(ep13TitleImageObj, `ep13title`, 0, 0)
    const ep03LockedImg = buildImage(ep03LockedImageObj, `ep03locked`, 0, 0)
    const ep04LockedImg = buildImage(ep04LockedImageObj, `ep04locked`, 0, 0)
    const ep05LockedImg = buildImage(ep05LockedImageObj, `ep05locked`, 0, 0)
    const ep06LockedImg = buildImage(ep06LockedImageObj, `ep06locked`, 0, 0)
    const ep07LockedImg = buildImage(ep07LockedImageObj, `ep07locked`, 0, 0)
    const ep08LockedImg = buildImage(ep08LockedImageObj, `ep08locked`, 0, 0)
    const ep09LockedImg = buildImage(ep09LockedImageObj, `ep09locked`, 0, 0)
    const ep10LockedImg = buildImage(ep10LockedImageObj, `ep10locked`, 0, 0)
    const ep11LockedImg = buildImage(ep11LockedImageObj, `ep11locked`, 0, 0)
    const ep12LockedImg = buildImage(ep12LockedImageObj, `ep12locked`, 0, 0)
    const ep13LockedImg = buildImage(ep13LockedImageObj, `ep13locked`, 0, 0)

    const tape01Img = buildImage(
      tape01ImageObj,
      `tape01`,
      imageLoci.tape01.x,
      imageLoci.tape01.y,
      imageScale
    )
    const tape02Img = buildImage(
      tape02ImageObj,
      `tape02`,
      imageLoci.tape02.x,
      imageLoci.tape02.y,
      imageScale
    )
    const tape03Img = buildImage(
      tape03ImageObj,
      `tape03`,
      imageLoci.tape03.x,
      imageLoci.tape03.y,
      imageScale
    )
    const tape04Img = buildImage(
      tape04ImageObj,
      `tape04`,
      imageLoci.tape04.x,
      imageLoci.tape04.y,
      imageScale
    )
    const tape05Img = buildImage(
      tape05ImageObj,
      `tape05`,
      imageLoci.tape05.x,
      imageLoci.tape05.y,
      imageScale
    )
    const tape06Img = buildImage(
      tape06ImageObj,
      `tape06`,
      imageLoci.tape06.x,
      imageLoci.tape06.y,
      imageScale
    )
    const tape07Img = buildImage(
      tape07ImageObj,
      `tape07`,
      imageLoci.tape07.x,
      imageLoci.tape07.y,
      imageScale
    )
    const tape08Img = buildImage(
      tape08ImageObj,
      `tape08`,
      imageLoci.tape08.x,
      imageLoci.tape08.y,
      imageScale
    )
    const tape09Img = buildImage(
      tape09ImageObj,
      `tape09`,
      imageLoci.tape09.x,
      imageLoci.tape09.y,
      imageScale
    )
    const tape10Img = buildImage(
      tape10ImageObj,
      `tape10`,
      imageLoci.tape10.x,
      imageLoci.tape10.y,
      imageScale
    )
    const tape11Img = buildImage(
      tape11ImageObj,
      `tape11`,
      imageLoci.tape11.x,
      imageLoci.tape11.y,
      imageScale
    )
    const tape12Img = buildImage(
      tape12ImageObj,
      `tape12`,
      imageLoci.tape12.x,
      imageLoci.tape12.y,
      imageScale
    )
    const tape13Img = buildImage(
      tape13ImageObj,
      `tape13`,
      imageLoci.tape13.x,
      imageLoci.tape13.y,
      imageScale
    )

    const ep01TrailerVideoObj = document.createElement(`video`)
    const ep02TrailerVideoObj = document.createElement(`video`)
    const ep03TrailerVideoObj = document.createElement(`video`)
    const ep04TrailerVideoObj = document.createElement(`video`)
    const ep05TrailerVideoObj = document.createElement(`video`)
    const ep06TrailerVideoObj = document.createElement(`video`)
    const ep07TrailerVideoObj = document.createElement(`video`)
    const ep08TrailerVideoObj = document.createElement(`video`)
    const ep09TrailerVideoObj = document.createElement(`video`)
    const ep10TrailerVideoObj = document.createElement(`video`)
    const ep11TrailerVideoObj = document.createElement(`video`)
    const ep12TrailerVideoObj = document.createElement(`video`)
    const ep13TrailerVideoObj = document.createElement(`video`)

    this.resizeFit = () =>
      fitStageIntoParentContainer(
        `#episodes-container`,
        this.stage,
        stageHeight,
        stageWidth
      )

    await Promise.all([
      imagePromise(ep01TitleImageObj, imageSources.ep01Title),
      imagePromise(ep02TitleImageObj, imageSources.ep02Title),
      imagePromise(ep03TitleImageObj, imageSources.ep03Title),
      imagePromise(ep03LockedImageObj, imageSources.ep03Locked),
      imagePromise(ep04TitleImageObj, imageSources.ep04Title),
      imagePromise(ep04LockedImageObj, imageSources.ep04Locked),
      imagePromise(ep05TitleImageObj, imageSources.ep05Title),
      imagePromise(ep05LockedImageObj, imageSources.ep05Locked),
      imagePromise(ep06TitleImageObj, imageSources.ep06Title),
      imagePromise(ep06LockedImageObj, imageSources.ep06Locked),
      imagePromise(ep07TitleImageObj, imageSources.ep07Title),
      imagePromise(ep07LockedImageObj, imageSources.ep07Locked),
      imagePromise(ep08TitleImageObj, imageSources.ep08Title),
      imagePromise(ep08LockedImageObj, imageSources.ep08Locked),
      imagePromise(ep09TitleImageObj, imageSources.ep09Title),
      imagePromise(ep09LockedImageObj, imageSources.ep09Locked),
      imagePromise(ep11TitleImageObj, imageSources.ep11Title),
      imagePromise(ep11LockedImageObj, imageSources.ep11Locked),
      imagePromise(ep12TitleImageObj, imageSources.ep12Title),
      imagePromise(ep12LockedImageObj, imageSources.ep12Locked),
      imagePromise(ep13TitleImageObj, imageSources.ep13Title),
      imagePromise(ep13LockedImageObj, imageSources.ep13Locked)
    ])

    titleLayer.add(ep01TitleImg)

    const [
      ep01TrailerVideo,
      ep02TrailerVideo,
      ep03TrailerVideo,
      ep04TrailerVideo,
      ep05TrailerVideo,
      ep06TrailerVideo,
      ep07TrailerVideo,
      ep08TrailerVideo,
      ep09TrailerVideo,
      ep10TrailerVideo,
      ep11TrailerVideo,
      ep12TrailerVideo,
      ep13TrailerVideo
    ] = await Promise.all([
      buildVideo(
        ep01TrailerVideoObj,
        `ep01Trailer`,
        videoSources.ep01Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep02TrailerVideoObj,
        `ep02Trailer`,
        videoSources.ep02Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep03TrailerVideoObj,
        `ep03Trailer`,
        videoSources.ep03Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep04TrailerVideoObj,
        `ep04Trailer`,
        videoSources.ep04Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep05TrailerVideoObj,
        `ep05Trailer`,
        videoSources.ep05Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep06TrailerVideoObj,
        `ep06Trailer`,
        videoSources.ep06Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep07TrailerVideoObj,
        `ep07Trailer`,
        videoSources.ep07Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep08TrailerVideoObj,
        `ep08Trailer`,
        videoSources.ep08Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep09TrailerVideoObj,
        `ep09Trailer`,
        videoSources.ep09Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep10TrailerVideoObj,
        `ep10Trailer`,
        videoSources.ep10Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep11TrailerVideoObj,
        `ep11Trailer`,
        videoSources.ep11Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep12TrailerVideoObj,
        `ep12Trailer`,
        videoSources.ep12Trailer,
        this.isMobile,
        imageScale
      ),
      buildVideo(
        ep13TrailerVideoObj,
        `ep13Trailer`,
        videoSources.ep13Trailer,
        this.isMobile,
        imageScale
      )
    ])

    const imageMap = {
      tape01: {
        isLocked: _isLocked(1),
        lockedTitle: ep01TitleImg,
        title: ep01TitleImg,
        trailer: ep01TrailerVideo,
        trailerObj: ep01TrailerVideoObj
      },
      tape02: {
        isLocked: _isLocked(2),
        lockedTitle: ep02TitleImg,
        title: ep02TitleImg,
        trailer: ep02TrailerVideo,
        trailerObj: ep02TrailerVideoObj
      },
      tape03: {
        isLocked: _isLocked(3),
        lockedTitle: ep03LockedImg,
        title: ep03TitleImg,
        trailer: ep03TrailerVideo,
        trailerObj: ep03TrailerVideoObj
      },
      tape04: {
        isLocked: _isLocked(4),
        lockedTitle: ep04LockedImg,
        title: ep04TitleImg,
        trailer: ep04TrailerVideo,
        trailerObj: ep04TrailerVideoObj
      },
      tape05: {
        isLocked: _isLocked(5),
        lockedTitle: ep05LockedImg,
        title: ep05TitleImg,
        trailer: ep05TrailerVideo,
        trailerObj: ep05TrailerVideoObj
      },
      tape06: {
        isLocked: _isLocked(6),
        lockedTitle: ep06LockedImg,
        title: ep06TitleImg,
        trailer: ep06TrailerVideo,
        trailerObj: ep06TrailerVideoObj
      },
      tape07: {
        isLocked: _isLocked(7),
        lockedTitle: ep07LockedImg,
        title: ep07TitleImg,
        trailer: ep07TrailerVideo,
        trailerObj: ep07TrailerVideoObj
      },
      tape08: {
        isLocked: _isLocked(8),
        lockedTitle: ep08LockedImg,
        title: ep08TitleImg,
        trailer: ep08TrailerVideo,
        trailerObj: ep08TrailerVideoObj
      },
      tape09: {
        isLocked: _isLocked(9),
        lockedTitle: ep09LockedImg,
        title: ep09TitleImg,
        trailer: ep09TrailerVideo,
        trailerObj: ep09TrailerVideoObj
      },
      tape10: {
        isLocked: _isLocked(10),
        lockedTitle: ep10LockedImg,
        title: ep10TitleImg,
        trailer: ep10TrailerVideo,
        trailerObj: ep10TrailerVideoObj
      },
      tape11: {
        isLocked: _isLocked(11),
        lockedTitle: ep11LockedImg,
        title: ep11TitleImg,
        trailer: ep11TrailerVideo,
        trailerObj: ep11TrailerVideoObj
      },
      tape12: {
        isLocked: _isLocked(12),
        lockedTitle: ep12LockedImg,
        title: ep12TitleImg,
        trailer: ep12TrailerVideo,
        trailerObj: ep12TrailerVideoObj
      },
      tape13: {
        isLocked: _isLocked(13),
        lockedTitle: ep13LockedImg,
        title: ep13TitleImg,
        trailer: ep13TrailerVideo,
        trailerObj: ep13TrailerVideoObj
      }
    }

    const togglePauseTrailer = () => {
      if (_isPaused(this.currentTape)) {
        this.anim.start()
        return this.currentTape.play()
      }

      if (_isPlaying(this.currentTape)) {
        this.anim.stop()
        return this.currentTape.pause()
      }
    }

    const playTrailer = name => {
      const { trailer, trailerObj } = imageMap[name]
      stopTrailer()

      videoLayer.removeChildren()
      videoLayer.add(trailer)

      trailerObj.load()
      trailerObj.play()
      trailerObj.addEventListener(`ended`, () => {
        stopTrailer()
      })
      this.currentTape = trailerObj
      this.anim.start()
    }

    const stopTrailer = () => {
      if (_isPlaying(this.currentTape)) {
        this.currentTape.pause()
      }
      videoLayer.removeChildren()
      videoLayer.add(blankScreenImg)
      videoLayer.draw()
      this.anim.stop()
    }

    function setCursorD() {
      document.body.style.cursor = `default`
    }

    function setCursorP() {
      document.body.style.cursor = `pointer`
    }

    function selectTape(name) {
      const titleImg = imageMap[name].isLocked
        ? imageMap[name].lockedTitle
        : imageMap[name].title

      titleLayer.removeChildren()
      titleLayer.add(titleImg)
      titleLayer.draw()

      stopTrailer()
      playTrailer(name)
    }

    this.args.stopLoading()
    this.resizeFit()

    this.stage.add(videoLayer)
    this.stage.add(bgLayer)
    this.stage.add(tapeLayer)
    this.stage.add(titleLayer)

    await Promise.all([
      imagePromise(blankScreenImageObj, imageSources.blankScreen),
      imagePromise(backgroundImageObj, imageSources.tvWithBackground)
    ])

    videoLayer.add(blankScreenImg)
    bgLayer.add(backgroundImg)

    await Promise.all([
      imagePromise(tape01ImageObj, imageSources.tape01),
      imagePromise(tape02ImageObj, imageSources.tape02),
      imagePromise(tape03ImageObj, imageSources.tape03),
      imagePromise(tape04ImageObj, imageSources.tape04),
      imagePromise(tape05ImageObj, imageSources.tape05),
      imagePromise(tape06ImageObj, imageSources.tape06),
      imagePromise(tape07ImageObj, imageSources.tape07),
      imagePromise(tape08ImageObj, imageSources.tape08),
      imagePromise(tape09ImageObj, imageSources.tape09),
      imagePromise(tape10ImageObj, imageSources.tape10),
      imagePromise(tape11ImageObj, imageSources.tape11),
      imagePromise(tape12ImageObj, imageSources.tape12),
      imagePromise(tape13ImageObj, imageSources.tape13)
    ])

    tapeLayer.add(
      tape01Img,
      tape02Img,
      tape03Img,
      tape04Img,
      tape05Img,
      tape06Img,
      tape07Img,
      tape08Img,
      tape09Img,
      tape10Img,
      tape11Img,
      tape12Img,
      tape13Img
    )

    this.stage.draw()

    // TODO make this work better and add a paused visual on mobile
    if (!this.isMobile) {
      bgLayer.on('click tap', () => debounce({}, togglePauseTrailer, 150))
    }

    tapeLayer.on('click tap', evt => {
      const {
        target: {
          attrs: { name }
        }
      } = evt

      debounce({}, selectTape, name, 150)
    })

    tapeLayer.on('mouseover', evt => {
      const { target } = evt

      setCursorP()
      target.move({ x: -50 })
      target.scaleX(1.1)
      target.scaleY(1.1)
      target.rotation(-2)
      tapeLayer.draw()
    })

    tapeLayer.on('mouseout', evt => {
      const { target } = evt

      setCursorD()
      target.move({ x: 50 })
      target.scaleX(1)
      target.scaleY(1)
      target.rotation(0)
      tapeLayer.draw()
    })

    window.addEventListener('resize', this.resizeFit)
  }

  teardown = async () => {
    if (this.currentTape) {
      this.currentTape.pause()
    }
    document.body.style.cursor = 'default'
    window.removeEventListener('resize', this.resizeFit)
    this.anim.stop()
    this.stage.destroy()
  }
}
