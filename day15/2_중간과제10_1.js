let 인사평가 = [
    "강호동,78445,40,50,사번",
    "유재석,78275,30,20,사번",
    "이호재,75345,70,80,사번",
];

let 사번 = 10000;  // 사번 초기값 설정
let tbody = document.querySelector('table > tbody');

// 입력 함수
function 입력(){
    let 이름 = document.querySelector('.name').value;
    let 생년월일 = document.querySelector('.birth').value;  // 생년월일의 input이 '.birth'로 되어있다고 가정
    let 상반기점수 = document.querySelector('.first').value;
    let 하반기점수 = document.querySelector('.second').value;
    
    let plus = 사번++;  // 사번 증가
    let 종합 = `${이름},${생년월일},${상반기점수},${하반기점수},${plus}`;
    
    인사평가.push(종합);
    출력();  // 출력 함수 호출
}

// 출력 함수
function 출력(){
    let html = '';  // HTML 내용 초기화

    for (let index = 0; index < 인사평가.length; index++){  // 인사평가 배열의 길이만큼 반복
        let board = 인사평가[index];
        let info = board.split(',');  // ','로 구분하여 배열로 변환
        
        html += `<tr>
                    <td>${info[4]}</td>
                    <td><a href="#" onclick="상세출력함수(${index})">${info[0]}</a></td> 
                    <td>${info[2]}</td>
                    <td>${info[3]}</td>
                    <td>${info[1]}</td>
                </tr>`;
    }
    tbody.innerHTML = html;  // tbody에 HTML 내용 삽입
}

function 삭제(index){
    인사평가.splice(index,1);
    
    
    
    

    출력();

}