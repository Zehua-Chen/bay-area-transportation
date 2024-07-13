import Page from '@/components/Page';
import { FC } from 'react';

const PublicTransportation: FC = () => (
  <Page>
    <section>
      <h1>Public transportation</h1>

      <ul>
        <li>Buses</li>
        <li>Bart</li>
        <li>Caltrain</li>
        <li>
          <a href="https://commute.org" target="_blank">
            Commute.org
          </a>
        </li>
      </ul>

      <section>
        <h2>Bart</h2>
        <ul>
          <li>Pros</li>
          <ul>
            <li>Connect west and east bay</li>
            <li>Trains are frequent, even on weekends</li>
          </ul>
          <li>Cons</li>
          <ul>
            <li>Noisy</li>
            <li>Unsafe</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>Caltrain</h2>
        <ul>
          <li>Cons</li>
          <ul>
            <li>Slower</li>
            <li>Less frequent</li>
          </ul>
        </ul>
      </section>
    </section>
  </Page>
);

PublicTransportation.displayName = 'PublicTransportation';

export default PublicTransportation;
