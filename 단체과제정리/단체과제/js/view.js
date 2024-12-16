
/* 
    nuew URL(주소) : 지정한 주소의 정보를 JS객체로 가져올수있다.
    1. new URL(location.href) : 현재 js가 위치한 URL 정보 객체를 가져올수있다.
        -   URL객체변수.serchPrams : URL상의 쿼리스트링 정보를 반환한다.(매개변수 개수수)
            -.get("매개변수명") : 쿼리스트링 에서 매개변수와 일치한 값을 반환한다.
*/

ditailOut(); //페이지가 열리면 자동으로 함수 1번실행
function ditailOut () { 
    //index 매개 변수가 없는 이유는 식별자를 URL로 부터 전달받을 예정이므로

    // 1. URL 경로상의 ?뒤에 (쿼리스트링) 값들을 가져오기 , 조회할 게시물번호 bno
    console.log(new URL(location.href));
    console.log(new URL(location.href).searchParams);
    console.log(new URL(location.href).searchParams.get('bno'));

    //1. 조회할 게시물 번호 bno
    let bno = new URL(location.href).searchParams.get('bno');

    //2. 게시물번호(식별자)를 가지고 해당 게시물의 모든 정보 가져오기

    let board = getBoard(bno); //여기서 bno를 보내는걸 매개변수라 함
        console.log(board);
        
    

    //let board = list[index];
        /* 선택한 인덱스의 게시물 호출 */

    //let info = board.split(',')

    
    //3. 출력
    document.querySelector('.titleBox').innerHTML = board.title;
    document.querySelector('.contentBox').innerHTML = board.content;
    document.querySelector('.dateBox').innerHTML = board.date;
    document.querySelector('.viewBox').innerHTML = board.view;
    document.querySelector('.btnBox').innerHTML = `
                                <button onclick = "delitPut(${board.bno})" type = "button">삭제</button>
                                <button type = "button">수정</button>
                                `
    
}