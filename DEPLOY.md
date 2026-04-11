# Deploy do Jogo Bíblico Educativo

## Opções de Deploy

### Opção 1: GitHub Pages (Gratuito e Recomendado)

#### Passo 1: Criar Repositório no GitHub
1. Acesse https://github.com
2. Clique em "Create repository"
3. Nome do repositório: `jogo-biblico-educativo`
4. Marque "Public" ou "Private"
5. Não adicione README, .gitignore ou license
6. Clique em "Create repository"

#### Passo 2: Enviar seu código para o GitHub
```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/jogo-biblico-educativo.git

# Enviar o código
git push -u origin master
```

#### Passo 3: Ativar GitHub Pages
1. No seu repositório, vá em "Settings"
2. Role até "GitHub Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Branch: "master", pasta: "/ (root)"
5. Clique em "Save"
6. Aguarde 2-3 minutos
7. Seu site estará em: `https://SEU-USUARIO.github.io/jogo-biblico-educativo/`

---

### Opção 2: Netlify (Gratuito e Automático)

#### Passo 1: Criar Conta
1. Acesse https://netlify.com
2. Crie uma conta gratuita
3. Faça login com GitHub

#### Passo 2: Fazer Deploy
1. Clique em "Add new site" > "Import an existing project"
2. Conecte seu GitHub
3. Selecione o repositório `jogo-biblico-educativo`
4. Configure:
   - Build command: `deixe em branco`
   - Publish directory: `deixe em branco`
5. Clique em "Deploy site"
6. Seu site ficará com URL como: `https://seu-site-aleatorio.netlify.app`

---

### Opção 3: Vercel (Gratuito e Moderno)

#### Passo 1: Criar Conta
1. Acesse https://vercel.com
2. Crie uma conta gratuita
3. Faça login com GitHub

#### Passo 2: Importar Projeto
1. Clique em "New Project"
2. Selecione o repositório `jogo-biblico-educativo`
3. Configure:
   - Framework Preset: "Other"
   - Build Command: `deixe em branco`
   - Output Directory: `deixe em branco`
4. Clique em "Deploy"
5. Seu site terá URL como: `https://jogo-biblico-educativo.vercel.app`

---

### Opção 4: Firebase Hosting (Gratuito)

#### Passo 1: Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

#### Passo 2: Inicializar Projeto
```bash
firebase login
firebase init hosting
```

#### Passo 3: Configurar
- Selecione seu projeto Firebase
- Public directory: `.` (ponto)
- Configure como single-page app: `No`
- Overwrite index.html: `No`

#### Passo 4: Fazer Deploy
```bash
firebase deploy
```

---

### Opção 5: Surge.sh (Gratuito e Rápido)

#### Passo 1: Instalar Surge
```bash
npm install -g surge
```

#### Passo 2: Fazer Deploy
```bash
surge
# Ou especificar o diretório
surge --domain jogo-biblico-educativo.surge.sh
```

---

## Recomendação

**GitHub Pages** é a melhor opção porque:
- Totalmente gratuito
- Integrado com o GitHub
- Fácil de usar
- Sem anúncios
- CDN rápido
- HTTPS automático

## Teste Local

Antes de fazer deploy, teste localmente:

```bash
# Usando Python (se tiver instalado)
python -m http.server 8000

# Ou usando Node.js (se tiver instalado)
npx serve .

# Ou simplesmente abra o index.html no navegador
```

## URLs do Jogo

Depois do deploy, seu jogo estará disponível em:

- **GitHub Pages**: `https://SEU-USUARIO.github.io/jogo-biblico-educativo/`
- **Netlify**: `https://seu-site-aleatorio.netlify.app`
- **Vercel**: `https://jogo-biblico-educativo.vercel.app`
- **Surge**: `https://jogo-biblico-educativo.surge.sh`

## Compartilhamento

Após o deploy, você pode:
- Compartilhar o link com crianças e pais
- Usar em escolas e igrejas
- Adicionar QR codes para acesso fácil em celulares
- Incorporar em sites educativos

## Manutenção

Para atualizar o jogo:
1. Faça as alterações nos arquivos
2. Commit e push para GitHub
3. O deploy é automático na maioria das plataformas

---

**Escolha a opção que preferir e divirta-se com seu jogo bíblico educativo!**
