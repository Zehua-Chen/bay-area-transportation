import { FC } from 'react';
import Page from '@/components/Page';

const Bike: FC = () => (
  <Page>
    <section>
      <h1>Bike</h1>
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
        <li>Roads</li>
        <ul>
          <li>Not all roads have bike lanes</li>
          <li>
            Some bike lanes are dangerous; they pivot to the center of the road
            near intersection
          </li>
        </ul>
      </ul>
    </section>
  </Page>
);

Bike.displayName = 'Bike';

export default Bike;
