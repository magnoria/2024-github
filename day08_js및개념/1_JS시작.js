/* 여러줄 주석 */
//한줄 주석


console.log( '[2]안녕 JS')  /* 확인 : 브라우저f12(개발자 도구) 에서 [console]탭 에서 JS출력 확인  */


//  1. JS 출력 관련 기능/이벤트/함수 

// [1] console.log() , 개발자가 데이터 확인/유지보수/테스트 문제생길시 등 확인하기 위한것 중요함
console.log('[3]console 함수')  // 개발자 도구의 [console] 탭에 출력하는 함수

// [2] alert , 브라우저 상단에 알림창 메시지 출력
alert('[4]alert함수 출력') // 브라우저의 알람창에 내용 출력하는 함수

// [3] document.write() ,현재 HTML의 메시지를 출력하는 함수
document.write('[5] document.write 함수 출력') // 현재 html에 내용 출력하는 함수

//[4]document.body.innerHTML = '[6] document.body.innerHTML 속성 출력'; , 특정 마크업의 메시지를 출력하는 함수
document.body.innerHTML = '[6] document.body.innerHTML 속성/필드/멤버변수 출력';

//2. JS 입력 관련 기능/이벤트/함수

//[1]
confirm('[7] 확인 메시지 창') // 브라우저에 알림 메시지 창(확인=true, 취소=false)

//[2]
prompt('[8] 내용 입력 메시지 창') // 브라우저 (메시지 입력) 알림 메시지 창 input 박스가 들어가서 입력을 받을수 있다.

//[3] document.querySelector('마크업명').innerHTML
document.querySelector('body').innerHTML
