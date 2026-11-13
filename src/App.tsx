import {Layout} from './components/Layout';
import type {PageId} from './content/pages';
import {Academy} from './pages/Academy';
import {Contact, NotFound} from './pages/Contact';
import {Home} from './pages/Home';
import {Reviews} from './pages/Reviews';
import {Services} from './pages/Services';
import {Wigs} from './pages/Wigs';

const VIEWS: Record<PageId, () => React.JSX.Element> = {
  home: Home,
  services: Services,
  wigs: Wigs,
  academy: Academy,
  reviews: Reviews,
  contact: Contact,
  notfound: NotFound,
};

export function App({page}: {page: PageId}) {
  const View = VIEWS[page] ?? Home;
  return (
    <Layout page={page}>
      <View />
    </Layout>
  );
}
