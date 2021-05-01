import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Homepage() {
    return (
        <div class="container py-32 text-center">
            <h1 class="font-extrabold text-4xl md:text-6xl text-gray-800">Arief R Ramadhan</h1>
            <h2 class="font-semibold text-md md:text-lg text-gray-600 mt-2">Product Enthusiast</h2>

            <div className="flex justify-center mt-8 space-x-5">
                <a href="https://linkedin.com/in/ariefrizkyr" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" className="text-gray-800 hover:text-gray-600"></FontAwesomeIcon>
                </a>
                <a href="https://github.com/ariefrizkyr" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} size="lg" className="text-gray-800 hover:text-gray-600"></FontAwesomeIcon>
                </a>
                <a href="https://instagram.com/ariefrizkyr" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" className="text-gray-800 hover:text-gray-600"></FontAwesomeIcon>
                </a>
                <a href="https://twitter.com/ariefrizkyr" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" className="text-gray-800 hover:text-gray-600"></FontAwesomeIcon>
                </a>
            </div>
        </div>
    );
}

export default Homepage;