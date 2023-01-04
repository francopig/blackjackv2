import _ from "underscore";


/**
 * Crea una nueva baraja y la retorna mezclada
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} deck: el deck ya mezclado
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales) =>{

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        new Error('El parámetro TiposDeCarta es obligatorio como un arreglo de string');

    if( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        new Error('El parámetro TiposDeCarta es obligatorio como un arreglo de string');

    let deck = [];
    
    for( let i = 2; i <= 10; i++ ){

        for( let tipo of tiposDeCarta ){
            deck.push( i + tipo);
        }
    }

    for(let tipo of tiposDeCarta){
        for(let especial of tiposEspeciales){
            deck.push(especial + tipo);
        }
    }
    
    return  _.shuffle(deck);//shuffle viene de underscore y sirve para mezclar
}
