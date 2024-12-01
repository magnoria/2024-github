// 매개변수 :parameter ,매개
// 인자값/ 인수 : 인자값을 인수에 넣겠다.
//매개변수 함수 호출시 인자값을 변수에 대입되는 변수 





//[1] 매개변수 x, 반환값 x
function func1(){console.log('func1 execute');}

//[2] 매개변수 o, 반환값 x  console.log() 등
function func2(x,y) {console.log(`func2 execute ${x+y}`);}

//[3] 매개변수 o ,반환값o prompt() 등
function func3(x,y) {
    console.log('func3 execute');
    let result = x+y;
    return result;

}

//[4] 매개변수 x, 반환값 o        -----처음 보는 함수는 매개변수 반환값을 확인해야한다.
function func4(){ console.log(`func4 execute`); return 10;}


// (2) 함수 호출
func1() //인자값도 없고 리턴값도 없는 함수 호출/사용
func2(1,2) // 인자값이 1과 2 가있고 리턴값은 없는 함수 호출 /사용
func3(1,2) // 인자값이 1과 2 가 있고 리턴값은 있는 함수 호출/사용
let func3(1,2); //함수 결과를 다음 코드에서 사용 할 예정이라면 변수에 대입
let func4();