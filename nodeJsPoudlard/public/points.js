//// GLOBALS /////
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




///////// Moon /////////////////////////////

let moon =  document.getElementById('moon');

let speed = 30;
let start = -350;
moon.style.left = start + 'px';
let end = 2800;
let direction = 'go'
let moving = true
let delay = getRandomInt(1800000, 3000000)

const animate = () => {

    if (moving === true) {
        let object =  document.getElementById('moon');

        if ( direction === 'go' ) {

            let x = object.offsetLeft + 1
            object.style.left = x + 'px';
            object.style.top = getTopPosition(x);
            setTimeout(animate, speed);

            //changement de direction
            if ( object.offsetLeft > end) {
                direction = 'back'
                moving = false
                setTimeout(() => {
                    moving = true
                    animate()
                }, delay);
            }

        } else if (direction === 'back') {

            let x = object.offsetLeft - 1
            object.style.left = x + 'px';
            object.style.top = getTopPosition(x);
            setTimeout(animate, speed);

            //changement de direction
            if ( object.offsetLeft < start) {
                direction = 'go'
                moving = false
                setTimeout(() => {
                    moving = true
                    animate()
                }, delay);
            }
        }
    }



}

function getTopPosition(x) {

    let x0 = 1000
    let y0 = -50
    let alpha = 0.0001
    let y = alpha * (x - x0)*(x - x0) + y0
    return Math.round(y) + 'px'
}

animate()



//// CLOUDS //////////////
function animateCloud(idCloud, startCloud, endCloud, speedCloud, directionCloud, movingCloud, delayCloud) {

    if (movingCloud === true) {
        let object =  document.getElementById(idCloud);


        if ( directionCloud === 'go' ) {

            let x = object.offsetLeft + 1
            object.style.left = x + 'px';
            setTimeout( () => {
                animateCloud(idCloud, startCloud, endCloud, speedCloud, directionCloud, movingCloud, delayCloud)
            }, speedCloud);

            //changement de direction
            if ( object.offsetLeft > endCloud) {
                directionCloud = 'back'
                movingCloud = false
                delayCloud = getRandomInt(1000, 15000)
                speedCloud = getRandomInt(30,100)
                object.style.top = getRandomInt(-20, 40) + '%'
                setTimeout(() => {
                    movingCloud = true
                    animateCloud(idCloud, startCloud, endCloud, speedCloud, directionCloud, movingCloud, delayCloud)
                }, delayCloud);
            }

        } else if (directionCloud === 'back') {

            let x = object.offsetLeft - 1
            object.style.left = x + 'px';
            setTimeout( () => {
                animateCloud(idCloud, startCloud, endCloud, speedCloud, directionCloud, movingCloud, delayCloud)
            }, speedCloud);

            //changement de direction
            if ( object.offsetLeft < startCloud) {
                directionCloud = 'go'
                movingCloud = false
                delayCloud = getRandomInt(1000, 15000)
                speedCloud = getRandomInt(30,100)
                if (idCloud !== 'cloud3') {
                    object.style.top = getRandomInt(-20, 40) + '%'
                }
                setTimeout(() => {
                    movingCloud = true
                    animateCloud(idCloud, startCloud, endCloud, speedCloud, directionCloud, movingCloud, delayCloud)
                }, delayCloud);
            }
        }
    }

}




//// Cloud 1 ///////
let cloud1 = document.getElementById('cloud1')
let startCloud1 = -500
let endCloud1 = 2800
let speedCloud1 = getRandomInt(30,100)
let delayCloud1 = getRandomInt(1000, 15000)
cloud1.style.left = startCloud1 + 'px';
cloud1.style.top = getRandomInt(-20, 40) + '%'



//// Cloud 2 ///////
let cloud2 = document.getElementById('cloud2')
let startCloud2 = -500
let endCloud2 = 2800
let speedCloud2 = getRandomInt(30,100)
let delayCloud2 = getRandomInt(1000, 15000)
cloud1.style.left = startCloud2 + 'px';
cloud2.style.top = getRandomInt(-20, 40) + '%'



///// Cloud 3 /////////
let cloud3 = document.getElementById('cloud3')
let startCloud3 = -1000
let endCloud3 = 1800
let speedCloud3 = getRandomInt(30,100)
let delayCloud3 = getRandomInt(1000, 15000)
cloud3.style.left = startCloud3 + 'px';
cloud3.style.top = getRandomInt(-20, 40) + '%'


/////Cloud 4 ////////////
let cloud4 = document.getElementById('cloud4')
let startCloud4 = -500
let endCloud4 = 2800
let speedCloud4 = getRandomInt(30,100)
let delayCloud4 = getRandomInt(1000, 15000)
cloud4.style.left = startCloud4 + 'px';
cloud4.style.top = getRandomInt(-20, 40) + '%'

animateCloud('cloud1', startCloud1, endCloud1, speedCloud1, 'go', true, delayCloud1)
animateCloud('cloud2', startCloud2, endCloud2, speedCloud2, 'go', true, delayCloud2)
animateCloud('cloud3', startCloud3, endCloud3, speedCloud3, 'go', true, delayCloud3)
animateCloud('cloud4', startCloud4, endCloud4, speedCloud4, 'go', true, delayCloud4)