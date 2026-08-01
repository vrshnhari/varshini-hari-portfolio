const projects = [
  {
    title: "Nonprofit Image Accessibility",
    tagline: "AI - Accessibility",
    description:
      "Built and deployed an AI tool that turns uploaded nonprofit images into short, descriptive, and accessibility-focused alt text with file validation, character-limit enforcement, and prompt-quality evaluation.",
    tech: ["Next.js", "Groq Vision", "Accessibility", "Vercel"],
    accent: "var(--blue)",
    live: "https://nonprofit-image-accessibility.vercel.app/",
    github: "https://github.com/vrshnhari/nonprofit-image-accessibility",
    image: "./assets/nonprofit-accessibility-preview.jpg"
  },
  {
    title: "Botaniq",
    tagline: "Frontend - Product design",
    description:
      "Designed and built a polished vegetarian restaurant website with a responsive brand story, menu browsing, dietary labels, and reservation flow, emphasizing clean UI structure and refined visual presentation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    accent: "var(--blue)",
    live: "https://botaniq-rho.vercel.app/index.html",
    github: "https://github.com/vrshnhari/Botaniq"
  },
  {
    title: "ASL to Speech Conversion",
    tagline: "Computer vision - Accessibility",
    description:
      "Built a real-time CNN system that classifies 25 American Sign Language gestures from webcam input with OpenCV and MediaPipe preprocessing, reaching 95% accuracy and earning state science fair recognition.",
    tech: ["TensorFlow", "OpenCV", "MediaPipe", "Python"],
    accent: "var(--warm-grey)"
  }
];

const projectGrid = document.querySelector("#project-grid");

projectGrid.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card" style="--accent: ${project.accent}">
        ${project.image ? `<a class="project-card-image" href="${project.live}" target="_blank" rel="noreferrer">
          <img src="${project.image}" alt="${project.title} screenshot" />
        </a>` : ""}
        <small>${project.tagline}</small>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.live || project.github ? `<div class="card-actions">
          ${project.live ? `<a href="${project.live}" target="_blank" rel="noreferrer">Live site</a>` : ""}
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
        </div>` : ""}
        <div class="project-tech">
          ${project.tech.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </article>
    `
  )
  .join("");

document.querySelector("#year").textContent = new Date().getFullYear();
