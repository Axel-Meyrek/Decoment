/* IMPORTS */
import {renderSectionFunction, showEditorGeneral,showEditorFunction} from './functions.js'
import {btnCloseEdit, btnCloseCreateFunction, btnCreateNewFunction} from './components.js'

/* RENDER-APP */
document.addEventListener('DOMContentLoaded', () => {
    btnCloseEdit.addEventListener('click', showEditorGeneral)
    btnCloseCreateFunction.addEventListener('click', showEditorFunction)
    btnCreateNewFunction.addEventListener('click', renderSectionFunction)

    
})
