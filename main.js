// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnReset = document.querySelector("#btnReset");
const img1 = document.querySelector("#cookie");

const verse = ["O Senhor é meu pastor e nada me faltará", "Jesus te ama", "Tenha um encontro com Deus!", "Se Deus é por nós quem será contra nós?","Não existe sorte, existe fé",
"O Senhor é meu pastor e nada me faltará", "O sangue de Jesus te lava de todo pecado", "Jesus é o caminho a verdade e a vida", 
"Para tudo há uma ocasião, e um tempo para cada propósito debaixo do céu", "Nada é impossível para Deus", "Diga eis-me aqui para Deus!", "Vá para a igreja m3ma!"];

let randomNumber = Math.round(Math.random() * 10);

// Eventos

img1.addEventListener('click', handleImg1Click);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleResetEnter);

// Funções

function handleImg1Click() {
  toggleScreen();
  sortVerse();
}

function handleResetClick() {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
}


function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleResetEnter(event) {
    if(event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    } else if(event.key == 'Enter' && screen2.classList.contains('hide')) {
        handleImg1Click()
    }
}

function sortVerse(){
    screen2.querySelector("p").innerText = verse[randomNumber];
}