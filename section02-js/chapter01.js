//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 =0;
let f4 =-0
let f5 =NaN
let f6 =''
let f7=0n;

if(!f1){
    console.log('falsy')
}

// 3. 활용 사례  객체가 있을떄만 실행하게할떄
function printName(person){
    if(!person){ 
    console.log('person 값이 없다')
    return;
}
    console.log(person.name)

}

//2. Trutly한 값
//7가지 falsy 한 값들 제외한 나머지 모든 값 
 let person = {name:"이정환"}
printName(person)   