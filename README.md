# 🌎 ViageBem – Portal de Viagens

Um portal de viagens desenvolvido em **Next.js** + **TypeScript**, com animações suaves usando **Framer Motion** e layout otimizado com **CSS Modules**.  
Este projeto passou por um processo completo de **análise de performance** e **otimização**, utilizando Chrome DevTools (Lighthouse) para identificar gargalos e melhorar a experiência do usuário.

---

# 🚀 Tecnologias Utilizadas

- **Next.js 15** – Framework React focado em performance  
- **React + TypeScript** – Tipagem estática e componentes reutilizáveis  
- **CSS Modules** – Isolamento de estilos  
- **Framer Motion** – Animações fluidas  
- **Next/Image** – Otimização automática de imagens  
- **Google Lighthouse / DevTools** – Para análise técnica de performance  

---

# 📂 Estrutura do Projeto

📦 projeto-viagebem
┣ 📂 app
┃ ┣ 📂 components
┃ ┃ ┣ 📂 Card
┃ ┃ ┃ ┣ 📜 Card.tsx
┃ ┃ ┣ 📜 Footer.tsx
┃ ┃ ┣ 📜 Grid.tsx
┃ ┃ ┣ 📜 Header.tsx
┃ ┃ ┣ 📜 Title.tsx
┃ ┣ 📂 lib
┃ ┃ ┣ 📜 viagens.js
┃ ┣ 📂 styles
┃ ┃ ┣ 📜 globals.css
┃ ┣ 📂 viagens
┃ ┃ ┣ 📂 destinos
┃ ┃ ┃ ┣ 📜 page.tsx
┃ ┣ 📜 layout.tsx
┃ ┣ 📜 page.tsx
┣ 📜 README.md
┣ 📜 package.json
┣ 📜 next.config.mjs

markdown
Copiar código

---

# 🔍 Análise Inicial de Performance (Antes)

Relatório Lighthouse inicial:  
📄 **Relatorio.pdf** :contentReference[oaicite:0]{index=0}

### ❌ Resultados antes da otimização:

| Métrica | Valor |
|--------|-------|
| **Performance** | 75 |
| **LCP** | **6,9s** |
| FCP | 0,9s |
| TBT | 140ms |
| CLS | 0 |

### ❗ Gargalos encontrados:

- Imagem principal (LCP) **carregando tarde e pesada**
- Ausência de `priority` no principal elemento visual
- Blur pesado (`backdrop-filter`) causando custo no mobile
- JavaScript não utilizado excedendo 300kb
- CSS excedente
- Imagens externas sem otimização (`loading="lazy"` faltando)
- Elementos grandes sendo carregados fora de ordem
- Sem layout reservado → risco de layout shift
- Background carregado como imagem na `<body>` (não otimiza o LCP)

---

# ⚙️ Otimizações Aplicadas

### ✔ **Imagens**
- Conversão de imagens para **WebP**
- Inclusão do **Next/Image**
- Adição de `priority` no Hero (LCP)
- Lazy loading para imagens dos cards
- Ajuste de `sizes` para dispositivos móveis
- Remoção de background pesado no `<body>`

### ✔ **HTML / CSS / JS**
- Redução de blur (`backdrop-filter`) de 20px → 6px
- Remoção de CSS não usado
- Remoção de JS não utilizado
- Animações Framer Motion otimizadas
- Reestruturação de layout para melhorar renderização

### ✔ **Código**
- Componentes memorizados com `React.memo`
- Melhor organização dos imports
- Estrutura otimizada do Hero com `<Image fill />`

---

# 🔁 Relatório Após Otimização

Relatório Lighthouse após melhorias:  
📄 **Relatorio atual.pdf** :contentReference[oaicite:1]{index=1}

### ✅ Resultados depois da otimização:

| Métrica | Antes | Depois |
|--------|--------|--------|
| **Performance** | 75 | **98** |
| **LCP** | 6,9s | **2,1s** |
| FCP | 0,9s | 0,9s |
| TBT | 140ms | **100ms** |
| CLS | 0 | 0 |
| SEO | 100 | 100 |
| Acessibilidade | 100 | 100 |
| Melhores práticas | 79 | **100** |

---

# 📈 Conclusão – Melhorias com Maior Impacto

As melhorias que mais impactaram a performance foram:

### 🚀 1. **Transformar o background em imagem REAL no Hero com `priority`**
Reduziu o LCP de **6,9s → 2,1s**  
Impacto gigantesco no Lighthouse.

### 🌄 2. **Lazy Loading + formato WebP nas imagens dos cards**
Economia de mais de **272 KB** no primeiro carregamento.

### 🧊 3. **Redução de blur no header e nos cards**
Menos processamento na GPU, ganho especialmente em mobile.

### 📦 4. **Remoção de JS e CSS não utilizados**
Diminuiu parse, execução e tempo bloqueado.

### 🧱 5. **Estrutura do layout melhorada**
Evita layout shift e renderizações desnecessárias.

---

# 🧪 Como Rodar o Projeto

```bash
git clone https://github.com/jonatasmirand/Portal-viagens.git
cd viagebem
npm install
npm run dev
Acesse em:
👉 http://localhost:3000/
```

# 📌 Próximas Melhorias
📡 Consumir destinos via API real

🔍 Filtros e busca dinâmica

🌙 Dark Mode

🧭 Adicionar navegação mais avançada

✈ Integração com mapa e rotas

# 👨‍💻 Autor
Jonatas Miranda
🔗 LinkedIn | GitHub