// 5가지 배열 변형 메서드

// 1. filter
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name:"이정환", hobby:"테니스"},
    {name:"김효빈", hobby:"테니스"},
    {name:"홍길동", hobby:"독서"}

]

let filteredArr = arr1.filter((item)=>
    item.hobby==="테니스")

console.log(filteredArr) 

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item,idx,arr)=>{
        console.log(idx, item)
        return item*2;
})

console.log(mapResult1);

const mapResult2  = arr1.map
((item)=> item.name)
console.log(mapResult2)

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 =["b","a","c"]
arr3.sort();
console.log(arr3)
console.log('-----')
let arr4 =[10,3,5]

// 오름차순
arr4.sort((a,b)=>{
    if(a>b){
        // b, a 배치
        return 1; // 작은값이 앞에오도록 해준다
    }else if(a<b){
        // a,b 배치
        return -1;
    }else{
        //두 값의 자리를 바꾸지 마라
        return 0;
    }
});
console.log(arr4)


// 내림차순
arr4.sort((a,b)=>{
    if(a>b){
        // b, a 배치
        return -1; // 작은값이 앞에오도록 해준다
    }else if(a<b){
        // a,b 배치
        return 1;
    }else{
        //두 값의 자리를 바꾸지 마라
        return 0;
    }
});
console.log(arr4)


// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 =['c','a','b']
const sorted =arr5.toSorted();
console.log(sorted)

// 5. join()
// 배열의 모든 요소를 하나의 문자얄로 합쳐서 반환하는 그런 메서드
let arr6 = ['hi','im','winterload']
const joiend = arr6.join()
console.log(joiend)