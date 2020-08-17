let sname: string="홍길동";
let age: number= 33;
let address: string= '서울시 양천구 목동';
let result: string;

result = sname + "님의 나이는" + age + "이고" + ", 주소는" + address + "입니다.";
console.log(result)

result = `${sname}님의 나이는 ${age}이고, 
주소는 ${address}입니다.`;
console.log(result);
