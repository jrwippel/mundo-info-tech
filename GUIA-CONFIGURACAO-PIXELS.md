# 📊 Guia de Configuração: Google Analytics + Meta Pixel

## ✅ O QUE JÁ ESTÁ INSTALADO

Seu site já tem os códigos de rastreamento instalados! Só falta configurar os IDs.

### Arquivos criados:
- ✅ `analytics.js` - Google Analytics 4
- ✅ `meta-pixel.js` - Meta Pixel (Facebook)
- ✅ Rastreamento automático de cliques em links de afiliado

---

## 🎯 PASSO 1: CONFIGURAR GOOGLE ANALYTICS

### 1.1 Criar conta no Google Analytics
1. Acesse: https://analytics.google.com
2. Clique em "Começar a medir" ou "Start measuring"
3. Faça login com sua conta Google

### 1.2 Criar propriedade
1. **Nome da conta:** Mundo Info Tech
2. **Nome da propriedade:** mundoinfotech.com.br
3. **Fuso horário:** Brasil (GMT-3)
4. **Moeda:** Real brasileiro (BRL)

### 1.3 Configurar fluxo de dados
1. Escolha **"Web"**
2. **URL do site:** https://mundoinfotech.com.br
3. **Nome do fluxo:** Site Principal
4. Clique em "Criar fluxo"

### 1.4 Pegar o ID de medição
Depois de criar, você verá:

```
ID de medição: G-ABC123XYZ
```

**Esse é o ID que você precisa!**

### 1.5 Substituir no código
1. Abra o arquivo `analytics.js`
2. Substitua **AMBAS** as ocorrências de `G-XXXXXXXXXX` pelo seu ID real

**Exemplo:**
```javascript
// DE:
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
gtag('config', 'G-XXXXXXXXXX');

// PARA (se seu ID for G-ABC123XYZ):
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ';
gtag('config', 'G-ABC123XYZ');
```

### 1.6 Testar
1. Faça upload do arquivo atualizado
2. Abra seu site: https://mundoinfotech.com.br
3. No Google Analytics, vá em: **Relatórios > Tempo real**
4. Você deve ver sua visita aparecendo!

---

## 📘 PASSO 2: CONFIGURAR META PIXEL (FACEBOOK)

### 2.1 Criar conta no Meta Business
1. Acesse: https://business.facebook.com
2. Faça login com sua conta do Facebook
3. Clique em "Criar conta" se não tiver

### 2.2 Criar Pixel
1. No menu, vá em: **Gerenciador de Eventos**
2. Clique em "Conectar fontes de dados"
3. Escolha **"Web"**
4. Escolha **"Meta Pixel"**
5. Dê um nome: **Mundo Info Tech**
6. Clique em "Criar pixel"

### 2.3 Pegar o ID do Pixel
Você verá algo como:

```
ID do Pixel: 123456789012345
```

**Esse é o ID que você precisa!**

### 2.4 Substituir no código
1. Abra o arquivo `meta-pixel.js`
2. Substitua `YOUR_PIXEL_ID` pelo seu ID real

**Exemplo:**
```javascript
// DE:
fbq('init', 'YOUR_PIXEL_ID');

// PARA (se seu ID for 123456789012345):
fbq('init', '123456789012345');
```

### 2.5 Testar
1. Faça upload do arquivo atualizado
2. Instale a extensão: **Meta Pixel Helper** (Chrome)
3. Abra seu site: https://mundoinfotech.com.br
4. A extensão deve mostrar um ícone verde ✅

---

## 📈 O QUE ESTÁ SENDO RASTREADO

### Google Analytics rastreia:
- ✅ Visualizações de página
- ✅ Tempo no site
- ✅ Taxa de rejeição
- ✅ Cliques em links de afiliado (evento customizado)
- ✅ Origem do tráfego (Google, Facebook, direto, etc)

### Meta Pixel rastreia:
- ✅ Visualizações de página
- ✅ Cliques em links de afiliado (evento customizado)
- ✅ Permite criar públicos personalizados
- ✅ Permite fazer remarketing

---

## 🎯 EVENTOS CUSTOMIZADOS CONFIGURADOS

### Evento: click_afiliado
Dispara quando alguém clica em um link do Mercado Livre.

**Informações capturadas:**
- Nome do produto
- URL do link
- Horário do clique

**Onde ver:**
- **Google Analytics:** Relatórios > Eventos > click_afiliado
- **Meta Pixel:** Gerenciador de Eventos > Eventos Personalizados > ClickAfiliado

---

## 🔍 COMO USAR OS DADOS

### No Google Analytics:
1. **Relatórios > Tempo real** - Ver quem está no site agora
2. **Relatórios > Aquisição** - De onde vem o tráfego
3. **Relatórios > Engajamento > Eventos** - Ver cliques em afiliados
4. **Relatórios > Engajamento > Páginas** - Páginas mais visitadas

### No Meta Pixel:
1. **Criar públicos personalizados** - Pessoas que visitaram o site
2. **Criar públicos semelhantes** - Encontrar pessoas parecidas
3. **Remarketing** - Mostrar anúncios para quem já visitou
4. **Otimizar campanhas** - Facebook otimiza para quem converte

---

## 💰 CALCULANDO ROI (RETORNO SOBRE INVESTIMENTO)

### Fórmula básica:
```
ROI = (Receita - Custo) / Custo × 100

Exemplo:
Gastou R$ 100 em anúncios
Gerou 5 vendas × R$ 30 comissão = R$ 150
ROI = (150 - 100) / 100 × 100 = 50%
```

### Como rastrear no Google Analytics:
1. Vá em: **Administração > Conversões**
2. Crie uma conversão: "click_afiliado"
3. Atribua um valor (ex: R$ 20 por clique)
4. Veja o ROI em: **Relatórios > Monetização**

---

## ⚠️ PROBLEMAS COMUNS

### "Não aparece nada no Google Analytics"
- Aguarde 24-48h após configurar
- Verifique se o ID está correto (começa com G-)
- Limpe o cache do navegador
- Teste em modo anônimo

### "Meta Pixel Helper mostra erro"
- Verifique se o ID está correto (só números)
- Limpe o cache do navegador
- Desative bloqueadores de anúncios

### "Eventos não estão sendo rastreados"
- Abra o Console do navegador (F12)
- Clique em um link de afiliado
- Deve aparecer: "Clique rastreado: [nome do produto]"
- Se não aparecer, o JavaScript pode estar com erro

---

## 📝 CHECKLIST FINAL

- [ ] Google Analytics criado
- [ ] ID do Analytics substituído em `analytics.js`
- [ ] Testado no Tempo Real do Analytics
- [ ] Meta Pixel criado
- [ ] ID do Pixel substituído em `meta-pixel.js`
- [ ] Testado com Meta Pixel Helper
- [ ] Eventos de clique funcionando
- [ ] Arquivos enviados para o servidor

---

## 🚀 PRÓXIMOS PASSOS

Depois de configurar:

1. **Aguarde 7 dias** para coletar dados
2. **Analise** quais páginas convertem mais
3. **Crie públicos** no Facebook de quem visitou
4. **Comece remarketing** para quem não comprou
5. **Otimize** as páginas com baixa conversão

---

## 📞 LINKS ÚTEIS

- Google Analytics: https://analytics.google.com
- Meta Business: https://business.facebook.com
- Meta Pixel Helper: https://chrome.google.com/webstore (busque "Meta Pixel Helper")
- Google Tag Assistant: https://tagassistant.google.com

---

**Dúvidas?** Consulte a documentação oficial ou me pergunte!
