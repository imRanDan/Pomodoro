workPeriod = 25
restPeriod = 5
seconds = 60

workMinutes = workPeriod - 1
restMinutes = restPeriod - 1

let RemainingTime = () =>{
    seconds = seconds - 1
    if(seconds === 0){
        workMinutes = workMinutes - 1
        if(workMinutes === -1){
            workMinutes = breakMinutes
}
        seconds = 60
}
}
let timer = setInterval(RemainingTime , 1000)
