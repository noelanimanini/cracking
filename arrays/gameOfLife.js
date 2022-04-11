var gameOfLife = function(board) {
    //traversing the row 
    for (let i=0; i < board.length; i++) {
        //traversing the column 
        for (let j=0; j < board[0].length; j++) {
            //initialize a variable called cell to be the current iteration of the row in the column 
            let cell = board[i][j]
            //neighbors is a recursive call to a function with the row, the column and the current board.
            let neighbors = getNeighbors(i,j,board)
            
            //if the cell is 0, but there are three neighbors that are alive, reassign the current iteration to be 2
            if (cell == 0 && neighbors == 3) {
                board[i][j] = 2
            }
            
            //if the cell is 1 and the neighbors are either < 2 or greater than three, reassign the current iteration to die
            if (cell == 1 && (neighbors < 2 || neighbors > 3)) {
                board[i][j] = -1
            }
        }
        
    }
    
    //reassign the board     
    for (let i=0; i < board.length; i++) {
        for (let j=0; j < board[0].length; j++) {
            if (board[i][j] === -1) board[i][j] = 0 
            if (board[i][j] === 2) board[i][j] = 1
        }
    }
    
};

const getNeighbors = (r,c, board) => {
    let radius = [-1, 0, +1]
    let count = 0 
    
    for (let i=0; i < radius.length; i++) {
        for (let j=0; j < radius.length; j++) {
            if (!(radius[i] === 0 && radius[j] == 0) && board[r + radius[i]] != null) {
                let neighbor = board[r + radius[i]][c + radius[j]]
                console.log('neighbor',neighbor)
                if (Math.abs(neighbor) == 1) count++
            }
        }
    }
    return count 
}