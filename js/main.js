function downloadLatestCore() {
    Swal.fire({
        title: 'Thanks for downloading JaxCore!',
        html: 'Consider joining our <a href="https://discord.gg/JmgehPSDD6"> Discord </a> too!',
        imageUrl: '../img/core.png',
        imageWidth: 128,
        imageHeight: 128,
    })
	let dnld = () =>
		fetch('https://api.github.com/repos/Jax-Core/-JaxCore/releases/latest')
			.then((response) => response.json())
			.then((data) => {
				data.assets.forEach((asset) => {
					if (asset.browser_download_url.indexOf('.rmskin') != -1) {
						window.location.href = asset.browser_download_url
					}
				})
			})
	if (navigator.userAgent.indexOf('Win') != -1) {
		dnld()
	} else {
		if (
			confirm(
				'This is only for Windows devices running Rainmeter desktop customization tool. Download anyway?'
			)
		) {
			dnld()
		}
	}
}

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
		})
	}

	// link buttons
	const navlogo = document.querySelector('.navbar-item img')
	navlogo.addEventListener('click', () => {
		window.location.href = 'https://jax-core.github.io'
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

	// download button
	document
		.querySelectorAll('.coredownload')
		.forEach((el) => el.addEventListener('click', downloadLatestCore))
})

//#region scroll animation

let navScrollElements = document.querySelectorAll(
	'.navbar.has-background-transparent'
)

let scrollFadeElements = document.querySelectorAll('.scroll-fade')
let heroSectionBack = document.querySelector('#herosectionback')

let heroSection = document.querySelector('#herosection')

scrollFadeElements.forEach((element) => {
	element.style.opacity = 0
})

const elementInView = (el, percentageScroll = 100) => {
	const elementTop =
		el.getBoundingClientRect().top <=
		(window.innerHeight || document.documentElement.clientHeight) *
			(percentageScroll / 100)
	const elementBottom =
		el.getBoundingClientRect().bottom >
		(window.innerHeight || document.documentElement.clientHeight) *
			(1 - percentageScroll / 100)

	return elementTop && elementBottom
}

const displayScrollElement = (element) => {
	element.classList.add('in-view')
}

const hideScrollElement = (element) => {
	element.classList.remove('in-view')
}

const scrollProc = () => {
	heroSectionBack.style.opacity =
		0.7 *
		(heroSection.getBoundingClientRect().bottom /
			(window.innerHeight || document.documentElement.clientHeight))

	if (
		heroSection.getBoundingClientRect().bottom <
		(window.innerHeight || document.documentElement.clientHeight)
	) {
		navScrollElements.forEach((el) => {
			el.classList.add('scrolled')
		})
	} else {
		navScrollElements.forEach((el) => {
			el.classList.remove('scrolled')
		})
	}

	scrollFadeElements.forEach((el) => {
		if (elementInView(el, 85)) {
			displayScrollElement(el)
		} else {
			hideScrollElement(el)
		}
	})
}

let throttleTimer = false

const throttle = (callback, time) => {
	if (throttleTimer) return

	throttleTimer = true

	setTimeout(() => {
		callback()
		throttleTimer = false
	}, time)
}

window.addEventListener('scroll', () => {
	throttle(scrollProc, 50)
})

//#endregion
