import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Page.module.scss';

export interface PageProps extends PropsWithChildren {
  className?: string;
}

const Page: FC<PageProps> = ({ className, children }) => (
  <main className={clsx(styles.Page, className)}>{children}</main>
);

Page.displayName = 'Page';

export default Page;
