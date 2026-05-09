const questions = [
    "Qual curso você faz?",
    "Está aproveitando seu curso?",
    "Está satisfeito com sua faculdade?",
    "Pretende trabalhar na área que está estudando?",
    "As matérias são difíceis para você?",
    "Se pudesse, faria outro curso ou trancaria o curso?",
    "Como avalia seus professores?",
    "Sente que os projetos são bons?",
    "Recomendaria seu curso para outra pessoa?",
    "Pensa em fazer pós-graduação no futuro?"
];

let currentQuestion = 0;

// Quando abrir o site
window.onload = () => {
    displayMessage("Chatbot: " + questions[currentQuestion]);
};

// Botão enviar
document.getElementById("send-button").addEventListener("click", sendMessage);

// Enter funcionar
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();

    if (message === "") return;

    // Mostra mensagem do usuário
    displayMessage("Você: " + message);

    // Limpa input
    input.value = "";

    // Próxima pergunta
    currentQuestion++;

    setTimeout(() => {

        if (currentQuestion < questions.length) {
            displayMessage("Chatbot: " + questions[currentQuestion]);
        } else {
            displayMessage("Chatbot: Obrigado pela sua avaliaçao😊");
        }

    }, 700);
}

function displayMessage(msg) {
    const chatBox = document.getElementById("chat-box");

    const messageDiv = document.createElement("div");
    messageDiv.textContent = msg;

    chatBox.appendChild(messageDiv);

    // Scroll automático
    chatBox.scrollTop = chatBox.scrollHeight;
}