function pentagonArea(){
    const peri = getInputValueById('perimeter');
    const apo = getInputValueById('apothem');
    const area = .5 * peri * apo;
    setInnerTextById('pentagon-area', area);
}

function ellipseArea(){
    const r1 = getInputValueById('major-radius');
    const r2 = getInputValueById('minor-radius');
    const area = 3.14 * r1 * r2;
    setInnerTextById('ellipse-area', area);
}

