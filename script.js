let speech = new SpeechSynthesisUtterance(); 

//button for play 
document.querySelector("button").addEventListener("click",() => {
    speech.text = document.querySelector("textarea").value;
    speechSynthesis.speak(speech); 
})

//enable different voice model 
let voices = []; 

let voiceSelect = document.querySelector("select"); 
speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; 

    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i))
};

//select enabled voice model 

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]; 
})