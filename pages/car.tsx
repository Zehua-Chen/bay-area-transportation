import Page from '@/components/Page';
import { FC } from 'react';

const Car: FC = () => (
  <Page>
    <section>
      <h1>Car</h1>

      <section>
        <h3>Insurance</h3>
        <ul>
          <li>
            Newly licensed (less than 3 years) driver will have expensive
            premium or be denied insurance
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

Car.displayName = 'Car';

export default Car;
