const baseUrl = 'https://res.cloudinary.com/aliencyborg-llc/image/upload'
const baseVideoUrl = 'https://res.cloudinary.com/aliencyborg-llc/video/upload/'
const makeScaleParam = (hScale, wScale) => {
  let hParam = ''
  let wParam = ''

  if (hScale !== '1.00') {
    hParam = `,h_${hScale}`
  }

  if (wScale !== '1.00') {
    wParam = `,w_${wScale}`
  }

  if (!(hParam + wParam).length) return ''

  return `c_scale${hParam}${wParam}`
}

const makeScaleUrl = (baseHeight, baseWidth, height, width, modifier = 1) => {
  height = height || baseHeight
  width = width || baseWidth
  const hScale = ((height / baseHeight) * modifier).toFixed(3)
  const wScale = ((width / baseWidth) * modifier).toFixed(3)
  const scaleParam = makeScaleParam(hScale, wScale)

  return `${baseUrl}/${scaleParam}`
}

const makeWidthUrl = width => {
  return `${baseUrl}/c_scale,w_${width}`
}

const episodes = (
  height,
  width,
  baseHeight,
  baseWidth,
  imageScale = { x: 1, y: 1 },
  mobile = false
) => {
  const halfHeight = Math.floor(height / 2)
  const halfWidth = Math.floor(width / 2)
  const scaleDownUrl = makeScaleUrl(
    baseHeight,
    baseWidth,
    halfHeight,
    halfWidth
  )
  const widthUrl = makeWidthUrl(width)
  const shared = {}

  if (mobile) {
    return {
      ...shared,
      ep01Title: `${widthUrl}/v1554831220/shangri-lashow/Episodes%20Page/Episode_1_-_Row_01_3840x432.png`,
      ep02Title: `${widthUrl}/v1554831226/shangri-lashow/Episodes%20Page/Episode_2_-_Row_01_3840x432.png`,
      ep03Title: `${widthUrl}/v1554831221/shangri-lashow/Episodes%20Page/Episode_3_-_Row_01_3840x432.png`,
      ep03Locked: `${widthUrl}/v1554831227/shangri-lashow/Episodes%20Page/Episode_3_-_Row_01_3840x432_LOCKED.png`,
      ep04Title: `${widthUrl}/v1554831223/shangri-lashow/Episodes%20Page/Episode_4_-_Row_01_3840x432.png`,
      ep04Locked: `${widthUrl}/v1554831220/shangri-lashow/Episodes%20Page/Episode_4_-_Row_01_3840x432_LOCKED.png`,
      ep05Title: `${widthUrl}/v1554831216/shangri-lashow/Episodes%20Page/Episode_5_-_Row_01_3840x432.png`,
      ep05Locked: `${widthUrl}/v1554831222/shangri-lashow/Episodes%20Page/Episode_5_-_Row_01_3840x432_LOCKED.png`,
      ep06Title: `${widthUrl}/v1554831224/shangri-lashow/Episodes%20Page/Episode_6_-_Row_01_3840x432.png`,
      ep06Locked: `${widthUrl}/v1554831224/shangri-lashow/Episodes%20Page/Episode_6_-_Row_01_3840x432_LOCKED.png`,
      ep07Title: `${widthUrl}/v1554831217/shangri-lashow/Episodes%20Page/Episode_7_-_Row_01_3840x432.png`,
      ep07Locked: `${widthUrl}/v1554831218/shangri-lashow/Episodes%20Page/Episode_7_-_Row_01_3840x432_LOCKED.png`,
      ep08Title: `${widthUrl}/v1554831228/shangri-lashow/Episodes%20Page/Episode_8_-_Row_01_3840x432.png`,
      ep08Locked: `${widthUrl}/v1554831224/shangri-lashow/Episodes%20Page/Episode_8_-_Row_01_3840x432_LOCKED.png`,
      ep09Title: `${widthUrl}/v1554831219/shangri-lashow/Episodes%20Page/Episode_9_-_Row_01_3840x432.png`,
      ep09Locked: `${widthUrl}/v1554831217/shangri-lashow/Episodes%20Page/Episode_9_-_Row_01_3840x432_LOCKED.png`,
      ep10Title: `${widthUrl}/v1554831226/shangri-lashow/Episodes%20Page/Episode_10_-_Row_01_3840x432.png`,
      ep10Locked: `${widthUrl}/v1554831217/shangri-lashow/Episodes%20Page/Episode_10_-_Row_01_3840x432_LOCKED.png`,
      ep11Title: `${widthUrl}/v1554831216/shangri-lashow/Episodes%20Page/Episode_11_-_Row_01_3840x432.png`,
      ep11Locked: `${widthUrl}/v1554831226/shangri-lashow/Episodes%20Page/Episode_11_-_Row_01_3840x432_LOCKED.png`,
      ep12Title: `${widthUrl}/v1554831224/shangri-lashow/Episodes%20Page/Episode_12_-_Row_01_3840x432.png`,
      ep12Locked: `${widthUrl}/v1554831228/shangri-lashow/Episodes%20Page/Episode_12_-_Row_01_3840x432_LOCKED.png`,
      ep13Title: `${widthUrl}/v1554831217/shangri-lashow/Episodes%20Page/Episode_13_-_Row_01_3840x432.png`,
      ep13Locked: `${widthUrl}/v1554831216/shangri-lashow/Episodes%20Page/Episode_13_-_Row_01_3840x432_LOCKED.png`,
      tape01: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape01.png`,
      tape02: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape02.png`,
      tape03: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape03.png`,
      tape04: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape04.png`,
      tape05: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape05.png`,
      tape06: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape06.png`,
      tape07: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape07.png`,
      tape08: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape08.png`,
      tape09: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape09.png`,
      tape10: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape10.png`,
      tape11: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape11.png`,
      tape12: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape12.png`,
      tape13: `${widthUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape13.png`,
      watchNow: `${widthUrl}/v1557015095/shangri-lashow/Episodes%20Page/Episodes_Page_Mobile_WATCH_NOW_screen.png`,
      unlock: `${widthUrl}/v1557015095/shangri-lashow/Episodes%20Page/Episodes_Page_Mobile_UNLOCK_EPISODE_screen.png`,
      stopButton: `${widthUrl}/v1557015093/shangri-lashow/Episodes%20Page/Episodes_Page_Mobile_STOP_button.png`,
      blankScreen: `${widthUrl}/v1556592923/shangri-lashow/Episodes%20Page/Black_Screen_01_MOBILE.png`,
      tvWithBackground: `${widthUrl}/v1556592923/shangri-lashow/Episodes%20Page/Episodes_Page_Canvas_2_01_1080x1400_MOBILE.png`
    }
  }

  return {
    ...shared,
    ep01Title: `${widthUrl}/v1554831220/shangri-lashow/Episodes%20Page/Episode_1_-_Row_01_3840x432.png`,
    ep02Title: `${widthUrl}/v1554831226/shangri-lashow/Episodes%20Page/Episode_2_-_Row_01_3840x432.png`,
    ep03Title: `${widthUrl}/v1554831221/shangri-lashow/Episodes%20Page/Episode_3_-_Row_01_3840x432.png`,
    ep03Locked: `${widthUrl}/v1554831227/shangri-lashow/Episodes%20Page/Episode_3_-_Row_01_3840x432_LOCKED.png`,
    ep04Title: `${widthUrl}/v1554831223/shangri-lashow/Episodes%20Page/Episode_4_-_Row_01_3840x432.png`,
    ep04Locked: `${widthUrl}/v1554831220/shangri-lashow/Episodes%20Page/Episode_4_-_Row_01_3840x432_LOCKED.png`,
    ep05Title: `${widthUrl}/v1554831216/shangri-lashow/Episodes%20Page/Episode_5_-_Row_01_3840x432.png`,
    ep05Locked: `${widthUrl}/v1554831222/shangri-lashow/Episodes%20Page/Episode_5_-_Row_01_3840x432_LOCKED.png`,
    ep06Title: `${widthUrl}/v1554831224/shangri-lashow/Episodes%20Page/Episode_6_-_Row_01_3840x432.png`,
    ep06Locked: `${widthUrl}/v1554831224/shangri-lashow/Episodes%20Page/Episode_6_-_Row_01_3840x432_LOCKED.png`,
    ep07Title: `${widthUrl}/v1554831217/shangri-lashow/Episodes%20Page/Episode_7_-_Row_01_3840x432.png`,
    ep07Locked: `${widthUrl}/v1554831218/shangri-lashow/Episodes%20Page/Episode_7_-_Row_01_3840x432_LOCKED.png`,
    ep08Title: `${widthUrl}/v1554831228/shangri-lashow/Episodes%20Page/Episode_8_-_Row_01_3840x432.png`,
    ep08Locked: `${widthUrl}/v1554831224/shangri-lashow/Episodes%20Page/Episode_8_-_Row_01_3840x432_LOCKED.png`,
    ep09Title: `${widthUrl}/v1554831219/shangri-lashow/Episodes%20Page/Episode_9_-_Row_01_3840x432.png`,
    ep09Locked: `${widthUrl}/v1554831217/shangri-lashow/Episodes%20Page/Episode_9_-_Row_01_3840x432_LOCKED.png`,
    ep10Title: `${widthUrl}/v1554831226/shangri-lashow/Episodes%20Page/Episode_10_-_Row_01_3840x432.png`,
    ep10Locked: `${widthUrl}/v1554831217/shangri-lashow/Episodes%20Page/Episode_10_-_Row_01_3840x432_LOCKED.png`,
    ep11Title: `${widthUrl}/v1554831216/shangri-lashow/Episodes%20Page/Episode_11_-_Row_01_3840x432.png`,
    ep11Locked: `${widthUrl}/v1554831226/shangri-lashow/Episodes%20Page/Episode_11_-_Row_01_3840x432_LOCKED.png`,
    ep12Title: `${widthUrl}/v1554831224/shangri-lashow/Episodes%20Page/Episode_12_-_Row_01_3840x432.png`,
    ep12Locked: `${widthUrl}/v1554831228/shangri-lashow/Episodes%20Page/Episode_12_-_Row_01_3840x432_LOCKED.png`,
    ep13Title: `${widthUrl}/v1554831217/shangri-lashow/Episodes%20Page/Episode_13_-_Row_01_3840x432.png`,
    ep13Locked: `${widthUrl}/v1554831216/shangri-lashow/Episodes%20Page/Episode_13_-_Row_01_3840x432_LOCKED.png`,
    tape01: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape01.png`,
    tape02: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape02.png`,
    tape03: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape03.png`,
    tape04: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape04.png`,
    tape05: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape05.png`,
    tape06: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape06.png`,
    tape07: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape07.png`,
    tape08: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape08.png`,
    tape09: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape09.png`,
    tape10: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape10.png`,
    tape11: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape11.png`,
    tape12: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape12.png`,
    tape13: `${scaleDownUrl}/v1555733625/shangri-lashow/Episodes%20Page/Tape13.png`,
    blankScreen: `${scaleDownUrl}/v1554831220/shangri-lashow/Episodes%20Page/Blank_Screen_01.png`,
    tvWithBackground: `${widthUrl}/v1555452236/shangri-lashow/Episodes%20Page/TVwithBackground1920w.png`
  }
}

const videos = (xFactor = null, suffix = 'webm') => {
  let scaleParam = 'q_auto:eco'

  if (xFactor && xFactor !== 1) {
    const adjustment = 1.1
    const wScale = (xFactor * adjustment).toFixed(2)
    scaleParam = xFactor ? `q_auto:eco,c_scale,w_${wScale}` : ''
  }

  return {
    ep01Trailer: `${baseVideoUrl}${scaleParam}/v1555731904/shangri-lashow/video/Episode01Trailer.${suffix}`,
    ep04Trailer: `${baseVideoUrl}${scaleParam}/v1555809472/shangri-lashow/video/Episode04Trailer.${suffix}`,
    ep11Trailer: `${baseVideoUrl}${scaleParam}/v1555809473/shangri-lashow/video/Episode11Trailer.${suffix}`,
    ep02Trailer: `${baseVideoUrl}${scaleParam}/v1555809475/shangri-lashow/video/Episode02Trailer.${suffix}`,
    ep07Trailer: `${baseVideoUrl}${scaleParam}/v1555809476/shangri-lashow/video/Episode07Trailer.${suffix}`,
    ep05Trailer: `${baseVideoUrl}${scaleParam}/v1555809478/shangri-lashow/video/Episode05Trailer.${suffix}`,
    ep06Trailer: `${baseVideoUrl}${scaleParam}/v1555809479/shangri-lashow/video/Episode06Trailer.${suffix}`,
    ep08Trailer: `${baseVideoUrl}${scaleParam}/v1555809479/shangri-lashow/video/Episode08Trailer.${suffix}`,
    ep03Trailer: `${baseVideoUrl}${scaleParam}/v1555809480/shangri-lashow/video/Episode03Trailer.${suffix}`,
    ep09Trailer: `${baseVideoUrl}${scaleParam}/v1555809481/shangri-lashow/video/Episode09Trailer.${suffix}`,
    ep10Trailer: `${baseVideoUrl}${scaleParam}/v1555809481/shangri-lashow/video/Episode10Trailer.${suffix}`,
    ep12Trailer: `${baseVideoUrl}${scaleParam}/v1555809483/shangri-lashow/video/Episode12Trailer.${suffix}`,
    ep13Trailer: `${baseVideoUrl}${scaleParam}/v1555809484/shangri-lashow/video/Episode13Trailer.${suffix}`
  }
}

const episodesLoci = isMobile => {
  const shared = {}

  if (isMobile) {
    return {
      ...shared,
      blankScreen: { x: 10, y: 110 },
      tape01: { x: 0, y: 1500 },
      tape02: { x: 0, y: 1642 },
      tape03: { x: 0, y: 1779 },
      tape04: { x: 0, y: 1916 },
      tape05: { x: 0, y: 2053 },
      tape06: { x: 0, y: 2190 },
      tape07: { x: 0, y: 2327 },
      tape08: { x: 0, y: 2464 },
      tape09: { x: 0, y: 2600 },
      tape10: { x: 0, y: 2738 },
      tape11: { x: 0, y: 2875 },
      tape12: { x: 0, y: 3002 },
      tape13: { x: 0, y: 3150 }
    }
  }

  return {
    ...shared,
    blankScreen: { x: 144, y: 300 },
    tape01: { x: 1200, y: 285 },
    tape02: { x: 1200, y: 371 },
    tape03: { x: 1200, y: 453 },
    tape04: { x: 1200, y: 539 },
    tape05: { x: 1200, y: 628 },
    tape06: { x: 1200, y: 710 },
    tape07: { x: 1200, y: 793 },
    tape08: { x: 1200, y: 874 },
    tape09: { x: 1200, y: 959 },
    tape10: { x: 1200, y: 1043 },
    tape11: { x: 1200, y: 1130 },
    tape12: { x: 1200, y: 1210 },
    tape13: { x: 1200, y: 1296 }
  }
}

const home = (
  height,
  width,
  baseHeight,
  baseWidth,
  imageScale = { x: 1, y: 1 },
  mobile = false
) => {
  const scaleUrl = makeScaleUrl(baseHeight, baseWidth, height, width)
  const upscaleUrl = makeScaleUrl(baseHeight, baseWidth, height, width, 1.1)
  const halfHeight = Math.floor(height / 2)
  const halfWidth = Math.floor(width / 2)

  const shared = {
    loading: `${baseUrl}/c_scale,h_${halfHeight},w_${halfWidth}/v1556844699/shangri-lashow/extras/loading.gif`,
    title: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Shangri-LA_Title_01_MOBILE.png`,
    titleBtn: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Watch_Now_Button_01_MOBILE.png`
  }

  if (mobile) {
    return {
      ...shared,
      interior: `${scaleUrl}/v1556853392/shangri-lashow/Home%20Page/Home_Page_Canvas_02_MOBILE_1080x1400.png`,
      castCrew: `${scaleUrl}/v1556592856/shangri-lashow/Home%20Page/Cast_and_Crew_01_MOBILE.png`,
      castCrewBtn: `${upscaleUrl}/v1556592856/shangri-lashow/Home%20Page/Cast_and_Crew_Button_01_MOBILE.png`,
      episodes: `${scaleUrl}/v1556592856/shangri-lashow/Home%20Page/Episodes_01_MOBILE.png`,
      episodesBtn: `${upscaleUrl}/v1556592856/shangri-lashow/Home%20Page/Episodes_Button_01_MOBILE.png`,
      games: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Games_01_MOBILE.png`,
      gamesBtn: `${upscaleUrl}/v1556592857/shangri-lashow/Home%20Page/Games_Button_01_MOBILE.png`,
      giveBack: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Give_Back_01_MOBILE.png`,
      giveBackBtn: `${upscaleUrl}/v1556592857/shangri-lashow/Home%20Page/Give_Back_Button_01_MOBILE.png`,
      music: `${scaleUrl}/v1556592856/shangri-lashow/Home%20Page/Music_01_MOBILE.png`,
      musicBtn: `${upscaleUrl}/v1556592856/shangri-lashow/Home%20Page/Music_Button_01_MOBILE.png`,
      photos: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Photos_01_MOBILE.png`,
      photosBtn: `${upscaleUrl}/v1556592857/shangri-lashow/Home%20Page/Photos_Button_01_MOBILE.png`,
      shop: `${scaleUrl}/v1556853392/shangri-lashow/Home%20Page/Shop_02_MOBILE.png`,
      shopBtn: `${upscaleUrl}/v1556853392/shangri-lashow/Home%20Page/Shop_Button_02_MOBILE.png`,
      trailer: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Trailer_01_MOBILE.png`,
      trailerBtn: `${upscaleUrl}/v1556592857/shangri-lashow/Home%20Page/Trailer_Button_01_MOBILE.png`,
      youtopia: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/You_Topia_01_MOBILE.png`,
      youtopiaBtn: `${upscaleUrl}/v1556592857/shangri-lashow/Home%20Page/You_Topia_Button_01_MOBILE.png`
    }
  }

  return {
    ...shared,
    interior: `${scaleUrl}/v1555123412/shangri-lashow/Home%20Page/Home_Page_Canvas_02_1920x1600.png`,
    castCrew: `${scaleUrl}/v1555109007/shangri-lashow/Home%20Page/CAST_CREW_01.png`,
    castCrewBtn: `${scaleUrl}/v1554831012/shangri-lashow/Home%20Page/CAST_CREW_button_01.png`,
    episodes: `${scaleUrl}/v1555109008/shangri-lashow/Home%20Page/EPISODES_01.png`,
    episodesBtn: `${scaleUrl}/v1554831011/shangri-lashow/Home%20Page/EPISODES_button_01.png`,
    games: `${scaleUrl}/v1555109006/shangri-lashow/Home%20Page/GAMES_01.png`,
    gamesBtn: `${scaleUrl}/v1554831011/shangri-lashow/Home%20Page/GAMES_button_01.png`,
    giveBack: `${scaleUrl}/v1555109006/shangri-lashow/Home%20Page/GIVE_BACK_01.png`,
    giveBackBtn: `${scaleUrl}/v1554831011/shangri-lashow/Home%20Page/GIVE_BACK_button_01.png`,
    music: `${scaleUrl}/v1555109007/shangri-lashow/Home%20Page/MUSIC_01.png`,
    musicBtn: `${scaleUrl}/v1554831012/shangri-lashow/Home%20Page/MUSIC_button_01.png`,
    photos: `${scaleUrl}/v1555109007/shangri-lashow/Home%20Page/PHOTOS_01.png`,
    photosBtn: `${scaleUrl}/v1554831011/shangri-lashow/Home%20Page/PHOTOS_button_01.png`,
    shop: `${scaleUrl}/v1555109007/shangri-lashow/Home%20Page/SHOP_01.png`,
    shopBtn: `${scaleUrl}/v1554831012/shangri-lashow/Home%20Page/SHOP_button_01.png`,
    trailer: `${scaleUrl}/v1555109008/shangri-lashow/Home%20Page/TRAILER_01.png`,
    trailerBtn: `${scaleUrl}/v1554831011/shangri-lashow/Home%20Page/TRAILER_button_01.png`,
    youtopia: `${scaleUrl}/v1555109008/shangri-lashow/Home%20Page/YOUTOPIA_01.png`,
    youtopiaBtn: `${scaleUrl}/v1554831012/shangri-lashow/Home%20Page/YOUTOPIA_button_01.png`
  }
}

const homeLoci = isMobile => {
  if (isMobile) {
    return {
      castCrew: { x: 1350, y: 1200 },
      castCrewBtn: { x: 1300, y: 1150 },
      episodes: { x: 1330, y: 900 },
      episodesBtn: { x: 1230, y: 900 },
      games: { x: 410, y: 530 },
      gamesBtn: { x: 410, y: 530 },
      giveBack: { x: 50, y: 1400 },
      giveBackBtn: { x: 50, y: 1300 },
      music: { x: 1250, y: 795 },
      musicBtn: { x: 1250, y: 750 },
      photos: { x: 1630, y: 350 },
      photosBtn: { x: 1500, y: 320 },
      shop: { x: 0, y: 750 },
      shopBtn: { x: 0, y: 750 },
      title: { x: 330, y: 270 },
      titleBtn: { x: 330, y: 270 },
      trailer: { x: 550, y: 765 },
      trailerBtn: { x: 550, y: 765 },
      youtopia: { x: 1287, y: 605 },
      youtopiaBtn: { x: 1250, y: 585 }
    }
  }

  return {
    castCrew: { x: 1470, y: 1130 },
    castCrewBtn: { x: 1390, y: 1060 },
    episodes: { x: 560, y: 1130 },
    episodesBtn: { x: 480, y: 1060 },
    games: { x: 485, y: 640 },
    gamesBtn: { x: 435, y: 570 },
    giveBack: { x: 1545, y: 1445 },
    giveBackBtn: { x: 1465, y: 1375 },
    music: { x: 500, y: 1020 },
    musicBtn: { x: 450, y: 950 },
    photos: { x: 1730, y: 450 },
    photosBtn: { x: 1610, y: 380 },
    shop: { x: 20, y: 910 },
    shopBtn: { x: 0, y: 840 },
    title: { x: 0, y: 0 }, // mobile only
    titleBtn: { x: 0, y: 0 }, // mobile only
    trailer: { x: 850, y: 870 },
    trailerBtn: { x: 800, y: 800 },
    youtopia: { x: 1462, y: 733 },
    youtopiaBtn: { x: 1382, y: 663 }
  }
}

const icons = () => {
  const iconUrl = `${baseUrl}/c_scale,w_100`
  return {
    amazon: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Amazon_Icon_01.png`,
    bandcamp: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Bandcamp_Icon_01.png`,
    email: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Mail_Icon_01.png`,
    facebook: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Facebook_Icon_01.png`,
    home: `${iconUrl}/v1555818651/shangri-lashow/Icon%20Buttons/Home_Icon_01.png`,
    instagram: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Instagram_Icon_01.png`,
    patreon: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Patreon_Icon_01.png`,
    shopify: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Shopify_Icon_01.png`,
    thesurgeryroom: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/The_Surgery_Room_Icon_01.png`,
    twitter: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Twitter_Icon_01.png`,
    vimeo: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/Vimeo_Icon_01.png`,
    youtube: `${iconUrl}/v1554831022/shangri-lashow/Icon%20Buttons/YouTube_Icon_01.png`
  }
}

const backgrounds = () => {
  return {
    music: `${baseUrl}/v1556501535/shangri-lashow/Music%20Page/Music_Page_01_1920x1080.png`
  }
}

export default {
  backgrounds,
  episodes,
  episodesLoci,
  home,
  homeLoci,
  icons,
  videos
}