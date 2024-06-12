document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const eventoAlteradoSucesso = document.getElementById('eventoAlteradoSucesso');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor

        // Exibir a mensagem de sucesso
        eventoAlteradoSucesso.classList.remove('d-none');

        // Opcional: Limpar os campos do formulário após o envio bem-sucedido
        form.reset();
    });
});
