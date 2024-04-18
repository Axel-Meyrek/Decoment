export const showEditorGeneral = () => {
    const $modalEditGeneral = document.querySelector('#modalEditGeneral')
    $modalEditGeneral.classList.toggle('active')
}

export const showEditorFunction = () => {
    const $modalEditFunction = document.querySelector('#modalEditFunction')
    $modalEditFunction.classList.toggle('active')
}

export const addEventEditors = () => {
    const editors = document.querySelectorAll('.editorLine')
    editors.forEach(editor => {
        editor.addEventListener('click', showEditorGeneral)
    })
}

const renderFunction = () => {
    return (
        `<!-- FUNCTION -->
        <div class="sectionFunction">
            <h2 class="subtitle">FUNCIÓN</h2>
            <pre><code class="language-javascript editorLine"></code></pre>
        </div>`
    )
}

const renderDescription = () => {
    return (
        `<!-- DESCRIPTION -->
        <div class="sectionDescription">
            <h2 class="subtitle">DESCRIPCIÓN</h2>
            <textarea class="editorDescription"></textarea>
        </div>`
    )
}

const renderAttributes = () => {
    return (
        `<!-- ATTRIBUTES -->
        <div class="sectionAttributes">
            <h2 class="subtitle">ATRIBUTOS</h2>
            <div class="containerAttributes">
                <input class="attributesName" type="text">
                <input class="attributesType" type="text">
                <input class="attributesDescription" type="text">
            </div>
            <div class="containerAttributes">
                <input class="attributesName" type="text">
                <input class="attributesType" type="text">
                <input class="attributesDescription" type="text">
            </div>
            <div class="containerAttributes">
                <input class="attributesName" type="text">
                <input class="attributesType" type="text">
                <input class="attributesDescription" type="text">
            </div>
        </div>`
    )
}

const renderExamples = () => {
    return (
        `<!-- EXAMPLES -->
        <div class="sectionExamples">
            <h2 class="subtitle">EJEMPLOS DE USO</h2>
            <div class="containerExamples">
                <p class="exampleDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab,
                    inventore velit reiciendis accusamus sequi labore nulla beatae eveniet dolor.</p>
                <pre><code class="language-javascript editorLine"></code></pre>
            </div>
            <div class="containerExamples">
                <p class="exampleDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab,
                    inventore velit reiciendis accusamus sequi labore nulla beatae eveniet dolor.</p>
                <pre><code class="language-javascript editorLine" ></code></pre>
            </div>
        </div>`
    )
}

const renderBtnAddFunction = () => {
    return (
        `<!-- ADD FUNCTION -->
        <div class="sectionAddFunction">
            <button class="button button--addFunction btnAddFunction">Agregar otra funcion</button>
        </div>`
    )
}

export const renderSectionFunction = () => {
    const $createDocumentation = document.querySelector('#createDocumentation')
    $createDocumentation.innerHTML += renderFunction()
    $createDocumentation.innerHTML += renderDescription()
    $createDocumentation.innerHTML += renderAttributes()
    $createDocumentation.innerHTML += renderExamples()
    $createDocumentation.innerHTML += renderBtnAddFunction()

    
    /* EVENTOS */
    addEventEditors()

    addEventBtnOtherFunction()

    showEditorFunction()

    cargarDatos()

    hljs.highlightAll()
}

const addEventBtnOtherFunction = () => {
    const btnAddFunction = document.querySelectorAll('.btnAddFunction')
    btnAddFunction.forEach(btn => btn.addEventListener('click', showEditorFunction))
}

export const cargarDatos = () => {
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

    const editorLineJSON = document.querySelector('.editorLineJSON ')
    editorLineJSON.textContent = `function sumar(num1, num2) {
        return num1 + num2;
    }
    // Ejemplo de uso:
    var resultado = sumar(5, 3);
    console.log(resultado); // Imprimirá 8
    `
}


