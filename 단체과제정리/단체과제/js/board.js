output();
function output() {

    /* 1. coclaStorag에 게시물 배열 정보 불러오기 함수 */
    let boadList = getBoardList();



    let tbody =document.querySelector( 'table > tbody')
        /* tbody 출력장소 지정 */

    let html = '' /* 출력한 html을 넣기 위해서 for문 만들기 */

    for (let index = 0; index < boadList.length-1; index++) {
        let board = boadList[index];
            /* 지역변수이므로 간단 인덱스 확인 저장 */
        
        //let info = board.split(',') 객체 지향으로 바뀌어서 안씀
     
        
        /* 쉼표로 단위로 list[index]를 자른다. */

        html += `<tr>
                    <td>${board.date}</td>
                    <td>
                    <a href= "view.html?bno=${ board.bno}"> ${board.content}</a>
                    </td> 
                    <td>${board.view}</td>
                </tr>`;
                // 출력 a태그를 <>안에 다 안넣어서 출력이 안됬었음
                console.log(html);
                
       
    }

    tbody.innerHTML = html;
  
}