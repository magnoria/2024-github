/* day 14 중간과제 쓰기 관련 코드 복사 붙여넣기 */





function resistRation(){

    let title = document.querySelector('.title').value;
    let content = document.querySelector('.content').value;
    let password = document.querySelector('.password').value;

    /*  타이틀, 컨텐츠, 패스워드를 가지고 와서 저장 */

    let nowDate = new Date()

    let nowYear = nowDate.getFullYear()
    let nowMonth = nowDate.getMonth()+1;
    let nowDay = nowDate.getDate()
    
    let date = `${nowYear} - ${nowMonth} - ${nowDay}`;

    let view = 0;



    //CSV 가 원래 있던것것

    //let board = `${title},${contetnt},${password},${date},${view}`;
    /* 보드에 일단 값들을 입력 */

    //localSorage 에 배열을 운영하려함함
    let boardList = getBoardList();    //1. 게시물 배열 호출
    //반환값 추후에 쓸거면 변수로 저장 아니면 그냥 출력만 하면 됨됨

    //게시물 번호(식별자), 만약에 게시물 배열이 존재하면 마지막 게시물의 번호 +1 , 아니면 1(첫게시물)
    let bno = boardList.length != 0 ? boardList[boardList.length-1].bno+1 : 1;
                              // boardlist의 인덱스가 0이 아니면 +1 아니면 1
                              //todolist 만든 방식과는 다르다다

    //객체Object
    let board = {
        bno : bno,
        title : title,
        content : content,    // content 오타로 인해 다른 곳의 함수가 잘못되서 엉켜버림 수정(완)
        password : password,
        date : date,
        view : view
    };

    boardList.push(board);
    /*  리스트에 넣어서 게시물 목록을 만듬 */

    //output();
    /* 출력함수 */

    //게시물 배열 상태를cloalStorage에 등록
    setBoardList(boardList);

    //3. 메세지 안내
    alert("등록성공")

    //4. JS에서 <a> 마크업과 동일한 기능, JS에서 페이지 전환 함수,
    location.href="board.html";
    //게시물쓰기가 성공했으면 board.html로 이동해라



}
