function maxRectangle(matrix) {
    if(matrix.length === 0) {
        return 0;
    }
    
    const m = matrix[0].length;
    let maxArea = 0;
    const heights = new Array(m).fill(0);

    function largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;
        heights.push(0);
        
        for(let i=0; i<heights.length; i++) {
            while(stack.length > 0 && heights[stack[stack.length-1]] > heights[i]) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - stack[stack.length-1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        
        return maxArea;
    }
    
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<m; j++) {
            if(matrix[i][j] === 0) {
                heights[j] = 0;
            } else {
                heights[j] += 1;
            }
        }
        
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
}

module.exports = maxRectangle