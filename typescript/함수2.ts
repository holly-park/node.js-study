//void-형태가 없는, 값을 반환하지 못한다
//return 뒤에 값을 넣지 못하고, 그리고 함수 호출시 좌변에 아무것도 오지 못한다. 
//console.log안에서 호출도 못한다

function displayStar(): void{
    console.log("*****************************************")
    return;
}

displayStar(); //undefined가 출력되지 않는다

console.log(displayStar());//undefined 가 출력된다
