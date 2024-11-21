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
        //1. \m : console의 한줄 내림(줄바꿈)
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