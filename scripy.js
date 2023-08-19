// Função para salvar imagem com filtro
function saveImageWithFilter() {
    // Simplesmente um alerta para fins de demonstração
    alert("Imagem salva com filtro!");
}

// Evento de clique para o botão de salvar imagem
document.getElementById("saveButton").addEventListener("click", saveImageWithFilter);

// Função setup para centralizar a tela
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    // Centraliza a tela
    let canvasX = (windowWidth - width) / 2;
    let canvasY = (windowHeight - height) / 2;
    canvas.position(canvasX, canvasY);
}

// Função draw vazia (será usada em projetos futuros)
function draw() {
    // Deixe esta função vazia por enquanto
}

// Função preload vazia (será usada em projetos futuros)
function preload() {
    // Deixe esta função vazia por enquanto
}
