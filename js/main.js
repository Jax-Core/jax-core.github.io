const DOWNLOAD_URL = `https://github.com/Jax-Core/jax-core.github.io/releases/download/v1.2/JaxCoreSetup.bat`;

const DEPRECIATE_SWAL = {
  title: "Notice",
  text: "JaxCore had ceased development near the end of 2022, no longer receiving any updates or maintenance. If you encounter any issues, please refer to the wiki for help. Thank you for your support! -Jax",
  color: "#efefef",
  background: "#222",
  icon: "info",
  confirmButtonText: "Understood",
};

const DOWNLOAD_SWAL = {
  title:
    '<p class="coregrad-string" style="font-weight: 600;font-size: 2rem;">Downloading installer!</p>',
  text: "A Batch script file has been downloaded, please run it to install. Click run anyway if prompted by Windows or your browser.",
  icon: "success",
  color: "#efefef",
  background: "#222",
  confirmButtonColor: "#444",
  confirmButtonText: "Other install methods",
  showDenyButton: true,
  denyButtonColor: "#343434",
  denyButtonText: "Close",
};

const INCOMPATIBLE_SWAL = {
  title: "Incompatible Device",
  color: "#efefef",
  icon: "error",
  imageWidth: 128,
  imageHeight: 128,
  text: "JaxCore is intended for Windows devices only.",
  background: "#222",
  backdrop: "rgba(0,0,0,0.5)",
  confirmButtonText: "Back",
};

function downloadLatestCore() {
  if (navigator.userAgent.indexOf("Win") != -1) {
    const url = DOWNLOAD_URL;
    Swal.fire(DEPRECIATE_SWAL).then(() => {
      Swal.fire(DOWNLOAD_SWAL).then((result) => {
        if (result.isConfirmed) {
          window.open(
            "https://jaxcore.gitbook.io/core/getting-started/installation",
            "_blank"
          );
        }
        Swal.close();
      });
      setTimeout(() => {
        window.location.href = url;
      }, 1000);
    });
  } else {
    Swal.fire(INCOMPATIBLE_SWAL);
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

function changeAbtModuleTo(name, next) {
  if (
    document.getElementsByClassName("module-array-img-selected").length != 0
  ) {
    document
      .getElementsByClassName("module-array-img-selected")[0]
      .classList.remove("module-array-img-selected");
  }
  next.classList.add("module-array-img-selected");

  const whole = document.getElementById("modules-interactive-info");
  const title = document.getElementById("about-module-info-header");
  const des = document.getElementById("about-module-info-description");
  const img = document.getElementById("about-module-info-img");

  whole.classList.add("toLeft");

  setTimeout(() => {
    title.innerHTML = name;
    des.innerHTML = module_list[name];
    img.src = "/img/Module/Card/" + name + ".png";
    whole.classList.remove("toLeft");
  }, 300);
}

function isElementInViewport(el) {
  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

function onVisibilityChange(el, callback) {
  var old_visible;
  return function () {
    var visible = isElementInViewport(el);
    if (visible != old_visible) {
      old_visible = visible;
      if (typeof callback == "function") {
        callback(visible);
      }
    }
  };
}
/* -------------------------------------------------------------------------- */
/*                                   On load                                  */
/* -------------------------------------------------------------------------- */

window.onload = function () {
  var i = 0;
  for (const name in module_list) {
    var array_index = i >= 5 ? 2 : 1;
    document.getElementById("array-" + array_index).insertAdjacentHTML(
      "beforeend",
      `
		<img src="/img/Module/Icon/` +
        name +
        `.png" class="module-array-img" onclick="changeAbtModuleTo('` +
        name +
        `', this)"></img>
		`
    );
    i++;
  }
  const first = document.getElementById("array-1").firstElementChild;

  changeAbtModuleTo(Object.keys(module_list)[0], first);
};

const handler = onVisibilityChange(
  document.getElementById("dlbutton"),
  function (bool) {
    if (bool) {
      navdlbutton.classList.add("not-active");
    } else {
      navdlbutton.classList.remove("not-active");
    }
  }
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("body-container-visible");
    } else {
      entry.target.classList.remove("body-container-visible");
    }
  });
});

const navdlbutton = document.getElementById("nav-dlbutton");
const sections = document.querySelectorAll(".body-container");

sections.forEach((el) => observer.observe(el));

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", handler, false);
  addEventListener("load", handler, false);
  addEventListener("scroll", handler, false);
  addEventListener("resize", handler, false);
} else if (window.attachEvent) {
  attachEvent("onDOMContentLoaded", handler); // Internet Explorer 9+ :(
  attachEvent("onload", handler);
  attachEvent("onscroll", handler);
  attachEvent("onresize", handler);
}
