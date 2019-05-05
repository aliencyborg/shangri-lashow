const baseUrl = 'https://res.cloudinary.com/aliencyborg-llc/image/upload'
const makeScaleParam = (hScale, wScale) => {
  let hParam = ''
  let wParam = ''

  if (hScale !== '1.00') {
    hParam = `,h_${hScale}`
  }

  if (wScale !== '1.00') {
    wParam = `,w_${wScale}`
  }

  return `c_scale${hParam}${wParam}`
}

const makeScaleUrl = (baseHeight, baseWidth, height, width, modifier = 1) => {
  height = height || baseHeight
  width = width || baseWidth
  const hScale = ((height / baseHeight) * modifier).toFixed(2)
  const wScale = ((width / baseWidth) * modifier).toFixed(2)
  const scaleParam = makeScaleParam(hScale, wScale)

  return `${baseUrl}/${scaleParam}`
}

const home = (height, width, baseHeight, baseWidth, mobile = false) => {
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

const loci = isMobile => {
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

export default {
  home,
  loci
}
