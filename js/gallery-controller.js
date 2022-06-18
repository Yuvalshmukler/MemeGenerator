function onShowGallery() {
    document.querySelector('.main-content').style.display = 'block'
    document.querySelector('.editor-container').style.display = 'none'
    clearPlaceholder()
    clearCanvas()
   
}

function renderImgs() {
    var imgs = getGImgs()
    var elGalleryContainer = document.querySelector('.gallery-container')
    var strHtml = ``
    imgs.forEach(img => {
        strHtml += `<img class="img" id="${img.id}" onClick = onShowEditor(${img.id}) src="${img.url}">`
    })
    elGalleryContainer.innerHTML = strHtml
}
function onShowEditor(imgId) {
    document.querySelector('.main-content').style.display = 'none'
    document.querySelector('.editor-container').style.display = 'grid'
    setImg(imgId)
    renderMeme()
}
