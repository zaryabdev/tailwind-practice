import "./App.css";

function App() {
    return (
        <div>
            <h1 className="bg-gray-700 text-white min-h-screen flex items-center justify-center">
                <div className="max-w-lg">
                    <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
                        <img
                            className="w-10 h-10 rounded-full mr-4"
                            src="./profile-pic.png"
                            alt="profile-pic"
                        />
                        <div>
                            <p className="flex items-baseline">
                                <span className="text-green-500 mr-2 text-sm font-medium">
                                    talhazaryab
                                </span>
                                <span className=" text-xs text-gray-500">
                                    22/08/2021
                                </span>
                            </p>
                            <p className="text-gray-300">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugit ullam rerum modi
                                voluptas adipisci a voluptatem! Vero dolor iste
                                soluta tempore amet asperiores pariatur.
                            </p>
                        </div>
                    </div>
                    <div className="mt-1  hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
                        <p className="text-gray-300 pl-14">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ad consequuntur consectetur ducimus.
                            Perspiciatis, accusamus.
                        </p>
                    </div>
                    <div className="mt-1  hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
                        <p className="text-gray-300 pl-14">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ad consequuntur.
                        </p>
                    </div>
                </div>
            </h1>
        </div>
    );
}

export default App;
