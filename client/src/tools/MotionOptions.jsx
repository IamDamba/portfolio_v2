export const LandingContainerVariants = {
  // hidden:{
  //   x: '100vw',
  //   opacity: 0
  // },
  // visible:{
  //   x: 0,
  //   opacity: 1,
  //   transition:{
  //     type: 'spring',
  //     stiffness: 150,
  //     mass: 0.4,
  //     damping: 8,
  //     delay: 0.5,
  //     when: 'beforeChildren',
  //     staggerChildren: 1
  //   }
  // },
  visible: {
    height: "100%",
    opacity: 1,
    backgroundColor: "#e6e6e6",
  },
  hidden: {
    backgroundColor: "#0C0D1C",
    transition: {
      type: "tween",
      stiffness: 100,
      delay: 1.2,
      delayChildren: 2.6,
    },
  },
  last: {
    opacity: 0,
    transition: {
      delay: 3.8,
    },
  },
  end: {
    zIndex: -1,
    transition: {
      delay: 4,
    },
  },
};

export const LandingChildVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const TransitionVariants = {
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.6,
      stiffness: 150,
    },
  },
  end: {
    zIndex: -1,
    transition: {
      delay: 1,
    },
  },
};
