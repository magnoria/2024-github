



출력함수( );
function 출력함수( ){

    //*  localStorage로 부터 게시물 배열 호출
    let boardList = getBoardList();
    
    let tbody = document.querySelector( 'table > tbody')
   
    let html = ''
        
        for( let index = 0 ; index <= boardList.length - 1 ; index++ ){
          
            let board = boardList[index]; 
          
            //let info = board.split(',')  객체 지향으로 바꿨기에 split를 안씀

             
            html += `<tr>
                        <td> ${ {board.date} } </td>
                        <td> <a href="view.html?bno=${board.bno}" > //이게 쿼리 스트링
                         ${ board.content } </a> </td>
                        <td> ${ board.view } </td>
                    </tr>`; // 변수 += 값  vs 변수 = 변수 + 값  , 기존변수에 새로운 값을 누계/연결 
           
        } // for end 
    
    tbody.innerHTML = html; 
} // f end 