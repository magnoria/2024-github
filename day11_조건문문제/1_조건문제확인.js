/* let 아이디 = Number(prompt('아이디 :'));
let 비밀번호 = Number(prompt('비밀번호 :'));

let 확인1 = 'admin';
let 확인2 = '1234';

if(아이디 = 확인1) {if(비밀번호 = 확인2)
        {console.log('로그인 성공');}
} else if(아이디 = 확인1) {
    if(비밀번호 = 확인2) {console.log('로그인 실패')}
}

 */



//let fruitList = [ '바나나' , '사과' ];   /* 닫는거 중요 안닫으면 실행이 안됨 */
//let 과일명 = prompt('과일명');
/* if(fruitList.indexOf(과일명)) { // .indexOf ('찾을값) : 지정한 찾을값이 배열내 존재하면 찾은 인덱스 반환 없으면 -1 반환
//.push(새로운값) : 지정한 새로운값을 배열내 마지막 인덱스 요소의 추가 함수


} */
/* let 존재여부 = fruitList.indexOf(과일명);

//만약 존재여부가 -1 이 아니면 (존재하지 않으면) 배열내 입력받은 과일명 추가
if( 존재여부 != -1) { fruitList.push(과일명); console.log(과일명);}   /* 이거 문제 */
// 아니면(존재하면)
/* else{ console.log('이미 존재하는 과일입니다'); } */
 
let fruitList = [ '바나나' , '사과' ]
let 과일명 = prompt('과일명')
/* if(fruitList.indexOf(과일명)) { // .indexOf ('찾을값) : 지정한 찾을값이 배열내 존재하면 찾은 인덱스 반환 없으면 -1 반환
//.push(새로운값) : 지정한 새로운값을 배열내 마지막 인덱스 요소의 추가 함수


} */
let 존재여부 = fruitList.indexOf(과일명)
//만약 존재여부가 -1 이 아니면 (존재하지 않으면) 배열내 입력받은 과일명 추가
if(존재여부 != -1) { console.log('이미 존재하는 과일입니다');}  /*  잘못된거였음*/
// 아니면(존재하면)
else{fruitList.push(과일명); console.log(과일명);} /*  */
