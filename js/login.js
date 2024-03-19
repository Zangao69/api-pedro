// Função para validar o formulário de login
function validateForm() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('emailError');
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;

    // Validar o campo de email
    if (!email || email.trim() === '') {
        emailError.innerText = 'O campo de email é obrigatório.';
        isValid = false;
    } else {
        emailError.innerText = '';
    }

    // Validar o campo de nome de usuário
    if (!username || username.trim() === '') {
        usernameError.innerText = 'O campo de nome de usuário é obrigatório.';
        isValid = false;
    } else {
        usernameError.innerText = '';
    }

    // Validar o campo de senha
    if (!password || password.trim() === '') {
        passwordError.innerText = 'O campo de senha é obrigatório.';
        isValid = false;
    } else {
        passwordError.innerText = '';
    }

    // Se o formulário for válido, redirecionar para pesquisa.html
    if (isValid) {
        window.location.href = '../html/pesquisa.html';
    }

    return isValid;
}


// Função para alternar entre modo claro e escuro
// Função para alternar entre o modo claro e escuro
// Função para alternar entre os modos escuro e claro
// Função para alternar entre o modo claro e escuro
// Função para alternar entre o modo claro e escuro
function toggleDarkMode() {
    document.body.classList.toggle('darkModeToggle'); // Adiciona ou remove a classe 'darkModeToggle' do corpo
    // Altera a imagem de fundo
    var body = document.body;
    if (body.classList.contains('darkModeToggle')) {
        body.style.backgroundImage = "url('../img/Sauron by eduardoleon.jpeg')"; // Imagem de fundo para o modo escuro
        document.getElementById('lightModeToggle').style.display = 'inline-block'; // Mostra o botão de modo claro
        document.getElementById('darkModeToggle').style.display = 'none'; // Esconde o botão de modo escuro
    } else {
        body.style.backgroundImage = "url('../img/1193090.jpg')"; // Imagem de fundo para o modo claro
        document.getElementById('darkModeToggle').style.display = 'inline-block'; // Mostra o botão de modo escuro
        document.getElementById('lightModeToggle').style.display = 'none'; // Esconde o botão de modo claro
    }
}

// Adiciona um listener de evento ao botão de modo escuro
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Adiciona um listener de evento ao botão de modo claro
document.getElementById('lightModeToggle').addEventListener('click', function() {
    document.body.classList.remove('darkModeToggle'); // Remove a classe 'darkModeToggle' do corpo
    document.body.style.backgroundImage = "url('../img/1193090.jpg')"; // Define a imagem de fundo para o modo claro
    document.getElementById('darkModeToggle').style.display = 'inline-block'; // Mostra o botão de modo escuro
    document.getElementById('lightModeToggle').style.display = 'none'; // Esconde o botão de modo claro
});