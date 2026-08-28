const switcher = document.getElementById('langSwitch');
let lang = 'ru';

function setLang(nextLang) {
    lang = nextLang;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-ru][data-en]').forEach((element) => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    document.querySelectorAll('[data-ph-ru][data-ph-en]').forEach((element) => {
        element.placeholder = element.getAttribute(`data-ph-${lang}`);
    });

    document.querySelectorAll('.lang-switch span').forEach((element) => {
        if (element.textContent.trim() === lang.toUpperCase()) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

switcher.addEventListener('click', function () {
    if (lang === 'ru') {
        setLang('en');
    } else {
        setLang('ru');
    }
});
