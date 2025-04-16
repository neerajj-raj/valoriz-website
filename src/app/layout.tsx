/*
 * Copyright(c) 2025 Valoriz.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Magrabi ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Magrabi.
 *
 *
 * @author Neeraj
 */
import "@app/common/themes/css/main.css";
import "@app/common/themes/css/fonts.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="ltr" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Valoriz Digital | E-commerce</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Valoriz" />
        <meta property="og:description" content="Valoriz digital" />
        <meta property="og:url" content="https://valoriz.com/" />
        <meta property="og:site_name" content="Valoriz" />
        <meta name="description" content="Valoriz digital is a digital agency that provides e-commerce solutions." />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#E7F3E3" />
        <meta name="application-name" content="Valoriz" />
        <meta name="apple-mobile-web-app-title" content="Valoriz" />
        <link rel="icon" sizes="144x144" href="/images/favicon/mstile-144x144.png" />
        <link rel="shortcut icon" type="image/x-icon" media="all" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
