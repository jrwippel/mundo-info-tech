// Meta Pixel (Facebook) - Substitua 'YOUR_PIXEL_ID' pelo seu ID real
// Obtenha em: https://business.facebook.com/events_manager

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');

// Rastreia cliques em links de afiliado para o Facebook
document.addEventListener('DOMContentLoaded', function() {
    const afiliadoLinks = document.querySelectorAll('a[href*="mercadolivre.com"], a[href*="meli.la"]');
    
    afiliadoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const produto = this.closest('.ad-card, .deal-card, .assunto-card, .produto-card, .filme-card')?.querySelector('h3')?.textContent || 'Produto desconhecido';
            
            // Envia evento customizado para o Facebook
            fbq('trackCustom', 'ClickAfiliado', {
                produto: produto,
                url: this.href
            });
            
            console.log('Clique rastreado no Meta Pixel:', produto);
        });
    });
});
