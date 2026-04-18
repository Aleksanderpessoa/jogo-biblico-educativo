// ============================================
// JOGO BÍBLICO EDUCATIVO - VERSÃO CORRIGIDA + VISUAL PUZZLE
// ============================================

console.log('Script-corrigido.js carregado com sucesso!');
console.log('=== VERSÃO COM VERSÍCULOS + PUZZLE VISUAL ===');

const CONFIG = {
    OPORTUNIDADES_INICIAIS: 14,
    TEMPO_FEEDBACK: 2000,
    ATIVAR_SONS: false,
    ATIVAR_ANIMACOES: true
};

const perguntasBiblicas = [
    // [Same 100+ questions - unchanged for brevity, copy full from previous]
    {
        pergunta: "Quantos dias Deus levou para criar o mundo?",
        alternativas: ["5 dias", "6 dias", "7 dias", "8 dias"],
        correta: "6 dias"
    },
    // ... (all 100+ unchanged)
    {
        pergunta: "Quem escreveu a maioria dos Salmos?",
        alternativas: ["Moisés", "Davi", "Salomão", "Asafe"],
        correta: "Davi"
    }
];

const versiculosBenevolencia = [
    // unchanged
    {
        versiculo: "Porque Deus amou o mundo de tal maneira...",
        referencia: "João 3:16"
    }
    // ... all 10
];

let estadoJogo = {
    acertos: 0,
    erros: 0,
    oportunidades: CONFIG.OPORTUNIDADES_INICIAIS,
    perguntaAtual: 0,
    perguntasEmbaralhadas: [],
    respondido: false,
    jogoAtivo: true,
    versiculosRevelados: []
};

console.log('Script carregado. Aguardando botão \"Começar Quiz!\" para iniciar.');

function inicializarJogo() {
    try {
        estadoJogo.perguntasEmbaralhadas = embaralharArray([...perguntasBiblicas]);
        estadoJogo.versiculosRevelados = [];
        console.log('Jogo inicializado com puzzle visual!');
        carregarPergunta();
        atualizarPlacar();
        console.log('Jogo inicializado com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar o jogo:', error);
    }
}

// New: Fill puzzle slot
function fillSlot(slotNumber) {
    const slot = document.getElementById(`slot-${slotNumber}`);
    if (slot && !slot.classList.contains('filled')) {
        slot.classList.add('filled');
        // Sound/animation if needed
        console.log(`Slot ${slotNumber} preenchido!`);
    }
}

function mostrarMensagem(tipo, versiculo = null) {
    const feedbackArea = document.getElementById('feedback-mensagem');
    if (!feedbackArea) return;
    
    if (tipo === 'acerto') {
        feedbackArea.innerHTML = `
            <div class="mensagem-sucesso">
                <h2>Ótimo! Você Acertou!</h2>
                <p class="parabens">Parabéns!!!</p>
                <div class="versiculo">
                    <p>"${versiculo.versiculo}"</p>
                    <small>${versiculo.referencia}</small>
                </div>
            </div>
        `;
    } else {
        const dicas = [
            "Continue tentando! Deus te ajuda!",
            "Não desista! A fé move montanhas!",
            "Tente novamente na próxima pergunta!",
            "Coragem! Você consegue!",
            "Confie em Deus! Ele está com você!"
        ];
        const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
        
        feedbackArea.innerHTML = `
            <div class="mensagem-erro">
                <h2>Que pena! Você errou...</h2>
                <p class="dica">${dicaAleatoria}</p>
                <p class="tente-novamente">Tente novamente na próxima pergunta!</p>
            </div>
        `;
    }
    
    feedbackArea.style.opacity = '0';
    feedbackArea.style.transform = 'scale(0.8)';
    setTimeout(() => {
        feedbackArea.style.opacity = '1';
        feedbackArea.style.transform = 'scale(1)';
    }, 10);
}

function mostrarVersiculoBenevolencia() {
    if (estadoJogo.versiculosRevelados.length >= versiculosBenevolencia.length) {
        return;
    }
    
    let proximoIndice = estadoJogo.versiculosRevelados.length;
    
    if (proximoIndice < versiculosBenevolencia.length) {
        const versiculo = versiculosBenevolencia[proximoIndice];
        estadoJogo.versiculosRevelados.push(proximoIndice);
        mostrarMensagem('acerto', versiculo);
    }
}

function carregarPergunta() {
    if (estadoJogo.perguntaAtual >= estadoJogo.perguntasEmbaralhadas.length) {
        estadoJogo.perguntasEmbaralhadas = embaralharArray([...perguntasBiblicas]);
        estadoJogo.perguntaAtual = 0;
    }
    
    const pergunta = estadoJogo.perguntasEmbaralhadas[estadoJogo.perguntaAtual];
    
    const elementoPergunta = document.getElementById('pergunta-texto');
    if (elementoPergunta) {
        elementoPergunta.textContent = pergunta.pergunta;
    }
    
    criarAlternativas(pergunta);
    
    estadoJogo.respondido = false;
    const btnProxima = document.getElementById('btn-proxima');
    if (btnProxima) {
        btnProxima.disabled = true;
    }
    
    limparFeedback();
}

function criarAlternativas(pergunta) {
    const container = document.getElementById('alternativas');
    if (!container) return;
    
    container.innerHTML = '';
    
    const alternativasEmbaralhadas = embaralharArray([...pergunta.alternativas]);
    
    alternativasEmbaralhadas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.className = 'btn-alternativa';
        botao.textContent = alternativa;
        botao.onclick = () => verificarResposta(alternativa, pergunta.correta, botao);
        
        setTimeout(() => {
            botao.style.opacity = '1';
            botao.style.transform = 'translateY(0)';
        }, index * 100);
        
        container.appendChild(botao);
    });
}

function verificarResposta(respostaSelecionada, respostaCorreta, botao) {
    if (estadoJogo.respondido || !estadoJogo.jogoAtivo) return;
    
    estadoJogo.respondido = true;
    
    const botoes = document.querySelectorAll('.btn-alternativa');
    botoes.forEach(btn => btn.disabled = true);
    
    estadoJogo.oportunidades--;
    
    if (respostaSelecionada === respostaCorreta) {
        estadoJogo.acertos++;
        botao.classList.add('correta');
        mostrarMensagem('acerto', null);
        
        // Verifica se atingiu 12 acertos para evolução
        if (estadoJogo.acertos >= 12) {
            mostrarModalEvolucao();
            setTimeout(() => {
                window.location.href = 'jogo-avancado.html';
            }, 3000);
        }
        
        // Atualiza texto motivacional
        atualizarTextoMotivacional(true);
        
        // Check win condition (10 acertos)
        if (estadoJogo.acertos >= 10) {
            // NEW: Win glow
            const puzzle = document.getElementById('puzzle-visual');
            if (puzzle) puzzle.classList.add('win-glow');
            setTimeout(() => finalizarJogo(true), 2000);
            return;
        }
    } else {
        estadoJogo.erros++;
        botao.classList.add('errada');
        mostrarMensagem('erro');
        atualizarTextoMotivacional(false);
        
        botoes.forEach(btn => {
            if (btn.textContent === respostaCorreta) {
                btn.classList.add('correta');
            }
        });
    }
    
    atualizarPlacar();
    
    const btnProxima = document.getElementById('btn-proxima');
    if (btnProxima) btnProxima.disabled = false;
    
    if (estadoJogo.oportunidades <= 0) {
        setTimeout(() => finalizarJogo(false), 2000);
    }
}

function proximaPergunta() {
    if (!estadoJogo.jogoAtivo) return;
    
    estadoJogo.perguntaAtual++;
    carregarPergunta();
}

function mostrarFeedback(mensagem, tipo) {
    const feedbackElement = document.getElementById('feedback-mensagem');
    if (!feedbackElement) return;
    
    feedbackElement.textContent = mensagem;
    feedbackElement.className = `feedback-mensagem ${tipo}`;
    
    setTimeout(() => {
        feedbackElement.classList.add('visivel');
    }, 100);
    
    setTimeout(() => {
        limparFeedback();
    }, CONFIG.TEMPO_FEEDBACK);
}

function limparFeedback() {
    const feedbackElement = document.getElementById('feedback-mensagem');
    if (feedbackElement) {
        feedbackElement.classList.remove('visivel');
    }
}

function atualizarTextoMotivacional(acertou) {
    const textosAcerto = [
        "Ótimo! Você está aprendendo muito!",
        "Parabéns! Continue assim!",
        "Excelente! Deus se alegra com você!",
        "Muito bem! Você é incrível!",
        "Fantástico! Continue firme!"
    ];
    
    const textosErro = [
        "Não desista! Tente novamente!",
        "Continue! Você consegue!",
        "Força! Deus está com você!",
        "Não tem problema! A próxima é sua!",
        "Coragem! Você vai conseguir!"
    ];
    
    const textosFim = [
        "Cuidado! Estão acabando as oportunidades!",
        "Atenção! Concentre-se mais!",
        "Últimas chances! Dê o seu melhor!",
        "Quase lá! Não desista agora!"
    ];
    
    const elemento = document.getElementById('texto-motivacional');
    if (!elemento) return;
    
    if (estadoJogo.oportunidades <= 3) {
        elemento.textContent = textosFim[Math.floor(Math.random() * textosFim.length)];
    } else if (acertou) {
        elemento.textContent = textosAcerto[Math.floor(Math.random() * textosAcerto.length)];
    } else {
        elemento.textContent = textosErro[Math.floor(Math.random() * textosErro.length)];
    }
}

function atualizarPlacar() {
    const acertosElement = document.getElementById('acertos');
    const errosElement = document.getElementById('erros');
    const oportunidadesElement = document.getElementById('oportunidades');
    const perguntasElement = document.getElementById('perguntas-respondidas');  // NEW
    
    if (acertosElement) acertosElement.textContent = estadoJogo.acertos;
    if (errosElement) errosElement.textContent = estadoJogo.erros;
    if (oportunidadesElement) oportunidadesElement.textContent = estadoJogo.oportunidades;
    if (perguntasElement) perguntasElement.textContent = estadoJogo.acertos + estadoJogo.erros;  // NEW
}

function finalizarJogo(venceu) {
    estadoJogo.jogoAtivo = false;
    
    prepararModalResultado(venceu);
    
    setTimeout(() => {
        const modal = document.getElementById('modal-resultado');
        if (modal) {
            modal.classList.add('visivel');
        }
    }, 1000);
}

function prepararModalResultado(venceu) {
    const modalTitulo = document.getElementById('modal-titulo');
    const modalMensagem = document.getElementById('modal-mensagem');
    
    if (venceu) {
        if (modalTitulo) {
            modalTitulo.textContent = 'Parabéns! Puzzle Completo!';
            modalTitulo.className = 'modal-titulo vitoria';
        }
        if (modalMensagem) {
            modalMensagem.textContent = 'Você completou o Quiz Bíblico e o puzzle visual!';
        }
    } else {
        if (modalTitulo) {
            modalTitulo.textContent = 'Fim de Jogo';
            modalTitulo.className = 'modal-titulo derrota';
        }
        if (modalMensagem) {
            modalMensagem.textContent = 'Você usou todas as oportunidades. Tente novamente!';
        }
    }
    
    const estatisticaAcertos = document.getElementById('estatistica-acertos');
    const estatisticaErros = document.getElementById('estatistica-erros');
    const estatisticaPerguntas = document.getElementById('estatistica-perguntas');
    const estatisticaOportunidades = document.getElementById('estatistica-oportunidades');
    
    if (estatisticaAcertos) estatisticaAcertos.textContent = estadoJogo.acertos;
    if (estatisticaErros) estatisticaErros.textContent = estadoJogo.erros;
    if (estatisticaPerguntas) estatisticaPerguntas.textContent = estadoJogo.acertos + estadoJogo.erros;
    if (estatisticaOportunidades) estatisticaOportunidades.textContent = CONFIG.OPORTUNIDADES_INICIAIS - estadoJogo.oportunidades;
}

function jogarNovamente() {
    estadoJogo = {
        acertos: 0,
        erros: 0,
        oportunidades: CONFIG.OPORTUNIDADES_INICIAIS,
        perguntaAtual: 0,
        perguntasEmbaralhadas: [],
        respondido: false,
        jogoAtivo: true,
        versiculosRevelados: []
    };
    
    const modal = document.getElementById('modal-resultado');
    if (modal) {
        modal.classList.remove('visivel');
    }
    
    // Reset puzzle
    for (let i = 1; i <= 10; i++) {
        const slot = document.getElementById(`slot-${i}`);
        if (slot) slot.classList.remove('filled');
    }
    const puzzle = document.getElementById('puzzle-visual');
    if (puzzle) puzzle.classList.remove('win-glow');
    
    inicializarJogo();
}

function iniciarQuiz() {
    document.querySelector('.area-boas-vindas').style.display = 'none';
    document.querySelector('.area-pergunta').style.display = 'block';
    document.getElementById('btn-proxima').style.display = 'block';
    
    inicializarJogo();
}

function mostrarModalEvolucao() {
    // Criar modal de evolução
    const modal = document.createElement('div');
    modal.className = 'modal-evolucao';
    modal.innerHTML = `
        <div class="modal-evolucao-conteudo">
            <div class="evolucao-icones">
                <div class="icone-evolucao">1</div>
                <div class="seta-evolucao">2</div>
                <div class="icone-evolucao">3</div>
            </div>
            <h2 class="evolucao-titulo">Parabéns! Você evoluiu!</h2>
            <p class="evolucao-mensagem">Agora responda perguntas sobre livros da Bíblia</p>
            <div class="evolucao-contador">
                <div class="contador-circulo">
                    <span class="contador-numero">3</span>
                </div>
                <p class="contador-texto">Redirecionando em...</p>
            </div>
            <div class="evolucao-progresso">
                <div class="progresso-barra">
                    <div class="progresso-preenchimento"></div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animação de entrada
    setTimeout(() => {
        modal.classList.add('visivel');
    }, 100);
    
    // Contador regressivo
    let contador = 3;
    const contadorElement = modal.querySelector('.contador-numero');
    const progressoElement = modal.querySelector('.progresso-preenchimento');
    
    const intervalo = setInterval(() => {
        contador--;
        contadorElement.textContent = contador;
        progressoElement.style.width = `${(3 - contador) * 33.33}%`;
        
        if (contador <= 0) {
            clearInterval(intervalo);
            modal.classList.remove('visivel');
            setTimeout(() => {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            }, 500);
        }
    }, 1000);
}

function embaralharArray(array) {
    const arrayEmbaralhado = [...array];
    for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
    }
    return arrayEmbaralhado;
}

