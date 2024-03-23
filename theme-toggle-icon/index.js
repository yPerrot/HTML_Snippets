const link = document.querySelector('a');
const icon = document.querySelector('svg');

link.onclick = () => {
    let currentTheme = document.documentElement.dataset.theme;

    if (currentTheme === "dark") {
        document.documentElement.dataset.theme = "light";
        icon.classList.remove("moon");
    } else {
        document.documentElement.dataset.theme = "dark";
        icon.classList.add("moon");
    }
}

// Set default data-theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.dataset.theme = "dark";
    icon.classList.add("moon");
} else {
    document.documentElement.dataset.theme = "light";
    icon.classList.remove("moon");
}