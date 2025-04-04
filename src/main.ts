import "./style.css";
// Views
import mainHtml from "./views/main/index.html?raw";
import "./views/main/style.css";
// Handlers
import { setupEventInput } from "./events/eventHandlers";

document.querySelector("#app")!.insertAdjacentHTML("beforeend", mainHtml);

setupEventInput();
