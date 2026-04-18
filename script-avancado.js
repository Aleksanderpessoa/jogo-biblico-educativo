// ============================================
// JOGO BÍBLICO AVANÇADO - NÍVEL 2
// ============================================

console.log('Script-avancado.js carregado com sucesso!');
console.log('=== NÍVEL AVANÇADO - LIVROS DA BÍBLIA ===');

const CONFIG_AVANCADO = {
    TEMPO_PERGUNTA: 30,
    DICAS_DISPONIVEIS: 3,
    PONTOS_ACERTO: 100,
    PONTOS_ERRO: -20,
    BONUS_TEMPO: 50,
    BONUS_SEM_DICA: 30
};

// ============================================
// LIVROS DA BÍBLIA PARA SORTEIO
// ============================================

const livrosBiblicos = [
    {
        nome: "Gênesis",
        categoria: "Pentateuco",
        descricao: "O livro do começo - Criação, Adão e Eva, Noé, Abraão",
        perguntas: [
            {
                pergunta: "Qual é o tema principal do livro de Gênesis?",
                alternativas: ["A Lei de Moisés", "O começo de tudo", "Os Salmos", "As profecias"],
                correta: "O começo de tudo"
            },
            {
                pergunta: "Quem escreveu o livro de Gênesis?",
                alternativas: ["Abraão", "Moisés", "Noé", "Davi"],
                correta: "Moisés"
            },
            {
                pergunta: "Qual é o versículo chave mais conhecido de Gênesis?",
                alternativas: ["Gênesis 1:1", "Gênesis 3:15", "Gênesis 12:3", "Gênesis 50:20"],
                correta: "Gênesis 1:1"
            }
        ]
    },
    {
        nome: "Êxodo",
        categoria: "Pentateuco",
        descricao: "A libertação do Egito - Moisés, os 10 mandamentos",
        perguntas: [
            {
                pergunta: "Qual é o evento central do livro de Êxodo?",
                alternativas: ["A criação", "O dilúvio", "A libertação do Egito", "A conquista de Canaã"],
                correta: "A libertação do Egito"
            },
            {
                pergunta: "Quantos mandamentos Deus deu a Moisés?",
                alternativas: ["7", "10", "12", "15"],
                correta: "10"
            },
            {
                pergunta: "Onde Moisés recebeu os mandamentos?",
                alternativas: ["No Egito", "No deserto", "No monte Sinai", "Em Canaã"],
                correta: "No monte Sinai"
            }
        ]
    },
    {
        nome: "Salmos",
        categoria: "Livros Poéticos",
        descricao: "Livro de orações e cânticos - maioria escrita por Davi",
        perguntas: [
            {
                pergunta: "Quem escreveu a maioria dos Salmos?",
                alternativas: ["Moisés", "Salomão", "Davi", "Asafe"],
                correta: "Davi"
            },
            {
                pergunta: "Qual é o Salmo mais conhecido?",
                alternativas: ["Salmo 23", "Salmo 51", "Salmo 91", "Salmo 100"],
                correta: "Salmo 23"
            },
            {
                pergunta: "Quantos Salmos existem no livro?",
                alternativas: ["50", "100", "150", "200"],
                correta: "150"
            }
        ]
    },
    {
        nome: "Provérbios",
        categoria: "Livros Poéticos",
        descricao: "Sabedoria e ensinamentos - escrito por Salomão",
        perguntas: [
            {
                pergunta: "Quem escreveu a maioria dos Provérbios?",
                alternativas: ["Davi", "Salomão", "Isaías", "Jeremias"],
                correta: "Salomão"
            },
            {
                pergunta: "Qual é o tema principal de Provérbios?",
                alternativas: ["História", "Profecia", "Sabedoria", "Lei"],
                correta: "Sabedoria"
            },
            {
                pergunta: "Qual é o versículo mais famoso de Provérbios?",
                alternativas: ["Provérbios 1:7", "Provérbios 3:5", "Provérbios 16:3", "Provérbios 31:10"],
                correta: "Provérbios 3:5"
            }
        ]
    },
    {
        nome: "Isaías",
        categoria: "Profetas Maiores",
        descricao: "Profecias sobre o Messias e a salvação",
        perguntas: [
            {
                pergunta: "Isaías é considerado qual tipo de profeta?",
                alternativas: ["Profeta Menor", "Profeta Maior", "Sábio", "Salmista"],
                correta: "Profeta Maior"
            },
            {
                pergunta: "Qual profecia messiânica famosa está em Isaías?",
                alternativas: ["Isaías 7:14", "Isaías 9:6", "Isaías 53:5", "Todas as anteriores"],
                correta: "Todas as anteriores"
            },
            {
                pergunta: "Em que período Isaías profetizou?",
                alternativas: ["Antes do exílio", "Durante o exílio", "Após o exílio", "No tempo de Cristo"],
                correta: "Antes do exílio"
            }
        ]
    },
    {
        nome: "Mateus",
        categoria: "Evangelhos",
        descricao: "Evangelho para os judeus - Jesus como o Messias prometido",
        perguntas: [
            {
                pergunta: "Para quem Mateus escreveu seu evangelho?",
                alternativas: ["Para os romanos", "Para os gregos", "Para os judeus", "Para todos"],
                correta: "Para os judeus"
            },
            {
                pergunta: "Qual é o tema principal do evangelho de Mateus?",
                alternativas: ["Jesus como Filho de Deus", "Jesus como Messias", "Jesus como Servo", "Jesus como Verbo"],
                correta: "Jesus como Messias"
            },
            {
                pergunta: "Quantos capítulos tem o livro de Mateus?",
                alternativas: ["24", "28", "30", "32"],
                correta: "28"
            }
        ]
    },
    {
        nome: "Romanos",
        categoria: "Epístolas",
        descricao: "Doutrina sobre a salvação pela fé - escrito por Paulo",
        perguntas: [
            {
                pergunta: "Quem escreveu a epístola aos Romanos?",
                alternativas: ["Pedro", "Paulo", "João", "Tiago"],
                correta: "Paulo"
            },
            {
                pergunta: "Qual é o tema principal de Romanos?",
                alternativas: ["A lei", "A salvação pela fé", "A igreja", "O fim dos tempos"],
                correta: "A salvação pela fé"
            },
            {
                pergunta: "Qual é o versículo chave de Romanos?",
                alternativas: ["Romanos 1:16", "Romanos 3:23", "Romanos 5:8", "Romanos 8:28"],
                correta: "Romanos 1:16"
            }
        ]
    }
];

// ============================================
// ESTADO DO JOGO AVANÇADO
// ============================================

let estadoAvancado = {
    livroAtual: null,
    perguntaAtual: 0,
    acertos: 0,
    erros: 0,
    livrosConcluidos: [],
    dicasDisponiveis: CONFIG_AVANCADO.DICAS_DISPONIVEIS,
    tempoInicio: null,
    tempoTotal: 0,
    pontos: 0,
    timerInterval: null,
    respondido: false,
    jogoAtivo: false
};

// ============================================
// FUNÇÕES PRINCIPAIS
// ============================================

function sortearLivro() {
    // Filtra livros não concluídos
    const livrosDisponiveis = livrosBiblicos.filter(livro => 
        !estadoAvancado.livrosConcluidos.includes(livro.nome)
    );
    
    if (livrosDisponiveis.length === 0) {
        mostrarMensagem('Parabéns! Você completou todos os livros disponíveis!', 'sucesso');
        return;
    }
    
    // Sorteia um livro
    const indiceSorteado = Math.floor(Math.random() * livrosDisponiveis.length);
    estadoAvancado.livroAtual = livrosDisponiveis[indiceSorteado];
    estadoAvancado.perguntaAtual = 0;
    estadoAvancado.acertos = 0;
    estadoAvancado.erros = 0;
    estadoAvancado.dicasDisponiveis = CONFIG_AVANCADO.DICAS_DISPONIVEIS;
    estadoAvancado.tempoInicio = Date.now();
    estadoAvancado.jogoAtivo = true;
    estadoAvancado.respondido = false;
    
    // Atualiza a interface
    document.getElementById('area-livro').style.display = 'none';
    document.getElementById('area-pergunta').style.display = 'block';
    
    // Mostra informações do livro
    document.getElementById('livro-nome').textContent = estadoAvancado.livroAtual.nome;
    document.getElementById('livro-descricao').textContent = estadoAvancado.livroAtual.descricao;
    
    // Carrega a primeira pergunta
    carregarPerguntaAvancada();
    
    // Inicia o timer
    iniciarTimer();
    
    // Atualiza o botão de dicas
    atualizarBotaoDica();
}

function carregarPerguntaAvancada() {
    if (!estadoAvancado.livroAtual || 
        estadoAvancado.perguntaAtual >= estadoAvancado.livroAtual.perguntas.length) {
        finalizarLivro();
        return;
    }
    
    const pergunta = estadoAvancado.livroAtual.perguntas[estadoAvancado.perguntaAtual];
    
    // Embaralha as alternativas
    const alternativasEmbaralhadas = embaralharArray([...pergunta.alternativas]);
    
    // Atualiza o texto da pergunta
    document.getElementById('pergunta-texto').textContent = pergunta.pergunta;
    
    // Cria os botões de alternativas
    const container = document.getElementById('alternativas');
    container.innerHTML = '';
    
    alternativasEmbaralhadas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.className = 'btn-alternativa';
        botao.textContent = alternativa;
        botao.onclick = () => verificarRespostaAvancada(alternativa, pergunta.correta, botao);
        
        // Animação de entrada
        setTimeout(() => {
            botao.style.opacity = '1';
            botao.style.transform = 'translateY(0)';
        }, index * 100);
        
        container.appendChild(botao);
    });
    
    // Reseta o estado
    estadoAvancado.respondido = false;
    document.getElementById('btn-proxima').style.display = 'none';
    
    // Reinicia o timer
    reiniciarTimer();
    
    // Limpa feedback anterior
    limparFeedback();
    limparDica();
}

function verificarRespostaAvancada(respostaSelecionada, respostaCorreta, botao) {
    if (estadoAvancado.respondido || !estadoAvancado.jogoAtivo) return;
    
    estadoAvancado.respondido = true;
    pararTimer();
    
    // Desabilita todos os botões
    const botoes = document.querySelectorAll('.btn-alternativa');
    botoes.forEach(btn => btn.disabled = true);
    
    if (respostaSelecionada === respostaCorreta) {
        // Acertou
        estadoAvancado.acertos++;
        botao.classList.add('correta');
        
        // Calcula pontos
        let pontosGanhos = CONFIG_AVANCADO.PONTOS_ACERTO;
        
        // Bônus por tempo
        const tempoRestante = parseInt(document.querySelector('.timer-texto').textContent);
        if (tempoRestante > 20) {
            pontosGanhos += CONFIG_AVANCADO.BONUS_TEMPO;
        }
        
        // Bônus por não usar dica
        if (estadoAvancado.dicasDisponiveis === CONFIG_AVANCADO.DICAS_DISPONIVEIS) {
            pontosGanhos += CONFIG_AVANCADO.BONUS_SEM_DICA;
        }
        
        estadoAvancado.pontos += pontosGanhos;
        
        mostrarFeedback(`ACERTOU! +${pontosGanhos} pontos`, 'sucesso');
        
    } else {
        // Errou
        estadoAvancado.erros++;
        botao.classList.add('errada');
        estadoAvancado.pontos += CONFIG_AVANCADO.PONTOS_ERRO;
        
        // Mostra a resposta correta
        botoes.forEach(btn => {
            if (btn.textContent === respostaCorreta) {
                btn.classList.add('correta');
            }
        });
        
        mostrarFeedback(`ERROU! ${CONFIG_AVANCADO.PONTOS_ERRO} pontos`, 'erro');
    }
    
    // Atualiza o placar
    atualizarPlacarAvancado();
    
    // Mostra botão de próxima pergunta
    document.getElementById('btn-proxima').style.display = 'block';
}

function proximaPergunta() {
    if (!estadoAvancado.jogoAtivo) return;
    
    estadoAvancado.perguntaAtual++;
    carregarPerguntaAvancada();
}

function finalizarLivro() {
    estadoAvancado.jogoAtivo = false;
    pararTimer();
    
    // Calcula o tempo total
    estadoAvancado.tempoTotal = Math.floor((Date.now() - estadoAvancado.tempoInicio) / 1000);
    
    // Adiciona o livro aos concluídos
    if (!estadoAvancado.livrosConcluidos.includes(estadoAvancado.livroAtual.nome)) {
        estadoAvancado.livrosConcluidos.push(estadoAvancado.livroAtual.nome);
    }
    
    // Prepara o modal de resultado
    prepararModalResultadoLivro();
    
    // Mostra o modal
    setTimeout(() => {
        document.getElementById('modal-resultado').classList.add('visivel');
    }, 1000);
    
    // Atualiza as medalhas
    atualizarMedalhas();
    
    // Salva no ranking local
    salvarRankingLocal();
}

function proximoLivro() {
    // Esconde o modal
    document.getElementById('modal-resultado').classList.remove('visivel');
    
    // Volta para a seleção de livro
    document.getElementById('area-pergunta').style.display = 'none';
    document.getElementById('area-livro').style.display = 'block';
    
    // Limpa a área de seleção
    document.getElementById('livro-container').innerHTML = `
        <div class="livro-selecao">
            <p>Clique no botão abaixo para sortear um novo livro da Bíblia!</p>
            <button class="btn-sortear" onclick="sortearLivro()">
                <span class="btn-icono"> bible</span>
                Sortear Próximo Livro
            </button>
        </div>
    `;
}

function voltarNivel1() {
    window.location.href = 'jogo.html';
}

// ============================================
// FUNÇÕES DE TIMER
// ============================================

function iniciarTimer() {
    let tempoRestante = CONFIG_AVANCADO.TEMPO_PERGUNTA;
    
    estadoAvancado.timerInterval = setInterval(() => {
        tempoRestante--;
        atualizarTimer(tempoRestante);
        
        if (tempoRestante <= 0) {
            pararTimer();
            tempoEsgotado();
        }
    }, 1000);
    
    atualizarTimer(CONFIG_AVANCADO.TEMPO_PERGUNTA);
}

function reiniciarTimer() {
    pararTimer();
    iniciarTimer();
}

function pararTimer() {
    if (estadoAvancado.timerInterval) {
        clearInterval(estadoAvancado.timerInterval);
        estadoAvancado.timerInterval = null;
    }
}

function atualizarTimer(tempoRestante) {
    const timerTexto = document.querySelector('.timer-texto');
    const timerPreenchimento = document.querySelector('.timer-preenchimento');
    
    if (timerTexto) timerTexto.textContent = tempoRestante;
    
    if (timerPreenchimento) {
        const porcentagem = (tempoRestante / CONFIG_AVANCADO.TEMPO_PERGUNTA) * 100;
        timerPreenchimento.style.height = `${porcentagem}%`;
        
        // Muda a cor conforme o tempo
        if (tempoRestante <= 10) {
            timerPreenchimento.style.background = '#ff4444';
        } else if (tempoRestante <= 20) {
            timerPreenchimento.style.background = '#ffaa00';
        } else {
            timerPreenchimento.style.background = '#4CAF50';
        }
    }
}

function tempoEsgotado() {
    if (!estadoAvancado.respondido) {
        estadoAvancado.respondido = true;
        estadoAvancado.erros++;
        estadoAvancado.pontos += CONFIG_AVANCADO.PONTOS_ERRO;
        
        // Mostra a resposta correta
        const botoes = document.querySelectorAll('.btn-alternativa');
        botoes.forEach(btn => {
            btn.disabled = true;
            if (btn.classList.contains('correta')) {
                btn.style.display = 'block';
            }
        });
        
        mostrarFeedback('TEMPO ESGOTADO!', 'erro');
        atualizarPlacarAvancado();
        
        document.getElementById('btn-proxima').style.display = 'block';
    }
}

// ============================================
// FUNÇÕES DE DICAS
// ============================================

function usarDica() {
    if (estadoAvancado.dicasDisponiveis <= 0 || estadoAvancado.respondido) return;
    
    estadoAvancado.dicasDisponiveis--;
    atualizarBotaoDica();
    
    // Mostra uma dica simples
    const dicas = [
        "Pense no contexto histórico do livro",
        "Lembre-se do autor principal",
        "Considere o período em que foi escrito",
        "Pense no público original do livro"
    ];
    
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    
    const dicaElement = document.getElementById('dica-texto');
    dicaElement.textContent = `Dica: ${dicaAleatoria}`;
    dicaElement.style.display = 'block';
    
    // Penalidade por usar dica
    estadoAvancado.pontos = Math.max(0, estadoAvancado.pontos - 10);
    atualizarPlacarAvancado();
}

function atualizarBotaoDica() {
    const btnDica = document.getElementById('btn-dica');
    if (btnDica) {
        btnDica.innerHTML = `
            <span class="btn-icono"> lightbulb</span>
            Usar Dica (${estadoAvancado.dicasDisponiveis})
        `;
        
        if (estadoAvancado.dicasDisponiveis <= 0) {
            btnDica.disabled = true;
            btnDica.classList.add('desabilitado');
        }
    }
}

function limparDica() {
    const dicaElement = document.getElementById('dica-texto');
    if (dicaElement) {
        dicaElement.style.display = 'none';
    }
}

// ============================================
// FUNÇÕES DE INTERFACE
// ============================================

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
    }, 3000);
}

function limparFeedback() {
    const feedbackElement = document.getElementById('feedback-mensagem');
    if (feedbackElement) {
        feedbackElement.classList.remove('visivel');
    }
}

function atualizarPlacarAvancado() {
    const acertosElement = document.getElementById('acertos');
    const errosElement = document.getElementById('erros');
    const livrosElement = document.getElementById('livros-concluidos');
    const pontosElement = document.getElementById('pontos');
    
    if (acertosElement) acertosElement.textContent = estadoAvancado.acertos;
    if (errosElement) errosElement.textContent = estadoAvancado.erros;
    if (livrosElement) livrosElement.textContent = estadoAvancado.livrosConcluidos.length;
    if (pontosElement) pontosElement.textContent = estadoAvancado.pontos;
    
    // Atualiza o tempo
    if (estadoAvancado.tempoInicio) {
        const tempoAtual = Math.floor((Date.now() - estadoAvancado.tempoInicio) / 1000);
        const minutos = Math.floor(tempoAtual / 60);
        const segundos = tempoAtual % 60;
        const tempoElement = document.getElementById('tempo');
        if (tempoElement) {
            tempoElement.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }
    }
}

function prepararModalResultadoLivro() {
    const modalTitulo = document.getElementById('modal-titulo');
    const modalMensagem = document.getElementById('modal-mensagem');
    const modalMedalha = document.getElementById('modal-medalha');
    
    // Define o título e mensagem
    if (estadoAvancado.acertos > estadoAvancado.erros) {
        modalTitulo.textContent = 'Excelente!';
        modalTitulo.className = 'modal-titulo vitoria';
        modalMensagem.textContent = `Você dominou o livro de ${estadoAvancado.livroAtual.nome}!`;
    } else {
        modalTitulo.textContent = 'Concluído!';
        modalTitulo.className = 'modal-titulo neutro';
        modalMensagem.textContent = `Você completou o livro de ${estadoAvancado.livroAtual.nome}!`;
    }
    
    // Atualiza as estatísticas
    document.getElementById('estatistica-acertos').textContent = estadoAvancado.acertos;
    document.getElementById('estatistica-erros').textContent = estadoAvancado.erros;
    document.getElementById('estatistica-pontos').textContent = estadoAvancado.pontos;
    
    const minutos = Math.floor(estadoAvancado.tempoTotal / 60);
    const segundos = estadoAvancado.tempoTotal % 60;
    document.getElementById('estatistica-tempo').textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    
    // Mostra a medalha
    if (modalMedalha) {
        modalMedalha.style.display = 'block';
        modalMedalha.querySelector('.medalha-texto').textContent = 
            `Medalha de ${estadoAvancado.livroAtual.nome} Conquistada!`;
    }
}

function atualizarMedalhas() {
    const container = document.getElementById('medalhas-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Adiciona medalhas dos livros concluídos
    estadoAvancado.livrosConcluidos.forEach((livroNome, index) => {
        const medalha = document.createElement('div');
        medalha.className = 'medalha-conquistada';
        medalha.innerHTML = `
            <span class="medalha-icone"> medal</span>
            <small>${livroNome}</small>
        `;
        container.appendChild(medalha);
    });
    
    // Adiciona medalhas vazias para os livros restantes
    const medalhasVazias = Math.max(0, 7 - estadoAvancado.livrosConcluidos.length);
    for (let i = 0; i < medalhasVazias; i++) {
        const medalhaVazia = document.createElement('div');
        medalhaVazia.className = 'medalha-vazia';
        medalhaVazia.innerHTML = `
            <span class="medalha-texto">?</span>
            <small>A conquistar</small>
        `;
        container.appendChild(medalhaVazia);
    }
}

function salvarRankingLocal() {
    const ranking = JSON.parse(localStorage.getItem('rankingAvancado') || '[]');
    
    const entrada = {
        nome: `Jogador ${ranking.length + 1}`,
        pontos: estadoAvancado.pontos,
        livros: estadoAvancado.livrosConcluidos.length,
        data: new Date().toLocaleDateString()
    };
    
    ranking.push(entrada);
    ranking.sort((a, b) => b.pontos - a.pontos);
    
    // Mantém apenas os top 10
    const top10 = ranking.slice(0, 10);
    
    localStorage.setItem('rankingAvancado', JSON.stringify(top10));
    atualizarRanking(top10);
}

function atualizarRanking(ranking) {
    const container = document.getElementById('ranking-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    ranking.forEach((entrada, index) => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        item.innerHTML = `
            <span class="ranking-posicao">${index + 1}º</span>
            <span class="ranking-nome">${entrada.nome}</span>
            <span class="ranking-pontos">${entrada.pontos} pts</span>
        `;
        container.appendChild(item);
    });
}

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

function embaralharArray(array) {
    const arrayEmbaralhado = [...array];
    for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
    }
    return arrayEmbaralhado;
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, iniciando jogo avançado...');
    
    // Carrega o ranking salvo
    const ranking = JSON.parse(localStorage.getItem('rankingAvancado') || '[]');
    atualizarRanking(ranking);
    
    // Atualiza as medalhas salvas
    const livrosSalvos = JSON.parse(localStorage.getItem('livrosConcluidos') || '[]');
    estadoAvancado.livrosConcluidos = livrosSalvos;
    atualizarMedalhas();
    
    // Salva o progresso quando sair
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('livrosConcluidos', JSON.stringify(estadoAvancado.livrosConcluidos));
    });
    
    console.log('Jogo avançado inicializado com sucesso!');
});
