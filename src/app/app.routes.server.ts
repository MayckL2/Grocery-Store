import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: "product/:name",
    renderMode: RenderMode.Client
  }
];
