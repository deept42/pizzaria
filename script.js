// Efeito de rolagem suave para as âncoras no menu de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offsetTop = target.offsetTop;
  
      window.scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Enviar o formulário de contato usando JavaScript (exemplo simples, sem backend real)
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    console.log('Dados do formulário enviados:', formValues);
  
    // Adicione aqui o código para enviar os dados do formulário para um backend real, como um servidor Node.js ou PHP.
    // Você também pode implementar uma mensagem de confirmação para o usuário após o envio.
  });
  