//빅데이터 분석(웹기술이 매우매우 꼭 필요)! 데이터를 업어와서 

let person={'name': '홍길동', 'age': '23', 'phone': '010-0000-0000'} //name, age, phone이라는 3개의 키값이 만들어졌다
                                                               //키값은 'name '나 "name"로 묶어도 되고 안묶고 name이라고만 해도 된다
console.log(person['name'])
console.log(person['age'])
console.log(person['phone'])  //이 방법도 되고,

console.log(person.name)
console.log(person.age)
console.log(person.phone)  //이 방법도 된다

var cars=[    //여러개 담기
    {'product_name': '체어맨', 'manufacturer': '쌍용'},
    {'product_name': '그랜저', 'manufacturer': '현대'},
    {'product_name': '벤츠', 'manufacturer': '벤츠'},
    {'product_name': '소나타', 'manufacturer': '현대'},
    {'product_name': 'SM-7', 'manufacturer': '르노'}
]  ;

console.log(cars[0]['product_name'])  //이 방법도 가능하고
console.log(cars[0].product_name) //이 방법도 된다

for(i=0; i<cars.length; i++)
{
    console.log(cars[i].product_name, cars[i].manufacturer)
}

var sales = {'person': person, 'cars': cars}
console.log(sales)
