let json = '["user1","user2","user3","user4","user5"]';
let arr  = JSON.parse(json);
arr[1] = 'ululu';
let res = JSON.stringify(arr);
console.log(res);