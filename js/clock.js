const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
// interval : 반드시 일어나야하는것. 매 2초마다 라곻 설정하면 2초마다 해당 함수가 실행되어야함
// setInterval(실행할 함수, ms)

// setTimeout(실행할 함수, ms)
getClock();
setInterval(getClock, 1000);
