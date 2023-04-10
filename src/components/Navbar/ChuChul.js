// let code = [];
// let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`];

// const getRandomIndex = (min, max) => {
//     return Math.floor(Math.random() * (max + 1 - min)) + min;
// }

const ChuChul = () => {
    let code = [];
    let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`];
    let hexColour;

    const getRandomIndex = (min, max) => {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    hexColour = `#`;

    while (code.length <= 5) {
        let randomHexCode = hexCode[getRandomIndex(0, 8)];
        hexColour += randomHexCode;
        code.push(randomHexCode);
    };

    return hexColour;
}
export default ChuChul;