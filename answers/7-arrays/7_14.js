// 14 Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},

let arr = 
    [
    {kind: "tarantula", info: {legs: 8, eyes: 8}},
    {kind: "french bulldog", info: {legs: 4, eyes: 2}},
    {kind: "human", info: {legs: 2, eyes: 2}},
    {kind: "lobster", info: {legs: 10, eyes: 2}},
    ]
    console.log(arr);
    for (let j = 0; j < arr.length; j++) {
        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index].info.legs > arr[index + 1].info.legs) {
                [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
            }
        } 
    }
    console.log('массив объектов отсортирован по возрастающему количеству ног животных:');
    console.log(arr);