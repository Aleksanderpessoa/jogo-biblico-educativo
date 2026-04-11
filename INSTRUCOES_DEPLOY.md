# 🚀 Instruções Rápidas de Deploy

## Opção 1: GitHub Pages (Mais Recomendado)

### Passo 1: Criar Repositório no GitHub
1. Acesse: https://github.com/new
2. **Repository name**: `jogo-biblico-educativo`
3. Marque: **Public** 
4. **Não** marque "Add a README file"
5. Clique em: **Create repository**

### Passo 2: Conectar seu Projeto ao GitHub
Copie e cole estes comandos no terminal (na pasta do projeto):

```bash
git remote add origin https://github.com/SEU-USUARIO/jogo-biblico-educativo.git
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages
1. No repositório, clique em **Settings**
2. Role até **GitHub Pages**
3. **Source**: selecione "Deploy from a branch"
4. **Branch**: escolha "main" e pasta "/ (root)"
5. Clique em **Save**
6. Aguarde 2-3 minutos
7. Seu site estará em: `https://SEU-USUARIO.github.io/jogo-biblico-educativo/`

---

## Opção 2: Netlify (Mais Fácil)

### Passo 1: Acessar Netlify
1. Vá para: https://app.netlify.com/drop
2. **Arraste a pasta do projeto** para a área indicada
3. Pronto! Site publicado automaticamente

### Passo 2: URL do Site
- Seu site ficará com URL como: `https://amazing-name-123456.netlify.app`
- Você pode personalizar o URL gratuitamente

---

## Opção 3: Vercel (Mais Moderno)

### Passo 1: Acessar Vercel
1. Vá para: https://vercel.com
2. Clique em **"Continue with GitHub"**
3. Importe o repositório `jogo-biblico-educativo`
4. Configure:
   - **Framework Preset**: Other
   - **Build Command**: (deixe em branco)
   - **Output Directory**: (deixe em branco)
5. Clique em **Deploy**

---

## Opção 4: Surge.sh (Mais Rápido)

### Passo 1: Instalar Surge (já instalado)
```bash
npm install -g surge
```

### Passo 2: Fazer Deploy
```bash
surge
# Responda as perguntas:
# Email: seu-email@exemplo.com
# Password: sua senha
# Domain: jogo-biblico-educativo.surge.sh
```

---

## 🎯 Recomendação Final

**Use Netlify Drop** se quiser o resultado mais rápido:
1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `joguinhocriança` inteira
3. Pronto! Site publicado instantaneamente

---

## 📱 Teste Local

Enquanto faz o deploy, você pode testar localmente:
1. Abra o arquivo `index.html` no navegador
2. Ou use o servidor local: `http://localhost:8000`

---

## 🔗 URLs Finais

Após o deploy, seu jogo estará disponível em:
- **GitHub Pages**: `https://SEU-USUARIO.github.io/jogo-biblico-educativo/`
- **Netlify**: `https://seu-site-aleatorio.netlify.app`
- **Vercel**: `https://jogo-biblico-educativo.vercel.app`
- **Surge**: `https://jogo-biblico-educativo.surge.sh`

**Escolha a opção que preferir e compartilhe seu jogo educativo!** 🎮✨
