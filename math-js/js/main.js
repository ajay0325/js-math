// Math PI()
console.log(Math.PI);     

// Math.round()
console.log(Math.round(5.5));
console.log(Math.round(7.6));
console.log(Math.round(6.4));

// Math.ceil()

console.log(Math.ceil(9.4));
console.log(Math.ceil(4.6));
console.log(Math.ceil(-6.4));

// Math.floor()

console.log(Math.floor(5.8));
console.log(Math.floor(4.6));
console.log(Math.floor(-6.2));

// Math.trunc()

console.log(Math.trunc(4.5));
console.log(Math.trunc(5.6));
console.log(Math.trunc(-7.2));

// Math.sign()

console.log(Math.sign(3));
console.log(Math.sign(0));
console.log(Math.sign(-3));

// Math.pow()

console.log(Math.pow(5, 2));

// Math.sqrt()

console.log(Math.sqrt(81));

// Math.abs()

console.log(Math.abs(-5.8));

// Math.sin()

console.log(Math.sin(5));

// Math.cos()

console.log(Math.cos(3));

// Math.tan()

console.log(Math.tan(6));

// Math.min() 

console.log(Math.min(0, 150, 30, 20, -8, -200));

// Math.max()

console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random()

console.log(Math.random());

// Math.log()

console.log(Math.log(1));

// Math.log2()

console.log(Math.log2(16));

// Math.log10()

console.log(Math.log10(100));

// Math.cbrt()
console.log(Math.cbrt(1000));

var a = Math.floor(Math.random()*6);
console.log(a)



var btn = document.getElementById('btn');
var text = document.getElementById('ajay');

var btns = function () {
    let random = Math.floor(Math.random()*1677778)
    document.body.style.backgroundColor = "#"+random;
    // text.innerHTML = "#" + random;
}

btn.addEventListener('click',btns);