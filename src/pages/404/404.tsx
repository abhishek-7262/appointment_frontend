import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
            <div className="max-w-md text-center">
                <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
                <p className="mt-2 text-gray-600">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                {/* Optional Image or SVG */}
                <div className="mt-6">
                    <img
                        src="https://illustrations.popsy.co/gray/error-page.svg"
                        alt="404 Illustration"
                        className="w-full max-w-xs mx-auto"
                    />
                </div>

                <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
