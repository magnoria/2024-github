
let out = '';



for(let line =1; line <= 5; line++) {

    for(let star=1 ; star <= line; star++){ /* 여기서 star++를 line++로 잡아서 무한루프에 빠졌었음
        반복문의 제어변수는 star 이지만 내부에서 line++가 실행되었고 이로인해 
        star값이 1에서 멈춘 채로 조건 true <=5가 항상 참(true)가 되어 무한루프가 발생했다. */
        out += '*'
    }


 out +='\n'
    
}
console.log(out)


