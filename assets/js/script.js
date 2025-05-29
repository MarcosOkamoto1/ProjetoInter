// Animação para o banner de fundo (deslizar de baixo para cima)
gsap.from("#banner", {
  duration: 2,
  y: "100%", // Começa abaixo da tela
  ease: "power3.out",
});

// Animação para os itens do banner aparecerem com efeito de fade-in e slide
gsap.from(".box1", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out",
});

gsap.from(".box2", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 1,
  ease: "power3.out",
});

gsap.from(".box3", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 1.5,
  ease: "power3.out",
});

// Animação do texto "EcoTech Solutions!" e "Uma solução rápida..." após as animações anteriores
gsap.fromTo(".title-banner h1", {
  opacity: 0,
  y: 30,
}, {
  opacity: 1,
  y: 0,
  duration: 1.5,
  delay: 2.5, // Inicia após o término da animação das boxes
  ease: "power3.out",
});

gsap.fromTo(".title-banner h2", {
  opacity: 0,
  y: 30,
}, {
  opacity: 1,
  y: 0,
  duration: 1.5,
  delay: 3, // Inicia logo depois do título h1
  ease: "power3.out",
});

  // Seleciona todos os itens de menu
  const menuItems = document.querySelectorAll("nav ul li a");

  // Adiciona animação ao passar o mouse sobre os itens do menu
  menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      // Adiciona uma animação para aumentar e mover o item
      item.style.transform = "scale(1.1)"; // Aumenta o item de menu
      item.style.transition = "transform 0.3s ease-in-out, color 0.3s ease"; // Adiciona a transição suave
      item.style.color = "#ffffff"; // Muda a cor para branco
      item.style.backgroundColor = "var(--main-button-color)"; // Aplica a cor de fundo
    });

    // Remove a animação ao retirar o mouse de cima do item
    item.addEventListener("mouseleave", () => {
      // Restaura o item para o tamanho original
      item.style.transform = "scale(1)";
      item.style.transition = "transform 0.3s ease-in-out, color 0.3s ease";
      item.style.color = "#727272"; // Restaura a cor original
      item.style.backgroundColor = "transparent"; // Restaura o fundo original
    });
  });

    const homeLink = document.querySelector("nav ul li a[href='#']");

  // Adiciona a classe 'active' ao item "HOME" no carregamento da página
  homeLink.parentElement.classList.add('active');

