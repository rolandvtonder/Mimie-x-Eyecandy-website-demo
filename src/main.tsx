import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {App} from './App';
import type {PageId} from './content/pages';
import './index.css';

// Each HTML file names its page on <body data-page>; the build prerenders the
// markup, so here we hydrate it (or render fresh in dev).
const page = (document.body.dataset.page ?? 'home') as PageId;
const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App page={page} />
  </StrictMode>
);

if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
