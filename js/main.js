// console.log('Hii');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JaxCore</title>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <nav id="navbar">
        <div id="logo">
            <img src="/img/core.png" alt="logo"
                onclick="window.open('https://github.com/EnhancedJax/-JaxCore', '_blank')">
        </div>
        <ul>
            <li><a href="/index.html" class="current">Home</a></li>
            <li><a href="#">Skins</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Support</a></li>
        </ul>
    </nav>
    <div id="main">
        <div id="home">
            <div>
                <h2 class="headings" id="coretitle">JaxOriginals&reg;</h2>
            </div>
            <div>
                <h1 class="headings" id="coresub">Core</h1>
            </div>
            <p id="coredesc">
                JaxCore is an advanced hub for my skins. Core provides easy
                access to configuration, updates and new releases.
                Start your adventure of customization and fanciness right here in
                the Core.
            </p>
        </div>
        <div id="limage">
            <img src="" alt="">
        </div>
    </div>
    <div id="links">
        <button id="donation"
            onclick="window.open('https://ko-fi.com/jaxoriginals', 'Jax - KoFi', 'height=500, width=400')">
            Support me
        </button>
        <div class="dbutton" id="github">
            <img src="/img/github.png" alt="github"
                onclick="window.open('https://github.com/EnhancedJax', 'target=_blank')">
        </div>
        <div class="dbutton" id="deviantart">
            <img src="/img/das.png" alt="deviantart"
                onclick="window.open('https://www.deviantart.com/jaxoriginals', 'target=_blank')">
        </div>
    </div>

    <!-- Code injected by live-server -->
<script type="text/javascript">
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>

</body>

</html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})