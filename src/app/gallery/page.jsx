import { CONFIG } from 'src/global-config';

import { TravelToursView } from 'src/sections/_travel/view/travel-tours-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Services | Marketing - ${CONFIG.appName}` };

export default function Page() {
  // return <MarketingServicesView />;
  return <TravelToursView />;
}
