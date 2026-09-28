import home from "../pages/home.js";
import recipes from "../pages/recipes.js";
import about from "../pages/about.js";
import tips from "../pages/tips.js";
import contact from "../pages/contact.js";

export function loadPage(pageID) {
  console.log(`model.js ${pageID}`);

  switch (pageID) {
    case "home":
      document.querySelector("main").innerHTML = home;
      break;

    case "recipes":
      document.querySelector("main").innerHTML = recipes;
      break;

    case "about":
      document.querySelector("main").innerHTML = about;
      break;

    case "tips":
      document.querySelector("main").innerHTML = tips;
      break;

    case "contact":
      document.querySelector("main").innerHTML = contact;
      break;
  }
}