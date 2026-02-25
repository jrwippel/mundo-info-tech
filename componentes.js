function carregarComponentes(categoria = "") {
    const path = window.location.pathname;
    const estaEmPosts = path.includes('/posts/');

    // Define o prefixo para voltar para a home
    const prefix = estaEmPosts ? '../' : '';

    // SE já estou em posts, o link é direto: "noticias.html"
    // SE não estou em posts, o link é: "posts/noticias.html"
    const linkParaPosts = estaEmPosts ? '' : 'posts/';

    const textoCategoria = categoria ? ` | <span class="categoria-header">${categoria}</span>` : "";

    const headerHTML = `
    <header class="topo">
        <div class="topo-container">
            <input type="checkbox" id="menu-check">
            <label for="menu-check" class="menu-botao">☰</label>
            <div class="logo">
                <a href="${prefix}index.html" style="text-transform: lowercase; letter-spacing: -1px;">
                    mundoinfo<span style="color: #ff6600; font-weight: 800;">tech</span>${textoCategoria}
                </a>
            </div>

            <nav class="menu-lateral">
                <a href="${linkParaPosts}noticias.html">Últimas Notícias</a>
                <a href="${linkParaPosts}melhores-celulares-2026.html">Celulares</a>
                <a href="${linkParaPosts}melhores-fones-2026.html">Fones de Ouvido</a>              
                <a href="${linkParaPosts}casa-inteligente.html">Casa Inteligente</a>
                <a href="${linkParaPosts}series-e-filmes.html">Séries e Filmes</a>
                <a href="${linkParaPosts}ofertas.html">Ofertas do dia</a>
            </nav>
        </div>
    </header>`;

    const footerHTML = `
    <footer style="background:#0f172a; color:white; text-align:center; padding:30px; margin-top:40px;">
        <p>© 2026 Mundo Info Tech - Todos os direitos reservados</p>
    </footer>`;

    if (document.getElementById('header-global')) document.getElementById('header-global').innerHTML = headerHTML;
    if (document.getElementById('footer-global')) document.getElementById('footer-global').innerHTML = footerHTML;
}