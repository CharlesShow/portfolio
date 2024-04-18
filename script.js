const container = document.querySelector("#container");
const navLinks = document.querySelectorAll(".nav-list li a");
const sections = document.querySelectorAll("section");
const hamburguer = document.querySelector("#hamburguer");
const iconHamburguer = document.querySelector("#icon_hamburguer");
const sessoes = document.querySelector("#sessoes");
const ancoraContatos = document.querySelector("#ancora_contatos");

const iconBarras = "fa-solid fa-bars";
const iconX = "fa-solid fa-x";

function ativarMenu() {
  if (iconHamburguer.classList == iconBarras) {
    iconHamburguer.classList = iconX;
    sessoes.classList = "ativo";
  } else {
    iconHamburguer.classList = iconBarras;
    sessoes.classList.remove("ativo");
  }
}

container.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = container.scrollTop;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      if (
        window.innerWidth <= 500 &&
        top + container.clientHeight >= container.scrollHeight
      ) {
        navLinks.forEach((links) => {
          links.classList.remove("ativo");
        });
        ancoraContatos.classList.add("ativo");
      } else {
        navLinks.forEach((links) => {
          links.classList.remove("ativo");
          document
            .querySelector(".nav-list a[href*=" + id + "]")
            .classList.add("ativo");
        });
      }
    }
  });
});

navLinks.forEach((ancora) => {
  ancora.addEventListener("click", function (e) {
    e.preventDefault();
    sessoes.classList.remove("ativo");
    iconHamburguer.classList = iconBarras;
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
