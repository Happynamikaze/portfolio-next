import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel='shortcut icon' href='/images/war-favicon.svg' />
                <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5319ac" />
                <meta name="msapplication-TileColor" content="#5319ac" />
                <meta name="theme-color" content="#5319ac" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}