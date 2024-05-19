function sim() {
    location.href = "https://www.youtube.com/watch?v=90PttxCCthk";
    
}
function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.top = geraPosicao(10, 90);
    btn.style.right = geraPosicao(10, 90);
    console.log("Opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}