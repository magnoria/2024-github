
let oficer1 = { no : 1 , name : '유재석', birth: '1998-01-20'}
let oficer2 = { no : 2 , name : '유희석', birth: '1998-01-20'}

let ofice = []/*사원번호, 이름, 생년월일 */
ofice.push(oficer1)
ofice.push(oficer2)

//console.log(ofice);

let point1 = {no : 1, rating : '상', year : '2020년'}
let point2 = {no : 2, rating : '하', year : '2020년'}
let point3 = {no : 3, rating : '중', year : '1018년'} //문자열을 숫자처럼 넣었음 그래서 오류남
//console.log(point1);



let rated = []/* 사원점수 */
rated.push(point1);
rated.push(point2);
rated.push(point3);

let no = 3; /* 사원번호 */

function regi() {

    let no = document.querySelector('.no').value;
    let name = document.querySelector('.name').value;
    let birth = document.querySelector('.birth').value;
    console.log(no);
    console.log(name);
    console.log(birth);
    


    let info = {
        사원번호 : no ,
        사원명 : name ,
        생년월일 : birth
    }
    
    ofice.push(info);
    console.log(ofice);
    
    
    no++;

}
