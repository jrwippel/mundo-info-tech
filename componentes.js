function carregarComponentes() {
    // Verifica se estamos na pasta posts ou na raiz para ajustar os caminhos
    const prefix = window.location.pathname.includes('/posts/') ? '../' : '';

    const headerHTML = `
    <header class="topo">
      <div class="topo-container">
        <input type="checkbox" id="menu-check">
        <label for="menu-check" class="menu-botao">☰</label>

        <div class="logo-area">
          <h1 class="logo">
            <a href="${prefix}index.html" style="text-decoration: none; color: inherit;">
                Mundo <span>Info</span> Tech
            </a>
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
        <p>© 2026 Mundo Info Tech - Todos os direitos reservados</p>
    </footer>
    `;

    // Insere o Header se o elemento existir
    const headerElement = document.getElementById('header-global');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    // Insere o Footer se o elemento existir
    const footerElement = document.getElementById('footer-global');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}

// Executa a função assim que o script é carregado
carregarComponentes();
