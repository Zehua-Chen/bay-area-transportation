import { FC } from 'react';
import Page from '@/components/Page';

const Bike: FC = () => (
  <Page>
    <section>
      <h2>Bike</h2>
      <ul>
        <li>Payload</li>
        <ul>
          <li>Some bike frames do not support racks and baskets</li>
          <li>Bike baskets may not be able to hold a lot of things</li>
        </ul>
        <li>Hills and bridges</li>
        <ul>
          <li>Going up the mountain can be stressful for the knee</li>
          <li>Going down the slope can test the quality of the brakes</li>
        </ul>
      </ul>
    </section>
  </Page>
);

Bike.displayName = 'Bike';

export default Bike;
