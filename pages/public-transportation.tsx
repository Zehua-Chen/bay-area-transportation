import Page from '@/components/Page';
import { FC } from 'react';

const PublicTransportation: FC = () => (
  <Page>
    <section>
      <h2>Public transportation</h2>

      <section>
        <h3>Types of buses</h3>
        <ul>
          <li>Buses</li>
          <li>Caltrain</li>
          <li>
            <a href="https://commute.org" target="_blank">
              Commute.org
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Purchase</h3>
        <ul>
          <li>Carmax offers warranty (up to 3 years)</li>
        </ul>
      </section>
    </section>
  </Page>
);

PublicTransportation.displayName = 'PublicTransportation';

export default PublicTransportation;
