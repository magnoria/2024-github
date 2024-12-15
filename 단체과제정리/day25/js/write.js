/* day14 중간과제 쓰기 관련 코드 복사붙여넣기 */
// [2] 등록함수  , 실행조건 : [등록]버튼 클릭시 
function 등록함수( ){  console.log('등록함수 실행');
    let title = document.querySelector('.title').value;     //console.log( title );
    let content = document.querySelector('.content').value;   //console.log( content );
    let password = document.querySelector('.password').value;  //console.log( password );

    let nowDate = new Date()  // 현재 날짜/시간 제공하는 객체 생성 
    let nowYear = nowDate.getFullYear() // 현재 연도 반환 함수
    let nowMonth = nowDate.getMonth()+1; // 현재 월 반환 함수 , +1 , 0(1월) 11(12월)
    let nowDay = nowDate.getDate() // 현재 일 반환 함수 
    let date = `${nowYear}-${nowMonth}-${nowDay}`;  // 작성일, 일반적으로 게시물 등록시 현재 시스템 날짜를 사용.
    let view = 0;
    // localStorage 에 배열을 운영 하시오.
    let boardList = getBoardList();    // 1. 게시물 배열 호출 
    // 게시물 번호(식별자) , 만약에 게시물 배열이 존재하면 마지막게시물의 번호+1 , 아니면 1(첫게시물)
        // 배열변수명.length-1  : 배열내 마지막요소의 인덱스번호 
    let bno = boardList.length != 0 ? 
        boardList[ boardList.length-1 ].bno + 1 : 1

    // 객체Object
    let board = { bno : bno , title : title ,  content : content ,   
        password : password , date : date , view : view   };
    boardList.push( board );
    
    setBoardList( boardList );     // 2. 게시물 배열 상태를 localStorage 등록 
    
    alert('게시물 등록 성공');      // 3. 메시지 안내 
    location.href="board.html";    // 4. JS에서 페이지 전환 함수.

} // f end 
