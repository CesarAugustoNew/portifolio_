// Project data — edit this array to add/update projects.
// image: path to the project's screenshot inside img/
// links: array of { label, url } — use as many as you need (front-end, API, demo, etc.)
const projects = [
  {
    title: "Cinema",
    subtitle: "Gerenciamento de Cinema",
    text: "Sistema full stack para gerenciamento de um cinema: cadastro de filmes, salas e sessões, reserva de assentos e painel administrativo com relatório de receita.",
    image: "img/cinema.png",
    links: [
      { label: "Acessar projeto", url: "https://projeto-senai-cinema.vercel.app/" },
      { label: "Front-end", url: "https://github.com/CesarAugustoNew/Projeto-Senai-Cinema" },
      { label: "API (Spring Boot)", url: "https://github.com/CesarAugustoNew/SpringBootAPI-Cinema" }
    ]
  },
  {
    title: "Senai Notes",
    subtitle: "Angular + TypeScript (front-end) • Java + Spring Boot (API) • PostgreSQL • JWT",
    text: "Aplicativo de anotações pessoais com front-end em Angular e API em Spring Boot. Permite criar, editar, arquivar e organizar notas por etiquetas, com autenticação via JWT.",
    image: "img/notes.png",
    links: [
      { label: "Acessar projeto", url: "https://projeto-senai-notes-angular.vercel.app/" },
      { label: "Front-end", url: "https://github.com/CesarAugustoNew/Projeto-Senai-Notes-Angular" },
      { label: "API (Spring Boot)", url: "https://github.com/CesarAugustoNew/SpringBootAPI-Senai-Notes" }
    ]
  },
  {
    title: "GPT",
    subtitle: "Simulação de Chat",
    text: "Projeto de simulação do ChatGPT.",
    image: "img/gpt.png",
    links: [
      { label: "Acessar projeto", url: "https://projeto-senai-gpt-angular.vercel.app/login" },
      { label: "Ver no GitHub", url: "https://github.com/CesarAugustoNew/Projeto-Senai-GPT-Angular" }
    ]
  },
  {
    title: "Barras & Lotes",
    subtitle: "Projeto para gerenciamento de produção",
    text: "App para o setor de Pintura do Grupo Delga registrar lançamentos de produção, ordens, paradas e sobras, e gerenciar o catálogo de peças, com perfis de administrador e operador.",
    image: "img/pintura-po.png",
    links: [
      { label: "Acessar projeto", url: "https://pintura-po.vercel.app/" },
      { label: "Ver no GitHub", url: "https://github.com/CesarAugustoNew/Pintura-Po" }
    ]
  }
];

function renderProjects() {
  const root = document.getElementById("root");
  if (!root) return;

  const grid = document.createElement("div");
  grid.className = "projects-grid";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const inner = document.createElement("div");
    inner.className = "project-card-inner";

    // Front face
    const front = document.createElement("div");
    front.className = "project-card-front";
    if (project.image) {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      front.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "no-image";
      placeholder.textContent = project.title;
      front.appendChild(placeholder);
    }

    // Back face
    const back = document.createElement("div");
    back.className = "project-card-back";

    const title = document.createElement("h6");
    title.className = "project-title";
    title.textContent = project.title;

    const subtitle = document.createElement("h6");
    subtitle.className = "project-subtitle";
    subtitle.textContent = project.subtitle;

    const text = document.createElement("p");
    text.textContent = project.text;

    back.appendChild(title);
    back.appendChild(subtitle);
    back.appendChild(text);

    const linksWrap = document.createElement("div");
    linksWrap.className = "project-links-wrap";
    if (project.links && project.links.length > 0) {
      project.links.forEach((linkInfo) => {
        const link = document.createElement("a");
        link.className = "project-link";
        if (linkInfo.label === "Acessar projeto") {
          link.classList.add("project-link--live");
        }
        link.href = linkInfo.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = linkInfo.label;
        linksWrap.appendChild(link);
      });
    } else {
      const note = document.createElement("div");
      note.className = "missing-note";
      note.textContent = "Link do GitHub pendente";
      linksWrap.appendChild(note);
    }
    back.appendChild(linksWrap);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    grid.appendChild(card);

    // Tap-to-flip support for touch devices
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });

  root.appendChild(grid);
}

document.addEventListener("DOMContentLoaded", renderProjects);
