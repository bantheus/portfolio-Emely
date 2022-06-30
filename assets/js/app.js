/*--FILTROS--*/
const tabs = document.querySelectorAll("[data-target]"),
	tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach((tc) => {
			tc.classList.remove("filters__active");
		});
		target.classList.add("filters__active");

		tabs.forEach((t) => {
			t.classList.remove("filter-tab-active");
		});
		tab.classList.add("filter-tab-active");
	});
});

const toggleTheme1 = document.getElementById("theme-button-1");
const toggleTheme2 = document.getElementById("theme-button-2");
const toggleTheme3 = document.getElementById("theme-button-3");

function changeColor() {
	document.documentElement.style.setProperty("--hue", "207");
	document.documentElement.style.setProperty("--sat", "90%");
	document.documentElement.style.setProperty("--lig", "61%");
}

function changeColor2() {
	document.documentElement.style.setProperty("--hue", "356");
	document.documentElement.style.setProperty("--sat", "66%");
	document.documentElement.style.setProperty("--lig", "75%");
}

function changeColor3() {
	document.documentElement.style.setProperty("--hue", "278");
	document.documentElement.style.setProperty("--sat", "34%");
	document.documentElement.style.setProperty("--lig", "70%");
}
/*--DARK / LIGHT THEME--*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme
	);
	themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});

/*--SCROLL REVEAL--*/
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 400,
});

sr.reveal(".profile__border");
sr.reveal(".profile__name", { delay: 500 });
sr.reveal(".profile__social", { delay: 600 });
sr.reveal(".profile__info-group", { interval: 100, delay: 600 });
sr.reveal(".profile__buttons", { delay: 700 });
sr.reveal(".profile__content", { delay: 800 });
sr.reveal(".filters", { delay: 900 });
