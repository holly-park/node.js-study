function add(x,y){
    return x+y;
}

var myfunc1 = (x,y)=> {return x+y;}
console.log(myfunc1(3,4))    //뒤에 넣은 콜백함수와 묶을 때 유용
 //콜백함수: 만들기는 내가 만드는데 호출자가 내가 아님. 시스템이 호출한다
        //: 이벤트 프로그래밍 방식이나, 비동기 처리를 할 때 주로 사용한다


let a1:number [] = [3,2,4,5,1,6,7,4,8,3,9];
function isGreater(x:number):boolean{   //:boolean은 반환값이 boolean형태이다(true 또는 false만)
    return x>=5;
}

let b1: number[];  //배열만들기
let i:number;
b1 = []; //배열 객체를 만들자
for(i=0; i<a1.length; i++)
{
    if(isGreater(a1[i])){
        //console.log(a1[i])
        b1.push(a1[i]); //배열에 데이터 추가
    }
}
console.log(b1);


//람다를 사용한 예: filter 함수는 boolean 값을 반환하는 람다함수를 필요로 한다
b1 = a1.filter((x)=> x>=5);
console.log(b1)

//map함수
//수학은 벡터 연산이 기본이다
//y= f(x)

b1 = []
for(i=0; i<a1.length; i++){
    b1.push(a1[i]*2);
}
console.log(b1);

//배열에 map함수 추가, map함수의 매변수로 람다를 전달한다
//람다함수는 하나의 매개변수를 갖고 수식을 전달하면 된다

b1 = a1.map((x)=>x*3)
console.log(b1)

b1 = a1.map((x)=>{return x*x})
console.log(b1)

