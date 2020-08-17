let sname: string="조승연";
let score: number=95;
let grade: string="";

switch(parseInt(string(score/10)))){
        case 10:
        case 9: grade='A'; break;
        case 8: grade='B'; break;
        case 7: grade='C'; break;
        case 6: grade='D'; break;
        default: grade='F'; break;
}

console.log(`${sname}님의 성적은 ${grade} 입니다`);