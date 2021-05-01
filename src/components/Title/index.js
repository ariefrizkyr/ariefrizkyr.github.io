import Helmet from 'react-helmet';

function TitleComponent ({
    title
}) {
    const defaultTitle = 'Arief R Ramadhan';

    return (
        <Helmet>
            <title>{title ? title + " | " + defaultTitle : defaultTitle}</title>
        </Helmet>
    )
}

export { TitleComponent };