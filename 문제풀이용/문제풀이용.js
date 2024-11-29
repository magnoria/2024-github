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

    for (let index = 0; index <= 게시물목록.length - 1; index++) {//lengh를 하기위한 이유찾기
        let board = 게시물목록[index]; /* board에 저장한걸 ,로 잘라서 사용하기 위해 저장 */
        let info = board.split(',') //csv 형식은 쉼표로 구분했으므로 쉼표를 선택 해서 분해

        html += `<tr>

                    <td> ${info[3]} </td> 
                    <td> <a href="# onclick = "상세출력함수( ${index}) ">${info[0]}</a> </td>
                    <td> ${info[4]}</td>
                </tr>`;
                            //info[3]은 위에서 bord의 index를 ,표 단위로 쪼갠거고
                            //게시물 목록의 length-1 인덱스는 숫자를 추가하기 위해서

    }

    tbody.innerHTML = html;
}