import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,300,400&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" type="image/svg+xml" href="https://static.vecteezy.com/system/resources/thumbnails/003/171/355/small/objective-lens-icon-with-six-rainbow-colors-vector.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                

            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}