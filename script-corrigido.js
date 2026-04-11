// ============================================
// JOGO BÍBLICO EDUCATIVO - VERSÃO CORRIGIDA
// ============================================

console.log('Script-corrigido.js carregado com sucesso!');
console.log('=== VERSÃO COM VERSÍCULOS ATIVADA ===');

// ============================================
// CONFIGURAÇÕES DO JOGO
// ============================================

const CONFIG = {
    OPORTUNIDADES_INICIAIS: 14,
    NUMERO_PECAS: 10,
    PUZZLE_COLUNAS: 5,
    PUZZLE_LINHAS: 2,
    TEMPO_FEEDBACK: 2000,
    ATIVAR_SONS: false,
    ATIVAR_ANIMACOES: true
};

// ============================================
// BANCO DE PERGUNTAS BÍBLICAS (100 perguntas)
// ============================================

const perguntasBiblicas = [
    // Criação do mundo
    {
        pergunta: "Quantos dias Deus levou para criar o mundo?",
        alternativas: ["5 dias", "6 dias", "7 dias", "8 dias"],
        correta: "6 dias"
    },
    {
        pergunta: "O que Deus criou no primeiro dia?",
        alternativas: ["Animais", "Plantas", "Luz e trevas", "Ser humano"],
        correta: "Luz e trevas"
    },
    
    // Adão e Eva
    {
        pergunta: "Qual era o nome do primeiro homem criado por Deus?",
        alternativas: ["Noé", "Abraão", "Adão", "Moisés"],
        correta: "Adão"
    },
    {
        pergunta: "Qual era o nome da primeira mulher?",
        alternativas: ["Sara", "Eva", "Maria", "Ester"],
        correta: "Eva"
    },
    {
        pergunta: "Qual fruto Adão e Eva comeram no Jardim do Éden?",
        alternativas: ["Maçã", "Uva", "Fruto proibido", "Figos"],
        correta: "Fruto proibido"
    },
    
    // Noé e o Dilúvio
    {
        pergunta: "Quem construiu a arca?",
        alternativas: ["Moisés", "Noé", "Abraão", "Davi"],
        correta: "Noé"
    },
    {
        pergunta: "Quantos animais de cada espécie entraram na arca?",
        alternativas: ["1 par", "2 pares", "7 pares", "10 pares"],
        correta: "2 pares"
    },
    {
        pergunta: "Qual sinal Deus deu após o dilúvio?",
        alternativas: ["Estrela", "Arco-íris", "Trovão", "Fogo"],
        correta: "Arco-íris"
    },
    
    // Torre de Babel
    {
        pergunta: "O que aconteceu na Torre de Babel?",
        alternativas: ["Fogo do céu", "As línguas se confundiram", "Terremoto", "Inundação"],
        correta: "As línguas se confundiram"
    },
    
    // Abraão
    {
        pergunta: "Quem foi chamado de 'pai da fé'?",
        alternativas: ["Moisés", "Abraão", "Jacó", "José"],
        correta: "Abraão"
    },
    {
        pergunta: "Qual o nome da esposa de Abraão?",
        alternativas: ["Rebeca", "Raquel", "Sara", "Lea"],
        correta: "Sara"
    },
    {
        pergunta: "Quem Deus pediu para Abraão sacrificar?",
        alternativas: ["Isaque", "Ismael", "Jacó", "José"],
        correta: "Isaque"
    },
    
    // Isaque, Jacó e José
    {
        pergunta: "Quantos filhos Jacó teve?",
        alternativas: ["10", "11", "12", "13"],
        correta: "12"
    },
    {
        pergunta: "Quem teve o sonho da escada?",
        alternativas: ["José", "Jacó", "Abraão", "Moisés"],
        correta: "Jacó"
    },
    {
        pergunta: "Quem interpretava sonhos no Egito?",
        alternativas: ["Moisés", "José", "Davi", "Salomão"],
        correta: "José"
    },
    
    // Moisés
    {
        pergunta: "Quem foi encontrado no rio Nilo?",
        alternativas: ["Moisés", "Sansão", "Davi", "Samuel"],
        correta: "Moisés"
    },
    {
        pergunta: "O que Moisés recebeu no Monte Sinai?",
        alternativas: ["Coroa de ouro", "Os Dez Mandamentos", "Espada mágica", "Livro sagrado"],
        correta: "Os Dez Mandamentos"
    },
    {
        pergunta: "Qual mar Moisés abriu?",
        alternativas: ["Mar Morto", "Mar Galileu", "Mar Vermelho", "Oceano Atlântico"],
        correta: "Mar Vermelho"
    },
    
    // Josué e Jericó
    {
        pergunta: "Quem sucedeu Moisés como líder?",
        alternativas: ["Josué", "Calebe", "Gideão", "Sansão"],
        correta: "Josué"
    },
    {
        pergunta: "Como caíram os muros de Jericó?",
        alternativas: ["Terremoto", "Trovão", "Trombetas e gritos", "Batalha"],
        correta: "Trombetas e gritos"
    },
    
    // Juízes (Gideão, Sansão)
    {
        pergunta: "Quem era o juiz mais forte?",
        alternativas: ["Gideão", "Sansão", "Samuel", "Eli"],
        correta: "Sansão"
    },
    {
        pergunta: "Qual era o segredo da força de Sansão?",
        alternativas: ["Sua espada", "Seus músculos", "Seu cabelo", "Sua oração"],
        correta: "Seu cabelo"
    },
    {
        pergunta: "Com que Gideão venceu a batalha?",
        alternativas: ["300 homens", "1000 soldados", "Exército grande", "Anjos"],
        correta: "300 homens"
    },
    
    // Samuel, Saul e Davi
    {
        pergunta: "Quem ungiu Davi como rei?",
        alternativas: ["Samuel", "Saul", "Natã", "Gade"],
        correta: "Samuel"
    },
    {
        pergunta: "Qual animal Davi matou quando jovem?",
        alternativas: ["Urso", "Leão", "Tigre", "Dragão"],
        correta: "Leão"
    },
    {
        pergunta: "Quem Davi derrotou com uma funda?",
        alternativas: ["Golias", "Sansão", "Faraó", "Goliath"],
        correta: "Golias"
    },
    
    // Salomão
    {
        pergunta: "Quem pediu sabedoria a Deus?",
        alternativas: ["Davi", "Salomão", "Asafe", "Ezequias"],
        correta: "Salomão"
    },
    {
        pergunta: "Quantas mulheres Salomão teve?",
        alternativas: ["300", "500", "700", "1000"],
        correta: "700"
    },
    
    // Profetas (Elias, Eliseu, Jonas)
    {
        pergunta: "Quem foi levado ao céu num carro de fogo?",
        alternativas: ["Moisés", "Elias", "Eliseu", "Isaías"],
        correta: "Elias"
    },
    {
        pergunta: "Quem viveu no ventre de um grande peixe?",
        alternativas: ["Moisés", "Jonas", "Daniel", "Jeremias"],
        correta: "Jonas"
    },
    {
        pergunta: "Quem multiplicou o azeite da viúva?",
        alternativas: ["Elias", "Eliseu", "Isaías", "Jeremias"],
        correta: "Eliseu"
    },
    
    // Daniel
    {
        pergunta: "Quem sobreviveu na cova dos leões?",
        alternativas: ["Daniel", "Sadraque", "Mesaque", "Abdenago"],
        correta: "Daniel"
    },
    {
        pergunta: "Quantos amigos de Daniel foram na fornalha?",
        alternativas: ["2", "3", "4", "5"],
        correta: "3"
    },
    
    // Ester
    {
        pergunta: "Quem era rainha da Pérsia?",
        alternativas: ["Rute", "Ester", "Sara", "Rebeca"],
        correta: "Ester"
    },
    {
        pergunta: "Quem era primo de Ester?",
        alternativas: ["Mardoqueu", "Elias", "Esdras", "Neemias"],
        correta: "Mardoqueu"
    },
    
    // Jesus
    {
        pergunta: "Onde Jesus nasceu?",
        alternativas: ["Jerusalém", "Belém", "Nazaré", "Cafarnaum"],
        correta: "Belém"
    },
    {
        pergunta: "Quantos discípulos Jesus teve?",
        alternativas: ["10", "11", "12", "13"],
        correta: "12"
    },
    {
        pergunta: "Qual foi o primeiro milagre de Jesus?",
        alternativas: ["Andar sobre as águas", "Curar um cego", "Transformar água em vinho", "Ressuscitar Lázaro"],
        correta: "Transformar água em vinho"
    },
    {
        pergunta: "Quem negou Jesus três vezes?",
        alternativas: ["João", "Pedro", "Tiago", "Judas"],
        correta: "Pedro"
    },
    {
        pergunta: "Quantos pães Jesus multiplicou?",
        alternativas: ["3", "5", "7", "12"],
        correta: "5"
    },
    
    // Histórias de José e seus irmãos
    {
        pergunta: "Quantos irmãos José tinha?",
        alternativas: ["10", "11", "12", "13"],
        correta: "11"
    },
    {
        pergunta: "O que os irmãos de José fizeram com ele?",
        alternativas: ["Venderam", "Ajudaram", "Mataram", "Jogaram no poço"],
        correta: "Jogaram no poço"
    },
    {
        pergunta: "Quem era o faraó do Egito na época de José?",
        alternativas: ["Faraó Salomão", "Faraó Tutancâmon", "Faraó Ramsés", "Faraó Akhenaton"],
        correta: "Faraó Ramsés"
    },
    
    // Nascimento e infância de Jesus
    {
        pergunta: "Quem visitou Jesus quando ele nasceu?",
        alternativas: ["Anjos", "Reis Magos", "Pastores", "Sacerdotes"],
        correta: "Pastores"
    },
    {
        pergunta: "Onde Jesus fugiu quando era bebê?",
        alternativas: ["Egito", "Fenícia", "Síria", "Deserto"],
        correta: "Egito"
    },
    {
        pergunta: "Onde Jesus cresceu após voltar do Egito?",
        alternativas: ["Jerusalém", "Belém", "Nazaré", "Cafarnaum"],
        correta: "Nazaré"
    },
    
    // Ministério de Jesus
    {
        pergunta: "Quantos dias Jesus jejuou no deserto?",
        alternativas: ["20 dias", "30 dias", "40 dias", "50 dias"],
        correta: "40 dias"
    },
    {
        pergunta: "Quem Jesus curou na piscina de Betesda?",
        alternativas: ["Um homem paralítico", "Dez homens", "Uma mulher cega", "Uma criança doente"],
        correta: "Um homem paralítico"
    },
    {
        pergunta: "Quem Jesus ressuscitou antes de Lázaro?",
        alternativas: ["Filho do centurião", "Filha de Jairo", "Servo do centurião", "Não ressuscitou ninguém antes"],
        correta: "Filha de Jairo"
    },
    
    // Ensinos e parábolas de Jesus
    {
        pergunta: "Qual parábola Jesus contou sobre o semeador?",
        alternativas: ["Parábola do trigo e joio", "Parábola da ovelha perdida", "Parábola do tesouro escondido", "Parábola da rede"],
        correta: "Parábola do semeador"
    },
    {
        pergunta: "Quem são os bem-aventurados na montanha?",
        alternativas: ["Os pobres de espírito", "Os que choram", "Os mansos", "Os que têm fome e sede"],
        correta: "Os pobres de espírito"
    },
    {
        pergunta: "Qual é o maior mandamento?",
        alternativas: ["Não matar", "Honrar pai e mãe", "Amar a Deus", "Não roubar"],
        correta: "Amar a Deus"
    },
    
    // Milagres de Jesus
    {
        pergunta: "Quem Jesus curou de lepra?",
        alternativas: ["Um homem", "Dez homens", "Um grupo de leprosos", "Uma mulher"],
        correta: "Um homem"
    },
    {
        pergunta: "Jesus andou sobre quais águas?",
        alternativas: ["Mar Vermelho", "Mar Morto", "Rio Jordão", "Lago da Galileia"],
        correta: "Mar da Galileia"
    },
    {
        pergunta: "Quem pediu para sentar ao lado de Jesus?",
        alternativas: ["Pedro", "João", "Tiago", "André"],
        correta: "Tiago"
    },
    
    // Paixão e crucificação
    {
        pergunta: "Quem negou Jesus três vezes?",
        alternativas: ["Pedro", "João", "Tiago", "Judas"],
        correta: "Pedro"
    },
    {
        pergunta: "Quem traiu Jesus?",
        alternativas: ["Pedro", "João", "Judas Iscariotes", "Tomé"],
        correta: "Judas Iscariotes"
    },
    {
        pergunta: "Quem ajudou Jesus a carregar a cruz?",
        alternativas: ["Simão Cirineu", "Nicodemos", "José de Arimateia", "Bartolomeu"],
        correta: "Simão Cirineu"
    },
    {
        pergunta: "O que aconteceu quando Jesus morreu?",
        alternativas: ["Trevas por 3 horas", "Terremoto", "Estrela cadente", "Sol se escureceu"],
        correta: "Trevas por 3 horas"
    },
    
    // Ressurreição e ascensão
    {
        pergunta: "Quem foi o primeiro a ver o túmulo vazio?",
        alternativas: ["Maria Madalena", "Pedro", "João", "Maria mãe de Jesus"],
        correta: "Maria Madalena"
    },
    {
        pergunta: "Quantos dias Jesus apareceu após a ressurreição?",
        alternativas: ["7 dias", "12 dias", "40 dias", "50 dias"],
        correta: "40 dias"
    },
    {
        pergunta: "Onde Jesus ascendeu ao céu?",
        alternativas: ["Monte das Oliveiras", "Monte Sião", "Monte Tabor", "Monte Carmelo"],
        correta: "Monte das Oliveiras"
    },
    
    // Espírito Santo e Igreja
    {
        pergunta: "O que desceu sobre os discípulos no Pentecostes?",
        alternativas: ["Fogo", "Pombo", "Anjos", "Vento forte"],
        correta: "Fogo"
    },
    {
        pergunta: "Quem foi o primeiro mártir cristão?",
        alternativas: ["Pedro", "Paulo", "Estêvão", "Tiago"],
        correta: "Estêvão"
    },
    {
        pergunta: "Quem perseguiu os cristãos primitivos?",
        alternativas: ["Herodes", "Pilatos", "Nero", "Calígula"],
        correta: "Nero"
    },
    
    // Vida de Paulo
    {
        pergunta: "Qual era o nome de Paulo antes de se converter?",
        alternativas: ["Saulo", "Barnabé", "Silas", "Timóteo"],
        correta: "Saulo"
    },
    {
        pergunta: "Onde Paulo teve a visão de Jesus?",
        alternativas: ["Damasco", "Jerusalém", "Antioquia", "Éfeso"],
        correta: "Damasco"
    },
    {
        pergunta: "Com quem Paulo viajou em suas missões?",
        alternativas: ["Barnabé", "Silas", "Timóteo", "Tito"],
        correta: "Barnabé"
    },
    
    // Cartas e profecias
    {
        pergunta: "Qual livro da Bíblia fala sobre o fim dos tempos?",
        alternativas: ["Daniel", "Ezequiel", "Apocalipse", "Isaías"],
        correta: "Apocalipse"
    },
    {
        pergunta: "Quantas cartas Paulo escreveu?",
        alternativas: ["7", "13", "21", "27"],
        correta: "13"
    },
    {
        pergunta: "Qual fruto do Espírito Santo?",
        alternativas: ["Amor", "Alegria", "Paz", "Paciência"],
        correta: "Amor"
    },
    
    // Personagens adicionais
    {
        pergunta: "Quem foi o primeiro homem a morrer por Deus?",
        alternativas: ["Abel", "Caim", "Sete", "Enoque"],
        correta: "Abel"
    },
    {
        pergunta: "Quem viveu 969 anos?",
        alternativas: ["Adão", "Noé", "Matusalém", "Abraão"],
        correta: "Matusalém"
    },
    {
        pergunta: "Quem foi engolido vivo por Deus?",
        alternativas: ["Elias", "Enoque", "Enoque", "Ló"],
        correta: "Elias"
    },
    {
        pergunta: "Quem escreveu a maioria dos Salmos?",
        alternativas: ["Moisés", "Davi", "Salomão", "Asafe"],
        correta: "Davi"
    }
];

// ============================================
// IMAGENS DO QUEBRA-CABEÇA
// ============================================

const IMAGEM_PADRAO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2387CEEB'/%3E%3Cstop offset='100%25' style='stop-color:%23E0F6FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23sky)'/%3E%3Ccircle cx='320' cy='60' r='30' fill='%23FFD700'/%3E%3Cpath d='M50 200 Q100 150 150 200 T250 200' stroke='%2332CD32' stroke-width='3' fill='none'/%3E%3Cpath d='M250 200 Q300 150 350 200' stroke='%2332CD32' stroke-width='3' fill='none'/%3E%3Ccircle cx='80' cy='180' r='25' fill='%23228B22'/%3E%3Ccircle cx='150' cy='170' r='30' fill='%23228B22'/%3E%3Ccircle cx='220' cy='175' r='28' fill='%23228B22'/%3E%3Ccircle cx='300' cy='180' r='32' fill='%23228B22'/%3E%3Cpath d='M100 250 Q200 200 300 250' stroke='%238B4513' stroke-width='2' fill='none'/%3E%3Cpath d='M150 260 Q200 230 250 260' stroke='%238B4513' stroke-width='2' fill='none'/%3E%3C/svg%3E";

// ============================================
// VERSÍCULOS DE BENEVOLÊNCIA (10 versículos)
// ============================================

const versiculosBenevolencia = [
    {
        versiculo: "Porque Deus amou o mundo de tal maneira, que deu seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        referencia: "João 3:16"
    },
    {
        versiculo: "O Senhor é o meu pastor; nada me faltará.",
        referencia: "Salmos 23:1"
    },
    {
        versiculo: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.",
        referencia: "Isaías 41:10"
    },
    {
        versiculo: "Tudo posso naquele que me fortalece.",
        referencia: "Filipenses 4:13"
    },
    {
        versiculo: "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?",
        referencia: "Salmos 27:1"
    },
    {
        versiculo: "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.",
        referencia: "Jeremias 29:11"
    },
    {
        versiculo: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
        referencia: "Provérbios 3:5"
    },
    {
        versiculo: "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.",
        referencia: "Naum 1:7"
    },
    {
        versiculo: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
        referencia: "Salmos 91:1"
    },
    {
        versiculo: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
        referencia: "Romanos 8:28"
    }
];

// ============================================
// VARIÁVEIS GLOBAIS DO JOGO
// ============================================

let estadoJogo = {
    acertos: 0,
    erros: 0,
    oportunidades: CONFIG.OPORTUNIDADES_INICIAIS,
    pecasReveladas: 0,
    perguntaAtual: 0,
    perguntasEmbaralhadas: [],
    imagemAtual: null,
    respondido: false,
    jogoAtivo: true,
    versiculosRevelados: []
};

// ============================================
// FUNÇÕES DE INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, iniciando jogo...');
    inicializarJogo();
});

function inicializarJogo() {
    try {
        // Embaralha as perguntas
        estadoJogo.perguntasEmbaralhadas = embaralharArray([...perguntasBiblicas]);
        
        // Usa imagem padrão
        estadoJogo.imagemAtual = IMAGEM_PADRAO;
        
        // Inicializa versículos revelados
        estadoJogo.versiculosRevelados = [];
        
        console.log('Imagem padrão selecionada');
        
        // Cria o quebra-cabeça
        criarPuzzle();
        
        // Carrega a primeira pergunta
        carregarPergunta();
        
        // Atualiza o placar
        atualizarPlacar();
        
        console.log('Jogo inicializado com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar o jogo:', error);
    }
}

// ============================================
// FUNÇÕES DO QUEBRA-CABEÇA
// ============================================

function criarPuzzle() {
    const container = document.getElementById('puzzle-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < CONFIG.NUMERO_PECAS; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.id = `peca-${i}`;
        
        // Configura a imagem de fundo para cada peça
        const linha = Math.floor(i / CONFIG.PUZZLE_COLUNAS);
        const coluna = i % CONFIG.PUZZLE_COLUNAS;
        
        piece.style.backgroundImage = `url('${estadoJogo.imagemAtual}')`;
        piece.style.backgroundSize = `${CONFIG.PUZZLE_COLUNAS * 100}% ${CONFIG.PUZZLE_LINHAS * 100}%`;
        piece.style.backgroundPosition = `${coluna * (100 / (CONFIG.PUZZLE_COLUNAS - 1))}% ${linha * (100 / (CONFIG.PUZZLE_LINHAS - 1))}%`;
        
        container.appendChild(piece);
    }
}

function revelarPeca(indice) {
    const peca = document.getElementById(`peca-${indice}`);
    if (peca && !peca.classList.contains('revelada')) {
        peca.classList.add('revelada');
        estadoJogo.pecasReveladas++;
        
        // Mostra versículo de benevolência
        mostrarVersiculoBenevolencia();
        
        // Verifica se ganhou
        if (estadoJogo.pecasReveladas === CONFIG.NUMERO_PECAS) {
            setTimeout(() => finalizarJogo(true), 1000);
        }
    }
}

function mostrarVersiculoBenevolencia() {
    // Verifica se ainda há versículos para mostrar
    if (estadoJogo.versiculosRevelados.length >= versiculosBenevolencia.length) {
        return;
    }
    
    // Encontra o próximo versículo não revelado
    let proximoIndice = estadoJogo.versiculosRevelados.length;
    
    if (proximoIndice < versiculosBenevolencia.length) {
        const versiculo = versiculosBenevolencia[proximoIndice];
        estadoJogo.versiculosRevelados.push(proximoIndice);
        
        // Remove modal anterior se existir
        const modalAnterior = document.querySelector('.modal-versiculo');
        if (modalAnterior) {
            modalAnterior.remove();
        }
        
        // Cria modal para mostrar o versículo
        const modalVersiculo = document.createElement('div');
        modalVersiculo.className = 'modal-versiculo';
        modalVersiculo.innerHTML = `
            <div class="modal-versiculo-content">
                <div class="versiculo-texto">
                    <p class="versiculo-principal">"${versiculo.versiculo}"</p>
                    <p class="versiculo-referencia">${versiculo.referencia}</p>
                </div>
                <button class="versiculo-fechar" onclick="fecharVersiculo()">Continuar</button>
            </div>
        `;
        
        document.body.appendChild(modalVersiculo);
        
        // Adiciona efeito de fade in
        setTimeout(() => {
            modalVersiculo.style.opacity = '1';
        }, 10);
        
        // Auto-close após 5 segundos
        setTimeout(() => {
            fecharVersiculo();
        }, 5000);
    }
}

function fecharVersiculo() {
    const modal = document.querySelector('.modal-versiculo');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }
}

// ============================================
// FUNÇÕES DAS PERGUNTAS
// ============================================

function carregarPergunta() {
    if (estadoJogo.perguntaAtual >= estadoJogo.perguntasEmbaralhadas.length) {
        // Se acabaram as perguntas, embaralha novamente
        estadoJogo.perguntasEmbaralhadas = embaralharArray([...perguntasBiblicas]);
        estadoJogo.perguntaAtual = 0;
    }
    
    const pergunta = estadoJogo.perguntasEmbaralhadas[estadoJogo.perguntaAtual];
    
    // Atualiza o texto da pergunta
    const elementoPergunta = document.getElementById('pergunta-texto');
    if (elementoPergunta) {
        elementoPergunta.textContent = pergunta.pergunta;
    }
    
    // Cria as alternativas
    criarAlternativas(pergunta);
    
    // Reseta o estado de resposta
    estadoJogo.respondido = false;
    const btnProxima = document.getElementById('btn-proxima');
    if (btnProxima) {
        btnProxima.disabled = true;
    }
    
    // Limpa o feedback anterior
    limparFeedback();
}

function criarAlternativas(pergunta) {
    const container = document.getElementById('alternativas');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Embaralha as alternativas
    const alternativasEmbaralhadas = embaralharArray([...pergunta.alternativas]);
    
    alternativasEmbaralhadas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.className = 'btn-alternativa';
        botao.textContent = alternativa;
        botao.onclick = () => verificarResposta(alternativa, pergunta.correta, botao);
        
        // Adiciona delay para animação de entrada
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
    
    // Desabilita todos os botões
    const botoes = document.querySelectorAll('.btn-alternativa');
    botoes.forEach(btn => btn.disabled = true);
    
    // Consome uma oportunidade
    estadoJogo.oportunidades--;
    
    if (respostaSelecionada === respostaCorreta) {
        // Acertou
        estadoJogo.acertos++;
        botao.classList.add('correta');
        mostrarFeedback('ACERTOU!', 'acerto');
        
        // Revela uma peça do quebra-cabeça
        revelarPeca(estadoJogo.acertos - 1);
        
        // Atualiza texto motivacional
        atualizarTextoMotivacional(true);
        
    } else {
        // Errou
        estadoJogo.erros++;
        botao.classList.add('errada');
        mostrarFeedback('ERROU', 'erro');
        
        // Mostra a resposta correta
        botoes.forEach(btn => {
            if (btn.textContent === respostaCorreta) {
                btn.classList.add('correta');
            }
        });
        
        // Atualiza texto motivacional
        atualizarTextoMotivacional(false);
    }
    
    // Atualiza o placar
    atualizarPlacar();
    
    // Habilita o botão de próxima pergunta
    const btnProxima = document.getElementById('btn-proxima');
    if (btnProxima) {
        btnProxima.disabled = false;
    }
    
    // Verifica se perdeu
    if (estadoJogo.oportunidades <= 0 && estadoJogo.pecasReveladas < CONFIG.NUMERO_PECAS) {
        setTimeout(() => finalizarJogo(false), 2000);
    }
}

function proximaPergunta() {
    if (!estadoJogo.jogoAtivo) return;
    
    estadoJogo.perguntaAtual++;
    carregarPergunta();
}

// ============================================
// FUNÇÕES DE FEEDBACK
// ============================================

function mostrarFeedback(mensagem, tipo) {
    const feedbackElement = document.getElementById('feedback-mensagem');
    if (!feedbackElement) return;
    
    feedbackElement.textContent = mensagem;
    feedbackElement.className = `feedback-mensagem ${tipo}`;
    
    // Mostra o feedback
    setTimeout(() => {
        feedbackElement.classList.add('visivel');
    }, 100);
    
    // Esconde automaticamente
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

// ============================================
// FUNÇÕES DO PLACAR
// ============================================

function atualizarPlacar() {
    const acertosElement = document.getElementById('acertos');
    const errosElement = document.getElementById('erros');
    const oportunidadesElement = document.getElementById('oportunidades');
    const pecasElement = document.getElementById('pecas-reveladas');
    
    if (acertosElement) acertosElement.textContent = estadoJogo.acertos;
    if (errosElement) errosElement.textContent = estadoJogo.erros;
    if (oportunidadesElement) oportunidadesElement.textContent = estadoJogo.oportunidades;
    if (pecasElement) pecasElement.textContent = `${estadoJogo.pecasReveladas}/${CONFIG.NUMERO_PECAS}`;
}

// ============================================
// FUNÇÕES DE FINALIZAÇÃO
// ============================================

function finalizarJogo(venceu) {
    estadoJogo.jogoAtivo = false;
    
    // Prepara o modal de resultado
    prepararModalResultado(venceu);
    
    // Mostra o modal
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
    const modalImagem = document.getElementById('modal-imagem');
    
    if (venceu) {
        if (modalTitulo) {
            modalTitulo.textContent = 'Parabéns!';
            modalTitulo.className = 'modal-titulo vitoria';
        }
        if (modalMensagem) {
            modalMensagem.textContent = 'Você completou o quebra-cabeça!';
        }
    } else {
        if (modalTitulo) {
            modalTitulo.textContent = 'Fim de Jogo';
            modalTitulo.className = 'modal-titulo derrota';
        }
        if (modalMensagem) {
            modalMensagem.textContent = 'Você usou todas as oportunidades';
        }
    }
    
    // Configura a imagem completa
    if (modalImagem) {
        modalImagem.src = estadoJogo.imagemAtual;
        modalImagem.alt = 'Imagem completa do quebra-cabeça';
    }
    
    // Atualiza as estatísticas
    const estatisticaAcertos = document.getElementById('estatistica-acertos');
    const estatisticaErros = document.getElementById('estatistica-erros');
    const estatisticaPecas = document.getElementById('estatistica-pecas');
    const estatisticaOportunidades = document.getElementById('estatistica-oportunidades');
    
    if (estatisticaAcertos) estatisticaAcertos.textContent = estadoJogo.acertos;
    if (estatisticaErros) estatisticaErros.textContent = estadoJogo.erros;
    if (estatisticaPecas) estatisticaPecas.textContent = `${estadoJogo.pecasReveladas}/${CONFIG.NUMERO_PECAS}`;
    if (estatisticaOportunidades) estatisticaOportunidades.textContent = CONFIG.OPORTUNIDADES_INICIAIS - estadoJogo.oportunidades;
}

function jogarNovamente() {
    // Reseta o estado do jogo
    estadoJogo = {
        acertos: 0,
        erros: 0,
        oportunidades: CONFIG.OPORTUNIDADES_INICIAIS,
        pecasReveladas: 0,
        perguntaAtual: 0,
        perguntasEmbaralhadas: [],
        imagemAtual: null,
        respondido: false,
        jogoAtivo: true
    };
    
    // Esconde o modal
    const modal = document.getElementById('modal-resultado');
    if (modal) {
        modal.classList.remove('visivel');
    }
    
    // Reinicializa o jogo
    inicializarJogo();
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
