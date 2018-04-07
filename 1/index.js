(function () {

    const stub = [
        {name: 'test', value: 0},
        {name: 'test1', value: 1},
        {name: 'test2', value: 2},
        {name: 'test3', value: 3},
        {name: 'test4', value: 4},
        {name: 'test5', value: 5},
        {name: 'test6', value: 6},
    ];

    let result = stub.reduce((obj, item) => {
        obj[item.name] = item.value;
        return obj;
    }, {});
    console.log('------------------------- START RESULT OF FIRST TASK -------------------------');
    console.log(result);
    console.log('------------------------- RESULT OF FIRST TASK -------------------------');
}());