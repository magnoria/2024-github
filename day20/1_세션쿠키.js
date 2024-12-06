/* 
    객체 : 여러가지 자료를 하나의 자료 타입으로 구조화
        객체 2개 : 
        1. 내가만든객체 
        2. (미리존재한)남이 만든 객체 : document, cosole, new Date() 등등
            -> 남이 미리 데이터. 함수를 제공함으로써 빠른 개발이 가능하다. (도구 제공) 
            기본 적으로 객체든 함수든 리터럴이든 남이 미리 만든것을 라이브러리라고 한다.
            프레임워크 -> 규격자체가 만들어져있는것, 큰틀을 만들어 놓은것 

        세션과 쿠키
            - 브라우저(HTML/CSS/JS을 랜더링(그려주는)해주는 프로그램, HTTP 통신 )
            - 브라우저 f12(개발자도구) -> [Application] - > 왼쪽사이드 메뉴(local storage(쿠키)/ session strage(세션))
            1. 세션 : 사용자가 웹페이지를 방문하고 있는 동안 메모리를 저장하는 공간 , 브라우저가 꺼지면 메모리는 삭제 된다.
                ex] 검색엔진 , 임시데이터
                객체 : sessionStorage

            2. 쿠키 : 사용자가 웹페이지를 방문이 끝나도 메모리를 저장하는 공간 , 브라우저가 꺼져도 메모리 유지 된다.
                ex]자동로그인 기능 구현
                객체 : localStorage
            
            sessionStorage / localsStorage 객체의 속성/기능 제공
                - .(도트/접근)연산자 : 객체내 속성 값 접근/호출 사용


                console.log(document.querySelector().value);
                        ?

            1. setItem( 'key' , 'value') : 세션/쿠키 값 저장하는 함수, key와 value 한쌍으로 저장 구조
            2. getItem( 'key') : 세션/쿠키 값 호출하는 함수 , key를 호출함으로써 value가 반환되는 구조
            * 주의할점 : 세션과 쿠키는 무조건 문자열로 구성된 자료, 문자만 저장이 가능하다. 배열이나 객체는 저장 할 수 없다.
                해결책 : type변환 
                    문자열을 객체로 (JSON)
                    문자열을 숫자로 만들때 Number()
                    숫자를 문자열로 만들때 String()

        
        JSON(JavaScript Notion) 객체 : 자바스크립트 객체 문법의 형식
            - 실무에서 많이 사용되는 형식, JSON/XML/CSV 형식
            1. JSON.stringify ({속성명 : 값, 속성명 : 값}) :  {} ----> 문자열 : '{ 속성명 : 값, 속성명 : 값}
            2. JSON.Parse('{ 속성명 : 값, 속성명 : 값}') : 문자열 --------> {} : 속성명 : 값, 속성명 : 값}
            3. -> 3 과 '3'은 다르듯이 {}와 '{}' 은 다르다.
            */

//[1] 세션

console.log(sessionStorage)
console.log(localStorage)

//[2] 세션 / 쿠키 데이터 삽입 , 속성명/변수명/키/필드명 -> 어떤것들을 식별하기위한 용도     변수명과 변수는 같지 않다.    , 키와 값을 한쌍으로 하는 데이터 구조
sessionStorage.setItem('name', '유재석') // f12개발자 -> 어플리케이션 -> 세션스토리지에서 확인가능
localStorage.setItem('age', 40) 

//[3] 세션 / 쿠키 데이터 호출, 키를 이용한 값 호출

let 반환값1 = sessionStorage.getItem('name'); console.log(반환값1);
let 반환값2 = localStorage.getItem('age'); console.log(반환값2);
let 반환값3 = sessionStorage.getItem('phone'); console.log(반환값3);

//[4] * 관례적으로 세션과 쿠키에 객체를 대입하는 방법, JSON객체 활용
console.log(JSON.stringify({"name": "유재석"})); // {"name": "유재석"} - > '{"name": "유재석"}'
console.log(JSON.parse('{"name" : "유재석"}')); // '{"name": "유재석"}' -> {"name": "유재석"}


//sessionStorage.setItem('할일' , {할일내용 : '밥먹기' , 할일상태 : true}) // 갹체를 저장할수 없어서  콘솔에서 object로 나온다 

sessionStorage.setItem('할일' , JSON.stringify({할일내용 : '밥먹기' , 할일상태 : true}))

let 반환값4 = sessionStorage.getItem('할일'); console.log(반환값4); // '{할일내용 : '밥먹기' , 할일상태 : true}'   -> 문자열
console.log(JSON.parse(반환값4)); // {할일내용 : '밥먹기' , 할일상태 : true}  -> 객체

// 문자와 객체로 정리되는걸 콘솔에서 잘확인하기  객체일시 안쪽 console에서 안쪽 정보를 볼수 있다.









