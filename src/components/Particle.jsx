import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  const fireParticleConfig = {
    particles: {
      number: {
        value: 40, // Reduced from 80 to 40
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: [
          "#8A2BE2", // Brighter purple
          "#9400D3",
          "#ff00ff",
          "#BA55D3",
          "#FF00FF" // Added magenta for more vibrancy
        ]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.8, // Increased base opacity
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.2,
          sync: false
        }
      },
      size: {
        value: 6, // Increased particle size
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.8,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 180, // Increased connection distance
        color: "#6A0DAD", // Brighter connection color
        opacity: 0.4, // Slightly increased connection opacity
        width: 1.2 // Slightly thicker connections
      },
      move: {
        enable: true,
        speed: 4, // Increased movement speed
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: true,
          rotateX: 800,
          rotateY: 1500
        }
      },
      life: {
        duration: {
          sync: false,
          value: 20 // Increased lifetime
        },
        count: 1,
        delay: {
          random: {
            enable: true,
            minimumValue: 0.2
          }
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 150,
          duration: 0.6
        },
        push: {
          quantity: 2 // Reduced from 6 to 2
        }
      }
    },
    background: {
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    detectRetina: true,
    emitters: {
      direction: "top",
      rate: {
        quantity: 1, // Reduced from 2 to 1
        delay: 0.2
      },
      size: {
        width: 100, // Increased emitter width
        height: 10
      },
      position: {
        x: 50,
        y: 100
      },
      life: {
        duration: 0.2, // Increased emitter duration
        count: 1
      }
    }
  };

  return (
    <div className="fixed inset-0" style={{ zIndex: 2 }}>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={fireParticleConfig}
          className="!z-[-1]"
        />
      )}
    </div>
  );
}
