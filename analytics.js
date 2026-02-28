// Google Analytics 4 - Substitua 'G-XXXXXXXXXX' pelo seu ID real
// Obtenha em: https://analytics.google.com

// Carrega o script do Google Analytics
(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);
})();

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

// Rastreia cliques em links de afiliado
document.addEventListener('DOMContentLoaded', function() {
    // Rastreia todos os links do Mercado Livre
    const afiliadoLinks = document.querySelectorAll('a[href*="mercadolivre.com"], a[href*="meli.la"]');
    
    afiliadoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const produto = this.closest('.ad-card, .deal-card, .assunto-card, .produto-card, .filme-card')?.querySelector('h3')?.textContent || 'Produto desconhecido';
            
            // Envia evento para o Google Analytics
            gtag('event', 'click_afiliado', {
                'event_category': 'Afiliado',
                'event_label': produto,
                'value': 1
            });
            
            console.log('Clique rastreado:', produto);
        });
    });
});
