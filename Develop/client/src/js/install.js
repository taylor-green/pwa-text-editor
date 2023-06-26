import { text } from "stream/consumers";

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

buttonInstall.style.visibility = 'visible'

textHeader.textContent = 'Install App';

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    event.prompt();
buttonInstall.setAttribute('disabled', true);
buttonInstall.textContent = 'Installed';
 });
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Installed';
});
