import _ from 'underscore';
import {crearDeck, pedirCarta, turnoComputadora, crearCarta, acumularPuntos} from './usescases';

const miModulo = (()=>{
  'use strict';
  
  //Inicializaciones
  let deck = [];
  const tipos = ['C','D','H','S'];
  const especiales = ['A','J','Q','K'];
  let puntosJugadores = []
  let agarradas = 0;

  //Referencias HTML
  const btnPedir            = document.querySelector('#btnPedir');
  const btnDetener          = document.querySelector('#btnDetener');
  const btnNuevo            = document.querySelector('#btnNuevo');
  const puntosHTML          = document.querySelectorAll('small');
  const divCartasJugadores  = document.querySelectorAll('.divCartas')
  
  deck = crearDeck( tipos, especiales );

  const inicializarJuego = ( numJugadores = 2 ) => {
      
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
      for( let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
      }

      puntosHTML.forEach( elem => elem.innerText = 0);

      divCartasJugadores.forEach(elem => elem.innerHTML = '');
      
      btnPedir.disabled = false;
      btnDetener.disabled = false;

  }

  //eventos
  btnPedir.addEventListener('click',()=>{

      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML );
      crearCarta( carta, 0, divCartasJugadores );
      agarradas++;
      
      //si tiene +2 cartas puede cortar
      if(agarradas >= 2){
          btnDetener.disabled = false;
      }

      //En caso de que se pase
      if( puntosJugador > 21){

          console.log('Te pasaste de 21');
          btnPedir.disabled = true; //desactiva el botón
          btnDetener.disabled = true;
          turnoComputadora( puntosJugadores, puntosHTML,  deck , divCartasJugadores); // cuando termina el jugador juega la pc

      }else if(puntosJugador === 21){
          
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugadores, puntosHTML,  deck , divCartasJugadores);
      }

  });

  btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(  puntosJugadores, puntosHTML,  deck , divCartasJugadores);
  });

  btnNuevo.addEventListener('click', () => {

      inicializarJuego();
      btnDetener.disabled = true;
      console.clear();
      agarradas = 0;
      
  });

  return{
      nuevoJuego: inicializarJuego
  };

})();




