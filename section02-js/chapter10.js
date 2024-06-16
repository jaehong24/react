// 1. Data 객체를 생성하는 방법


let date1 = new Date(); // 생성자
console.log(date1)


let date2 = new Date("1970-01-07");
let date3 = new Date("1970/01/07");
let date4 = new Date("1970/01/07/10:10:10");


console.log(date4)

// 2. 타임스탬프
// 특정시간이 utc 값 "1970.01.01 00시 00분 00초 로 부터 몇 ms가 지났는지를 의미하는 숫자값 
let ts1 = date1.getTime();
console.log(ts1);

let data5 = new Date(ts1);
console.log(date1, data5)

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //0부 터시작
let date =date1.getSeconds();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds

);

date1.setFullYear(2023);
date1.setMonth(2)

//5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString())
console.log(date1.toLocaleDateString())
