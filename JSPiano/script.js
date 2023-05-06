const letters = ["q","w","e","u","i","o","a","s","d","h","j","k","z","x","c","b","n","m"];
const notes = ["./assets/piano-mp3/A3.mp3",
"./assets/piano-mp3/A4.mp3",
"./assets/piano-mp3/A5.mp3",
"./assets/piano-mp3/B1.mp3",
"./assets/piano-mp3/B5.mp3",
"./assets/piano-mp3/B6.mp3",
"./assets/piano-mp3/Ab1.mp3",
"./assets/piano-mp3/Ab2.mp3",
"./assets/piano-mp3/C2.mp3",
"./assets/piano-mp3/C4.mp3",
"./assets/piano-mp3/C6.mp3",
"./assets/piano-mp3/C8.mp3",
"./assets/piano-mp3/D3.mp3",
"./assets/piano-mp3/D7.mp3",
"./assets/piano-mp3/Db4.mp3",
"./assets/piano-mp3/Db8.mp3",
"./assets/piano-mp3/E1.mp3",
"./assets/piano-mp3/E7.mp3",
];

const pianoKeys = document.getElementsByClassName("pianoKey");
for(let i = 0; i<letters.length;i++){
    pianoKeys[i].innerText = letters[i];
    document.addEventListener("keypress",(event)=>{
        if(event.key == letters[i]){
            pianoKeys[i].style = `border: 3px solid yellow`
            console.log(letters[i])
            var audio = new Audio(notes[i]);
            audio.play();
        }
    })
    document.addEventListener("keyup",(event)=>{
        if(event.key == letters[i]){
            pianoKeys[i].style = `border: 2px solid black`
            console.log(letters[i])
        }
    })
}

