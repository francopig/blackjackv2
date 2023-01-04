
/**
 * Toma una carta y retorna su valor numérico. Ej: 5H -> 5 | JK -> 10
 * @param {String} carta 
 * @returns  {number} el valor numérico de la carta
 */
export const valorCarta = ( carta ) =>{

    //quitamos la última letra
    const valor = carta.substring(0, carta.length-1);
    let puntos = 0;

    return  (valor === 'A') ? 11  :
            (isNaN( valor )) ? 10 : valor * 1;  //Se multiplica por *1 para convertirlo a number
}