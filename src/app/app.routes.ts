import { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () => import("./home/home.page").then((m) => m.HomePage),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "product-detail",
    loadComponent: () => import("./product-detail/product-detail.page").then((m) => m.ProductDetailPage),
  },
  {
    path: "contacts",
    loadComponent: () => import("./contact/contact.page").then((m) => m.ContactPage),
  },
]
