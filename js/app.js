/* IMPORTS */
import {renderSectionFunction, showEditorGeneral} from './functions.js'
import {btnCloseEdit} from './components.js'

/* RENDER-APP */
document.addEventListener('DOMContentLoaded', () => {
    renderSectionFunction()
    
    btnCloseEdit.addEventListener('click', showEditorGeneral)
})
