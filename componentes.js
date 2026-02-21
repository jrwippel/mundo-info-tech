function carregarComponentes() {
    const isPostPage = window.location.pathname.includes('/posts/');
    const prefix = isPostPage ? '../' : '';

    const headerHTML = `
    <header class="topo">
      <div class="topo-container">
        <input type="checkbox" id="menu-check" style="display:none;">
        <label for="menu-check" class="menu-botao">☰</label>

        <div class="logo-area">
          <h1 class="logo">
            <a href="${prefix}index.html" style="text-decoration: none; color: inherit;">Mundo <span>Info</span> Tech</a>
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

    const footerHTML = `<footer><p>© 2026 Mundo Info Tech - Todos os direitos reservados</p></footer>`;

    if(document.getElementById('header-global')) document.getElementById('header-global').innerHTML = headerHTML;
    if(document.getElementById('footer-global')) document.getElementById('footer-global').innerHTML = footerHTML;
}
carregarComponentes();
