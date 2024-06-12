document.addEventListener('DOMContentLoaded', function() {
    const inscrevaSeButtons = document.querySelectorAll('.inscricao .btn-primary');

    inscrevaSeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const inscricaoComment = document.createElement('p');
            inscricaoComment.classList.add('inscricao-comment');
            inscricaoComment.innerHTML = '<i class="bi bi-check-circle-fill"></i>Inscrição realizada com sucesso';
            this.parentNode.appendChild(inscricaoComment);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const createEventForm = document.getElementById('createEventForm');
    const successMessage = document.getElementById('successMessage');

    createEventForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
        // Suponha que os dados do evento foram enviados com sucesso
        // Exibimos a mensagem de sucesso e limpamos o formulário
        successMessage.classList.remove('d-none');
        createEventForm.reset();
        // Adiciona um temporizador para ocultar a mensagem de sucesso após 3 segundos
        setTimeout(function() {
            successMessage.classList.add('d-none');
        }, 3000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            showSuccessMessage();
        });
    });

  
});
