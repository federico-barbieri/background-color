

// create function that returns three random rgb values

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return {r, g, b};
}


// RGB to CSS

function rgbToCss(rgb){
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

// random background 

function randomBackground(){
    document.body.style.backgroundColor = rgbToCss(randomColor());
}

randomBackground();