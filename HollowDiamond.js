function printHollowDiamond(n) {
    // 1. Top half of the diamond (including middle row)
    for (let i = 1; i <= n; i++) {
        let row = "";
        
        // Add leading spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        
        // Add stars and internal spaces
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (k === 1 || k === 2 * i - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }

    // 2. Bottom half of the diamond
    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        
        // Add leading spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        
        // Add stars and internal spaces
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (k === 1 || k === 2 * i - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

printHollowDiamond(5);