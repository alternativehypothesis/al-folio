$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');



function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
    sessionStorage.setItem('theme', '');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
    let theme = sessionStorage.getItem('theme');
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "Dark Mode";
        document.getElementById("icon-toggle").className = "fas fa-moon";
    }   else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = "Light Mode";
        document.getElementById("icon-toggle").className = "fas fa-sun";
    } else if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "Dark Mode";
        document.getElementById("icon-toggle").className = "fas fa-moon";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = "Light Mode";
        document.getElementById("icon-toggle").className = "fas fa-sun";
    }
}

if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    sessionStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
    document.getElementById("icon-toggle").className = "fas fa-sun";
} else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    sessionStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    document.getElementById("icon-toggle").className = "fas fa-moon";
}
