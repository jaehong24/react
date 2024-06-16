// 1. 상수객체
const animal  ={
    type:'고양이',
    name:'나비',
    color:'black'
};

// 상수 객체는 변경이 불가능하지만
// 속성 추가 변경 삭제는 가능

animal.age =2;
animal.name = "까망이";
delete animal.color

console.log(animal)


// 2.메서드
// -> 값이 함수인 프로퍼티를 말하

const poerson = {
    name:"이정환",

    sayHi(){
        console.log('안녕');
    }
    


}