import Dashboard from "../pages/Dashboard.js";
import products from "../pages/Products.js";
import Posts from "../pages/Posts.js";
import NotFound from "../pages/NotFound.js";

const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const dashboardBtn = document.querySelector(".dashboardBtn");
const productsBtn = document.querySelector(".productsBtn");
const postsBtn = document.querySelector(".postsBtn");
const DashboardBtn = document.querySelector(".DashboardBtn");
const ProductsBtn = document.querySelector(".ProductsBtn");
const PostsBtn = document.querySelector(".PostsBtn");

showModalBtn.addEventListener("click" , () => {
  modal.style.opacity = "1";
  modal.style.transform = "translateY(5vh)";
  backdrop.style.display = "block";
});

backdrop.addEventListener("click" , () => {
  modal.style.opacity = "0";
  modal.style.transform = "translateY(-100vh)";
  backdrop.style.display = "none";
});

function router(params) {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/products", view: products },
  ];

  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });

  let match = potentialRoutes.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: { path: "/not-found", view: NotFound },
      isMatch: true,
    };
  }
  document.querySelector(".main").innerHTML = match.route.view();

  
  dashboardBtn.addEventListener("click" , () => {
    match.route = { path :"/", view: Dashboard}; 
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backdrop.style.display = "none";
    document.querySelector(".main").innerHTML = match.route.view();
  });

  postsBtn.addEventListener("click" , () => {
    match.route = { path :"/posts", view: Posts}; 
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backdrop.style.display = "none";
    document.querySelector(".main").innerHTML = match.route.view();
  });

  productsBtn.addEventListener("click" , () => {
    match.route = { path :"/products", view: products}; 
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backdrop.style.display = "none";
    document.querySelector(".main").innerHTML = match.route.view();
  });

  DashboardBtn.addEventListener("click" , () => {
    match.route = { path :"/", view: Dashboard}; 
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backdrop.style.display = "none";
    document.querySelector(".main").innerHTML = match.route.view();
  });

  PostsBtn.addEventListener("click" , () => {
    match.route = { path :"/posts", view: Posts}; 
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backdrop.style.display = "none";
    document.querySelector(".main").innerHTML = match.route.view();
  });

  ProductsBtn.addEventListener("click" , () => {
    match.route = { path :"/products", view: products}; 
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backdrop.style.display = "none";
    document.querySelector(".main").innerHTML = match.route.view();
  });

}

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

 router();
});

