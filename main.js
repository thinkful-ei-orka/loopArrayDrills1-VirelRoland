    function max(numbers) {
        let i = 0;
        let max = null;
        while (i < numbers.length) {
            if (max < numbers[i]) max = numbers[i];
            i++;
        }
        return max;
    }
    
    function min(numbers) {
        let i = 0;
        let min = null;
        while (i < numbers.length) {
            if (min > numbers[i]) min = numbers[i];
            i++;
        }
        return min;
    }
const numbers = [-5, 28, 98, -20013, 0.7878, 22, 115];
    console.log(max(numbers));
    console.log(min(numbers));