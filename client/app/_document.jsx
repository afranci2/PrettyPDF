import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://use.typekit.net/prr0wvl.css"></link>

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                

            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}