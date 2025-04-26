import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: "product/:id",
    renderMode: RenderMode.Client,
  },
  {
    path: "cart/",
    renderMode: RenderMode.Prerender
  },
  {
    path: "payment",
    renderMode: RenderMode.Prerender
  }
];
