$("#guideline").turn({
		autoCenter: true
});

$(document).ready(function(){
    animateDiv();
});


function makeNewPosition(){
    
    var h = $(".smallgame").height() - 50;
    var w = $(".smallgame").width() - 50;
    
    var pos = $(".smallgame").position();
    var top = pos.top;
    var left = (screen.height/4);
    
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
    var speedModifier = 1.0;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;

}
