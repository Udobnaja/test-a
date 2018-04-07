(function () {
    let arr = [7, 6, 3, 0, 2, 1, 5];

    function sort(arr) {
        let isSort = false;

        for (let i = 0; i < arr.length; i++){
            if (i !== arr.length - 1){
                if (arr[i + 1] < arr[i]){
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    isSort = true;
                }
            }
        }

        return (isSort === true) ? sort(arr) : arr;
    }

    let result = sort(arr);
    console.log(result);
}());