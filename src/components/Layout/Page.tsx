import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={description} name="twitter:description" />
        <meta content={title} name="twitter:title" />
        <meta content={description} property="og:description" />
        <meta content={title} property="og:title" />
        <meta content={`https://reactresume.com${pathname}`} property="og:url" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/site.webmanifest" rel="manifest" />
        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
