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

function openNav() {
	document.getElementById("myNav").style.height = "100%";
	document.getElementById("navbar-container").style.opacity = "0";
}

function closeNav() {
	document.getElementById("myNav").style.height = "0%";
	document.getElementById("navbar-container").style.opacity = "1";
}

window.onload = function() {
	var i = 0;
	for (const name in module_list) {
		var array_index = (i >= 5 ? 2 : 1);
		document.getElementById('array-'+array_index).insertAdjacentHTML('beforeend', `
		<img src="/img/Module/Icon/`+name+`.png" onclick="changeAbtModuleTo('`+name+`', this)"></img>
		`)
		i++;
	}
	const first = document.getElementById('array-1').firstElementChild;

	changeAbtModuleTo(Object.keys(module_list)[0], first);
}

function changeAbtModuleTo(name, next) {
	if (document.getElementsByClassName('selected-module').length != 0) {
		document.getElementsByClassName('selected-module')[0].classList.remove('selected-module');
	}
	next.classList.add('selected-module');
	
	const whole = document.getElementById('modules-interactive-info');
	const title = document.getElementById('about-module-info-header');
	const des = document.getElementById('about-module-info-description');
	const img = document.getElementById('about-module-info-img');

	whole.classList.add('toLeft')
	
	setTimeout(() => {
		title.innerHTML = name;
		des.innerHTML = module_list[name];
		img.src = "/img/Module/Card/"+name+".png";
		whole.classList.remove('toLeft')
	}, 300);
	
}