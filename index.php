<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Oclock</title>
</head>
<body>
    <section class="container">
        <!-- CLOCK -->
        <div id="clock"></div>
        <input name="alarmTime" type="datetime-local">
        <h5>Descriptif Alarm:</h5>
        <textarea name="alarmNote" id="alarmNote"></textarea>
        <div class="controls">
            <button id="btnSetAlarm" class="btn set-alarm">Set alarm</button>
            <button id="btnUnsetAlarm" class="btn clear-alarm">Clear alarm</button>
        </div>
        <h5>My Alarms:</h5>
        <div class="MyAlarms">
            <span id="myAlarms"><span>
        </div>

        <div class="containerChronoTimer">
            <!-- CHRONO -->
            <section class="chrono">
                <h3>My Chrono</h3>
                <div class="timeChrono">
                    <span id="H">0 h</span>
                    <span id="M">0 m</span>
                    <span id="S">0 s</span>
                    <span id="MS">0 ms</span>
                </div>

                <button class='btnChrono' id="chronoStart">Start</button>
                <button class='btnChrono' id="chronoStop">Stop</button>
                <button class='btnChrono' id="chronoSave">Save</button>
                <button class='btnChrono' id="chronoReset">Reset</button>

                <h5>My Times:</h5>
                <div class="MyChronos">
                    <span id="myTimes"><span>
                </div>
                <br>
            </section>

            <!-- TIMER -->
            <section class="timer">
                <h3>My timer</h3>
                <div class="containerTimer">
                    <div class="timerInput">
                        <p id="hour-label" class="label">Hours</p>
                        <input id="hours" type="number" max="99" min="0" value="0" class="time">
                        <p id="p1" class="semicolon">:</p>
                        <p id="min-label" class="label">Minutes</p>
                        <input id="minutes" type="number" max="60" min="0" value="0" class="time">
                        <p id="p2" class="semicolon">:</p>
                        <p id="sec-label" class="label">Seconds</p>
                        <input id="seconds" type="number" max="60" min="0" value="0" class="time">
                    </div>
                    <div class="timerButton">
                        <button id="timerStart" class="btn">Start</button>
                        <button id="timerReset" class="btn">Reset</button>
                    </div>
                </div>
            </section>
        </section>
    </div>
</body>
</html>