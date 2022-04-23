import React from 'react';
import { Helmet } from 'react-helmet';
import AppConfig from '../../contants/AppConfig';

function Meta(props) {
  return (
    <Helmet titleTemplate={`%s | ${AppConfig.appName}`} defaultTitle={AppConfig.appName}>
      <meta name="title" content={AppConfig.title} />
      <meta name="description" content={AppConfig.description} />
      <meta name="keywords" content={AppConfig.keywords} />
      <link rel="icon" type="image/png" href='favicon.png' sizes="32x32" />
      <link rel="shortcut icon" type="image/x-icon" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="57x57" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="114x114" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="72x72" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="144x144" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="60x60" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="50x50" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="120x120" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="76x76" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="152x152" href='favicon.png' />
      <link rel="apple-touch-icon" sizes="180x180" href='favicon.png' />
      <link rel="apple-touch-icon" href='favicon.png' key="apple" />
      <link rel="icon" href='favicon.png' key="favicon" />
      <link rel="icon" type="image/png" href='favicon.png' />
      <link rel="icon" type="image/png" href='favicon.png' sizes="32x32" />
      <link rel="icon" type="image/png" href='favicon.png' sizes="194x194" />
      <link rel="icon" type="image/png" href='favicon.png' sizes="96x96" />
      <link rel="icon" type="image/png" href='favicon.png' sizes="192x192" />
      <link rel="icon" type="image/png" href='favicon.png' sizes="16x16" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={AppConfig.appName} />
      <meta property="og:title" content={AppConfig.title} />
      <meta property="og:description" content={AppConfig.description} />
      <meta property="og:author" content={AppConfig.author} />
      <meta property="og:image" content='favicon.png' />
      <meta property="og:image:url" content='favicon.png' />
      <meta property="og:image:secure_url" content='favicon.png' />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content={AppConfig.title} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content={'@' + AppConfig.twitterUsername} />
      <meta property="twitter:title" content={AppConfig.title} />
      <meta property="twitter:description" content={AppConfig.description} />
      <meta property="twitter:creator" content={'@' + AppConfig.twitterUsername} />
      <meta property="twitter:image:src" content='favicon.png' />
      <meta property="twitter:image:alt" content={AppConfig.title} />
    </Helmet>
  );
}

export default Meta;
