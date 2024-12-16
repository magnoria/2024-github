/*
    new URL( 주소 ) : 지정한 주소의 다양한 정보를 JS객체로 가져오기 
    1. new URL( location.href ) : 현재 js가 위치한 URL 정보 객체 가져오기 
        - .searchParams : URL 상의 쿼리스트링 정보를 반환한다. (매개변수 개수)
            - .get( "매개변수명" ) : 쿼리스트링 에서 매개변수와 일치한 값 반환한다.
*/
// [3] 상세 출력 함수 , 실행조건 : 전체출력화면에서 특정한 제목을 클릭했을때

상세출력함수(); // 페이지가 열리면 자동으로 함수 1번 실행 
function 상세출력함수(  ) { 
// index매개변수가 없어진 이유는 식별자를 URL로 부터 전달 받을예정이므로
    // * URL 경로상의 ?뒤에(쿼리스트링) 값 들을 가져오기 
    console.log( new URL( location.href ) )
    console.log( new URL( location.href ).searchParams )
    console.log( new URL( location.href ).searchParams.get('bno') )
    // 1. 조회할 게시물번호 bno
    let bno = new URL( location.href ).searchParams.get('bno');
    // 2. 게시물번호(식별자)를 가지고 해당 게시물의 모든 정보 가져오기 
    let board = getBoard( bno ); // 조회bno를 보내서 게시물정보 반환 
    // 3. 출력 
    document.querySelector('.titleBox').innerHTML = board.title
    document.querySelector('.contentBox').innerHTML = board.content
    document.querySelector('.dateBox').innerHTML = board.date
    document.querySelector('.viewBox').innerHTML = board.view
    document.querySelector('.btnBox').innerHTML = `
                <button onclick="삭제함수( ${ board.bno } )" type="button">삭제</button> 
                <button type="button">수정</button>`
} // f end 

function 삭제함수( deleteBno ){ // 매개변수 , 삭제할 인덱스 번호 

    deleteBoard( deleteBno );

    // 5. 간단한 메시지와 페이지전환 
    alert('삭제 했어요.');
    location.href="board.html";

} // f end


