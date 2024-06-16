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



// p.then((result)=>{
//     console.log(result);
//     const newP = add10(result)
//     return newP;
// }).then((reslut)=>{
//     console.log(reslut)
// })




add10(0).then((result)=>{
    console.log(result);
    return add10(result)

}).then((reslut)=>{
    console.log(reslut)
    return add10(reslut)
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error);
})

// 이것 또한 콜백 지옥을 나올수있다....

