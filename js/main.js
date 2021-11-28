document.addEventListener('DOMContentLoaded', () => {
	// hamburger
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll('.navbar-burger'),
		0
	)

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach((el) => {
			let children = el.children
			// Get the target from the "data-target" attribute
			const target = el.dataset.target
			const $target = document.getElementById(target)
			el.addEventListener('click', function (event) {
				console.log(event.currentTarget)
				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active')
				$target.classList.toggle('is-active')
			})
			el.addEventListener('touchstart', () => {
				// el.click();
			})
		})
	}

	// link buttons
	const navlogo = document.querySelector('.navbar-item img')
	navlogo.addEventListener('click', () => {
		window.open(encodeURI('https://jax-core.github.io'), 'target=_blank')
	})
  
  // donation button
	const donation = document.getElementById('donation')
	donation.addEventListener('click', () => {
		window.open(
			'https://ko-fi.com/jaxoriginals',
			'Jax - KoFi',
			'height=500, width=400'
		)
	})
})
