function makeMove(cellID){
    
    var player = sessionStorage.getItem("player");
    if (player == "x" || player == null){
        cellID.style.backgroundImage = "url(https://mbtskoudsalg.com/images/red-cross-png-2.png)";
        sessionStorage.setItem("player", "o");
    }
    else if (player == "o"){
        cellID.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/1024px-Blue_circle_for_diabetes.svg.png)";
        sessionStorage.setItem("player", "x");
    }
        
}