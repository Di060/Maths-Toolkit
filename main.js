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
Object.defineProperty(Number.prototype, 'pow', {
    value: function(that) {
        return Math.pow(this, that);
    }
})
Object.defineProperty(Number.prototype, 'rai', {
    value: function(that) {
        return Math.pow(that, 1/this);
    }
})
Object.defineProperty(Number.prototype, 'log', {
    value: function(that) {
        return Math.log(that) / Math.log(this);
    }
})
function abs(x) {
    return Math.abs(x);
}
function piso(x) {
    return Math.floor(x);
}
function teto(x) {
    return Math.ceil(x);
}
function rad(x) {
    return x * (Pi / 180);
}
function update() {
    baba = bab.replace(/Pi/g, '&pi;');
    baba = baba.replace(/ .pow/g, '^');
    baba = baba.replace(/ .rai/g, '&radic;');
    baba = baba.replace(/ .log/g, 'log');
    document.getElementById('for').innerHTML = baba;
}

function set(x) {
    bab += x;
    update();
}
function rem() {
    if (bab.slice(bab.length-3, bab.length) == 'sen' || bab.slice(bab.length-3, bab.length) == 'cos' || bab.slice(bab.length-3, bab.length) == 'tan' || bab.slice(bab.length-3, bab.length) == 'mod' || bab.slice(bab.length-3, bab.length) == 'abs') {
        bab = bab.substring(0, bab.length-3);
    } else if (bab.slice(bab.length-2, bab.length) == 'ln' || bab.slice(bab.length-2, bab.length) == 'Pi') {
        bab = bab.substring(0, bab.length-2);
    } else if (bab.slice(bab.length-4, bab.length) == 'teto' || bab.slice(bab.length-4, bab.length) == 'piso' || bab.slice(bab.length-4, bab.length) == 'raiz') {
        bab = bab.substring(0, bab.length-4);
    } else if (bab.slice(bab.length-5, bab.length) == ' .pow' || bab.slice(bab.length-5, bab.length) == ' .rai' || bab.slice(bab.length-5, bab.length) == ' .log') {
        bab = bab.substring(0, bab.length-5);
    } else {
        bab = bab.substring(0, bab.length-1);
    }
    document.getElementById('res').innerHTML = "&nbsp;";
    update();
}
function ac() {
    bab = '';
    document.getElementById('for').innerHTML = "&nbsp;";
    document.getElementById('res').innerHTML = "&nbsp;";
    equal();
}
function equal() {
    dah = bab.replace(/\+ .rai/g, '+2 .rai');
    dah = dah.replace(/- .rai/g, '-2 .rai');
    dah = dah.replace(/\/ .rai/g, '/2 .rai');
    dah = dah.replace(/\* .rai/g, '*2 .rai');
    dah = dah.replace(/, .rai/g, ',2 .rai');
    dah = dah.replace(/\( .rai/g, '(2 .rai');
    dah = dah.replace(/mod/g, '%');
//    alert(dah);
    if (dah.indexOf(' .rai') == 0) dah = dah.replace(" .rai", "2 .rai");
    if (String(eval(dah)).indexOf('function') == -1 && String(eval(dah)).indexOf('undefined') == -1) {
        document.getElementById('res').innerHTML = (eval(dah));
        update();
    }
}