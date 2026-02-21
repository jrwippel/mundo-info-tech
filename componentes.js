function carregarComponentes() {
    const path = window.location.pathname;
    const isPost = path.includes('/posts/');
    const prefix = isPost ? '../' : '';
    
    // Identifica a seção atual para o título dinâmico
    let secaoNome = "";
    if (path.includes('celulares')) secaoNome = " | Celulares";
    else if (path.includes('fones')) secaoNome = " | Fones";
    else if (path.includes('eletronicos')) secaoNome = " | Eletrônicos";

    const headerHTML = `
    <header class="barra-topo">
        <div class="linha-principal">
            <div class="container-header">
                <div class="lado-esquerdo">
                    <input type="checkbox" id="menu-check">
                    <label for="menu-check" class="menu-botao">☰ <span>Menu</span></label>
                </div>
                
                <div class="logo-area">
                    <a href="${prefix}index.html" class="logo">Mundo <span>Info</span> Tech</a>
                    <span class="secao-titulo">${secaoNome}</span>
                </div>

                <div class="lado-direito">
                    <span class="botao-entrar">Entrar</span>
                </div>
            </div>
        </div>

        <nav class="barra-categorias">
            <div class="container-header">
                <a href="${prefix}index.html">últimas notícias</a>
                <a href="#">celulares</a>
                <a href="${prefix}posts/melhores-fones-2026.html">fones</a>
                <a href="#">eletrônicos</a>
                <a href="#">casa inteligente</a>
                <a href="#">guias</a>
            </div>
        </nav>
    </header>
    `;

    const footerHTML = `<footer><div class="container">© 2026 Mundo Info Tech - Todos os direitos reservados</div></footer>`;

    if (document.getElementById('header-global')) document.getElementById('header-global').innerHTML = headerHTML;
    if (document.getElementById('footer-global')) document.getElementById('footer-global').innerHTML = footerHTML;
}
carregarComponentes();
