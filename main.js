let press;
document.addEventListener("keydown", function (event) {
    if (event.code === 'KeyA') {
        let audio = new Audio("Audio/A.mp3");
        audio.play();
        press = document.getElementById("A");
        press.style.backgroundColor= "#a8d0db";

    }
    else if (event.code === 'KeyS') {
        let audio = new Audio("Audio/S.mp3");
        audio.play();
        press = document.getElementById("S");
        press.style.backgroundColor= "#a8d0db";

    }
    else if (event.code === 'KeyD') {
        let audio = new Audio("Audio/D.mp3");
        audio.play();
        press = document.getElementById("D");
        press.style.backgroundColor= "#a8d0db";

    }
    else if (event.code === 'KeyF') {
        let audio = new Audio("Audio/F.mp3");
        audio.play();
        press = document.getElementById("F");
        press.style.backgroundColor= "#a8d0db";

    }
    else if (event.code === 'KeyG') {
        let audio = new Audio("Audio/G.mp3");
        audio.play();
        press = document.getElementById("G");
        press.style.backgroundColor= "#a8d0db";

    }
    else if (event.code === 'KeyH') {
        let audio = new Audio("Audio/H.mp3");
        audio.play();
        press = document.getElementById("H");
        press.style.backgroundColor= "#a8d0db";

    }
    else if (event.code === 'KeyJ') {
        let audio = new Audio("Audio/J.mp3");
        audio.play();
        press = document.getElementById("J");
        press.style.backgroundColor= "#a8d0db";
    }
    else if (event.code === 'KeyW') {
        let audio = new Audio("Audio/W.mp3");
        audio.play();
        press = document.getElementById("W");
        press.style.backgroundColor= "#2b4570";
    }
    else if (event.code === 'KeyE') {
        let audio = new Audio("Audio/E.mp3");
        audio.play();
        press = document.getElementById("E");
        press.style.backgroundColor= "#2b4570";
    }
    else if (event.code === 'KeyT') {
        let audio = new Audio("Audio/T.mp3");
        audio.play();
        press = document.getElementById("T");
        press.style.backgroundColor= "#2b4570";
    }
    else if (event.code === 'KeyY') {
        let audio = new Audio("Audio/Y.mp3");
        audio.play();
        press = document.getElementById("Y");
        press.style.backgroundColor= "#2b4570";
    }
    else if (event.code === 'KeyU') {
        let audio = new Audio("Audio/U.mp3");
        audio.play();
        press = document.getElementById("U");
        press.style.backgroundColor= "#2b4570";
    }
    else {
        console.log("Warning");
    }
})

document.addEventListener("keyup", function (event) {
    if (event.code === 'KeyW' || event.code === 'KeyE'|| event.code === 'KeyT'
        || event.code === 'KeyY'|| event.code === 'KeyU') {
        press.style.backgroundColor = "black";
    }
    else {
        press.style.backgroundColor = "white";
    }
})