var gKeywordSearchCountMap = {}
var gImgs = []
var gMeme = {
    selectedImgId: null,
    selectedLineIdx: null,
}


/* var gKeyWords = ['cute', 'funny', 'famous', 'sleepy', 'smiley']
 */
function createImgs() {
    for (var i = 1; i < 19; i++) {
        var img = { id: i, url: `img/${i}.jpg`, key: null }
        gImgs.push(img)
    }
    /* console.log(gImgs); */

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
        ['famous'],
        ['famous']
    ]
    gImgs.forEach((img, idx) => {
        img.key = keyWords[idx]
    });
    //setKewordsMap(keyWords)
}

/*
function setKewordsMap(keyWords) {
    /* console.log(keyWords); */
/*     keyWords.forEach(key => {
        key.join(',')
        console.log(key);
        key.forEach(keyWord => {
            if(!keyWord) keyWord = 0
        });
    });
 *///} */

function getGImgs() {
    createImgs()
    return gImgs
}