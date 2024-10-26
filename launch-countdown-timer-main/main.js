let daysElement = document.getElementById("days") 
let hoursElement = document.getElementById("hours") 
let minutesElement = document.getElementById("minutes") 
let secondsElement = document.getElementById("seconds") 



const countdown = () => {
    const tanggalRilis = new Date("may 12, 2024 10:00:00").getTime()
    const now = new Date().getTime()

    let waktuTengah = tanggalRilis - now
    console.log(waktuTengah)
    
    let seconds = 1000
    let minutes = seconds * 60
    let hours = minutes * 60
    let days = hours * 24

     let daysTime = Math.floor(waktuTengah / days)
     console.log(daysTime)
     let hoursTime = Math.floor((waktuTengah % days) / hours)
     console.log(hoursTime)
     let minutesTime = Math.floor((waktuTengah % hours) / minutes)
     console.log(minutesTime)
     let secondsTime = Math.floor((waktuTengah % minutes) / seconds)
     console.log(secondsTime)

     daysTime = daysTime < 10 ? "0" + daysTime : daysTime
     hoursTime = hoursTime < 10 ? "0" + hoursTime : hoursTime
     minutesTime = minutesTime < 10 ? "0" + minutesTime : minutesTime
     secondsTime = secondsTime < 10 ? "0" + secondsTime : secondsTime

     daysElement.innerHTML = daysTime
     hoursElement.innerHTML = hoursTime
     minutesElement.innerHTML = minutesTime
     secondsElement.innerHTML = secondsTime
    }
    
    setInterval(() => {
        countdown()
            secondsElement.classList.add("animasi")
            minutesElement.classList.add("animasi")
            hoursElement.classList.add("animasi")
            daysElement.classList.add("animasi")
}, 1000)