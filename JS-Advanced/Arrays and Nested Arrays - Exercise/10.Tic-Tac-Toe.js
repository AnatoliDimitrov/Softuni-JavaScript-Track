function solve(moves) {
    let board = [[false, false, false],
    [false, false, false],
        [false, false, false]];
    
    let turn = 0;
    
    for (let i = 0; i < moves.length; i++) {
        let player = '';

        if (turn % 2 == 0) {
            player = 'X';
        } else {
            player = 'O';
        }
        turn++;
        
        var row = Number(moves[i][0]);
        let col = Number(moves[i][2]);

        if (board[row][col] && i < moves.length - 1) {
            console.log('This place is already taken. Please choose another!');
            turn--;
            continue;
        } else {
            board[row][col] = player;
        }
           if (checkForWinner(board, player)) {
               console.log(`Player ${player} wins!`);
               print(board);
               return;
        }

        if (board.flat().includes(false) === false) {
            console.log('The game ended! Nobody wins :(');
            print(board);
            return;
        }
    }

    console.log('The game ended! Nobody wins :(');
    print(board);

    function print(board) {
        for (let i = 0; i < board.length; i++) {
            
            console.log(board[i].join('\t'));
        }
    }

    function checkForWinner(board, player) {
        for (let col = 0; col < board.length; col++) {
            let currentColumn = true;

            for (let row = 0; row < board.length; row++) {
                const element = board[row][col];
                if (element !== player) {
                    currentColumn = false;
                    break;
                }
            }
            if (currentColumn) {
                return true;
            }
        }

        for (let row = 0; row < board.length; row++) {
            let currentRow = true;

            for (let col = 0; col < board.length; col++) {
                const element = board[row][col];
                if (element !== player) {
                    currentRow = false;
                    break;
                }
            }
            if (currentRow) {
                return true;
            }
        }

        let mainDiagonal = true;

        for (let i = 0; i < board.length; i++) {
            const element = board[i][i];
            if (element !== player) {
                mainDiagonal = false;
                break;
            }
        }

        if (mainDiagonal) {
            return true;
        }

        let secondaryDiagonal = true;

        for (let i = 0; i < board.length; i++) {
            const element = board[i][board.length - i - 1];
            if (element !== player) {
                secondaryDiagonal = false;
                break;
            }
        }
        
        if (secondaryDiagonal) {
            return true;
        }

        return false;
    }
}

solve(
    ["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]   
);