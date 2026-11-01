// Certificate data — edit this array to add/update certificates.
// file: name (without extension) shared by certificados/<file>.pdf and img/certificados/<file>-400|800.webp
// completed: completion date (YYYY-MM-DD) — the grid is sorted by it, oldest first
// inProgress: true for ongoing courses — completed is then the expected end date
const certificates = [
  { title: "Algoritmos e Lógica de Programação", issuer: "Udemy", completed: "2024-11-13", hours: 30.5, file: "algoritmos-logica-programacao" },
  { title: "Fundamentos da Inteligência Artificial", issuer: "SENAI", completed: "2025-08-27", hours: 8, file: "fundamentos-ia" },
  { title: "Desenvolvedor Front-end", issuer: "SENAI", completed: "2025-10-10", hours: 160, file: "desenvolvedor-frontend" },
  { title: "Programação em Python do básico ao avançado", issuer: "Udemy", completed: "2025-11-24", hours: 64, file: "python" },
  { title: "Microsoft AI-900", issuer: "SENAI", completed: "2025-12-17", hours: 40, file: "microsoft-ai-900" },
  { title: "Programação em C++", issuer: "SENAI", completed: "2026-03-13", hours: 60, file: "programacao-cpp" },
  { title: "Microsoft AI-102", issuer: "SENAI", completed: "2026-06-16", hours: 60, file: "microsoft-ai-102" },
  { title: "Desenvolvedor Back-end", issuer: "SENAI", completed: "2026-06-18", hours: 160, file: "desenvolvedor-backend" },
  { title: "AWS Academy Cloud Architecting", issuer: "AWS Academy", completed: "2026-07-12", hours: 60, file: "aws-cloud-architecting" },
  { title: "React JS com TypeScript", issuer: "Udemy", completed: "2026-08-21", hours: 17.5, file: "react-typescript" },
  { title: "PostgreSQL Completo do Zero ao Profissional", issuer: "Udemy", completed: "2026-11-01", hours: 9.5, file: "postgresql" },
  { title: "Engenharia de Machine Learning e MLOps", issuer: "SENAI", completed: "2027-01-02", inProgress: true, file: "declaracao-matricula-machine-learning" }
];

function formatCompleted(isoDate) {
  const [year, month] = isoDate.split("-").map(Number);
  const label = new Date(year, month - 1).toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function renderCertificates() {
  const root = document.getElementById("certificates-root");
  if (!root) return;

  const grid = document.createElement("div");
  grid.className = "certificates-grid";

  [...certificates]
    .sort((a, b) => a.completed.localeCompare(b.completed))
    .forEach((cert) => {
      // The whole card is a link that opens the PDF in a new tab
      const card = document.createElement("a");
      card.className = "certificate-card";
      card.href = `certificados/${cert.file}.pdf`;
      card.target = "_blank";
      card.rel = "noopener noreferrer";

      const thumb = document.createElement("div");
      thumb.className = "certificate-thumb";

      const img = document.createElement("img");
      img.src = `img/certificados/${cert.file}-800.webp`;
      img.srcset = `img/certificados/${cert.file}-400.webp 400w, img/certificados/${cert.file}-800.webp 800w`;
      img.sizes = "(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 25vw";
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = `Certificado ${cert.title}`;
      thumb.appendChild(img);

      const overlay = document.createElement("span");
      overlay.className = "certificate-overlay";
      overlay.innerHTML = `<i class="fa fa-external-link"></i> ${cert.inProgress ? "Ver declaração" : "Ver certificado"}`;
      thumb.appendChild(overlay);

      const body = document.createElement("div");
      body.className = "certificate-body";

      const title = document.createElement("h6");
      title.className = "certificate-title";
      title.textContent = cert.title;

      const meta = document.createElement("div");
      meta.className = "certificate-meta";
      meta.textContent = cert.inProgress
        ? `${cert.issuer} · Em andamento · Término ${formatCompleted(cert.completed)}`
        : `${cert.issuer} · ${formatCompleted(cert.completed)} · ${String(cert.hours).replace(".", ",")}h`;

      body.appendChild(title);
      body.appendChild(meta);

      card.appendChild(thumb);
      card.appendChild(body);
      grid.appendChild(card);
    });

  root.appendChild(grid);
}

document.addEventListener("DOMContentLoaded", renderCertificates);
