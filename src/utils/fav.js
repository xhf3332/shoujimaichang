export function addToFav(id) {
  let favs = loadFavs()
  const index = favs.indexOf(id)
  if (index > -1) {
    favs.splice(index, 1)
  } else {
    favs.push(id)
  }
  localStorage.setItem("favs", JSON.stringify(favs))
}


export function loadFavs() {
  let list = []
  try {
    if (localStorage.getItem("favs")) {
      list = JSON.parse(localStorage.getItem("favs"))
    }
  } catch (err) {
    console.log(err)
  }
  return list
}