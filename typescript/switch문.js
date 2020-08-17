var sname = "조승연";
var score = 95;
var grade = "";
switch (parseInt(String(score / 10))) { //스위치문은 너무 많이 쪼개질 수 있으므로 10으로 나눔, 그것을 string으로 바꾸고, 그것을 정수로 바꿈
    case 10:
    case 9:
        grade = 'A';
        break;
    case 8:
        grade = 'B';
        break;
    case 7:
        grade = 'C';
        break;
    case 6:
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}
console.log(sname + "\uB2D8\uC758 \uC131\uC801\uC740 " + grade + " \uC785\uB2C8\uB2E4");
