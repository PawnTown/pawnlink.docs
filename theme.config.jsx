import IntroSection from "./components/intro-section";
import LiveDemoLazy from "./components/live-demo-lazy";

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
    LiveDemoLazy: LiveDemoLazy,
  },
};
