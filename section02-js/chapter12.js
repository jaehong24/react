// function add(a,b,callback){
//     setTimeout(() => {
//         const sum = a+ b;

//         callback(sum)
//     }, 3000);

// }

// // 비동기 함수에서 처리 결과를 받으려면 콜백 함수를 전달하면된다
// add(1,2,(value)=>{console.log(value);
//     console.log('t,',t)
// });


// 음식을 주문 하는 함수
function orderFood(callback){
    setTimeout(() => {
        const food ="떡볶이";
        callback(food);
    }, 3000); 
}

function cooldownFood(food,callback){
    setTimeout(() => {
        const cooldownedFood  = `식은 ${food}`
        callback(cooldownedFood)
    }, 2000);
}

function freesedFood(food,callback){
    setTimeout(() => {
        const freesedFood =`냉동된 ${food}`;
        callback(freesedFood)
    }, 1500);
}


orderFood((food)=>
{
    console.log(food)

    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood)

        freesedFood(cooldownedFood,(freesedFood)=>{
                console.log(freesedFood)
            })
    })
})

// 콜백함수의 반복이 시작됨 => 콜백지옥 => promise 등장
console.log('asdfsadf');