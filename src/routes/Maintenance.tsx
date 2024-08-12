const UnderDevelopment = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full mx-4 max-w-md text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    App Under Development
                </h2>
                <p className="text-gray-600 mb-4">
                    We're working hard to bring you something amazing. Stay tuned!
                </p>
                <div className="flex justify-center mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l1 9h13l1-9h2m-2-4h-2m0 0a2 2 0 00-2-2H7a2 2 0 00-2 2m14 0H7m0 0H5m14 0h2m0 0h-2m-3 0V7a5 5 0 00-10 0v3" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default UnderDevelopment;
