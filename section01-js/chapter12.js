function funcA(){
    console.log('funcA')
}

// 함수를 저장한다.
// 함수도 하나의 값이 된다
let varA =funcA;

varA()

let varB = function (){
    console.log('funcB');
}

varB();

//2. 화살표 함수
let varC = () =>  1;

let varC2 = (value) => value+1;

let varC3 = (value) => {
    console.log('asfd')
    value+1};


console.log(varC())


