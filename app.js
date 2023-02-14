

// create function that returns three random rgb values

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return {r, g, b};
}


// RGB to CSS

function rgbToCss(rgb){
    let hex1 = rgb.r.toString(16);
    let hex2 = rgb.g.toString(16);
    let hex3 = rgb.b.toString(16);

    let finalHex = `#${hex1}${hex2}${hex3}`;
    return finalHex;
}

// random background 

function randomBackground(){
    document.body.style.backgroundColor = rgbToCss(randomColor());
}

randomBackground();