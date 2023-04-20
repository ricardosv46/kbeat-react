export const trimChain = (cadena = "", numberCharacters = 195) => {
    if (cadena.length > numberCharacters) {
        return cadena.substring(0, numberCharacters) + "...";
    }
    return cadena;
};
