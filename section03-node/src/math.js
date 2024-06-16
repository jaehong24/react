// math 모듈

export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}

// default 는 기본값
export default  function multiply(a,b){
    return a*b;
}


// export {add,sub}

//<Common.js>
// module.exports={
//     add:add,
//     sub:sub
// }