var matrixExample = [
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 7],
    [7, 8, 9, 7],
];

function sumUpDiagonals(matrix) {
    let mainDiagSum = 0;
    let secondDiagSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        if(matrix.length === matrix[i].length){
            mainDiagSum += matrix[i][i];
            secondDiagSum += matrix[i][matrix[i].length - 1 - i];
        }
        else {
            return "Ошибка: матрица не является квадратной"
        }
    }

    return { mainDiagSum, secondDiagSum }
}

console.log(sumUpDiagonals(matrixExample))
