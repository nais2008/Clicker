var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1860;
canvas.height = 962;
canvas.disabled = true;
document.body.appendChild(canvas);
document.body.style.margin = 0;

var name1 ;

score = document.createElement('input');
score.disabled = true;  
score.value = parseInt(0);
document.body.appendChild(score);

var hil = 6 ; 
var img_hil = new Image();
img_hil.src = 'sprites/ser.png';

var last_click_x;
var last_click_y;

// переменная с фнонм
var backgrount_img = new Image();
backgrount_img.src = 'sprites/fon.jpg';

var vzriv0 = new Image();
vzriv0.src = 'sprites/kad/1.jpg';
var vzriv1 = new Image();
vzriv1.src = 'sprites/kad/2.jpg';
var vzriv2 = new Image();
vzriv2.src = 'sprites/kad/3.jpg';
var vzriv3 = new Image();
vzriv3.src = 'sprites/kad/4.jpg';
var vzriv4 = new Image();
vzriv4.src = 'sprites/kad/5.jpg';
var vzriv5 = new Image();
vzriv5.src = 'sprites/kad/6.jpg';
var vzriv6 = new Image();
vzriv6.src = 'sprites/kad/7.jpg';
var vzriv7 = new Image();
vzriv7.src = 'sprites/kad/8.jpg';
var vzriv8 = new Image();
vzriv8.src = 'sprites/kad/9.jpg';

var audio = new Audio();
audio.preload = 'auto';
audio.src = 'audio/bar.mp3';

var img = [];

function addImg(path){
    let image = new Image();
    image.src = path;
    img.push(image);
};

addImg('sprites/sq1.png');
addImg('sprites/sq2.png');

var prs = [];
prs.push(cr(img[0], 500, 450, 200, 1 , 1, 1));
prs.push(cr(img[0], 512, 378, 200, 2, 6, 4));
prs.push(cr(img[0], 10, 10, 200, 1, 0.8, 0.8));

// местный счетчик
var count = prs.length;

prs[2];

function cr(img, x, y, size, dx, dy, speed){
    return obg = {
        img:img,
        x:x,
        y:y,
        size:size,
        dx:dx,
        dy:dy,
        speed:speed,
        sost:0
    };
};

function main(){
    //расчет физики
    update();
    //расчет математики
    render();
    //обновление fps
    requestAnimFrame(main);
};
var click_in_obj = 0;
function update(){
    click_in_obj=0;
    for(i in prs){
        if(prs[i].sost > 0) prs[i].sost++;
        if(prs[i].sost == 1) prs[i].img = vzriv0;
        if(prs[i].sost == 2) prs[i].img = vzriv0;
        if(prs[i].sost == 3) prs[i].img = vzriv0;
        if(prs[i].sost == 4) prs[i].img = vzriv1;
        if(prs[i].sost == 5) prs[i].img = vzriv1;
        if(prs[i].sost == 6) prs[i].img = vzriv1;
        if(prs[i].sost == 7) prs[i].img = vzriv2;
        if(prs[i].sost == 8) prs[i].img = vzriv2;
        if(prs[i].sost == 9) prs[i].img = vzriv2;
        if(prs[i].sost == 10) prs[i].img = vzriv3;
        if(prs[i].sost == 11) prs[i].img = vzriv3;
        if(prs[i].sost == 12) prs[i].img = vzriv3;
        if(prs[i].sost == 13) prs[i].img = vzriv4;
        if(prs[i].sost == 14) prs[i].img = vzriv4;
        if(prs[i].sost == 15) prs[i].img = vzriv4;
        if(prs[i].sost == 16) prs[i].img = vzriv5;
        if(prs[i].sost == 17) prs[i].img = vzriv5;
        if(prs[i].sost == 18) prs[i].img = vzriv5;
        if(prs[i].sost == 19) prs[i].img = vzriv6;
        if(prs[i].sost == 20) prs[i].img = vzriv6;
        if(prs[i].sost == 21) prs[i].img = vzriv6;
        if(prs[i].sost == 22) prs[i].img = vzriv7;
        if(prs[i].sost == 23) prs[i].img = vzriv7;
        if(prs[i].sost == 24) prs[i].img = vzriv7;
        if(prs[i].sost == 25) prs[i].img = vzriv8;
        if(prs[i].sost == 26) prs[i].img = vzriv8;
        if(prs[i].sost == 27) prs[i].img = vzriv8;
        if(prs[i].sost == 28){
            prs.splice(i, 1);
            continue
        } 
        prs[i].x += prs[i].dx;
        prs[i].y += prs[i].dy;

        if((prs[i].x >= canvas.width - prs[i].size) || (prs[i].x <= 0)){ 
            prs[i].dx *= -1;
            audio.play();
        }
        if((prs[i].y >= canvas.height - prs[i].size) || (prs[i].y <= 0)) {
            prs[i].dy *= -1;
            audio.play();
        }  
        
        if(last_click_x > prs[i].x &&
            last_click_x < prs[i].x + prs[i].size &&
            last_click_y > prs[i].y &&
            last_click_y < prs[i].y + prs[i].size){
                score.value = parseInt(score.value) + parseInt(count);
                click_in_obj = 1;
                // удаление объекта

                prs[i].sost++;
                //
            }
    };

    if(last_click_x != -1){
        if(click_in_obj==0){
            hil-=1;
        }
    }

    if(prs.length == 0){
        count++;

        for(i = 0; i <= count; i++){
            let rand_img = parseInt(Math.random() * img.length);
            if(score.value > 100 && score.value < 1000){
                prs.push(cr(img[rand_img], Math.random() * 1600 + 10, Math.random() * 800, 
                150, Math.random() * 2, Math.random() * 2, Math.random() * 1));
            }
            else if(score.value > 1000){
                prs.push(cr(img[rand_img], Math.random() * 1600 + 10, Math.random() * 800, 
                70, Math.random() * 2, Math.random() * 3 + 1.5, Math.random() * 3 + 1.5));
            }
            else{
                prs.push(cr(img[rand_img], Math.random() * 1550 + 10, Math.random() * 700, 
                Math.random() * 200 + 170, Math.random() * 2, Math.random() * 2, Math.random() * 1));
            }
            
        }
    }

    last_click_x = -1;
    last_click_y = -1;
    if (hil == 0){
        alert(`${name1} - вы проиграли`);
        location.reload();
        hil=6;
    }
    if(count >= 2000){
        alert(`${name1} - вы победили!!`);
        location.reload();
        count = 0;
    }
};


function render(){
    // ctx.drawImage(картинка, х, у, размер_х, размер_у)
    ctx.drawImage(backgrount_img, 0, 0, canvas.width, canvas.height);
    for(i in prs){

        ctx.drawImage(prs[i].img, prs[i].x, prs[i].y, prs[i].size, prs[i].size);
    };

    for (i = 0; i < hil; i++){
        ctx.drawImage(img_hil ,30+i*45, 900, 60, 60);
    }

};

var requestAnimFrame = (function(){
    return window.requestAnimFrame             ||
           window.webkitRequestAnimationFrame  ||
           window.mozRequestAnimstionFrame     ||
           window.oRequestAnimationFrame       ||
           window.msRequestAnimationFrame      ||
           function(callback){
                window.setTimeout(callback, 1000/20);
           };
})();

function starting(btn){
    main();
    btn.style.display = 'none';
    const h1 = document.querySelector('h1');
    h1.style.display = 'none';
    const h3 = document.querySelector('h3');
    h3.style.display = 'none';
    const body = document.querySelector('body');
    h3.style.backgrount = 'black';
    const inpt = document.querySelector('input');
    inpt.style.display = 'none';
    name1 =  document.getElementById('name').value;
}
canvas.addEventListener('mousedown', function (e){
    last_click_x = e.clientX;
    last_click_y = e.clientY;
});
