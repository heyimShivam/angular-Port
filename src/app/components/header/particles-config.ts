export const ParticlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1400
        }
      },
      color: {
        value: '#C3073F'
      },
      shape: {
        type: 'polygon',
        stroke: {
          width: 2,
          color: '#950740'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.25,
          sync: true
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 1.25,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 160,
        color: '#6F2232',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 8,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: true,
          rotateX: 2000,
          rotateY: 2000
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'grab'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 3
          }
        },
        repulse: {
          distance: 200,
          duration: 2
        }
      }
    },
    retina_detect: true
 };