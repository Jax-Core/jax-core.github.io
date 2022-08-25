function PopUp() {
	Swal.fire({
		title: '<p class="coregrad-string" style="font-weight: 600;font-size: 2rem;">Thanks for choosing Core!</p>',
		html: ' <p>A Batch script file has been downloaded, please run it to install. <br><br>If Windows or your browser blocks it, click run anyway (you may also need to click "more info" to see the option). It gets blocked just because the file isn\'t known.<br><br>If you have any problems you can join our Discord server. </p>',
		icon: 'success',
		// imageUrl: '../img/core.png',
		// imageWidth: 128,
		// imageHeight: 128,
		background: '#181a1b',
		showDenyButton: true,
		confirmButtonColor: '#5865F2',
		confirmButtonText: 'Join our Discord',
		denyButtonColor: '#232323',
		denyButtonText: 'Other methods',
	}).then((result) => {
		if (result.isConfirmed) {
			window.open('https://discord.gg/JmgehPSDD6', '_blank')
			Swal.close()
		} else if (result.isDenied) {
			window.open('https://jaxcore.gitbook.io/core/getting-started/installation', '_blank')
			Swal.close()
		}
	})
}

function downloadLatestCore() {
	let dnld = () =>
		window.location.href = "https://github.com/Jax-Core/jax-core.github.io/releases/download/v1.2/JaxCoreSetup.bat"
	if (navigator.userAgent.indexOf('Win') != -1) {
		dnld()
		PopUp()
	} else {
		Swal.fire({
			title: '<p style="color: #facea8">Incompatible Device</p>',
			html: 'JaxCore is intended for Windows devices. Download anyway?',
			icon: 'warning',
			imageWidth: 128,
			imageHeight: 128,
			background: '#181a1b',
			showDenyButton: true,
			confirmButtonText: 'Download',
			denyButtonText: 'Cancel',
		}).then((result) => {
			if (result.isConfirmed) {
				dnld()
				Swal.close()
			}
		})
	}
}