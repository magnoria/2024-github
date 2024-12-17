
/* 
    new URL(주소) : 지정한 주소의 다양한 정보를 JS객체로 가져올수있다.
    1. new URL(location.href) : 현재 js가 위치한 URL 정보 객체 가져오기
    - URL 객체변수 .searchParams : URL 상의 쿼리스트링 정보를 반환한다 . (매개변수 개수)
*/




상세출력함수(); // 페이지가 열리면 자동으로 함수 1번 실행
function 상세출력함수(  ) { // index매개변수가 없는 이유는 식별자를 url로 부터 전달 받을 예정이므로

    // 1. URL 경로상의 ? 뒤에(쿼리스트링) 값들을 가져오기, 조회할 게시물 번호 bno

        console.log(new URL(location.href));
        console.log(new URL(location.href).searchParams);
        console.log(new URL(location.href).searchParams.get('bno'));
        
        
        //1. 조회할 게시물 번호(식별자) bno
    let bno = new URL((location.href).searchParams.get('bno'));

    //2. 게시물번호(식별자를)를  가지고 해당 게시물의 모든 정보 가져오기
    let board = getBoard(bno); //조회 bno를 보내서 게시물 정보 반환


    //3. 출력
    document.querySelector('.titleBox').innerHTML = board.title; // 제목 데이터를 .titileBox 마크업 사이에 에 대입 
    document.querySelector('.contentBox').innerHTML = board.content; // 내용 데이터를 .contentBox 마크업 사이에 대입 
    document.querySelector('.dateBox').innerHTML = board.date; // 작성일 데이터를 .dateBox 마크업 사이에 대입 
    document.querySelector('.viewBox').innerHTML = board.view; // 조회수 데이터를 .viewBox 마크업 사이에 대입 
    document.querySelector('.btnBox').innerHTML = `
                                    <button onclick="삭제함수( ${ board.bno } )" type="button">삭제</button> 
                                    <button type="button">수정</button>`
} // f end 


// [4] 삭제함수  , 실행조건 : [삭제]버튼 클릭시 
function 삭제함수( bno ){ // 매개변수 , 위에 이미 html에서 매개변수 설정을 해서 누를시 실행되도록 해놓음
    
    deleteBoard();

    //5. 간단한 메시지와 페이지 전환
    alert('삭제했어요');
    location.href="board.html";


    
    출력함수();
} // f end 