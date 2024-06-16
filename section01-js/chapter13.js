
//1. 콜백함수
function main(value){
    console.log(1)
    console.log(2)
    value()
    console.log('end')
}


// 이것이 콜 백 함수
// 콜백 : 나중에 실행되는 함수 나중에 main 함수가 알아서 실행
main(function (){
    console.log('i am sub')
})

console.log('----')

main(()=>{
    console.log('i am sub')
})


// 2. 콜백함수의 활용, 중복함수 제거
function repeat(count, callback){
    for(let idx =1; idx <=count; idx++){
        callback(idx)
    }
}

// function repeatDouble(count){
//     for(let idx =1; idx <=count; idx++){
//         console.log(idx*2)
//     }
// }

// function repeatTriple(count){
//     for(let idx =1; idx <=count; idx++){
//         console.log(idx*3)
//     }
// }

repeat(5,function (idx){console.log(idx)})
console.log('---')
repeat(5,function (idx){console.log(idx*2)})
console.log('---')
repeat(5,function (idx){console.log(idx*3)})






