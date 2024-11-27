/* 
    - 학생들의 점수 출력하는 구현
        1. 학생이름배열
            let nameArray= ['유재석', '강호동', '신동엽']
        
        2. 학생 점수배열
            let score = [92, 86, 72]
        
        3. 아래와 출력 , 100점 만점이라고 했을때 점수를 ● 표기 나머지 점수 ○
            이름       시각화
            유재석      ○●
            강호동
            신동엽
*/

//입력 / 저장 - 처리 - 출력 순으로 생각해보고
// 주어진 자료준비 - 다만 지문에 배열을 을 주었으므로
let nameArray= ['유재석', '강호동', '신동엽']
let score = [92, 86, 72]

// (2) 처리
    // 배열내 이름/요소 부터 순차적으로 출력


//출력할 HTML



for( let index = 0; index <= nameArray. length-1; index++){
    

    //2. index 번째의 요소를 호출
    console.log(nameArray[index])

    //3. index 번째의 요소를 HTML(문자열) 구성
}



