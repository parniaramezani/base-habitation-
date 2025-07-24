alert('welcom to my site hope your enjoy:)')
const imgList = ['img/Summer-Shot-1536x866.jpg', 'img/Winter-Shot-1536x866.jpg']
const btnp = document.querySelector('#do>div>div>button:first-of-type')
const btnn = document.querySelector('#do>div>div>button:last-of-type')
const imdSlider = document.querySelector('#do>div>div>img')

let imgIndex = 0

btnn.addEventListener('click', () => {
    imgIndex++
    if (imgIndex > 1) {
        imgIndex = 0
    }
    imdSlider.setAttribute('src', imgList[imgIndex])
})

btnp.addEventListener('click', () => {
    imgIndex--
    if (imgIndex < 0) {
        imgIndex = 1
    }
    imdSlider.setAttribute('src', imgList[imgIndex])
})

const imgArrey = ['img/BASE1_White_FRONT-1024x672.png', 'img/Base-I-Elevation-Front-Dark-1024x672.png', 'img/BACK_B_Pale_V3-1536x1008.png', 'img/BASE1_Black_BACK-1-1024x672.png']
const  btns = document.querySelectorAll('.btn')
const image = document.querySelector('#image')
const  image1 = document.querySelector('#image1')

btns.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.innerText === '.') {
            image.setAttribute('src', imgArrey[0])
        } else if (item.innerText === ',') {
            image.setAttribute('src', imgArrey[1])
        } else if (item.innerText === '+') {
            image1.setAttribute('src', imgArrey[2])
        } else if (item.innerText === '-') {
             image1.setAttribute('src', imgArrey[3])
        }
    })
})