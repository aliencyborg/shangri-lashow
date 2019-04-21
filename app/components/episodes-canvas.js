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

const SCALE = 'c_scale,w_0.5'

const BLANK_SCREEN_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1554831220/shangri-lashow/Episodes%20Page/Blank_Screen_01.png`
const EP_01_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555731904/shangri-lashow/video/Episode01Trailer.mp4'
const EP_02_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809475/shangri-lashow/video/Episode02Trailer.mp4'
const EP_03_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809480/shangri-lashow/video/Episode03Trailer.mp4'
const EP_04_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809472/shangri-lashow/video/Episode04Trailer.mp4'
const EP_05_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809478/shangri-lashow/video/Episode05Trailer.mp4'
const EP_06_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809479/shangri-lashow/video/Episode06Trailer.mp4'
const EP_07_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809476/shangri-lashow/video/Episode07Trailer.mp4'
const EP_08_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809479/shangri-lashow/video/Episode08Trailer.mp4'
const EP_09_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809481/shangri-lashow/video/Episode09Trailer.mp4'
const EP_10_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809481/shangri-lashow/video/Episode10Trailer.mp4'
const EP_11_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809473/shangri-lashow/video/Episode11Trailer.mp4'
const EP_12_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809483/shangri-lashow/video/Episode12Trailer.mp4'
const EP_13_TRAILER_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/video/upload/v1555809484/shangri-lashow/video/Episode13Trailer.mp4'

const EP_01_ROW_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1554831220/shangri-lashow/Episodes%20Page/Episode_1_-_Row_01_3840x432.png`
const EP_02_ROW_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1554831226/shangri-lashow/Episodes%20Page/Episode_2_-_Row_01_3840x432.png`
const EP_03_ROW_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1554831221/shangri-lashow/Episodes%20Page/Episode_3_-_Row_01_3840x432.png`
const EP_03_ROW_L_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1554831227/shangri-lashow/Episodes%20Page/Episode_3_-_Row_01_3840x432_LOCKED.png`
// const EP_04_ROW_SRC = ''
// const EP_04_ROW_L_SRC = ''
// const EP_05_ROW_SRC = ''
// const EP_05_ROW_L_SRC = ''
// const EP_06_ROW_SRC = ''
// const EP_06_ROW_L_SRC = ''
// const EP_07_ROW_SRC = ''
// const EP_07_ROW_L_SRC = ''
// const EP_08_ROW_SRC = ''
// const EP_08_ROW_L_SRC = ''
// const EP_09_ROW_SRC = ''
// const EP_09_ROW_L_SRC = ''
// const EP_10_ROW_SRC = ''
// const EP_10_ROW_L_SRC = ''
// const EP_11_ROW_SRC = ''
// const EP_11_ROW_L_SRC = ''
// const EP_12_ROW_SRC = ''
// const EP_12_ROW_L_SRC = ''
// const EP_13_ROW_SRC = ''
// const EP_13_ROW_L_SRC = ''

const TAPE_01_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape01.png`
const TAPE_02_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape02.png`
const TAPE_03_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape03.png`
const TAPE_04_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape04.png`
const TAPE_05_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape05.png`
const TAPE_06_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape06.png`
const TAPE_07_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape07.png`
const TAPE_08_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape08.png`
const TAPE_09_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape09.png`
const TAPE_10_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tapel0.png`
const TAPE_11_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape11.png`
const TAPE_12_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape12.png`
const TAPE_13_SRC = `https://res.cloudinary.com/aliencyborg-llc/image/upload/${SCALE}/v1555733625/shangri-lashow/Episodes%20Page/Tape13.png`

const TV_BACKGROUND_SRC =
  'https://res.cloudinary.com/aliencyborg-llc/image/upload/v1555452236/shangri-lashow/Episodes%20Page/TVwithBackground1920w.png'

function buildVideo(videoObj, name, src) {
  videoObj.src = src
  const video = buildImage(videoObj, name, 140, 300)

  videoObj.addEventListener('loadedmetadata', () => {
    video.width(videoObj.videoWidth)
    video.height(videoObj.videoHeight)
  })

  return video
}

function isLocked(episode) {
  // TODO put this on a calendar
  return episode > 2
}

export default class EpisodesCanvasComponent extends Component {
  @service router

  navigate = path => {
    this.router.transitionTo(path)
  }

  anim
  stage

  setup = async () => {
    const videoLayer = makeLayer() // behind the "background"
    const bgLayer = makeLayer()
    const tapeLayer = makeLayer()
    const titleLayer = makeLayer()
    this.stage = makeStage('episodes-canvas', 1461, 1920)

    // do nothing, animation just need to update the layer
    this.anim = new Konva.Animation(() => {}, videoLayer)

    const backgroundImageObj = new Image()
    const blankScreenImageObj = new Image()
    const ep01RowImageObj = new Image()
    const ep02RowImageObj = new Image()
    const ep03RowImageObj = new Image()
    const ep03LRowImageObj = new Image()
    const ep04RowImageObj = new Image()
    const ep04LRowImageObj = new Image()
    const ep05RowImageObj = new Image()
    const ep05LRowImageObj = new Image()
    const ep06RowImageObj = new Image()
    const ep06LRowImageObj = new Image()
    const ep07RowImageObj = new Image()
    const ep07LRowImageObj = new Image()
    const ep08RowImageObj = new Image()
    const ep08LRowImageObj = new Image()
    const ep09RowImageObj = new Image()
    const ep09LRowImageObj = new Image()
    const ep10RowImageObj = new Image()
    const ep10LRowImageObj = new Image()
    const ep11RowImageObj = new Image()
    const ep11LRowImageObj = new Image()
    const ep12RowImageObj = new Image()
    const ep12LRowImageObj = new Image()
    const ep13RowImageObj = new Image()
    const ep13LRowImageObj = new Image()

    const tape01ImageObj = new Image()
    const tape02ImageObj = new Image()
    const tape03ImageObj = new Image()
    // const tape04ImageObj = new Image()
    // const tape05ImageObj = new Image()
    // const tape06ImageObj = new Image()
    // const tape07ImageObj = new Image()
    // const tape08ImageObj = new Image()
    // const tape09ImageObj = new Image()
    // const tape10ImageObj = new Image()
    // const tape11ImageObj = new Image()
    // const tape12ImageObj = new Image()
    // const tape13ImageObj = new Image()

    const backgroundImg = new Konva.Image({
      height: 1282,
      image: backgroundImageObj,
      width: 1920,
      x: 0,
      y: 216
    })

    const blankScreenImg = buildImage(
      blankScreenImageObj,
      'blankScreen',
      140,
      300
    )

    const ep01RowImg = buildImage(ep01RowImageObj, 'ep01row', 0, 0)
    const ep02RowImg = buildImage(ep02RowImageObj, 'ep02row', 0, 0)
    const ep03RowImg = buildImage(ep03RowImageObj, 'ep03row', 0, 0)
    const ep04RowImg = buildImage(ep04RowImageObj, 'ep04row', 0, 0)
    const ep05RowImg = buildImage(ep05RowImageObj, 'ep05row', 0, 0)
    const ep06RowImg = buildImage(ep06RowImageObj, 'ep06row', 0, 0)
    const ep07RowImg = buildImage(ep07RowImageObj, 'ep07row', 0, 0)
    const ep08RowImg = buildImage(ep08RowImageObj, 'ep08row', 0, 0)
    const ep09RowImg = buildImage(ep09RowImageObj, 'ep09row', 0, 0)
    const ep10RowImg = buildImage(ep10RowImageObj, 'ep10row', 0, 0)
    const ep11RowImg = buildImage(ep11RowImageObj, 'ep11row', 0, 0)
    const ep12RowImg = buildImage(ep12RowImageObj, 'ep12row', 0, 0)
    const ep13RowImg = buildImage(ep13RowImageObj, 'ep13row', 0, 0)
    const ep03LRowImg = buildImage(ep03LRowImageObj, 'ep03row-locked', 0, 0)
    const ep04LRowImg = buildImage(ep04LRowImageObj, 'ep04row-locked', 0, 0)
    const ep05LRowImg = buildImage(ep05LRowImageObj, 'ep05row-locked', 0, 0)
    const ep06LRowImg = buildImage(ep06LRowImageObj, 'ep06row-locked', 0, 0)
    const ep07LRowImg = buildImage(ep07LRowImageObj, 'ep07row-locked', 0, 0)
    const ep08LRowImg = buildImage(ep08LRowImageObj, 'ep08row-locked', 0, 0)
    const ep09LRowImg = buildImage(ep09LRowImageObj, 'ep09row-locked', 0, 0)
    const ep10LRowImg = buildImage(ep10LRowImageObj, 'ep10row-locked', 0, 0)
    const ep11LRowImg = buildImage(ep11LRowImageObj, 'ep11row-locked', 0, 0)
    const ep12LRowImg = buildImage(ep12LRowImageObj, 'ep12row-locked', 0, 0)
    const ep13LRowImg = buildImage(ep13LRowImageObj, 'ep13row-locked', 0, 0)

    const tape01Img = buildImage(tape01ImageObj, 'tape01', 1200, 300)
    const tape02Img = buildImage(tape02ImageObj, 'tape02', 1200, 386)
    const tape03Img = buildImage(tape03ImageObj, 'tape03', 1200, 468)
    // const tape04Img = buildImage(tape04ImageObj, 'tape04', 1200, 520)
    // const tape05Img = buildImage(tape05ImageObj, 'tape05', 1200, 620)
    // const tape06Img = buildImage(tape06ImageObj, 'tape06', 1200, 720)
    // const tape07Img = buildImage(tape07ImageObj, 'tape07', 1200, 820)
    // const tape08Img = buildImage(tape08ImageObj, 'tape08', 1200, 920)
    // const tape09Img = buildImage(tape09ImageObj, 'tape09', 1200, 1020)
    // const tape10Img = buildImage(tape10ImageObj, 'tape10', 1200, 1120)
    // const tape11Img = buildImage(tape11ImageObj, 'tape11', 1200, 1220)
    // const tape12Img = buildImage(tape12ImageObj, 'tape12', 1200, 1320)
    // const tape13Img = buildImage(tape13ImageObj, 'tape13', 1200, 1420)

    const ep01TrailerVideoObj = document.createElement('video')
    const ep02TrailerVideoObj = document.createElement('video')
    const ep03TrailerVideoObj = document.createElement('video')
    const ep04TrailerVideoObj = document.createElement('video')
    const ep05TrailerVideoObj = document.createElement('video')
    const ep06TrailerVideoObj = document.createElement('video')
    const ep07TrailerVideoObj = document.createElement('video')
    const ep08TrailerVideoObj = document.createElement('video')
    const ep09TrailerVideoObj = document.createElement('video')
    const ep10TrailerVideoObj = document.createElement('video')
    const ep11TrailerVideoObj = document.createElement('video')
    const ep12TrailerVideoObj = document.createElement('video')
    const ep13TrailerVideoObj = document.createElement('video')

    await imagePromise(ep01RowImageObj, EP_01_ROW_SRC)
    await imagePromise(ep02RowImageObj, EP_02_ROW_SRC)
    await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)
    // await imagePromise(ep03RowImageObj, EP_03_ROW_SRC)
    // await imagePromise(ep03LRowImageObj, EP_03_ROW_L_SRC)

    // maybe don't start with this
    titleLayer.add(ep01RowImg)

    const ep01TrailerVideo = buildVideo(
      ep01TrailerVideoObj,
      'ep01Trailer',
      EP_01_TRAILER_SRC
    )
    const ep02TrailerVideo = buildVideo(
      ep02TrailerVideoObj,
      'ep02Trailer',
      EP_02_TRAILER_SRC
    )
    const ep03TrailerVideo = buildVideo(
      ep03TrailerVideoObj,
      'ep03Trailer',
      EP_03_TRAILER_SRC
    )
    const ep04TrailerVideo = buildVideo(
      ep04TrailerVideoObj,
      'ep04Trailer',
      EP_04_TRAILER_SRC
    )
    const ep05TrailerVideo = buildVideo(
      ep05TrailerVideoObj,
      'ep05Trailer',
      EP_05_TRAILER_SRC
    )
    const ep06TrailerVideo = buildVideo(
      ep06TrailerVideoObj,
      'ep06Trailer',
      EP_06_TRAILER_SRC
    )
    const ep07TrailerVideo = buildVideo(
      ep07TrailerVideoObj,
      'ep07Trailer',
      EP_07_TRAILER_SRC
    )
    const ep08TrailerVideo = buildVideo(
      ep08TrailerVideoObj,
      'ep08Trailer',
      EP_08_TRAILER_SRC
    )
    const ep09TrailerVideo = buildVideo(
      ep09TrailerVideoObj,
      'ep09Trailer',
      EP_09_TRAILER_SRC
    )
    const ep10TrailerVideo = buildVideo(
      ep10TrailerVideoObj,
      'ep10Trailer',
      EP_10_TRAILER_SRC
    )
    const ep11TrailerVideo = buildVideo(
      ep11TrailerVideoObj,
      'ep11Trailer',
      EP_11_TRAILER_SRC
    )
    const ep12TrailerVideo = buildVideo(
      ep12TrailerVideoObj,
      'ep12Trailer',
      EP_12_TRAILER_SRC
    )
    const ep13TrailerVideo = buildVideo(
      ep13TrailerVideoObj,
      'ep13Trailer',
      EP_13_TRAILER_SRC
    )

    const imageMap = {
      tape01: {
        isLocked: isLocked(1),
        lockedTitle: ep01RowImg,
        title: ep01RowImg,
        trailer: ep01TrailerVideo,
        trailerObj: ep01TrailerVideoObj
      },
      tape02: {
        isLocked: isLocked(2),
        lockedTitle: ep02RowImg,
        title: ep02RowImg,
        trailer: ep02TrailerVideo,
        trailerObj: ep02TrailerVideoObj
      },
      tape03: {
        isLocked: isLocked(3),
        lockedTitle: ep03LRowImg,
        title: ep03RowImg,
        trailer: ep03TrailerVideo,
        trailerObj: ep03TrailerVideoObj
      },
      tape04: {
        isLocked: isLocked(4),
        lockedTitle: ep04LRowImg,
        title: ep04RowImg,
        trailer: ep04TrailerVideo,
        trailerObj: ep04TrailerVideoObj
      },
      tape05: {
        isLocked: isLocked(5),
        lockedTitle: ep05LRowImg,
        title: ep05RowImg,
        trailer: ep05TrailerVideo,
        trailerObj: ep05TrailerVideoObj
      },
      tape06: {
        isLocked: isLocked(6),
        lockedTitle: ep06LRowImg,
        title: ep06RowImg,
        trailer: ep06TrailerVideo,
        trailerObj: ep06TrailerVideoObj
      },
      tape07: {
        isLocked: isLocked(7),
        lockedTitle: ep07LRowImg,
        title: ep07RowImg,
        trailer: ep07TrailerVideo,
        trailerObj: ep07TrailerVideoObj
      },
      tape08: {
        isLocked: isLocked(8),
        lockedTitle: ep08LRowImg,
        title: ep08RowImg,
        trailer: ep08TrailerVideo,
        trailerObj: ep08TrailerVideoObj
      },
      tape09: {
        isLocked: isLocked(9),
        lockedTitle: ep09LRowImg,
        title: ep09RowImg,
        trailer: ep09TrailerVideo,
        trailerObj: ep09TrailerVideoObj
      },
      tape10: {
        isLocked: isLocked(10),
        lockedTitle: ep10LRowImg,
        title: ep10RowImg,
        trailer: ep10TrailerVideo,
        trailerObj: ep10TrailerVideoObj
      },
      tape11: {
        isLocked: isLocked(11),
        lockedTitle: ep11LRowImg,
        title: ep11RowImg,
        trailer: ep11TrailerVideo,
        trailerObj: ep11TrailerVideoObj
      },
      tape12: {
        isLocked: isLocked(12),
        lockedTitle: ep12LRowImg,
        title: ep12RowImg,
        trailer: ep12TrailerVideo,
        trailerObj: ep12TrailerVideoObj
      },
      tape13: {
        isLocked: isLocked(13),
        lockedTitle: ep13LRowImg,
        title: ep13RowImg,
        trailer: ep13TrailerVideo,
        trailerObj: ep13TrailerVideoObj
      }
    }

    let currentTape

    function isPlaying(videoObj) {
      if (!videoObj) return false
      return !!(
        videoObj.currentTime > 0 &&
        !videoObj.paused &&
        !videoObj.ended &&
        videoObj.readyState > 2
      )
    }

    function isPaused(videoObj) {
      if (!videoObj) return false
      return !!(
        videoObj.currentTime > 0 &&
        videoObj.paused &&
        !videoObj.ended &&
        videoObj.readyState > 2
      )
    }

    const togglePauseTrailer = () => {
      if (isPaused(currentTape)) {
        this.anim.start()
        return currentTape.play()
      }
      if (isPlaying(currentTape)) {
        this.anim.stop()
        return currentTape.pause()
      }
    }

    const playTrailer = name => {
      const { trailer, trailerObj } = imageMap[name]

      videoLayer.removeChildren()
      videoLayer.add(trailer)

      trailerObj.load()
      trailerObj.play()
      trailerObj.addEventListener('ended', () => {
        stopTrailer()
      })
      currentTape = trailerObj
      this.anim.start()
    }

    const stopTrailer = () => {
      if (isPlaying(currentTape)) {
        currentTape.pause()
      }
      this.anim.stop()
      videoLayer.removeChildren()
      videoLayer.add(blankScreenImg)
    }

    const resizeFit = () => {
      fitStageIntoParentContainer('#episodes-canvas', this.stage, 1461, 1920)
    }

    function setCursorD() {
      document.body.style.cursor = 'default'
    }

    function setCursorP() {
      document.body.style.cursor = 'pointer'
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

    this.stage.add(videoLayer)
    this.stage.add(bgLayer)
    this.stage.add(tapeLayer)
    this.stage.add(titleLayer)

    await imagePromise(blankScreenImageObj, BLANK_SCREEN_SRC)
    videoLayer.add(blankScreenImg)

    await imagePromise(backgroundImageObj, TV_BACKGROUND_SRC)
    bgLayer.add(backgroundImg)

    await imagePromise(tape01ImageObj, TAPE_01_SRC)
    await imagePromise(tape02ImageObj, TAPE_02_SRC)
    await imagePromise(tape03ImageObj, TAPE_03_SRC)
    // await imagePromise(tape04ImageObj, TAPE_04_SRC)
    // await imagePromise(tape05ImageObj, TAPE_05_SRC)
    // await imagePromise(tape06ImageObj, TAPE_06_SRC)
    // await imagePromise(tape07ImageObj, TAPE_07_SRC)
    // await imagePromise(tape08ImageObj, TAPE_08_SRC)
    // await imagePromise(tape09ImageObj, TAPE_09_SRC)
    // await imagePromise(tape10ImageObj, TAPE_10_SRC)
    // await imagePromise(tape11ImageObj, TAPE_11_SRC)
    // await imagePromise(tape12ImageObj, TAPE_12_SRC)
    // await imagePromise(tape13ImageObj, TAPE_13_SRC)

    tapeLayer.add(tape01Img, tape02Img, tape03Img)

    resizeFit()

    bgLayer.on('click', togglePauseTrailer)

    tapeLayer.on('click', evt => {
      const {
        target: {
          attrs: { name }
        }
      } = evt
      selectTape(name)
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

    window.addEventListener('resize', resizeFit)
  }

  teardown = async () => {
    this.anim.stop()
    this.stage.destroy()
  }
}
