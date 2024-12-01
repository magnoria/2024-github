/* 1.처음 시각화를 위해 html부터 만든다 
2. 배열 예시를 만든다
3. 어느정도 의견 및 생각이 정리되면 입력 - 저장 -출력(실행) 순으로 순차적으로 코드를
어떻게 짤지 생각한다
*/

let 게시물목록 = ['첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2024-11-26,3',
    '두번째 게시물 제목, 두번째 게시물 내용, 4567, 2024-11-27,2',
    '세번째 게시물 제목, 세번째 게시물 내용, 7891, 2024-11-28,0']

function 등록함수() { //console.log(등록함수);
    let title = document.querySelector('.title').value; //console.log(title)
    let content = document.querySelector('.content').value; //console.log(content)
    let password = document.querySelector('.password').value; //console.log(password)
    /* 위에 있는것들은 버튼을 누를시 class 각 값을 가져와서 저장하는것 */

    //.value;는 class안의 값을 가지고 오는거기때문에 만약 .value를 안쓸씨 html코드자체를 가져올수 있다.

    // documet.querySelector().vlaue = 새로운값; 을하여 html의 입력한것을 바꿀수있다.

    let nowDate = new Date();      //현재날짜 제공 
    let nowYear = nowDate.getFullYear()
    let nowMonth = nowDate.getMonth() + 1 // +1을 하는 것은 1월을 0부터 시작하기 때문
    let nowDay = nowDate.getDate()
    let date = `${nowYear}-${nowMonth}-${nowDay}`;
    //위 데이터 순서가 년 월 일 이기때문에 그대로 해서 date에 저장
    //console.log(date) date에 자료가 저장됬는지 확인

    let view = 0; //조회수 변수에 저장

    let board = `${title},${content},${password},${date},${view}`;

    게시물목록.push(board); /* 게시물 목록에 넣기 */

    출력함수();/* 그다음에 출력 다만 출력함수를 안만들어서 출력할게 없기때문에 출력이 안됨 */


}

출력함수();
function 출력함수() {    /* 출력할것들을 씀 */

    let tbody = document.querySelector('table > tbody'); //console.log(tbody); tbody를 선택

    let html = ''/* 출력물 저장을 위해서 */

    for (let index = 0; index <= 게시물목록.length - 1; index++) {
        let board = 게시물목록[index]; /* board에 저장한걸 ,로 잘라서 사용하기 위해 저장 */
        let info = board.split(',') //csv 형식은 쉼표로 구분했으므로 쉼표를 선택 해서 분해


        //여기까지가 게시물 목록이 추가되기 위해서


        html += `<tr>

                    <td> ${info[3]} </td> 
                    <td> <a href= "#" onclick = "상세출력함수(${index})"> ${info[0]} </a> </td>
                    <td> ${info[4]}</td>
                </tr>`;
                            //info[3]은 위에서 bord의 index를 ,표 단위로 쪼갠거고
                            //게시물 목록의 length-1 인덱스는 숫자를 추가하기 위해서
                            // oclick 이벤트시 상세출력함수에 접근할수 있도록 넣어놓는다
                            //누를시 info값이 출력될수있도록 3, 0, 4 출력될 걸 넣어놓는다.

    }

    tbody.innerHTML = html; /* 여기까지가 등록 */
    //console.log(게시물목록);  콘솔에 들어갔는지 확인하기 위해서 찍어봄
    
}


//이제 위에 상세출력함수 index를 만들어야 한다.
//상세 출력 함수 , 실행조건 : 전체출력화면에서 특정한 제목을 클릭했을때

function 상세출력함수(index){// 매개변수, 상세 출력할 배열의 인덱스 받기

    //1. 어디에 , document.querySeclector()
    //2. 무엇을 , 선택한 인덱스의 정보를 html로 구성

    let board = 게시물목록 [index];/* 여기서 게시물목록 = [index]로 해놓음 오타좀 조심하자 */
    // 선택한 인덱스의 게시물을 호출한다
    let info = board.split(',');
    //게시물 문자열, 쉼표 기준으로 분리한다.
      /* 오타 여러개 생김 잘 정의할것 */

    /* 게시물 상세페이지 출력 , innerHTML*/
    document.querySelector('.titleBox').innerHTML = info[0];   console.log(info[0]);
    
    document.querySelector('.contentBox').innerHTML = info[1];
    document.querySelector('.dateBox').innerHTml = info[3];
    document.querySelector('.viewBox').innerHtml = info[4];
    document.querySelector('.btnbox').innerHTML = info `
                                                    <button onclick="삭제함수(${index})" type="button">삭제</button>
                                                    <button type="button">수정</button>`

}// 상세출력 end       77부분에서 오류가 있었으나 78로 오류가 떴었고 
    //그 이유는 77에 변수가 제대로 저장이 안되서 78이 실행될때 오류가 생겼기때문

//삭제함수 , 여기서 실행조건은 : 삭제버튼 클릭시\
function 삭제함수(index){// 매개변수 , 삭제할 인덱스 번호
    게시물목록.splice(index,1);
    // 배열변수명.splice(삭제할인덱스, 개수)
    // 삭제할 인덱스를 선택후 삭제 개수를 씀
    
    // 여기서 궁금증 하나 삭제할인덱스를 상세하게 제거할수 있을까?
    //배열을 따로 정리한다음에 넣는다면 가능할거같음 나중에 해보기

    출력함수();

}/* 이렇게 만들면 첫번째 부터 삭제됨 */