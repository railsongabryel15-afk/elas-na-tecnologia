// Lógica do Quiz Interativo
function checkAnswer(isCorrect) {
    const resultElement = document.getElementById('quiz-result');
    if (isCorrect) {
        resultElement.style.color = '#38A169'; // Verde
        resultElement.innerText = '✨ Correto! Ada Lovelace escreveu o primeiro algoritmo para a Máquina Analítica!';
    } else {
        resultElement.style.color = '#E53E3E'; // Vermelho
        resultElement.innerText = '❌ Tente novamente! Dica: Ela trabalhou com Charles Babbage no século XIX.';
    }
}

// Lógica para enviar Ideias na hora
function addIdea() {
    const nameInput = document.getElementById('authorName');
    const ideaInput = document.getElementById('ideaText');
    const ideasList = document.getElementById('ideasList');

    if (nameInput.value.trim() === '' || ideaInput.value.trim() === '') {
        alert('Por favor, preencha o seu nome e a ideia antes de enviar!');
        return;
    }

    // Cria um novo elemento de ideia
    const newIdea = document.createElement('div');
    newIdea.className = 'idea-item';
    newIdea.innerHTML = `<strong>${nameInput.value}:</strong> ${ideaInput.value}`;

    // Adiciona à lista existente
    ideasList.appendChild(newIdea);

    // Limpa os campos do formulário
    nameInput.value = '';
    ideaInput.value = '';
    
    alert('Ideia enviada com sucesso!');
}