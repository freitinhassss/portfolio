function toggleDarkMode() {
  document.body.classList.toggle('dark-mode')
}

const greetings = ["Bem-vindo!", "Prazer em conhecer você!", "Olá!"];
let index = 0;

function changeGreeting() {
    const greetingElement = document.querySelector(".prazer");
    greetingElement.textContent = greetings[index];
    index = (index + 1) % greetings.length;
}

setInterval(changeGreeting, 3000);

function msg() {
  alert("Você está prestes a ver o portfólio de Henrique Freitas!");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
      });
  });
});