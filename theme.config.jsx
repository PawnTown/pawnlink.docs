import IntroSection from "./components/intro-section";

export default {
  logo: <span>Pawnlink Documentation</span>,
  project: {
    link: "https://github.com/pawntown/pawnlink.docs",
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  components: {
    IntroSection: IntroSection,
  },
};
