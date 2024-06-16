// Promise
// => 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스클비트의 내장함수

function add10(num){

    const promise = new Promise((resolve,reject)=> {

        setTimeout(() => {

            if(typeof(num)==="number"){
                resolve(num+10)
            }else{
                reject('num은 숫자가 아닙니다')
            }
    
        }, 2000);
    });

    return promise;
    
}


const promise = new Promise((resolve,reject)=> {
    // 비동기 작업을 실행하는 함수
    // executor
    setTimeout(() => {
        const num = null;
        if(typeof(num)==="number"){
            resolve(num+10)
        }else{
            reject('num은 숫자가 아닙니다')
        }



        // console.log('안녕');
        // // resolve("안녕"); // state를 바꾼다
        // reject("왜실패했는ㄷ지")
    }, 2000);
});




// then 메서드
// -> 그 후에 reject일떄는 실행 x 
// -> then은 다시 promise를 반환함 
// -> promise 체이닝
// resolve 일 떄 
promise.then((value)=>{
    console.log(value)
}).catch(error=>{
    console.log(error)
})


// // reject 일 떄 
// promise.catch((error)=>{
//     console.log(error);
// })




// setTimeout(() => {
//     console.log(promise)
// }, 3000);
//resolve : 비동기 작업을 성공 상태로 바꾼다.
//rejcet : .. 실패 상태로 바꾼다.

add10(0)