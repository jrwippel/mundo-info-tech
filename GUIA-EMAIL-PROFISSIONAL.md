# 📧 Guia: Email Profissional + Formulário de Contato

## ✅ O QUE JÁ ESTÁ PRONTO

- ✅ Página de contato criada: `/posts/contato.html`
- ✅ Link no menu (desktop e mobile)
- ✅ Link no footer de todas as páginas
- ✅ Formulário funcional

---

## 📧 OPÇÃO 1: EMAIL GRÁTIS (Recomendado para começar)

### Usar Formspree (Grátis até 50 envios/mês)

1. Acesse: https://formspree.io
2. Clique em "Get Started"
3. Crie uma conta (pode usar seu Gmail)
4. Clique em "+ New Form"
5. Dê um nome: "Contato Mundo Info Tech"
6. Copie o **Form ID** (algo como `xyzabc123`)

7. Abra o arquivo `posts/contato.html`
8. Na linha 82, substitua:
   ```html
   <!-- DE: -->
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   
   <!-- PARA (exemplo se seu ID for xyzabc123): -->
   <form id="contactForm" action="https://formspree.io/f/xyzabc123" method="POST">
   ```

**Pronto!** As mensagens vão chegar no seu email cadastrado no Formspree.

---

## 📧 OPÇÃO 2: EMAIL PROFISSIONAL (contato@mundoinfotech.com.br)

### Usando Zoho Mail (Grátis para 1 domínio)

1. Acesse: https://www.zoho.com/mail/
2. Clique em "Sign Up Now"
3. Escolha o plano **"Forever Free"** (grátis)
4. Preencha:
   - **Domain:** mundoinfotech.com.br
   - **Email:** contato
   - **Password:** (crie uma senha forte)

5. **Verificar domínio:**
   - Zoho vai pedir para adicionar registros DNS
   - Vá no Registro.br (onde você comprou o domínio)
   - Adicione os registros TXT e MX que o Zoho mostrar
   - Aguarde 24-48h para propagar

6. **Depois de verificado:**
   - Você terá: contato@mundoinfotech.com.br
   - Acesse em: https://mail.zoho.com
   - Configure no celular (app Zoho Mail)

---

## 📧 OPÇÃO 3: Google Workspace (Pago - R$ 30/mês)

Se quiser algo mais profissional:

1. Acesse: https://workspace.google.com
2. Escolha o plano **Business Starter** (R$ 30/mês)
3. Configure o domínio mundoinfotech.com.br
4. Crie: contato@mundoinfotech.com.br
5. Use o Gmail normal com seu domínio personalizado

**Vantagens:**
- Interface do Gmail
- 30GB de armazenamento
- Google Drive, Calendar, Meet inclusos
- Mais profissional

---

## 🔧 CONFIGURAR FORMULÁRIO COM EMAIL PRÓPRIO

Se você criou o email profissional, pode fazer o formulário enviar direto para ele:

### Opção A: Continuar usando Formspree
- No Formspree, vá em Settings
- Mude o email de destino para: contato@mundoinfotech.com.br

### Opção B: Usar EmailJS (Grátis até 200 envios/mês)
1. Acesse: https://www.emailjs.com
2. Crie uma conta
3. Conecte seu email (Gmail, Outlook, etc)
4. Copie o código de integração
5. Substitua no formulário

---

## 📱 RESPONDER MENSAGENS

### Se usar Formspree:
- Mensagens chegam no seu email pessoal
- Responda normalmente pelo Gmail/Outlook

### Se usar Zoho Mail:
- Acesse: https://mail.zoho.com
- Ou use o app no celular
- Responda profissionalmente de contato@mundoinfotech.com.br

---

## 💡 DICAS PROFISSIONAIS

### Assinatura de Email:
```
---
Equipe Mundo Info Tech
🌐 https://mundoinfotech.com.br
📧 contato@mundoinfotech.com.br
```

### Tempo de Resposta:
- Responda em até 24 horas úteis
- Se demorar mais, envie um "Recebemos sua mensagem, responderemos em breve"

### Mensagens Automáticas:
No Zoho ou Gmail, configure resposta automática:
```
Olá!

Recebemos sua mensagem e responderemos em até 24 horas úteis.

Enquanto isso, confira nossas últimas ofertas:
https://mundoinfotech.com.br/posts/ofertas.html

Atenciosamente,
Equipe Mundo Info Tech
```

---

## 🎯 CHECKLIST

- [ ] Criar conta no Formspree
- [ ] Pegar Form ID
- [ ] Substituir no arquivo contato.html
- [ ] Testar enviando uma mensagem
- [ ] (Opcional) Criar email profissional no Zoho
- [ ] (Opcional) Configurar assinatura de email
- [ ] Responder mensagens em até 24h

---

## 🚀 ESTÁ PRONTO!

Seu site agora tem:
- ✅ Formulário de contato funcional
- ✅ Link no menu e footer
- ✅ Email profissional (ou pode usar Formspree grátis)

As pessoas podem entrar em contato para:
- Tirar dúvidas sobre produtos
- Sugerir conteúdo
- Fazer parcerias
- Reportar problemas

Isso aumenta a credibilidade do site! 📈
