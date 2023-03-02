function App() {
    return (
        <div className="flex text-white h-screen">
            <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
                {[...Array(40)].map((_, i) => (
                    <div className="bg-white text-gray-800  w-12 h-12 rounded-full flex items-center justify-center">
                        {i}
                    </div>
                ))}
            </div>
            <div className="bg-gray-700  w-60 flex flex-col">
                {/* flex-shrink-0  */}
                <div className="px-3 h-12 shadow-md flex items-center ">
                    Tailwind CSS
                </div>
                <div className="p-3 flex-1 overflow-y-scroll space-y-2">
                    {[...Array(40)].map((_, i) => (
                        <p>Channel {i}</p>
                    ))}
                </div>
            </div>
            <div className="bg-gray-600 flex-1 flex flex-col ">
                <div className="p-3 shadow-md">general</div>
                <div className="p-3 flex-1 overflow-y-scroll space-y-2">
                    {[...Array(40)].map((_, i) => (
                        <p>
                            Message {i}: Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sunt culpa asperiores tempore
                            tenetur sit quidem laboriosam mollitia iusto dolorem
                            fugiat, quo impedit cumque. Voluptatum magni
                            officiis ratione consequuntur, non, consequatur
                            error fugiat, quidem neque recusandae illo
                            doloremque nisi rerum. Dolore! Voluptatum magni
                            officiis ratione consequuntur, non, consequatur
                            error fugiat, quidem neque recusandae illo
                            doloremque nisi rerum. Dolore!
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
