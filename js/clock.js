const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
// interval : 반드시 일어나야하는것. 매 2초마다 라곻 설정하면 2초마다 해당 함수가 실행되어야함
// setInterval(실행할 함수, ms)

// setTimeout(실행할 함수, ms)
getClock();
setInterval(getClock, 1000);
