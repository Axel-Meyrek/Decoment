const editorsLine = document.querySelectorAll('.editorLine')

const attributesName = document.querySelectorAll('.attributesName')

const attributesType = document.querySelectorAll('.attributesType')

const attributesDescription = document.querySelectorAll('.attributesDescription')

editorsLine.forEach(editorLine => editorLine.textContent = `function sumar(num1, num2) {
    return num1 + num2;
}
// Ejemplo de uso:
var resultado = sumar(5, 3);
console.log(resultado); // Imprimirá 8
`)

attributesName.forEach(attribute => attribute.value = 'nombre')
attributesType.forEach(attribute => attribute.value = 'String')
attributesDescription.forEach(attribute => attribute.value = 'Un poco de texto')