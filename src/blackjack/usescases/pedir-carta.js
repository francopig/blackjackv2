

/**
 *  Toma la última carta del mazo y la retorna
 * @param {Array <String>} deck: Arreglo que contiene cada una de las cartas
 * @returns {String} carta: es la última carta del mazo
 */
export const pedirCarta = ( deck ) =>{

    if( !deck || deck.length === 0){
        throw new Error('No existe el deck o no tiene cartas');
    }
    let carta = deck.pop();
    return carta;
}