

// 함수선언
function greeting() {
    console.log('안녕하세요 !')
}



// 함수 호출
console.log('호출 전')
greeting()
console.log('호출 후')

console.log(getArea(10,20))





// 함수선언 , 호이스팅
function getArea(width, height){

    function another(){
        console.log('another')
    }
    
    another()

    let area = width* height
    return area;
}