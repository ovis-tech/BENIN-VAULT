gsap.registerPlugin(ScrollTrigger)

gsap.from('.write', {
  scrollTrigger: {
    trigger: '.section', // common container
    start: 'top 80%',
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
})

gsap.from('.image', {
  scrollTrigger: {
    trigger: '.section', // common container
    start: 'top 80%',
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
})
