// Script de teste simples para verificar se JavaScript está funcionando
console.log('Script de teste carregado!');

// Teste simples
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado!');
    
    // Teste básico de manipulação DOM
    const perguntaElemento = document.getElementById('pergunta-texto');
    if (perguntaElemento) {
        perguntaElemento.textContent = 'Pergunta de teste: Quantos discípulos Jesus teve?';
        console.log('Texto da pergunta atualizado!');
    }
    
    // Criar botões de teste
    const alternativasElemento = document.getElementById('alternativas');
    if (alternativasElemento) {
        alternativasElemento.innerHTML = `
            <button class="btn-alternativa" onclick="alert('Você clicou em 10!')">10</button>
            <button class="btn-alternativa" onclick="alert('Você clicou em 11!')">11</button>
            <button class="btn-alternativa" onclick="alert('Você clicou em 12!')">12</button>
            <button class="btn-alternativa" onclick="alert('Você clicou em 13!')">13</button>
        `;
        console.log('Botões criados!');
    }
    
    console.log('Teste concluído!');
});
