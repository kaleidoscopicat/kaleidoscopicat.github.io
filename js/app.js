/* https://medium.com/@nohanabil/building-a-multilingual-static-website-a-step-by-step-guide-7af238cc8505 */
function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}

async function fetchLanguageData(lang) {
  const response = await fetch(`lang\\${lang}.json`);
  return response.json();
}

function swapLangContent(langData) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (langData[key]) {              // only proceed if the key exists
      element.innerHTML = langData[key].toLowerCase();
    }
  });
}

async function swapLang() {
  var current = localStorage.getItem('language');
  if (current == null)
    current = 'no'
  else {
    if (current === 'no')
      current = "en"
    else if (current === 'en')
      current = "no"
  }

  await setLanguagePreference(current);

  const langData = await fetchLanguageData(current);
  swapLangContent(langData);
}

function remusFunction()
{
  window.location.assign("dateplanner");
}

window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('language') || 'no';
  const langData = await fetchLanguageData(userPreferredLanguage);
  swapLangContent(langData);
})
