const items = document.querySelectorAll('.item');
const clickableScreen = document.querySelector('.main-container')
const knife_anim = document.querySelector('.knife_anim')
const allKnives = document.querySelectorAll('.inner_item img')
const body = document.querySelector('body')
console.log(allKnives.length)
console.log(items.length)
const itemsTop = [];
const patch_lost = document.querySelector('.lost');
const patch_btn_lost = document.querySelector('.lost .patch_btn');
const patch_won = document.querySelector('.won');
const patch_btn_won = document.querySelector('.won .patch_btn');
const knife_counter = document.querySelector('.knife_counter')
const mainStart = document.querySelector('.patch_btn_start');
const start_popup = document.querySelector('.start_popup');
const circle_container = document.querySelector('.container');
const target = document.querySelector('.target');
const level_count = document.querySelector('.level span')
let game_win = 0;
let start_game = false;
let knife_count = 10;
let random_knives = []
let random_knife;
let gameplay;
let levels = 1;
knife_counter.innerText = knife_count;
level_count.innerText = levels
target.style.width = '300px';

//calling functions
settingRandomKnives()
changeGameLevel()





console.log(start_game)
mainStart.addEventListener('click', () => {
    start_popup.classList.add('hide')
    startTheGame()
    console.log(start_game)
})

function startTheGame(){
    setTimeout(() => {
        start_game = true;
        gameplay = 1;

    } , 300)
}



patch_btn_lost.addEventListener('click', () => {
    items.forEach(each => each.classList.remove('red'));
    allKnives.forEach(each => each.classList.remove('show'));
    settingRandomKnives();
    game_win = 0;
    start_game = false;
    knife_count = 10;
    knife_counter.innerText = knife_count;
    gameplay = 0;
    body.style.backgroundImage = "url('game_bg.png')";
    removeGameLevel()
    levels = 1;
    level_count.innerText = levels
    patch_lost.classList.add('hide');
    startTheGame()
})
patch_btn_won.addEventListener('click', () => {
    items.forEach(each => each.classList.remove('red'));
    allKnives.forEach(each => each.classList.remove('show'));
    settingRandomKnives();
    start_game = false;
    game_win = 0;
    knife_count = 10;
    knife_counter.innerText = knife_count;
    gameplay = 0;
    if(levels < 7){
        levels++
        level_count.innerText = levels
    }
    changeGameLevel()
    patch_won.classList.add('hide');
    startTheGame()
})
console.dir(circle_container)
gameplay = 1;
console.log(gameplay)

//level logic
function changeGameLevel(){
    if(levels == 2){
        circle_container.classList.add('level_1')
        target.classList.add('target_1')
        target.src = './level_1.png';
        body.style.backgroundImage = "url('body_1.png')";
        target.style.width = '260px';
        
    } else if (levels == 3){
        body.style.backgroundImage = "url('body_2.png')";
        target.src = './level_2.png';
        circle_container.classList.remove('level_1')
        circle_container.classList.add('level_2')
        target.classList.add('target_1')
        target.style.width = '260px';
    } else if (levels == 4){
        body.style.backgroundImage = "url('body_3.png')";
        target.src = './level_3.png';
        circle_container.classList.remove('level_2')
        circle_container.classList.add('level_3')
        target.classList.add('target_1')
        target.style.width = '260px';
    } else if (levels == 5){
        body.style.backgroundImage = "url('body_4.png')";
        target.src = './level_4.png';
        circle_container.classList.remove('level_3')
        circle_container.classList.add('level_4')
        target.classList.add('target_1')
        target.style.width = '260px';
    } else if (levels == 6){
        body.style.backgroundImage = "url('body_5.png')";
        target.src = './level_5.png';
        circle_container.classList.remove('level_4')
        circle_container.classList.add('level_5')
        target.classList.add('target_1')
        target.style.width = '260px';
    }
}

function removeGameLevel(){
    target.src = './Target.png';
    target.style.width = '300px';
    circle_container.classList.remove('level_1')
    circle_container.classList.remove('level_2')
    circle_container.classList.remove('level_3')
    circle_container.classList.remove('level_4')
    circle_container.classList.remove('level_5')
    target.classList.remove('level_1')
    target.classList.remove('level_2')
    target.classList.remove('level_3')
    target.classList.remove('level_4')
    target.classList.remove('level_5')


}


//random knives logic 


function settingRandomKnives(){
    random_knives.length = 0;
    random_knife = '';
    for(i = 0; i < 15; i++){
        random_knife = Math.floor(Math.random() * allKnives.length);
        random_knives.push(random_knife)
    }
    
    console.log(random_knives)
    
    //setting random knives
    
    random_knives.forEach((each,idx) => {
        items[each].classList.add('red')
        allKnives[each].classList.add('show')
    })

}








function getItemsHeight(){
    itemsTop.length = 0;
    items.forEach((item,idx) => {
        var rect = item.getBoundingClientRect();
        itemsTop.push(rect.top)
        // console.log(idx, rect.top, item.offsetTop)
    })
    // console.log(itemsTop)
}


let itemIndex;
function getLargestNum(){
    itemIndex = 0;
    
    let largest = 0;
    itemsTop.forEach((each,idx) => {
        if(each > largest){
            largest = each;
            itemIndex = idx;
        };
    });
    // console.log(largest)
}

function knife_anim1(){
    knife_anim.classList.add('knife_anim_true')
}
function remove_knife_anim1(){
    knife_anim.classList.remove('knife_anim_true')
}

//gameplay

function mainGame(){
    if(gameplay == 1){

        if(items[itemIndex].classList.contains('red')){
            console.log('game over')
            gameplay = 0;
            patch_lost.classList.remove('hide')
            setTimeout(() => {
                remove_knife_anim1()
            }, 100)
        }
        else {
            knife_count--;
            knife_counter.innerText = knife_count;
            if(knife_count < 0){
                knife_count = 0;
            }
            if(game_win == 9){
                patch_won.classList.remove('hide')
                gameplay = 0;
                console.log(game_win, 'won')
            }
            game_win++;
            items[itemIndex].classList.add('red')
            allKnives[itemIndex].classList.add('show')
            knife_anim1();
            setTimeout(() => {
                remove_knife_anim1()
            }, 100)
        }
    }

}


    body.addEventListener('mousedown', () => {
        if(start_game == true){
        getItemsHeight();
        getLargestNum();
        mainGame();
        }
    })
    
    document.body.onkeydown = function(e){
        if(start_game == true){
        //space click
        if(e.keyCode == 32){
            getItemsHeight();
            getLargestNum();
            mainGame();
        }
        //key up
        if(e.keyCode == 38){
            getItemsHeight();
            getLargestNum();
            mainGame();
        }
        //enter
        if(e.keyCode == 13){
            getItemsHeight();
            getLargestNum();
            mainGame();
        }
    }
    }
















// if(itemIndex === 35){
//     console.log('it is 35 here')
//     items[35].classList.add('red')
//     allKnives[35].classList.add('show')
// } else if (items[35].classList.contains('red')){
//     console.log('gameover 35')
// }

// if(itemIndex === 34){
//     console.log('it is 34 here')
//     items[34].classList.add('red')
//     allKnives[34].classList.add('show')
// }else if (items[34].classList.contains('red')){
//     console.log('gameover 35')
// }
// clickableScreen.addEventListener('click', () => {
//     getItemsHeight();
//     getLargestNum();
    

//    if(gameplay == 1){
//        if(items[itemIndex].classList.contains('red')){
//            console.log('game over')
//            gameplay = 0;
//            patch.classList.remove('hide')
//            setTimeout(() => {
//                remove_knife_anim1()
//            }, 100)
//        }
//        else {
//            items[itemIndex].classList.add('red')
//            allKnives[itemIndex].classList.add('show')
//            knife_anim1();
//            setTimeout(() => {
//                remove_knife_anim1()
//            }, 100)
//        }

//    }




    

// })


// setInterval(() => {
//     var rect2 = items[17].getBoundingClientRect();
//     console.log(rect2.top)

// }, 500)