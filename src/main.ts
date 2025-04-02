import './style.css';
// Views
import mainHtml from "./views/main/index.html?raw";
import './views/main/style.css';

document.querySelector("#app")!.insertAdjacentHTML("beforeend", mainHtml);
