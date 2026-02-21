function carregarComponentes() {
    const path = window.location.pathname;
    const prefix = path.includes('/posts/') ? '../' : '';
    
    const headerHTML = `
    <header class="topo">
        <div class="topo-container">
            <input type="checkbox" id="menu-check">
            <label for="menu-check" class="menu-botao">☰</label>

            <div class="logo">
                <a href="${prefix}index.html">Mundo <span>Info</span> Tech</a>
            </div>

            <nav class="menu-lateral">
                <a href="${prefix}index.html">Últimas Notícias</a>
                <a href="#">Celulares</a>
                <a href="${prefix}posts/melhores-fones-2026.html">Fones de Ouvido</a>
                <a href="#">Eletrônicos</a>
                <a href="#">Casa Inteligente</a>
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
carregarComponentes();
