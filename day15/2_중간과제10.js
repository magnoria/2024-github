/* 
    주제 : 인사 관리 시스템
        1. 인사 정보 등록   : 이름 , 생년월일 등등 그외 임의 추가가능
            - 각 정보들을 HTML로 입력받아서 JS에서 등록 처리 하기.

        2. 전체 인사 정보 출력 내역 : 
            - 현재 등록된 모든 인사 정보를 출력

        3. 각 인사의 점수 등록 : 각 인사별 상반기, 하반기 등등 그외 임의 추가
            - 각 상반기, 하반기 점수를 GRML로 입력받아서 JS에서 등록 처리하기.

        4. 각 인사별 전체 점수 정보 출력 내역
            - 각 인사별 점수를 출력하시오.
    
    1. 위 요구 사항에 따른 화면 설계/ 구성

    2. 위 요구사항에 따른 메모리(변수, 배열, csv)설계를 구성

*/

let 인사평가 = ["강호동,78445,40,50,사번",
    "유재석,78275,30,20,사번",
    "이호재,75345,70,80,사번",
]

let 사번 = 0

let tbody = document.querySelector('table > tbody');
let html = ''; // 꼭 밖에 넣을필요는 없으나 한번 확인해보기



function 입력(){
    let 이름 = document.querySelector('.name').value;
    let 생년월일 = document.querySelector('.birth').value;
    let 상반기점수 = document.querySelector('.first').value;
    let 하반기점수 = document.querySelector('.second').value;
    let plus = 사번++;

    let 종합 = `${이름}, ${생년월일}, ${상반기점수}, ${하반기점수}, ${plus}`;

    인사평가.push(종합)
    출력();
}




function 출력(){
   /*  let 출력 = document.querySelector('tbody > tr');
    let html=""

    for(let index=0 ,index <= 인사평가.length-1, index++){
        html += ` <tr>
                    <th>${이름}</th>
                    <th>${생년월일}</th>
                    <th>${상반기점수}</th>
                    <th>${하반기점수}</th>
                    <th class="id">${plus}</th>
                </tr>`;
 */

                //let html = '';
                for (let index = 0 ; index <= 인사평가.length -1 ; index++){
                    //index는 0부터 마지막 인덱스까지 1씩 증가 반복
                    let board = 인사평가[index];
                    // 하나의 게시물을 csv 구성 했기 때문에 게시물정보 분해
                    //문자열.split('기준문자) : 
                    let info = board.split(',');
            
            
                    html += `<tr>
                                <td>${info[3]}</td>
                                <td><a href="#" onclick="상세출력함수(${index})">${info[0]}<a></td> 
                                <td>${info[4]}</td>
                    
                            </tr>`;
                                                // 여기서 $안의  index는 값만 출력하는것  
                    
            

      

    }
}
tbody.innerHTML = html;
