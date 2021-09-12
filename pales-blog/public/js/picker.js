const pallete = document.getElementById("a");
const slider = document.querySelector("form");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const rgbCode = document.getElementById("rgb");
const hexCode = document.getElementById("hex");

const toHex = num => (num).toString(16).toUpperCase();

slider.addEventListener ("input", function() {
    const r = parseInt(red.value);
    const g = parseInt(green.value);
    const b = parseInt(blue.value);
    let rHex = toHex(r), gHex = toHex(g), bHex = toHex(b);
    if (r < 16) { rHex = "0" + rHex }
    if (g < 16) { gHex = "0" + gHex }
    if (b < 16) { bHex = "0" + bHex }
    rgbCode.innerHTML = `RGB: ${r}, ${g}, ${b}`;
    hexCode.innerHTML = `Hex: #${rHex}${gHex}${bHex}`;
    pallete.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});