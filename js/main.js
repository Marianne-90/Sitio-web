let estadoMenuCatalogo = true;
const categoryMenu = (e) => {
  let lista = document.getElementsByClassName("category-sub-list");
  estadoMenuCatalogo = !estadoMenuCatalogo;
  let className = estadoMenuCatalogo
    ? "category-sub-list"
    : "category-sub-list category-sub-list-display";
  lista[0].className = className;
};

let estadoDelMenuPrincipal = true;
const displayMainMenu = () => {
  let menu = document.getElementsByClassName("container");
  estadoDelMenuPrincipal = !estadoDelMenuPrincipal;
  
  let className = estadoDelMenuPrincipal ? "container" : "container containerActive";
  menu[0].className = className;
};

const hideItems = (e) => {
  //voy a ir poniendo manualmente los items que quiero esconder
  //esconder menú de catálogo
  let clicClass = e.target.className;
  if (
    clicClass != "catalogos" &&
    estadoMenuCatalogo == false &&
    clicClass != "fa-solid fa-caret-down"
  ) {
    let lista = document.getElementsByClassName("category-sub-list");
    estadoMenuCatalogo = !estadoMenuCatalogo;
    let className = estadoMenuCatalogo
      ? "category-sub-list"
      : "category-sub-list category-sub-list-display";
    lista[0].className = className;
    return;
  }

};
