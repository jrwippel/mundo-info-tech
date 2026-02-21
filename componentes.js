function carregarComponentes() {
    // Detecta se estamos dentro da pasta /posts/ para ajustar os links
    const prefix = window.location.pathname.includes('/posts/') ? '../' : '';

    const headerHTML = `
    <header class="topo">
        <div class="topo-container">
            <input type="checkbox" id="menu-check">
            <label for="menu-check" class="menu-botao">☰</label>

            <div class="logo-area">
                <h1 class="logo">
                    <a href="${prefix}index.html">Mundo <span>Info</span> Tech</a>
                </h1>
            </div>

            <nav class="menu-categorias">
                <a href="${prefix}index.html">Últimas</a>
                <a href="#">Celulares</a>
                <a href="${prefix}posts/melhores-fones-2026.html">Fones</a>
                <a href="#">Eletrônicos</a>
                <a href="#">Casa Inteligente</a>
            </nav>
        </div>
    </header>
    `;

    const footerHTML = `
    <footer>
        <div class="container">
            <p>© 2026 Mundo Info Tech - Todos os direitos reservados</p>
        </div>
    </footer>
    `;

    const headerElement = document.getElementById('header-global');
    const footerElement = document.getElementById('footer-global');

    if (headerElement) headerElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;
}

carregarComponentes();
