//export const pascaltosnake = (entry) => {
    function PascalToSnake(word) {
        word = word.split(/(?=[A-Z])/).join('_').toLowerCase();
        return renderPascal;
    }
    
//}
console.log(PascalToSnake("Test Pascal To SNAKE"))