const audiocontext=window.AudioContext || window.webkitAudioContext;
const audioctx= new audiocontext();
const audioelement = document.querySelector('audio');
const playbtn = document.querySelector('button');
const volsli = document.querySelector('.volume');
const audiosource = audioctx.createMediaElementSource(audioelement);



// fuction for playbuttton
playbtn.addEventListener('click',function(){
    if(audioctx.state === 'suspended'){
        audioctx.resume(); // for autoplay function.
    }
    if(this.getAttribute('class') === 'paused'){
        audioelement.play();
        this.setAttribute('class','play');
        this.textContent='Paused'; // for play when paused
    }else if(this.getAttribute('class') === 'play'){
        audioelement.pause();
        this.setAttribute('class','paused');
        this.textContent='Play'; // for pause in between
    }
});
// when audio ends

audioelement.addEventListener('ended',function(){
    playbtn.setAttribute('class','paused');
    playbtn.textContent ='Play';
});

// for volume gauge

const gainnode = audioctx.createGain();
volsli.addEventListener('input',function(){
    gainnode.gain.value = this.value;
});

// finally connect
audiosource.connect(gainnode).connect(audioctx.destination);