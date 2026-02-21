// Função para carregar o Header
function carregarHeader() {
    const headerHTML = `
    <header class="topo">
      <div class="topo-container">
        <input type="checkbox" id="menu-check" style="display:none;">
        <label for="menu-check" class="menu-botao">☰</label>

        <div class="logo-area">
          <h1 class="logo">
            <a href="/" style="text-decoration: none; color: inherit;">Mundo <span>Info</span> Tech</a>
          </h1>
        </div>

        <nav class="menu-categorias">
            <a href="/">Últimas</a>
            <a href="/posts/celulares.html">Celulares</a>
            <a href="/posts/melhores-fones-2026.html">Fones</a>
            <a href="#">Eletrônicos</a>
            <a href="#">Casa Inteligente</a>
        </nav>
      </div>
    </header>
    `;
    document.getElementById('header-global').innerHTML = headerHTML;
}

// Função para carregar o Footer
function carregarFooter() {
    const footerHTML = `
    <footer>
        <p>© 2026 Mundo Info Tech - Todos os direitos reservados</p>
    </footer>
    `;
    document.getElementById('footer-global').innerHTML = footerHTML;
}

// Executa as funções ao carregar a página
carregarHeader();
carregarFooter();
