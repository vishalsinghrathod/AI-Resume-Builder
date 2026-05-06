export default function Steps() {
    return (
        <main className="px-4 sm:px-6 lg:px-10">
            <h1 className="font-bold text-2xl sm:text-3xl text-center m-5">
                Create Your Resume in 3 Easy Steps
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center">

                {/* 1st element */}
                <div className="group flex flex-col w-full sm:w-80 mx-auto m-2 p-8 items-center justify-center 
                rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-purple-50">

                    <p className="text-3xl p-6 rounded-full bg-purple-100 
                    transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-200">
                        🖊️
                    </p>

                    <h1 className="font-bold my-3 text-lg">1. Add Your Details</h1>

                    <p className="text-gray-600 text-center">Fill in your information</p>
                    <p className="text-gray-600 text-center">in a simple form</p>
                </div>

                {/* 2nd element */}
                <div className="group flex flex-col w-full sm:w-80 mx-auto m-2 p-8 items-center justify-center 
                rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-purple-50">

                    <p className="text-3xl p-6 rounded-full bg-purple-100 
                    transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-200">
                        🪞
                    </p>

                    <h1 className="font-bold my-3 text-lg">2. AI Makes it</h1>

                    <p className="text-gray-600 text-center">Our AI writes and enhances</p>
                    <p className="text-gray-600 text-center">content for your resume.</p>
                </div>

                {/* 3rd element */}
                <div className="group flex flex-col w-full sm:w-80 mx-auto m-2 p-8 items-center justify-center 
                rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-purple-50">

                    <p className="text-3xl p-6 rounded-full bg-purple-100 
                    transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-200">
                        ⬇️
                    </p>

                    <h1 className="font-bold my-3 text-lg">3. Download & Share</h1>

                    <p className="text-gray-600 text-center">Review, customize and</p>
                    <p className="text-gray-600 text-center">download your resume.</p>
                </div>

            </div>
        </main>
    )
}