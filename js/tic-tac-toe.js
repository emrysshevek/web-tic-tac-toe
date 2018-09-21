function makeMove(cellID){
    var board = getBoard();
    var move = getMove(cellID);
    // alert(board[0][0].id);
    // alert(move[0] + ", " + move[1]);
    if (isValidMove(cellID)){
        var player = sessionStorage.getItem("player");
        if (player == "x" || player == null){
            cellID.style.backgroundImage = "url(https://mbtskoudsalg.com/images/red-cross-png-2.png)";
            sessionStorage.setItem("player", "o");
        }
        else if (player == "o"){
            cellID.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/1024px-Blue_circle_for_diabetes.svg.png)";
            sessionStorage.setItem("player", "x");
        }
        
        // if (gameOver())
    }
    else{
        alert("Not a valid move");
    }
}

function isValidMove(cellID){
    if (cellID.style.backgroundImage == ""){
        return true;
    }
    else{
        return false
    }
}

function getMove(cellID){
    var row = parseInt(cellID.id.charAt(3));
    var col = parseInt(cellID.id.charAt(5));
    return [row, col]
}

function getBoard(){
    // var element = document.getElementById("b0");
    // var rows = element.children;
    // alert(rows.value);
    var board = [[],[],[]];
    // for (var row in rows){
    //     // board.push(row.children);
    //     var i = 0;
    //     var cells = row.children;
    //     for (var cell in cells){
    //         alert(cell.id);
    //         board[i].push(cell);
    //         i++;
    //     }
    // }
    // // alert(board);
    board[0].push(document.getElementById("b0r0c0"));
    board[0].push(document.getElementById("b0r0c1"));
    board[0].push(document.getElementById("b0r0c2"));
    
    board[1].push(document.getElementById("b0r1c0"));
    board[1].push(document.getElementById("b0r1c1"));
    board[1].push(document.getElementById("b0r1c2"));
    
    board[2].push(document.getElementById("b0r2c0"));
    board[2].push(document.getElementById("b0r2c1"));
    board[2].push(document.getElementById("b0r2c2"));
    return board;
}