# Atividade para conhecimento bíblico

Um jogo educativo infantil bíblico completo, bonito e moderno, inspirado no jogo da forca, mas com quebra-cabeça de imagens.

## Descrição

O jogo consiste em responder perguntas bíblicas para revelar peças de um quebra-cabeça de 10 partes. O jogador tem 14 oportunidades para completar a imagem.

## Estrutura do Projeto

```
joguinhocriança/
    index.html          # Tela inicial bonita e infantil
    jogo.html           # Tela principal do jogo
    style.css           # Estilos responsivos e modernos
    script.js           # Lógica completa do jogo
    img/                # Pasta para imagens do quebra-cabeça
    sounds/             # Pasta para efeitos sonoros
    README.md           # Este arquivo
```

## Como Jogar

1. **Tela Inicial**: Clique em "INICIAR ATIVIDADE" para começar
2. **Responda Perguntas**: Leia cada pergunta bíblica e escolha uma das 4 alternativas
3. **Monte o Quebra-cabeça**: Cada resposta correta revela 1 peça da imagem
4. **Complete a Imagem**: Revele as 10 peças antes que acabem as 14 oportunidades

## Características

### Gameplay
- **40 perguntas bíblicas** sobre personagens e eventos da Bíblia
- **Sistema de quebra-cabeça** com 10 peças (5x2 grid)
- **14 oportunidades** por partida
- **Feedback visual** imediato (ACERTOU/ERROU)
- **Placar em tempo real** com acertos, erros e oportunidades

### Visual
- **Design infantil e moderno** com cores suaves
- **Animações suaves** e efeitos visuais
- **Responsivo** para celular, tablet e computador
- **Elementos cristãos** delicados (nuvens, estrelas, arco-íris)
- **Interface amigável** para crianças

### Técnico
- **HTML5, CSS3, JavaScript puro** (sem frameworks)
- **LocalStorage** para salvar estatísticas
- **Sistema de sons** preparado (opcional)
- **Código comentado** e bem organizado
- **Fácil personalização**

## Como Usar

1. **Baixe os arquivos** do projeto
2. **Abra `index.html`** em seu navegador
3. **Comece a jogar!**

### Para Adicionar Imagens

1. Coloque as imagens na pasta `img/`
2. Adicione os caminhos no arquivo `script.js` no array `imagensPuzzle`
3. Formatos recomendados: JPG, PNG (400x300px)

### Para Adicionar Sons

1. Coloque os arquivos de som na pasta `sounds/`
2. Descomente a função `tocarSom()` no arquivo `script.js`
3. Formatos recomendados: MP3, WAV

## Personalização

### Alterar Configurações do Jogo

No arquivo `script.js`, modifique o objeto `CONFIG`:

```javascript
const CONFIG = {
    OPORTUNIDADES_INICIAIS: 14,  // Número de oportunidades
    NUMERO_PECAS: 10,           // Peças do quebra-cabeça
    PUZZLE_COLUNAS: 5,          // Colunas do quebra-cabeça
    PUZZLE_LINHAS: 2,           // Linhas do quebra-cabeça
    ATIVAR_SONS: true,          // Ativar sons
    ATIVAR_ANIMACOES: true      // Ativar animações
};
```

### Adicionar Novas Perguntas

No arquivo `script.js`, adicione ao array `perguntasBiblicas`:

```javascript
{
    pergunta: "Sua pergunta aqui?",
    alternativas: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    correta: "Opção correta"
}
```

### Alterar Cores e Design

Modifique o arquivo `style.css`:
- Cores principais: `#4169E1` (azul), `#FF69B4` (rosa), `#28a745` (verde)
- Gradientes e animações
- Layout responsivo

## Temas das Perguntas

O jogo inclui perguntas sobre:

- Criação do mundo e Adão e Eva
- Noé e o Dilúvio
- Torre de Babel
- Abraão, Isaque e Jacó
- José do Egito
- Moisés e o Êxodo
- Josué e Jericó
- Juízes (Gideão, Sansão)
- Reis (Davi, Salomão)
- Profetas (Elias, Jonas, Daniel)
- Nascimento e vida de Jesus
- Discípulos e milagres
- Ester e outros personagens

## Requisitos

- **Navegador moderno** (Chrome, Firefox, Safari, Edge)
- **Conexão com internet** (opcional, para imagens externas)
- **JavaScript habilitado**

## Compatibilidade

- Desktop: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- Mobile: iOS Safari 12+, Chrome Mobile 80+
- Tablets: Todos os navegadores modernos

## Desenvolvimento

### Tecnologias Utilizadas
- **HTML5 Semântico**
- **CSS3 com Flexbox e Grid**
- **JavaScript ES6+**
- **LocalStorage API**
- **CSS Animations e Transitions**

### Boas Práticas
- Código comentado e organizado
- Semântica HTML5
- CSS responsivo
- JavaScript modular
- Performance otimizada

## Licença

Este projeto é gratuito para uso educativo e religioso.

---

**Desenvolvido com amor para ensinar as crianças sobre a Bíblia!**
