import { FC } from 'react';
import Link from 'next/link';

import Page from '@/components/Page';
import { PAGE_HREFS } from '@/utils/navigation';

import styles from './index.module.scss';

const SECTIONS = [
  {
    gridClassName: styles.App_gridCar,
    title: 'Car',
    href: PAGE_HREFS.CAR,
  },
  {
    gridClassName: styles.App_gridPublicTransportation,
    title: 'Public transportation',
    href: PAGE_HREFS.PUBLIC_TRANSPORTATION,
  },
  {
    gridClassName: styles.App_gridBike,
    title: 'Bike',
    href: PAGE_HREFS.BIKE,
  },
];

const Index: FC = () => (
  <Page>
    <div className={styles.App_grid}>
      <section className={styles.App_gridTitle}>
        <h1>Transportation in Bay Area</h1>
      </section>
      {SECTIONS.map(({ gridClassName, title, href }) => (
        <section key={title} className={gridClassName}>
          <h2>{title}</h2>
          <Link href={href}>Learn more</Link>
        </section>
      ))}
    </div>
  </Page>
);

Index.displayName = 'Index';

export default Index;
