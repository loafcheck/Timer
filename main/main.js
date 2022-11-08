const countDownDate = new Date("Nov 8, 2024 15:37:25").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML =  + hours + ":"
+ minutes + ": " + seconds ;
    }, 1000);    
