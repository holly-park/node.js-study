function hello(msg, callbackfn){
    console.log("callback 호출", msg);
    callbackfn(); //콜백함수를 호출한다
}

//람다로 - 매개변수 없어서 괄호만
var callback1 = () =>{
    console.log("callback 1이 호출되었습니다.");
}

//함수호출
hello("자바스크립트",callback1);
hello("람다함수", ()=>{console.log("callback22222222222")})