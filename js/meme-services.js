var gCanvas = document.getElementById('myCanvas');
var gCtx = gCanvas.getContext('2d');

var gKeywordSearchCountMap = {}
var gImgs = []
var gMeme = {
    selectedImgId: 3,
    selectedLineIdx: 0,
    lines: [
        {
            text: 'Enter your text here',
            size: 20,
            isDrag: false,
            font: 'Impact',
            fillColor: 'white',
            strokeColor: 'black',
            align: 'start',
            fontSize: 30,
            pos: { x: 20, y: 50 },
        }
    ]
}
function changeFillColor(color) {
    const line = getSelectedLine()
    line.fillColor = color
    /*  console.log(line.fillColor) */
}
function changeStrokeColor(color) {
    const line = getSelectedLine()
    line.strokeColor = color
}
function deleteLine() { ////later
    return getSelectedLine()

}
function deleteLine() {
    if (gMeme.lines.length === 1) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function changeFontSize(diff) {
    const line = getSelectedLine()
    if (line.fontSize > 70 && diff === +10) return
    if (line.fontSize === 10 && diff === -10) return
    console.log('line', line);
    console.log('diff', diff);
    line.fontSize += diff
}
function setLineDown() {
    const line = getSelectedLine()
    if (line.pos.y === 20) return
    line.pos.y -= 15
    console.log(line.pos);
}
function switchLines() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}
function setLineUp() {
    const line = getSelectedLine()
    if (line.pos.y === 485) return
    line.pos.y += 15
    console.log(line.pos);
}

///CREATING FUNCTION
function createImgs() {
    for (var i = 1; i < 17; i++) {
        var img = { id: i, url: `img/${i}.jpg`, key: null }
        gImgs.push(img)
    }
    //console.log(gImgs);

    const keyWords = [
        ['famous', 'funny'],
        ['cute', 'animals'],
        ['cute', 'sleepy', 'animals'],
        ['cute', 'sleepy', 'animals'],
        ['cute', 'funny'],
        ['famous', 'funny'],
        ['cute', 'funny'],
        ['famous'],
        ['cute', 'funny', 'smiley'],
        ['smiley', 'funny', 'famous'],
        ['funny'],
        ['famous'],
        ['famous', 'smiley'],
        ['famous'],
        ['famous'],
        ['funny', 'smiley'],
        /* ['famous'],
         ['famous'] */
    ]
    gImgs.forEach((img, idx) => {
        img.key = keyWords[idx]
    });
}

function addLine() {
    /*  console.log('gMeme.selectedLineIdx',gMeme.selectedLineIdx)*/

    if (gMeme.lines.length > 2) return
    var y = gMeme.lines[gMeme.lines.length - 1].pos.y + 70
    var line = {
        text: 'hello',
        size: 30,
        isDrag: false,
        font: 'Impact',
        fillColor: 'white',
        strokeColor: 'black',
        align: 'left',
        fontSize: 30,
        pos: { x: 20, y: y }
    }
    /* console.log(line); */
    gMeme.lines.push(line);
    /*  console.log(gMeme); */
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}
function setElignLeft() {
    const line = getSelectedLine()
    line.align = 'left'
    line.pos.x = 0
}
function setElignRight() {
    const line = getSelectedLine()
    line.align = 'right'
    line.pos.x = gCanvas.width - 5
}
function setElignCenter() {
    const line = getSelectedLine()
    line.align = 'center'
    line.pos.x = gCanvas.width / 2

}
function setLineText(txt) {
    const line = getSelectedLine()
    line.text = txt
}
function changeFontFamily(fontFamily) {
    const line = getSelectedLine()
    line.font = fontFamily
}
function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

//FOR CONTROLLER
function getGImgs() {
    createImgs()
    return gImgs
}
function getImg(imgId) {
    return gImgs.find(img => img.id === imgId)
}
function getMeme() {
    return gMeme
}

/* function getLineClicked(pos) {
    var lineIdx = gMeme.lines.findIndex(line => {
        lineArea.includs(pos)
        var lineArea = {
            x: line.pos.x,
            y: line.pos.y,
            width: line.text.length + 7,
            height: line.fontSize + 7,

        }
        console.log(lineArea);
    })
    return lineIdx
}
function getLineByIdx(lineIdx) {
    return gMeme.lines[lineIdx]
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}
function getLineArea(pos){
    return lineArea {}
}
 */

function isLineClicked(clickedPos) {
    const { pos } = gMeme.lines[0]
    console.log('blaaaa', pos);
    // Calc the distance between two dots
    const distance = Math.sqrt((pos.x * clickedPos.x) + 50 + (pos.y * clickedPos.y) + 50)
    console.log(distance, 'dissss');
    //If its smaller then the radius of the circle we are inside
    console.log('distance', distance);
    if (distance <= 70) return true
    else return false
}
function getLine() {
    return gMeme.lines[0]
}

function setLineDrag(isDrag) {
    gMeme.lines[0].isDrag = isDrag
}