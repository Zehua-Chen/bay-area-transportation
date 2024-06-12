import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import Link from 'next/link';

import { PAGE_HREFS } from '../utils/navigation';

import styles from './Page.module.scss';

export interface PageProps extends PropsWithChildren {
  className?: string;
}

const PAGES = [
  {
    title: 'Car',
    href: PAGE_HREFS.CAR,
  },
  {
    title: 'Public Transportation',
    href: PAGE_HREFS.PUBLIC_TRANSPORTATION,
  },
  {
    title: 'Bike',
    href: PAGE_HREFS.BIKE,
  },
];

const Page: FC<PageProps> = ({ className, children }) => (
  <>
    <nav className={clsx(styles.Page_nav)}>
      <div className={clsx(styles.Page_maxWidth, styles.Page_navContent)}>
        <Link className={styles.Page_navRootLink} href={PAGE_HREFS.HOME}>
          <h1 className={styles.Page_navTitle}>
            <div>Transportation</div>
            <div className={styles.Page_navSubTitle}>of Bay Area</div>
          </h1>
        </Link>

        <ul className={styles.Page_navList}>
          {PAGES.map(({ title, href }) => (
            <li key={href}>
              <Link className={styles.Page_navLink} href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    <main className={clsx(styles.Page, className)}>
      <div className={styles.Page_maxWidth}>{children}</div>
    </main>
  </>
);

Page.displayName = 'Page';

export default Page;
