// <async>
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드


//비동기 함수로 바뀐다
async function getData(){
    // return {
    //     name:"이정환",
    //     id:"winterlood"
    // }
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                name:"이정환",
                id:"winhterlood",
            })
        }, 1500);
    });
}

console.log(getData())

// <await> 
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// 비동기 작업을 동기적으로 처리 가능 하게 할 수 있다.
async function printData(){
    // getData().then((reslut)=>{
    //     console.log(reslut)
    // }); awiat를 쓰찌 않았을 떄

   const data =  await getData(); // 결과값을 넣어준다
   console.log(data)


}

printData()