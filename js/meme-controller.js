'use strict'
var gCanvas
var gCtx
var gStartPos
var isImput = false
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function init() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');
    window.addEventListener('resize', resizeCanvas)
    addListeners()
    addMouseListeners()
    renderImgs()
}
function updatePlaceholder() { ///later
    var elInput = document.querySelector('.line-input')
    if (!isImput) elInput.value = ''
}

function clearPlaceholder() {
    var elInput = document.querySelector('.line-input')
    elInput.value = ''
}

/* function clearCanvas() { ///later
    var meme = getMeme()
    console.log(meme);
    meme.lines.forEach(line => {
        gCtx.clearRect(line.pos.x, line.pos.y, gCanvas.width, gCanvas.height)
    });
}
 */

function renderMeme() {
    isImput = false
    var meme = getMeme()
    var img = getImg(meme.selectedImgId)
    var currImg = new Image()
    currImg.src = img.url
    gCtx.drawImage(currImg, 0, 0)
    meme.lines.forEach(line => {
        drawText(line)
    })
}
function onDeleteLine() {
    clearPlaceholder()
    deleteLine()
    renderMeme()
}
function onInputText(text) {
    isImput = true
    setLineText(text)
    renderMeme()
}
function onSwitchLines() {
    switchLines()
    renderMeme()
}
function onChangeFontFamily(font) {
    changeFontFamily(font)
    renderMeme()
}
function drawText(line) {
    gCtx.lineWidth = 0;
    gCtx.strokeStyle = line.strokeColor
    gCtx.textAlign = line.align
    gCtx.fillStyle = line.fillColor
    gCtx.font = `${line.fontSize}px ${line.font}`
    gCtx.fillText(`${line.text}`, `${line.pos.x}`, `${line.pos.y}`)
    gCtx.strokeText(`${line.text}`, `${line.pos.x}`, `${line.pos.y}`)

}
function onAlignLeft() {
    setElignLeft()
    renderMeme()
}
function onAlignRight() {
    setElignRight()
    renderMeme()
}
function onAlignCenter() {
    setElignCenter()
    renderMeme()
}
function onChangeFillColor(elColor) {
    /* console.log(elColor)*/
    changeFillColor(elColor)
    renderMeme()
}
function onChangeStrokeColor(elColor) {
    changeStrokeColor(elColor)
    renderMeme()
}
function onAddLine() {
    updatePlaceholder()
    addLine()
    renderMeme()
}
function onLineUp() {
    setLineUp()
    renderMeme()
}
function onLineDown() {
    setLineDown()
    renderMeme()
}
function onChangeFontSize(diff) {
    changeFontSize(diff)
    renderMeme()
}
function resizeCanvas() {
    /*  console.log(gCanvas)*/
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight

    renderMeme()
}



///LISTENERS
function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev 
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    /* gCanvas.addEventListener('mouseup', onUp) */
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    /*  gCanvas.addEventListener('touchend', onUp) */
}
function onDown(ev) {
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    console.log(pos)
    /* if (!isLineClicked(pos)) return */
    console.log('hi');
    setLineDrag(true)
    //Save the pos we start from 
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
    onMove(ev)

}
function moveLine(dx, dy) {
    console.log('im here');
    gStartPos.x += dx
    gStartPos.y += dy

}

///////////////////////////////////
function onMove(ev) {
    console.log('hiiiiii');
   /*  const LINE = getLine(); */
    const pos = getEvPos(ev)
    //Calc the delta , the diff we moved
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    console.log('gStartPos',gStartPos);
    moveLine(dx, dy)
    //Save the last pos , we remember where we`ve been and move accordingly
    gStartPos = pos
    //The canvas is render again after every move
    renderMeme()

}

function onUp() {
    setCircleDrag(false)
    document.body.style.cursor = 'grab'
}
function getEvPos(ev) {

    //Gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // Check if its a touch ev
    if (gTouchEvs.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}


function toggleMenu(elBtn) {
    //if(gIsOpen) return
    var menuBtn = document.querySelector('.menu')
    document.body.classList.toggle('open-menu')
    document.body.classList.contains('open-menu') ? menuBtn.innerText = 'X' : menuBtn.innerText = '☰';

}
