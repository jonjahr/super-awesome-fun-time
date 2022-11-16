let prevScrollY
let scrollDirection
let navElement

export const initNav = () => {
  // Get the nav element
  navElement = document.querySelector('nav.navbar')
 
  // Bind scroll event handlers that will show/hide the nav
  window.addEventListener('scroll', onScroll)
}

const onScroll = () => {
  // In iOS Safari don't hide the nav when we reach the top and bounce back
  if (window.scrollY <= 0) { return onScrollUp() }
  // Choose function based on scroll direction
  window.scrollY > prevScrollY ? onScrollDown() : onScrollUp()
  prevScrollY = window.scrollY
}

const onScrollDown = () => {
  if (scrollDirection == 'down') { return }
  scrollDirection = 'down'
  // Hide the nav
  navElement.classList.add('hidden')
}

const onScrollUp = () => {
  if (scrollDirection == 'up') { return }
  scrollDirection = 'up'
  // Show the nav
  navElement.classList.remove('hidden')
}