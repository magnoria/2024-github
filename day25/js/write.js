





function 등록함수( ){  console.log('등록함수 실행');
    // 1. 입력/저장 , document.querySelector('선택자').value
        // 각 class별 input 마크업에 입력된 value 값 가져오기
    let title = document.querySelector('.title').value;     //console.log( title );
    let content = document.querySelector('.content').value;   //console.log( content );
    let password = document.querySelector('.password').value;  //console.log( password );
            // 오류 : Cannot read properties of null (reading 'value')
            // 이유 : HTML과 JS에 입력한 선택자가 일치하지 않을경우 , value속성이 없는 마크업 , 오타
    // 2. 처리 ,  입력받은값들과 날짜/조회수 하나의 문자열(CSV)구성 -> 배열 저장 .push
        // (1) 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수
    // 원하는 날짜 또는 시간 구성하기 
        // - 현재 날짜/시간 기능를 제공하는 객체를 변수에 저장 
    let nowDate = new Date()  // 현재 날짜/시간 제공하는 객체 생성 
    let nowYear = nowDate.getFullYear() // 현재 연도 반환 함수
    let nowMonth = nowDate.getMonth()+1; // 현재 월 반환 함수 , +1 , 0(1월) 11(12월)
    let nowDay = nowDate.getDate() // 현재 일 반환 함수 
    let date = `${nowYear}-${nowMonth}-${nowDay}`;  // 작성일, 일반적으로 게시물 등록시 현재 시스템 날짜를 사용.
    //console.log( date );
    
    let view = 0; // 조회수 , 일반적으로 게시물 등록시 게시물 조회수는 0부터 시작 
   

    //localStorage에 배열을 운영하시오.
    getBoardList(); //1. 게시물 배열 호출



    //csv
    //let board = `${title},${content},${password},${date},${view}`; // `백틱 문자열 템플릿


    // localStorage 에 배열을 운영
    let boardList = getBoardList();

    //게시물 번호(식별자) , 만약에 배열이 존재하면  마지막게시물 번호+1, 아니면 1(첫게시물)

    let bno = boardList.length != 0 ? boardList[boardList.length-1].bno+1 : 1
    //이거 해석 필요 - 식별번호를 만드는것과 같다.
    //0이면 1붙이고 그다음부터는 2부터 시작해야되니 조건문을 이렇게 만드는것
    




    //객체 object
    let board = {
        bno : bno,
        title :title,
        content :content,
        date : date,
        view : view
    };

    
    boardList.push( board );

    // 2. 게시물 배열 상태를 localStorage 등록
    
    setBoardList(boardList);
    
    //3.메시지 안내
    alert('등록성공');

    //4. js<a>마크업과 동일한 기능, js에서 페이지 전환 함수
    location.href = "board.html"
} // f end 