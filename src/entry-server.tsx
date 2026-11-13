import {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import {App} from './App';
import {pages, type PageId} from './content/pages';

/** Build-time only: renders each page to HTML so search engines get full content. */
export function render(page: PageId): string {
  return renderToString(
    <StrictMode>
      <App page={page} />
    </StrictMode>,
  );
}

export const routes = Object.values(pages).map((p) => ({id: p.id, file: p.file}));
