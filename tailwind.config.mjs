/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0f0f0f",
        elevated: "#1a1a1a",
        border: "#27272a",
        gold: {
          DEFAULT: "#c9a227",
          glow: "#f59e0b",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a1a1aa",
          muted: "#52525b",
        },
      },

      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.15" }],
      },

      maxWidth: {
        site: "1280px",
      },

      spacing: {
        section: "120px",
        "section-sm": "80px",
        "section-xs": "60px",
      },

      borderRadius: {
        pill: "9999px",
      },

      boxShadow: {
        gold: "0 0 24px rgba(201, 162, 39, 0.35)",
        "gold-lg": "0 0 48px rgba(201, 162, 39, 0.25)",
        "gold-sm": "0 0 12px rgba(201, 162, 39, 0.2)",
        glow: "0 0 60px rgba(245, 158, 11, 0.15)",
      },

      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #c9a227 0%, #f59e0b 50%, #c9a227 100%)",
        "gold-subtle":
          "linear-gradient(135deg, rgba(201,162,39,0.08) 0%, rgba(245,158,11,0.04) 100%)",
        "surface-gradient":
          "linear-gradient(180deg, #050505 0%, #0f0f0f 50%, #050505 100%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 24px rgba(201,162,39,0.35)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 48px rgba(245,158,11,0.5)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(201,162,39,0.3)" },
          "50%": { borderColor: "rgba(245,158,11,0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        sharp: "cubic-bezier(0.4, 0, 1, 1)",
      },

      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
      },
    },
  },
  plugins: [],
};
        },
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        sharp: "cubic-bezier(0.4, 0, 1, 1)",
      },

      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
      },
    },
  },
  plugins: [],
};
