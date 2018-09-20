// $("#guideline").turn({
// 		autoCenter: true
// });


var velocity = 1.0;
var gamemode = false;
var brutal = false;
var padnum = 50;
var laughing = new Audio("http://www.eletech.com/Products/Kiddie_Ride_Boards/HAHAHA.WAV");
var no = new Audio("https://www.myinstants.com/media/sounds/nooo.mp3");

$(document).ready(function(){
    animateDiv();
});

function getlv(){
    
    var sel = document.getElementById('level');
    var opt = sel.value;//options[sel.selectedIndex];
    // alert(opt);
    // laughing.play();
    
    if(opt == ""){
        alert("non-game mode");
        velocity = 1.0;
        padnum = 50;
        gamemode = false;
        brutal = false;
        document.getElementById('a').style.height = "50px";
        document.getElementById('a').style.width = "50px";
    }
    else{
        gamemode = true;
        switch (opt) {
            case "easy":
                // code
                velocity = 0.5;
                document.getElementById('a').style.height = "100px";
                document.getElementById('a').style.width = "100px";
                padnum = 100;
                brutal = false;
                break;
            case "normal":
                velocity = 0.75;
                document.getElementById('a').style.height = "80px";
                document.getElementById('a').style.width = "80px";
                padnum = 80;
                brutal = false;
                break;
            case "hard":
                velocity = 1.0;
                document.getElementById('a').style.height = "50px";
                document.getElementById('a').style.width = "50px";
                padnum = 50;
                brutal = false;
                break;
            case "brutal":
                velocity = 1.25;
                document.getElementById('a').style.height = "40px";
                document.getElementById('a').style.width = "40px";
                padnum=35;
                brutal = true;
                break;
            default:
                // non of them....
        }
        
    }
}

function missed(){
    if (gamemode == true){
        if (brutal == true){
            laughing.play();
        }
    }
    else {
        alert("set the gamemode");
    }
}

function gotit(){
    if(gamemode == true){
        if (brutal == true){
            no.play();
            alert("Nooooooo!!!!!!!");
            brutal = false;
        }
        else{
            alert("Do not think this is the end...");
        }
        gamemode = false;
        document.getElementById('level').value = "";
        velocity = 1.0;
        padnum = 50;
        document.getElementById('a').style.height = "50px";
        document.getElementById('a').style.width = "50px";
    }
}


function makeNewPosition(){
    
    var h = $(".smallgame").height() - padnum;
    var w = $(".smallgame").width() - padnum;
    
    // var pos = $(".smallgame").position();
    // var top = pos.top;
    // var left = (screen.height/4);
    
    var nh = Math.floor(Math.random() * h);// + top;
    var nw = Math.floor(Math.random() * w);// + left;
    
    return [nh,nw];    
    
}



function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    var speedModifier = velocity;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;

}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}