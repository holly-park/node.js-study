//동기모드 파일 읽기 require - nodejs에서 사용할 라이브러리 읽어들이기 fs - 파일관련 라이브러리
var fs = require("fs");

//utf-8문자셋으로 data.txt파일을 읽어라
//동기 - Synchronize
//비동기 - Asynchronize
var data = fs.readFileSync("data.txt", "utf-8")
console.log(data);

//비동기모드
fs.readFile("data.txt", "utf-8", (error, data)=>{
      //이 함수는 read가 다 끝난 후에 호출된다
      console.log(data);
});
console.log("end.......................");