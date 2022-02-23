const zeroMatrix = (matrix) => {
    const N = matrix.length - 1;
    const result = matrix.map((row, i) => {
        row.map((val, j) => {
            if (val === 0) {
                matrix[N - j][i] = 0 
            }
        })
        // console.log(row)
    })
    return result
}

zeroMatrix([[1,2],[1,0,2]])

/*
Write an algorithm such that if an element in an M x N matrix is 0, it's entire row and column are set to 0
*/ 

// come back to this and work on some easier matrix practice problems
