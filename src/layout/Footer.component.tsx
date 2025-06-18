const FooterInfo = {
    "name": "Owner Name",
    "text": "All rights reserved.",
    "links": [
        {
            "id": 1,
            "title": "Facebook",
            "url": "https://facebook.com/",
        },
    ]
}

const Footer = () => {
    return (
        <footer className="w-full py-8 px-6 text-center border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                © {new Date().getFullYear()} {`${FooterInfo?.name}. ${FooterInfo?.text}`}
            </p>

            <div className="mt-4 flex justify-center gap-4">
                {FooterInfo?.links?.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </footer>

    );
};

export default Footer;