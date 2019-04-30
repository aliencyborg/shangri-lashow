// const homeImages = images.home(mobile = false)

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

const makeScaleUrl = (baseHeight, baseWidth, height, width) => {
  height = height || baseHeight
  width = width || baseWidth
  const hScale = (height / baseHeight).toFixed(2)
  const wScale = (width / baseWidth).toFixed(2)
  const scaleParam = makeScaleParam(hScale, wScale)

  return `${baseUrl}/${scaleParam}`
}

const home = (height, width, baseHeight, baseWidth, mobile = false) => {
  const scaleUrl = makeScaleUrl(baseHeight, baseWidth, height, width)

  if (mobile) {
    return {
      interior: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Home_Page_Canvas_01_MOBILE_1080x1400.png`,
      loading: `${baseUrl}/c_scale,h_${height},w_${width}/v1555911626/shangri-lashow/extras/shangri-la-01.png`,
      castCrew: `${scaleUrl}/v1556592856/shangri-lashow/Home%20Page/Cast_and_Crew_01_MOBILE.png`,
      castCrewBtn: `${scaleUrl}/v1556592856/shangri-lashow/Home%20Page/Cast_and_Crew_Button_01_MOBILE.png`,
      episodes: `${scaleUrl}/v1556592856/shangri-lashow/Home%20Page/Episodes_01_MOBILE.png`,
      episodesBtn: `${scaleUrl}/v1556592856/shangri-lashow/Home%20Page/Episodes_Button_01_MOBILE.png`,
      games: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Games_01_MOBILE.png`,
      gamesBtn: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Games_Button_01_MOBILE.png`,
      giveBack: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Give_Back_01_MOBILE.png`,
      giveBackBtn: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Give_Back_Button_01_MOBILE.png`,
      music: `${scaleUrl}/v1556592856/shangri-lashow/Home%20Page/Music_01_MOBILE.png`,
      musicBtn: `${scaleUrl}/v1554831012/shangri-lashow/Home%20Page/MUSIC_button_01.png`,
      photos: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Photos_01_MOBILE.png`,
      photosBtn: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Photos_Button_01_MOBILE.png`,
      shop: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Shop_01_MOBILE.png`,
      shopBtn: `${scaleUrl}/v1554831012/shangri-lashow/Home%20Page/SHOP_button_01.png`,
      title: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Shangri-LA_Title_01_MOBILE.png`,
      trailer: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Trailer_01_MOBILE.png`,
      trailerBtn: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Trailer_Button_01_MOBILE.png`,
      watchNow: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Watch_Now_Button_01_MOBILE.png`,
      youtopia: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/You_Topia_01_MOBILE.png`,
      youtopiaBtn: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/You_Topia_Button_01_MOBILE.png`
    }
  }

  return {
    interior: `${scaleUrl}/v1555123412/shangri-lashow/Home%20Page/Home_Page_Canvas_02_1920x1600.png`,
    loading: `${baseUrl}/c_scale,h_${height},w_${width}/v1555911626/shangri-lashow/extras/shangri-la-01.png`,
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
    title: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Shangri-LA_Title_01_MOBILE.png`,
    trailer: `${scaleUrl}/v1555109008/shangri-lashow/Home%20Page/TRAILER_01.png`,
    trailerBtn: `${scaleUrl}/v1554831011/shangri-lashow/Home%20Page/TRAILER_button_01.png`,
    watchNow: `${scaleUrl}/v1556592857/shangri-lashow/Home%20Page/Watch_Now_Button_01_MOBILE.png`,
    youtopia: `${scaleUrl}/v1555109008/shangri-lashow/Home%20Page/YOUTOPIA_01.png`,
    youtopiaBtn: `${scaleUrl}/v1554831012/shangri-lashow/Home%20Page/YOUTOPIA_button_01.png`
  }
}

export default {
  home
}
