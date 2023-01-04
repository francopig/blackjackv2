import { valorCarta } from "./valor-carta";

/**
 * Acumula los puntos del jugador y actualiza el puntaje en el HTML
 * puntosJugador[0] es el primer jugador y el último es la PC
 * @param {String} carta 
 * @param {Number} turno jugador1 -> 0 | computadora -> última
 * @param {Array<Number>} puntosJugadores 
 * @param {Array <HTMLElement>} puntosHTML
 * @returns {Number} Cantidad de puntos del jugador de turno 
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) =>{

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);

    //Se actualizan los puntos en el html
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}