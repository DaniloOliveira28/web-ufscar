const testArea = document.querySelector("#test-area");
const gabaritoArea = document.querySelector("#origin-text")
const theTimer = document.querySelector(".timer");
const testWrapper = document.querySelector(".test-wrapper");
const resetButton = document.querySelector("#reset");

const GABARITOS = [
    "A chuva cai suavemente, tocando a terra com carinho, trazendo vida e renovação a cada gota que desce do céu.",
    "Em dias chuvosos, a natureza canta uma melodia serena, convidando-nos a refletir e apreciar sua beleza.",
    "Cada pingo de chuva conta uma história, unindo-se para criar rios, alimentar florestas e abraçar a terra."
]

timer = [0,0,0,0];
var interval;
var timerRunning = false;

function spellCheck() {
    const textoInseridoText = testArea.value;
    const gabaritoText = gabaritoArea.innerText;

    if (textoInseridoText == gabaritoText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textoInseridoText == gabaritoText) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Adiciona zero inicial aos números <= 9 (apenas para estética):
function leadingZero(time) {
    if(time <= 9){
        time = "0" + time;
    }
    return time;
}

// Executa um timer padrão de minuto / segundo / centésimos:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function start(){
    let textEnteredLength = testArea.value.length;
     if (textEnteredLength === 0 && !timerRunning) {
         timerRunning = true;
         interval = setInterval(runTimer, 10);
     }
 }

// Função de recomeçar:
async function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";

    const gabaritoValue = await getGabarito()
    console.log('xxxx_gabarito', gabaritoValue)
    gabaritoArea.innerText = gabaritoValue;
}

function loadGabarito() {

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  
testArea.addEventListener("keyup", spellCheck, false);
testArea.addEventListener("keypress", start, false);
resetButton.addEventListener("click", reset, false);

async function getGabarito()  {
    const defer = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(GABARITOS[getRandomInt(3)])
        }, 2000);
    });

    return defer
        .then((data) => {
            return data;
        })
}

window.addEventListener('load', async (event) => {

    console.log('The page has fully loaded');
    const gabaritoValue = await getGabarito()
    console.log('xxxx_gabarito', gabaritoValue)
    gabaritoArea.innerText = gabaritoValue;
});