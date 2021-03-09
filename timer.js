//Horas, minutos e segundos HTML
var hours$ = document.getElementById("hours")
var minutes$ = document.getElementById("minutes")
var seconds$ = document.getElementById("seconds")

//Output de informações
var output = document.getElementById("output")

//Opções do <select> "hours"
for (var cont = 0; cont <= 48; cont += 1) {
    hours$.innerHTML += `<option value="${cont}">${cont}</option>`
}
//Opções do <select> "minutes"
for (var cont = 0; cont <= 59; cont += 1) {
    minutes$.innerHTML += `<option value="${cont}">${cont}</option>`
}
//Opções do <select> "seconds"
for (var cont = 1; cont <= 59; cont += 1) {
    seconds$.innerHTML += `<option value="${cont}">${cont}</option>`
}

//Inicialização da contagem
function startCountDown(){
    //Horas, minutos e segundos Inteiros
    var hours = hours$.value
    var minutes = minutes$.value
    var seconds = seconds$.value

    //Intervalo de 1 segundo
    var interval = setInterval(function(){

        //Output do temporizador
        output.childNodes[1].innerHTML = `${hours}:${minutes}:${seconds}`

        //Mecanismo principal do temporizador
        if (seconds == 0) {
            if (minutes == 0) {
                if (hours == 0) {
                    alert("Tempo esgotado!")
                    clearInterval(interval)

                } else {
                    hours -= 1
                    minutes = 59
                    seconds = 59
                }
            } else {
                minutes -= 1
                seconds = 59
            }
        } else {
            seconds -= 1
        }
        
    }, 1000)

}
