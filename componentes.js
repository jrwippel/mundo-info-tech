function carregarComponentes(categoria = "") {
    const path = window.location.pathname;
    const estaEmPosts = path.includes('/posts/');

    // Define o prefixo para voltar para a home
    const prefix = estaEmPosts ? '../' : '';

    // SE já estou em posts, o link é direto: "noticias.html"
    // SE não estou em posts, o link é: "posts/noticias.html"
    const linkParaPosts = estaEmPosts ? '' : 'posts/';

    const textoCategoria = categoria ? ` | <span class="categoria-header">${categoria}</span>` : "";

    // Adiciona favicon dinamicamente
    if (!document.querySelector('link[rel="icon"]')) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/svg+xml';
        favicon.href = prefix + 'favicon.svg';
        document.head.appendChild(favicon);
    }

    const headerHTML = `
    <header class="topo">
        <div class="topo-container">
            <!-- Hambúrguer (Mobile) -->
            <input type="checkbox" id="menu-check">
            <label for="menu-check" class="menu-botao">☰</label>
            
            <!-- Logo (Centro no mobile, esquerda no desktop) -->
            <div class="logo">
                <a href="${prefix}" style="text-transform: lowercase; letter-spacing: -1px;">
                    mundoinfo<span style="color: #ff6600; font-weight: 800;">tech</span>${textoCategoria}
                </a>
            </div>

            <!-- Menu Horizontal (Desktop) -->
            <nav class="menu-horizontal">
                <a href="${linkParaPosts}noticias.html">Notícias</a>
                <a href="${linkParaPosts}ofertas.html">Ofertas</a>
                <a href="${linkParaPosts}melhores-celulares-2026.html">Celulares</a>
                <a href="${linkParaPosts}melhores-fones-2026.html">Fones</a>
                <a href="${linkParaPosts}casa-inteligente.html">Casa Inteligente</a>
                <a href="${linkParaPosts}series-e-filmes.html">Séries & Filmes</a>
                <a href="${linkParaPosts}contato.html">Contato</a>
            </nav>

            <!-- Botão Entrar -->
            <a href="#" class="btn-entrar" onclick="alert('Em breve: área de membros com ofertas exclusivas!'); return false;">Entrar</a>

            <!-- Menu Lateral (Mobile) -->
            <nav class="menu-lateral">
                <a href="${linkParaPosts}noticias.html">Últimas Notícias</a>
                <a href="${linkParaPosts}setup-home-office-2026.html">Setup Home Office</a>
                <a href="${linkParaPosts}melhores-celulares-2026.html">Celulares</a>
                <a href="${linkParaPosts}melhores-fones-2026.html">Fones de Ouvido</a>              
                <a href="${linkParaPosts}casa-inteligente.html">Casa Inteligente</a>
                <a href="${linkParaPosts}series-e-filmes.html">Séries e Filmes</a>
                <a href="${linkParaPosts}ofertas.html">Ofertas do dia</a>
                <a href="${linkParaPosts}contato.html">📧 Contato</a>
            </nav>
        </div>
    </header>`;

    const footerHTML = `
    <footer style="background:#0f172a; color:white; text-align:center; padding:30px; margin-top:40px;">
        <p style="margin-bottom: 10px;">📧 <a href="${linkParaPosts}contato.html" style="color: #ff6600; text-decoration: none; font-weight: bold;">Entre em Contato</a> | E-mail: <a href="mailto:contato@mundoinfotech.com.br" style="color: #ff6600; text-decoration: none;">contato@mundoinfotech.com.br</a></p>
        <p>© 2026 Mundo Info Tech - Todos os direitos reservados</p>
    </footer>`;

    if (document.getElementById('header-global')) document.getElementById('header-global').innerHTML = headerHTML;
    if (document.getElementById('footer-global')) document.getElementById('footer-global').innerHTML = footerHTML;
    
    // Carrega Google Analytics
    const analyticsScript = document.createElement('script');
    analyticsScript.src = prefix + 'analytics.js';
    document.head.appendChild(analyticsScript);
    
    // Carrega Meta Pixel (Facebook)
    const metaPixelScript = document.createElement('script');
    metaPixelScript.src = prefix + 'meta-pixel.js';
    document.head.appendChild(metaPixelScript);
}