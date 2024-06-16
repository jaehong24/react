import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (IF, FOR ... 안됨)
// 2. 숫자, 문자열, 배열 값만 랜더링 된다.(TRUE, undeifend, null 안됨)
// 3. 객체는 자체로는 표현되지 못하고, 꺼내야한다.
// 4. 모든 태그는 닫혀있어야한다. 닫는태그 필수 !
// 5. 최상위 태그는 반드시 하나여야만한다. (Main 태그 , Header 태그)
//      <> 최상위가 만약 없다면 <> 를 써서 최상위 태그로 사용가능

const Main = ()=>{
    // const number =10
    // const obj ={a:1}

    const user = {
        name:"이정환",
        isLogin :true,
    }


    if(user.isLogin){
        return <div className="logout">로그아웃</div>
    }else{
        return <div>로그인</div>
    }

    // return(
    //     <>
    //         {user.isLogin===true?<div>로그아웃</div>:<div>로그인</div>}
    //     </>
    // )
    
    // return(
    //     <main>
            
    //         <h1>main</h1>
    //         <h2>{number % 2 ===0   ? "짝수":"홀수"}</h2>
    //         {[1,2,3]}
    //         {obj.a} 
    //     </main>
    // )
}

export default Main