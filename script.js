const switcher = document.getElementById('langSwitch');
let lang = 'ru';

function setLang(next){
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ru][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  document.querySelectorAll('[data-ph-ru][data-ph-en]').forEach(el => {
    el.placeholder = el.dataset[`ph-${lang}`];
  });
  document.querySelectorAll('.lang-switch span').forEach((s,i)=>{
    if(s.textContent === lang.toUpperCase()) s.classList.add('active');
    else s.classList.remove('active');
  });
  document.title = lang === 'ru'
    ? 'RCL Plastic — Производство пластиковых изделий'
    : 'RCL Plastic — Plastic Manufacturing';
}

switcher.addEventListener('click', () => setLang(lang === 'ru' ? 'en' : 'ru'));

const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  toast.textContent = toast.dataset[lang];
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 4000);
  form.reset();
});

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('open');
}));

const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
  if(nav.classList.contains('open')){
    Object.assign(nav.style,{display:'flex',position:'absolute',top:'70px',left:'0',right:'0',height:'auto',padding:'20px 24px',flexDirection:'column',background:'#101c29',margin:'0'});
    nav.querySelectorAll('a').forEach(a=>a.style.padding='14px 0');
  } else {
    nav.removeAttribute('style');
    nav.querySelectorAll('a').forEach(a=>a.removeAttribute('style'));
  }
});
