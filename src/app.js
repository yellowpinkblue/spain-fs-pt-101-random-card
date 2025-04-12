import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//variables
const palos = ['♦','♥','♠','♣'];
const numeroCartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


const cartas = document.querySelector('#cartas');
const paloCabeza = document.querySelector('#paloCabeza');
const numCarta = document.querySelector('#numCarta');
const paloFooter = document.querySelector('#paloFooter');

//funciones

const randomCardMaker = (arr) => Math.floor(Math.random() * arr.length);
const randomPalosMaker = (arr) => Math.floor(Math.random() * arr.length);
const establecerValor = arr => arr[randomCardMaker(arr), randomPalosMaker(arr)];
const paloquetoca = establecerValor(palos);
let colorquesera = 'black'
if (paloquetoca == '♦' || paloquetoca == '♥') {
  colorquesera = 'red';
}

const generaCartaRandom = () => {
  paloCabeza.innerHTML = `${paloquetoca}`;
  numCarta.innerHTML = `${establecerValor(numeroCartas)}`;
  paloFooter.innerHTML = `${paloquetoca}`;
  paloCabeza.style.color = `${colorquesera}`;
  paloFooter.style.color = `${colorquesera}`;
  numCarta.style.color = `${colorquesera}`;
};

//eventos
window.onload = function() {
  //write your code here
  // const numero1 = 0;//crear numero al azar (1-4);
  // const numero2 = 0;//crear numero al azar (1-10);
  generaCartaRandom()
};

