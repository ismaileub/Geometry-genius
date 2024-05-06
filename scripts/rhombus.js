function  rhombusArea() {
    const majorDiagonal = getInputValueById('major-diagonal');
    const minorDiagonal = getInputValueById('minor-diagonal');
    const area = .5 * majorDiagonal * minorDiagonal;
    setInnerTextById('rhombus-area', area);
    
}