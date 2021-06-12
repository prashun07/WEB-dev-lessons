var watch = document.getElementById('stopwatch');
var  start =false;
var hr = 0;
var  min = 0;
var  sec = 0;

function startwatch() {
    if (start == false)
    {
        start = true;
        console.log("clicked");
    startcycle();
}
}
function stopwatch()
{
    if (start == true) { start = false; }
}

function startcycle()
{
    if (start == true) {
        hr = parseInt(hr);
        min = parseInt(min);
        sec = parseInt(sec);
        sec = sec + 1;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (sec < 10 || sec == 0) { sec = '0' + sec; }
        if (min < 10 || min == 0)
            {min = '0' + min;}
        if (hr < 10 || hr == 0) { hr = '0' + hr; }
        watch.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("startcycle()", 1000);
            
    }
}
function resetwatch() {
    watch.innerHTML = "00:00:00";
    start = false;
    sec = 0;
    min = 0;
    hr = 0;
}