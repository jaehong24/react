// 1. 객체 생성
let obj1 = new Object() // 객체생성자
let obj2 ={} // 객체리터럴

let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
    job : "FE devleper",
    extra:{},
    10 :20,
    "like cat" : true,

} // 객체 속성


// 3. 객체 프로퍼티를 다루는 방법
    // 3-1. 톡정 프로퍼티에 접근(점표기법, 괄호 표기법)
    let name = person.name;

    // 3-2. 괄호 표기법
    let age =person['age']

    // 3-2. 동적으로 가져오기
    let property = 'hobby';
    let hobby = person[property]
    console.log(hobby)


    // 3-1. 새로운 프로퍼티를 추가하는 방법
    person.job ='fe developer';
    person["favoritFood"] ="떡볶이";
    console.log(person)

    //3.3 프로퍼티를 수정하는 방법
    person.job = 'educcator'
    person['favoritFood'] ="초콜릿"

    delete person.job;
    delete person.age;

    // 3-5 프로퍼티의 존재 유무를 확인한느 방법
    let result1 = "name" in person
    console.log(result1)


    