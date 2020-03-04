const btnReco = document.getElementById("btnReco");
const txtResponse = document.getElementById("txtResponse").getElementsByTagName("p")[0];
const txtLog = document.getElementById("txtLog");

let recognition;


try {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";

} catch {
    console.log("Browser not supported");
    btnReco.disabled = true;
}

recognition.onstart = function() {
    txtLog.innerText = ("Listening...");
}

recognition.onspeechend = function() {
    txtLog.innerText = ("Stop Listening.");
}

recognition.onerror = function(e) {
    if(e.error == 'no-speech') {
        txtLog.innerText = ('No speech was detected. Try again.');  
    };
}

recognition.onresult = function(e) {
    let output = e.results[0][0].transcript;
    txtResponse.innerText = output;

}


btnReco.onclick = function (e) {
    recognition.start();
}