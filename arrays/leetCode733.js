function floodFill(image, sr, sc, newColor) {
    const stack = [[sr, sc]], seen = new Set(), oldColour = image[sr][sc];
    console.log("stack ",stack)
    console.log("seen ", seen)
    console.log("oldColour ", oldColour)
    
    while (stack.length) {
        const [x, y] = stack.pop();
        console.log('[x,y] ',[x,y] )
        image[x][y] = newColor;
        console.log("image[x][y] ", image[x][y])
        seen.add(x + ',' + y);
        const neighbourCoords = [[x - 1, y], [x, y + 1], [x + 1, y], [x, y - 1]];
        stack.push(...neighbourCoords.filter(([i, j]) => !seen.has(i + ',' + j) && image[i]?.[j] === oldColour));
    }
    return image;
}


floodFill( [[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)