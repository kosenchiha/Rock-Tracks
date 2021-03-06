export const fetchTracksData = () => {
  return fetch('https://itunes.apple.com/search?term=rock&media=music', {
    method: 'POST'
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    } else {
      throw res
    }
  })
}
