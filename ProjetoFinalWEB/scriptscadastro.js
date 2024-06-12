document.addEventListener('DOMContentLoaded', async function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const loginEmail = document.getElementById('loginEmail');
    const loginEmailFeedback = document.getElementById('loginEmailFeedback');
    const registerEmail = document.getElementById('registerEmail');
    const registerEmailFeedback = document.getElementById('registerEmailFeedback');

    async function validateEmail(email) {
        return email.endsWith('@edu.unifor.br');
    }

    async function showInvalidEmailFeedback(input, feedback) {
        input.classList.add('is-invalid');
        feedback.textContent = 'Por favor, insira um email da Unifor (@edu.unifor.br)';
        feedback.style.color = 'red'; // Adicionando estilo vermelho ao feedback
    }

    async function clearInvalidEmailFeedback(input, feedback) {
        input.classList.remove('is-invalid');
        feedback.textContent = '';
    }

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = loginEmail.value;
        const password = document.getElementById('loginPassword').value;

        if (!(await validateEmail(email))) {
            await showInvalidEmailFeedback(loginEmail, loginEmailFeedback);
        } else {
            await clearInvalidEmailFeedback(loginEmail, loginEmailFeedback);
            // Aqui você pode adicionar a lógica para autenticação, por exemplo, uma chamada para uma API
            alert("Login simulado bem-sucedido");
        }
    });

    registerForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = registerEmail.value;
        const name = document.getElementById('registerName').value;
        const password = document.getElementById('registerPassword').value;
        const userType = document.getElementById('userType').value;

        if (!(await validateEmail(email))) {
            await showInvalidEmailFeedback(registerEmail, registerEmailFeedback);
        } else {
            await clearInvalidEmailFeedback(registerEmail, registerEmailFeedback);
            // Aqui você pode adicionar a lógica para salvar os dados do usuário, por exemplo, uma chamada para uma API
            alert("Cadastro simulado bem-sucedido");
        }
    });
});






