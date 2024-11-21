
 // html과 css 는 절차x , js코드는 위에서 아래로 실행
    // 1. 1명의 사원이름을 입력받는다 prompt() 반환값 : 입력받은 값
    // 2. 입력받은 사원 이름을 변수에 저장한다. let 사원1 = prompt()
    // 3. 1명의 사원 이름을 입력받는다.        let 사원2 = prompt()
    // 4. 입력받은 사원이름을 변수에 저장한다.         let tableHTML = `<table>~~<table>`
    // 5. HTML형식의 문자로  출력할 변수와 같이 구성한다 document.write 출력기능 , 반환값 :x
    // 6. 구성된 hTML를 HTML문서에 출력한다.
    //





/* let 입력 = prompt('사원이름을 적어주세요')


console.log(입력);    이걸 왜 넣었을까?  이걸 넣고 엉킴


let inputHTML = `<h3> 이름: ${log}</h3>`  이걸 넣고 엉킴

document.write(inputHTML)      출력이 무너짐
 */

let 사원1 =prompt(); // [1][2] prompt()함수를 사용하여 입력받은 값을 변수에 대입했다.
let 사원2 =prompt(); // [1][2] prompt()함수를 사용하여 입력받은 값을 변수에 대입했다.
let 출력할내용 = `<table>
                    <tr>
                    <th> 번호 </th><th> 사원명 </th>
                    </tr>
                    <tr>
                    <td> 1 </td><td> ${사원1}</td>
                    </tr>
                    <tr>
                    <td> 2 </td> <td> ${사원2} </td>
                    </tr>
                </table>`

document.write(출력할내용)