document.addEventListener('DOMContentLoaded', function () {
    // Redireciona para paginaeventos.html quando o botão "NOVO EVENTO +" é clicado
    document.getElementById('novoEventoBtn').addEventListener('click', function() {
        window.location.href = 'paginaeventos.html';
    });

    // Verifica se há eventos no banco de dados MongoDB e exibe na página de eventos
    if (document.getElementById('eventosContainer')) {
        axios.get('/api/eventos') // Endpoint que retorna eventos do MongoDB
            .then(response => {
                const eventos = response.data;
                const container = document.getElementById('eventosContainer');
                if (eventos.length > 0) {
                    eventos.forEach(evento => {
                        const eventoDiv = document.createElement('div');
                        eventoDiv.classList.add('evento', 'mb-3', 'p-3', 'bg-light', 'border');
                        eventoDiv.innerHTML = `
                            <h3>${evento.nome}</h3>
                            <p>Data: ${evento.data}</p>
                            <p>Local: ${evento.local}</p>
                        `;
                        container.appendChild(eventoDiv);
                    });
                } else {
                    container.innerHTML = '<p>Sem eventos</p>';
                }
            })
            .catch(error => {
                console.error('Erro ao carregar eventos:', error);
                document.getElementById('eventosContainer').innerHTML = '<p>Erro ao carregar eventos</p>';
            });
    }
});
