let hour,minute,second,fastSecond,timer;

function  init() {
    hour = 0;
    minute = 0;
    second = 0;
    fastSecond = 0;
    timer = true;
    
    document.getElementById('fastSecond').textContent = '0';
    document.getElementById('second').textContent = '0';
    document.getElementById('hour').textContent = '0';
    document.getElementById('minute').textContent = '0';
};
 
function stopWatch() {

    if(timer === true) {
    
        fastSecond++;
    
        if(fastSecond > 59) {
            second++;
            fastSecond = 0;

            if(second > 59) {
                minute++;
                second = 0;

                if(minute > 59) {
                    hour++;
                    minute = 0;
                }
            }
        }
    }
    document.getElementById('fastSecond').textContent = fastSecond;
    document.getElementById('second').textContent = second;
    document.getElementById('minute').textContent = minute;
    document.getElementById('hour').textContent = hour;
};

function stop() {
    timer = false;
};


function lapfxn() {

    hour = document.getElementById('hour').textContent;
    minute = document.getElementById('minute').textContent;
    second = document.getElementById('second').textContent;
    
console.log(hour);
console.log(minute);
console.log(second);

    let newLap = document.createElement('div');
    newLap.classList.add('lap-1');
    newLap.classList.add('d-flex');
    newLap.classList.add('justify-content-center');
    newLap.classList.add('border');
    newLap.classList.add('border-danger');
    newLap.classList.add('mb-2');
        

    newLap.innerHTML = `<p class="hr mr-1">${hour}</p>:
            <p class="min ml-1 mr-1">${minute}</p>:
            <p class="sec ml-1">${second}</p>`;

        document.querySelector('.add-laps').appendChild(newLap);    
        
}

function clearLap() {
    
    let laps = document.querySelector('.add-laps');    

    while(laps.hasChildNodes()) {
        laps.removeChild(laps.firstChild);
    }
}


document.getElementById('start').addEventListener('click',()=> {
    init();
    setInterval(stopWatch, 10);
});

document.getElementById('restart').addEventListener('click',init);
document.getElementById('stop').addEventListener('click',stop);

document.getElementById('lap').addEventListener('click',lapfxn);

document.getElementById('clearlap').addEventListener('click',clearLap);









// document.getElementById('second')
// document.getElementById('stop')
// document.getElementById('restart')
// document.getElementById('lap')

