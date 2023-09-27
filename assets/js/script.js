// seleciona elementos do HTML
const loginButton = document.getElementById("Login");
const registerButton = document.getElementById("Register");
const hideButtonsButton = document.getElementById("submitButton");

// adiciona um evento de clique ao botão de login
loginButton.addEventListener("click", function() {
  loginButton.classList.add("hidden");
  registerButton.classList.add("hidden");
  localStorage.setItem("buttonsHidden3", "true");
});

// adiciona um evento de clique ao botão "Ocultar"
hideButtonsButton.addEventListener("click", function() {
  const buttonsToHide = document.querySelectorAll("#Login, #Register");
  buttonsToHide.forEach(function(button) {
    button.classList.add("hidden");
  });
  localStorage.setItem("buttonsToHide", "true");
});

// função para verificar se os botões devem permanecer ocultos ao carregar a página
function buttonsHidden3() {
  const buttonsHidden3 = localStorage.getItem("buttonsHidden3");
  if (buttonsHidden3 === "true") {
    loginButton.classList.add("hidden");
    registerButton.classList.add("hidden");
  }
  
  const buttonsToHide = localStorage.getItem("buttonsToHide");
  if (buttonsToHide === "true") {
    const buttons = document.querySelectorAll("#Login, #Register");
    buttons.forEach(function(button) {
      button.classList.add("hidden");
    });
  }
}

// chama a função de verificação dos botões ocultos ao carregar a página
buttonsHidden3();

/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
