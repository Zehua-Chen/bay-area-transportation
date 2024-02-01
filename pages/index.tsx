import { FC } from 'react';

const Index: FC = () => (
  <main>
    <section>
      <h1>Transportation in Bay Area</h1>
    </section>
    <section>
      <h2>Biking</h2>
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
  </main>
);

Index.displayName = 'Index';

export default Index;
