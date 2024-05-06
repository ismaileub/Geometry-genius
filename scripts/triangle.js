function triangleArea() {
    const triangleBase = document.getElementById('triangle-base');
    const base = parseFloat(triangleBase.value);
    

    const triangleHeight = document.getElementById('triangle-height');
    const height = parseFloat(triangleHeight.value);
    

    const area = 0.5 * base * height;
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;


}