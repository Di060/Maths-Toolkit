var bab = '',
    baba = '',
    Pi = Math.PI,
    e = Math.E;

function sen(x) {
    return Math.sin(x/180*Pi);
}
function cos(x) {
    return Math.cos(x/180*Pi);
}
function tan(x) {
    return Math.tan(x/180*Pi);
}
function ln(x) {
    return Math.log(x);
}
function pow(x, y) {
    return Math.pow(x, y);
}
function raiz(x, y) {
    return Math.pow(x, 1/y);
}
function abs(x) {
    return Math.abs(x);
}
function piso(x) {
    return Math.floor(x);
}
function teto(x) {
    return Math.ceil(x);
}
function log(x, y) {
    return Math.log(x) / Math.log(y);
}

function update() {
    baba = bab.replace(/Pi/g, '&pi;');
    document.getElementById('birl').innerHTML = baba;
}

function set(x) {
    bab += x;
    update();
}
function rem() {
    if (bab.slice(bab.length-3, bab.length) == 'sen' || bab.slice(bab.length-3, bab.length) == 'cos' || bab.slice(bab.length-3, bab.length) == 'tan' || bab.slice(bab.length-3, bab.length) == 'log' || bab.slice(bab.length-3, bab.length) == 'pow' || bab.slice(bab.length-3, bab.length) == 'abs') {
        bab = bab.substring(0, bab.length-3);
    } else if (bab.slice(bab.length-2, bab.length) == 'ln' || bab.slice(bab.length-2, bab.length) == 'Pi') {
        bab = bab.substring(0, bab.length-2);
    } else if (bab.slice(bab.length-4, bab.length) == 'teto' || bab.slice(bab.length-4, bab.length) == 'piso' || bab.slice(bab.length-4, bab.length) == 'raiz') {
        bab = bab.substring(0, bab.length-4);
    } else {
        bab = bab.substring(0, bab.length-1);
    }
    update();
}
function ac() {
    bab = '';
    update();
}
function equal() {
    if (String(eval(bab)).indexOf('function') == -1) {
        baba = bab.replace(/Pi/g, '&pi;');
        document.getElementById('birl').innerHTML = baba + ' = ' + (eval(bab));
        bab = '';
    }
}