const thanksPage = "http://u124675.test-handyhost.ru/?page_id=20";
const mainPage = "http://u124675.test-handyhost.ru/?page_id=home";
const loc = window.location.href;

window.onload = setTimeout(relink, 5000);
function relink() {
    if (loc == thanksPage) {
        window.location.href = mainPage;
    }
}