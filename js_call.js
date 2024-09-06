<script>
    // JavaScript para cargar el HTML y CSS externamente
    fetch('https://softgrade.github.io/whatsapp_widget/whatsapp-widget.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);

            // Añadir funcionalidad al botón flotante
            document.getElementById('whatsapp-button').addEventListener('click', function() {
                var chatbox = document.getElementById('chatbox');
                if (chatbox.style.display === 'block') {
                    chatbox.style.display = 'none';
                } else {
                    chatbox.style.display = 'block';
                }
            });
            
            // Añadir funcionalidad al botón de cierre
            document.getElementById('close-chatbox').addEventListener('click', function() {
                var chatbox = document.getElementById('chatbox');
                chatbox.style.display = 'none';
            });

            // Redireccionar después de clic en WhatsApp
                document.getElementById('whatsapp-link').addEventListener('click', function() {
                    setTimeout(function(){
                        window.location.href = 'https://landings.oncemexico.org/gracias-wizard-iso-9001';
                    }, 3000);  // Redireccionar después de 3 segundos
            });
        })
        .catch(error => console.error('Error al cargar el widget de WhatsApp:', error));
</script>
