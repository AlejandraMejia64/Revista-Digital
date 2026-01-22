particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#38bdf8"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#38bdf8",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.4
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 120
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
