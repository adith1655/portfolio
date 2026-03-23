(function () {
  const nav = document.getElementById('nav')
  const navMobile = document.getElementById('nav-mobile')
  const navToggle = document.querySelector('.nav-toggle')
  const navLinks = document.querySelectorAll('.nav-link[data-section]')
  const sections = ['hero', 'about', 'education', 'skills', 'projects', 'certifications', 'contact']

  function setScrolled() {
    if (window.scrollY > 50) nav.classList.add('scrolled')
    else nav.classList.remove('scrolled')
  }

  function setActiveSection() {
    const top = 120
    let active = 'hero'
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.getBoundingClientRect().top <= top) {
        active = sections[i]
        break
      }
    }
    navLinks.forEach(function (link) {
      if (link.getAttribute('data-section') === active) link.classList.add('active')
      else link.classList.remove('active')
    })
  }

  function closeMobileMenu() {
    navToggle.classList.remove('open')
    navMobile.setAttribute('aria-hidden', 'true')
    navMobile.hidden = true
  }

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.classList.toggle('open')
      navMobile.setAttribute('aria-hidden', isOpen ? 'false' : 'true')
      navMobile.hidden = !isOpen
    })
    document.querySelectorAll('.nav-mobile-link').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu)
    })
  }

  window.addEventListener('scroll', function () {
    setScrolled()
    setActiveSection()
  })
  setScrolled()
  setActiveSection()
})()
