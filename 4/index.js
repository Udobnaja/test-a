(function () {
    let arr = [7, 6, 3, 0, 2, 1, 5];

    function wrongSort(arr) {
        let max;
        let index;
        let length = arr.length;

        for (let i = 0; i < length; i++){
            if (!max || arr[i] > max){
                max = arr[i];
                index = i;
            }

            if (length && i === length - 1 ){
                arr.splice(index, 1);
                arr.splice(length - 1, 0, max);
                i = -1;
                length--;
                max = undefined;
            }

            if (length === 1){
                return arr;
            }
        }


    }

    let result = wrongSort(arr);
    console.log('Моя реализация сортировки выбором: ', result);

    function rightSort(arr) {
        for (let i = arr.length - 1; i >= 0; i--){
            let max = 0;
            for (let j = 0; j <= i; j++){
                if (arr[j] > max){
                    max = arr[j];
                }
            }

            [arr[i], max] = [max, arr[i]];

        }
        return arr;
    }

    let newResult = rightSort(arr);
    console.log('Правильная реализация сортировки выбором: ', newResult);
}());