/* 주제 : 미니 웹페이지 가계부
        1. 가계부 정보(항목) : 1. 날짜 2. 항목명 3. 금액
        2. 세가지의 정보를 입력받아 하나의 배열 저장 기능
        2. 등록된 모든 정보들을 출력  기능
        3. HTML 출력 예시

        날짜                    항목            금액
        2024-11-26              콜라            1000
        2024-11-27              커피            1200

    [생각 1] 시각적으로 보이는 목표의 데이터 구성을 어떻게 해야하는지 생각
        변수 = 하나의 자료를 저장하는 매모리 공간, 
        배열 = 여러개의 자료를 저장하는 하나의 타입,
        1. 날짜 테이터 여러개 저장
            let 날짜배열 = []
        2. 항목 데이터 여러개 저장
            let 항목배열 = [ '콜라' , '커피']
        3. 금액 데이터 여러개 저장
            let 금액배열 = [1000, 1200]
        4. 배열 선언 위치: 전역변수 :JS 실행될때 1번선언 vs 지역변수 : 지역{}이 실행될때마다 선언/ 종료 될때마다 사라짐

        5. 서로 다른 배열간의 인덱스가 동일하면 하나의 가계 정보
            날짜배열[0] = '2024-11-26' , '2024-11-27'
            항목배열[0] = '콜라'
            금액배열[0] = 1000
    
    [생각2] 제작할 기능/함수 몇개 필요한지 구성 / 처리할 로직
        1. [등록]버튼 클릭시 input으로 입력받은 3개의 값을 각 배열에 저장하는 함수
        2. 등록[배열push]시 현재 배열의 요소(값)들을 출력하는 함수

    [생각3] 등록함수에서 실행할 로직??????
        1. 입력/ 저장                   prompt vs document.querySelector()
        2. 처리 : 입력된 정보를 배열에 추가 (push)        배열명.push()
        3. 출력 : 출력함수 호출로 대체

    [생각4] 출력함수에서 실행할 로직???
        1. 어디에 documet.querySelector()               document.write() vs documet.querySelector()
        2. 무엇을                                       배열순회 해서 모든 배열내 요소(값)들 html(문자)로 구성해서
        3. 출력  


 */

        //[1] 전역변수
        let 날짜배열 = ['2024-11-26', '2024-11-27']
        let 항목배열 = [ '콜라' , '커피']
        let 금액배열 = [1000, 1200]



        //[2]등록함수 정의
        function 등록함수(){
            console.log('등록함수 실행');
            //1. 입력/ 저장
            let dateInput = document.querySelector('.dateInput'); 
            //html 'dateInput' 이라는 class 명을 가진 마크업을 JS DOM객체 호출/반환
            let date = dateInput.value; //DOM객체는 마크업의 value 속성 값을 호출/반환

            let contentInput = document.querySelector('.contnetInput');
            let content = contentInput.value;

            let moneyInput = document.querySelector('.moneyInput');
            let money = moneyInput.value;


            // 위 console.log를 찍어서 확인해보기


            //2. 처리 입력받은 
            날짜배열.push(date);
            항목배열.push(content);
            금액배열.push(money);


            
            //3. 출력
            
            출력함수(); // 등록 이후 등록함수 호출
        }





        //[3]출력함수
        function 출력함수(){
            
                //1. 어디에 , 테이블에 <table>
                let table = document.querySelector('table')
                //2. 무엇을
                let html = ' ' // 출력할 Html 구성 변수

                for(let index = 0; index <= 날짜배열.length -1 ; index++){
                    html += `<tr>
                                <td>${날짜배열[index]}</td>
                                <td>${항목배열[index]}</td>
                                <td>${금액배열[index]}</td>
                                
                                
                                
                            </tr>` // +=  누적합계(기존데이터에 문자열 연결) ,
                            //각 index 번째의 날짜/항목/금액을 각 <td>에 문자열로 구성
                }//for end
                //3. 출력 , DOM객체의 innerHTML 속성/필드를 이용한 구성한 html 대입해서 출력한다.
                table.innerHTML =html;

            
            



           
           
        }


