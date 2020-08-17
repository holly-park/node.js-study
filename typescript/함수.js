//일을 다 하고 나서 함수내의 결과를 외부로 반환하지 않는 경우
function func1(){
  console.log("--------------------------------------------")
}

//함수의 호출
func1();

//2.함수가 일을 수행하고 결과를 반환해야할 경우
//결과는 원칙적으로 한개만 반환가능
//1~10까지 합계를 구해서 반환하느느 함수
//return 값;

function sum(){
    s=0;
    for(i=1; i<=10; i++){
        s=s+i;
    }
    return s; //값을 반환하는 기능, 함수종료기능
}

//함수 호출하기
result = sum(); //함수가 값을 반환하므로 좌변에 변수를 두고 그 값을 받을 수 있다.
console.log(result)

//3.함수외부에서 함수에 값을 전달하고 싶을때
//sum2(10), sum2(100), sum2(1000)
//->매개변수가 필요

function sum2(limit){ //limit - 매개변수 또는 파라미터 라고 부른다
                      //이 변수를 통해 함수 외부에서 함수 내부에 값을 전달할 수 있다

    s=0;
    for(i=1; i<=limit; i++)
    {
        s=s+i;
    }
    return s;
}

console.log( sum2(10) )
console.log( sum2(100) )
console.log( sum2(1000) )
console.log( sum2(10000) )

function add(a,b)
{
    return a+b;
}
console.log(add(4,8))
