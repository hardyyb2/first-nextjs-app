import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head >
                    <link href="styles/nprogress.min.css" type="text/css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
                <style global jsx>{`
                    @font-face {
                        font-family: Roboto;
                        src: url('styles/Roboto-Black.ttf');
                    }
                    body{
                        margin:0;
                        max-width:100vw;
                        paddding:0;
                        font-size:110%;
                        background:#f0f0f0;
                        font-family:Roboto;
                        overflow-x:hidden;
                    }
                `}</style>
            </Html>
        )
    }
}

export default MyDocument