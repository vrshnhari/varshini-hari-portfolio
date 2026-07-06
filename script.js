const projects = [
  {
    title: "Facial Emotion Detection",
    tagline: "AI - Ethics",
    description:
      "Developed an AI facial emotion recognition model with Dlib and multiple ML algorithms, comparing Decision Tree, KNN, Logistic Regression, and MLP performance while considering bias, privacy, and ethics.",
    tech: ["Dlib", "KNN", "Logistic Regression", "MLP"],
    accent: "var(--sage)"
  },
  {
    title: "ASL to Speech Conversion",
    tagline: "Computer vision - Accessibility",
    description:
      "Built a TensorFlow CNN to classify 25 American Sign Language gestures with real-time webcam integration using OpenCV and MediaPipe, translating visual signs into a more accessible interaction flow.",
    tech: ["TensorFlow", "OpenCV", "MediaPipe", "Python"],
    accent: "var(--warm-grey)"
  }
];

const projectGrid = document.querySelector("#project-grid");

projectGrid.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card" style="--accent: ${project.accent}">
        <small>${project.tagline}</small>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.tech.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </article>
    `
  )
  .join("");

document.querySelector("#year").textContent = new Date().getFullYear();
