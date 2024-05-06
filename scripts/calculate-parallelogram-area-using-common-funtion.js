function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    const area = base * height;
    setInnerTextById('parallelogram-area', area);

}


function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}