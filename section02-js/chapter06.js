//1. 배열 순회
let arr =[1,2,3];

//1. 배열 인덱스
for(let i in arr){
    console.log(arr[i])
}
console.log('----')
for(let i=0; i<arr.length;i++){
    console.log(arr[i])
}
console.log('----')

let arr2 = [4,5,6,7,8];
for(let i=0; i<arr2.length;i++){
    console.log(arr2[i])
}
console.log('----')

//2. 1,2 for of
for(let i of arr2){
    console.log(i)
}

// 2. 객체 순회(keys())
let person= {name:"이정환",
            age:24,
            hobby:"테니스"
}

let keys = Object.keys(person);
for(let i=0; i<keys.length;i++ ){
    console.log(keys[i])
}
console.log('----')
for(let key of keys){
    const value = person[key]
    console.log(key,'=',value)
}

console.log('----')
// 2.2 Object.values()
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);

for(let value of values){
    console.log(value)
}
console.log('----')
//2.3 for in
for(let key in person){
    let value = person[key]
    console.log(key,value)
}