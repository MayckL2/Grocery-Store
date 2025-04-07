import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
// ADJUSTING ROUTE PARAMETERS ON SERVER SIDE
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { join } from 'path';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();
// ADJUSTING ROUTE PARAMETERS ON SERVER SIDE
const distFolder = join(process.cwd(), 'dist/your-app/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

app.set('view engine', 'html');
app.set('views', distFolder);

// Configuração das rotas pré-renderizadas
app.get('*', (req, res) => {
  res.render(indexHtml, {
    req,
    providers: [
      { provide: APP_BASE_HREF, useValue: req.baseUrl }
    ],
    // Adicione esta configuração para rotas com parâmetros
    prerender: {
      routes: [
        '/',
        '/products',
        {
          route: '/product/:name',
          getPrerenderParams: () => [
            { name: 'product1' },
            { name: 'product2' },
            { name: 'product3' }
          ]
        }
      ]
    }
  });
});

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */

export const reqHandler = createNodeRequestHandler(app);
