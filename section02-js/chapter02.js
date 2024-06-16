
// function returnFalse(){
//     console.log("False 함수")
//     return false;
// }



// function returnTrue(){
//     console.log("True 함수")
//     return true;
// }

// console.log(returnFalse() && returnTrue())
// console.log('---')
// console.log(returnTrue() && returnFalse())

/// 단락 평가를 언제 쓸까 ? 
function printName(perosn){
    if(!person){
        console.log('perosn 값없음')
    }
    console.log(perosn.name)
}

// 이렇게 줄 일 수 있따.
function printName(perosn){

    console.log(perosn && person.name) 
}

// 이렇게 줄 일 수 있따.
function printName(person){

    const name = person && person.name

    console.log(name || 'person 값이 없음') 
}
printName();
printName({name:'이정환'})


