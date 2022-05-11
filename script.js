window.addEventListener("DOMContentLoaded", (event) => {

    /*////////CLOCK////////*/
    var display = document.querySelector('#clock');
   
    let alarmTime = null;
    let alarmTimeout = null;
    let myTimes = [];
    let myAlms = []; 

    function updateTime(){
        const date = new Date();
        const hour = formatTime(date.getHours());
        const minutes = formatTime(date.getMinutes());
        const seconds = formatTime(date.getSeconds());

        display.innerHTML =`${hour} : ${minutes} : ${seconds}`; 

    }
    setInterval(updateTime, 1000);

    function formatTime(time) {
        if (time < 10){
            return '0' + time;
        }
        return time;
    }

    const setAlarm = document.getElementsByName("alarmTime");

    console.log(setAlarm);

    setAlarm[0].addEventListener("change", (e) => {
        console.log(e)
            alarmTime = e.target.value;
            console.log(alarmTime);
    });
    
    const setAlarmTime = document.getElementById("btnSetAlarm");

    var alarmNote = document.getElementById("alarmNote");
    

    setAlarmTime.addEventListener("click", (e) => {
        if (alarmTime){
            const current = new Date();
            const timeToAlarm = new Date(alarmTime);
            console.log(timeToAlarm);

            if(timeToAlarm > current){
                let timeout = timeToAlarm.getTime() - current.getTime();
                alarmTimeout = setTimeout(()=> alert(alarmNote.value), timeout);
                alert("Alarm Set");
                myAlms.push(`${timeToAlarm} : ${alarmNote.value}`);
            }
        }
       
        myAlms.forEach((e) => {
            spanAlarms = document.getElementById("myAlarms");
            spanAlarms.innerHTML += e + '<br>';
            console.log(spanAlarms);
        })

        myAlms = []; 
    });

   

   
    

    const unsetAlarm = document.getElementById("btnUnsetAlarm");

    unsetAlarm.addEventListener("click", (e) => {
        if(alarmTimeout){
            clearTimeout(alarmTimeout);
            alert('Alarm unset');
        }
    });



    /*/////////CHRONO//////////*/
    var H = 0;
    var M = 0;
    var S = 0;
    var MS = 0;

    var intervalMS;
    var intervalS;
    var intervalM;
    var intervalH;

    function setMiliseconds(){
        if(MS == 999){
            MS = 0;
        }
        MS += 1
        document.getElementById("MS").innerHTML= MS + 'ms';
    }

    function setSeconds(){
        if(S == 59){
            S = 0;
        }
        S += 1
        document.getElementById("S").innerHTML= S + 's';
    }

    function setMinuts(){
        if(M == 59){
            M = 0;
        }
        M += 1
        document.getElementById("M").innerHTML= M + 'm';
    }

    function setHours(){
        if(H == 23){
            H = 0;
        }
        H += 1
        document.getElementById("H").innerHTML= H + 'h';
    }

   var chronoStart = document.getElementById("chronoStart");
   chronoStart.addEventListener("click", (e)=>{
        intervalH = setInterval(setHours, 360000);
        intervalM = setInterval(setMinuts, 60000);
        intervalS = setInterval(setSeconds, 1000);
        intervalMS = setInterval(setMiliseconds, 1);
   });

   var chronoStop = document.getElementById("chronoStop");
   chronoStop.addEventListener("click", (e)=>{
        clearInterval(intervalMS); 
        clearInterval(intervalS); 
        clearInterval(intervalM); 
        clearInterval(intervalH);   
   });

   var chronoReset = document.getElementById("chronoReset");
   chronoReset.addEventListener("click", (e)=>{
        clearInterval(intervalMS); 
        clearInterval(intervalS); 
        clearInterval(intervalM); 
        clearInterval(intervalH); 
        let MS = 0;
        let S = 0;
        let M = 0;
        let H = 0;

        document.getElementById("MS").innerHTML= MS + ' ms';
        document.getElementById("S").innerHTML= S + ' s';
        document.getElementById("M").innerHTML= M + ' m';
        document.getElementById("H").innerHTML= H + ' h';

        spanTimes = document.getElementById("myTimes");
        spanTimes.innerHTML = '';

   });

   var chronoSave = document.getElementById("chronoSave");
   chronoSave.addEventListener("click", (e)=>{
        clearInterval(intervalMS); 
        clearInterval(intervalS); 
        clearInterval(intervalM); 
        clearInterval(intervalH); 

        myTimes = [];

        myTimes.push(`${H}h : ${M}m : ${S}s : ${MS}ms`);

        myTimes.forEach((element) => {
            spanTimes = document.getElementById("myTimes");
            spanTimes.innerHTML += element + '<br>';
            console.log(element);
        })
   })

  
   /*//////MINUTEUR///////*/
   //récupérer les variables
   var start = document.getElementById("timerStart");
   var reset = document.getElementById("timerReset");

   var h = document.getElementById("hours");
   var m = document.getElementById("minutes");
   var s = document.getElementById("seconds");

   var startTimer;
   //fonction qui gere la decrémentation de h,m et s
   function timer(){
        if(h.value == 0 && m.value == 0 && s.value == 0){
            h.value = 0;
            m.value = 0;
            s.value = 0;
            //alert("ring");
        }
        else if(s.value != 0){
            s.value--;
        }
        else if(m.value != 0 && s.value == 0){
            s.value = 59;
            m.value--;
        }
        else if(h.value != 0 && m.value == 0){
            m.value = 60;
            h.value--;
        }
    
   }

   //fonction start qui lance la fonction de dexrémentation
   start.addEventListener("click",  (e) =>{
        startTimer = setInterval(timer, 1000)
   });


   //fonction reset qui stop et clear le chrono
   reset.addEventListener("click",  (e) => {
        clearInterval(startTimer);
        h.value = 0;
        m.value = 0;
        s.value = 0;
   });

});