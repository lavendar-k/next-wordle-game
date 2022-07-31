import Head from 'next/head';

const Meta = () => {
    return (
        <Head>
            <title>Nextle - A Wordle Clone</title>
            <meta name="title" content="Nextle" />
            <meta
                name="description"
                content="A wordle clone built as a PWA with Next.js"
            />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="content-language" content="en" />
        </Head>
    );
};

export default Meta;
