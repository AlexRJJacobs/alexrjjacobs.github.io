import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {siteUrl} from '../../data/data';
import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(
  ({children, title, description, ogImageUrl, ogImageAlt}) => {
    const {asPath: pathname} = useRouter();
    const url = `${siteUrl}${pathname.split('#')[0]}`;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta content="#171717" name="theme-color" />

          <meta content="website" property="og:type" />
          <meta content="Alex Jacobs" property="og:site_name" />
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={url} property="og:url" />
          {ogImageUrl && <meta content={ogImageUrl} property="og:image" />}
          {ogImageUrl && <meta content="1200" property="og:image:width" />}
          {ogImageUrl && <meta content="630" property="og:image:height" />}
          {ogImageAlt && <meta content={ogImageAlt} property="og:image:alt" />}

          <meta content="summary_large_image" name="twitter:card" />
          <meta content={title} name="twitter:title" />
          <meta content={description} name="twitter:description" />
          {ogImageUrl && <meta content={ogImageUrl} name="twitter:image" />}
          {ogImageAlt && <meta content={ogImageAlt} name="twitter:image:alt" />}

          <link href="/favicon.ico" rel="icon" sizes="32x32" />
          <link href="/icon.svg" rel="icon" type="image/svg+xml" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />
          <link href={url} key="canonical" rel="canonical" />
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;
