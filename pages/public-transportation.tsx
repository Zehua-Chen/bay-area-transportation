import Page from '@/components/Page';
import { FC } from 'react';

const PublicTransportation: FC = () => (
  <Page>
    <section>
      <h1>Public transportation</h1>

      <ul>
        <li>Buses</li>
        <li>Bart</li>
        <ul>
          <li>Noisy</li>
          <li>Unsafe</li>
        </ul>
        <li>Caltrain</li>
        <li>
          <a href="https://commute.org" target="_blank">
            Commute.org
          </a>
        </li>
      </ul>
    </section>
  </Page>
);

PublicTransportation.displayName = 'PublicTransportation';

export default PublicTransportation;
