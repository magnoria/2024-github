/* 

    문자열 처리( 기능이 없는 문자 그자체) 방법
        1. ''
        2. ""
        3.``    ------------------- 키보드 왼쪽 TAB키 위에 ~키
    
    키워드
        let, const, cosole.log
    
    
*/
/* console.log(유재석)  */// 유재석 is not defined


//
/* console.log  ---->
유재석 */

//[1] 문자열 처리
console.log('유재석1')
console.log("유재석2")
console.log(`유재석3`)

//[2] '작은따음표 , " 큰타움표 출력
console.log ("유재석'반장' ")
console.log('유재석 "반장" ')
console.log(`유재석 '반장"`)

//[3] 이스케이프/ 제어문자, 키보드 엔터위에 원화기호 (백슬래시)\
        //1. \n : console의 한줄 내림(줄바꿈)
        //2. \" : "한개 출력 , \"\"
        //3. \' : '한개 출력 , \'\'
        //4. \\ : \한개 출력 , \\\\
        //5. \t : 탭(들여쓰기)
console.log('유재석\n \'반장\'')
console.log('유재석\n 강호동')
console.log('유재석\"강호동')
console.log('유재석\'강호동')
console.log('유재석\\강호동')
console.log('유재석\t강호동')

//[4] 문자열 (`백틱) 템플릿 ,
console.log('유재석' + '강호동') //'문자A' + '문자B' => '문자A문자B
console.log('유재석' + 40) /* '문자A' + 숫자 => '문자A숫자' */ 
console.log('40' + '100') // '숫자1' + '숫자2' => '숫자1숫자2' // 40100

let age = 40;
console.log('유재석' + age)


console.log('유재석${age}강호동')


`문자그자체 문자그자체 문자그자체 ${js코드} 문자그자체`
'문자그자체 문자그자체 문자그자체' + js코드 + '문자그자체'
    // js 학습 목적 : htmml를 조작/제어/이벤트 하기위해서
    // HTML는 변수 x 연산x, 배열x, 타입x --> JS에서 HTML작성시 JS 코드와 합쳐서 작성할 수 있다.

let 직원명1 = '유재석'
let 직원명2 = '강호동'

let nameHTML = `<ol> <li> ${직원명1} </li> <li> ${직원명2} <li> </ol>`
document.write(nameHTML) // document.write(HTML) :현재 html에 출력하는 함수

//예1 : 입력받은 데이터를 HTML에 출력하시오.
    //prompt('알람메시지') , 반환값 : 입력받은 값 1개
let 결과2 = prompt('[알람내용] 데이터 입력해주세요')
//prompt 함수로부터 입력받은 값을 아래 코드에서 재사용 하고싶다.
console.log(결과2)
let inputHTML = `<h3> 입력받은 데이터 : ${결과2} </h3>`
document.write(inputHTML)







let 결과1 = 10+5

//10 + 5 한 결과의 15를 아래 코드에서 재사용하고 싶다.
console.log(결과1)

/* 정수타입은 파란색 문자는 검은색 */

//예2 : 2명의 사원이름을 입력받아서 HTML(table)형식으로 출력하시오.
//이유 : HTML은 연산x , 저장x 등등 없으므로 텍스트 그자체
// 새로운값(데이터)을 입력받아서 데이터 가공(js) 하기위해서 js 사용
//순서도 (알고리즘) , 어떠한 작업의 순서/절차
    // html과 css 는 절차x , js코드는 위에서 아래로 실행
    // 1. 1명의 사원이름을 입력받는다
    // 2. 입력받은 사원 이름을 변수에 저장한다.
    // 3. 1명의 사원 이름을 입력받는다.
    // 4. 입력받은 사원이름을 변수에 저장한다.
    // 5. HTML형식의 문자로  출력할 변수와 같이 구성한다
    // 6. 구성된 hTML를 HTML문서에 출력한다.
    // - 변수를 사용하는 이유 : 다음 코드에서 사용(출력 목적)할려고


/* 
    번호    이름
    1.      유재석
    2.      강호동

*/
