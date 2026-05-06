export default function Feature() {
  return (
    <main className="px-4 my-6">
      {/* Heading */}
      <h1 className="font-bold text-center my-6 text-2xl sm:text-3xl">
        Powerful Features to Build Better Resumes
      </h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        
        {/* Card 1 */}
        <div className="group flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[22%] 
                        p-6 rounded-2xl bg-pink-100 backdrop-blur-md border border-white/30 shadow-md
                        hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]
                        transition duration-300 ease-in-out cursor-pointer">
          
          <p className="text-3xl bg-white rounded-xl p-3 
                        group-hover:scale-110 group-hover:rotate-6 transition">
            ⭐
          </p>

          <h3 className="font-bold my-3 text-xl sm:text-2xl 
                         group-hover:text-pink-600 transition">
            AI Content Generation
          </h3>

          <p className="text-gray-600">Get AI-powered suggestions</p>
          <p className="text-gray-600">for professional summaries,</p>
          <p className="text-gray-600">bullet points, and more.</p>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[22%] 
                        p-6 rounded-2xl bg-pink-100 backdrop-blur-md border border-white/30 shadow-md
                        hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]
                        transition duration-300 ease-in-out cursor-pointer">
          
          <p className="text-3xl bg-white rounded-xl p-3 
                        group-hover:scale-110 group-hover:rotate-6 transition">
            📝
          </p>

          <h3 className="font-bold my-3 text-xl sm:text-2xl 
                         group-hover:text-pink-600 transition">
            ATS Friendly Templates
          </h3>

          <p className="text-gray-600">Choose from beautifully</p>
          <p className="text-gray-600">designed templates that</p>
          <p className="text-gray-600">pass ATS scans</p>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[22%] 
                        p-6 rounded-2xl bg-pink-100 backdrop-blur-md border border-white/30 shadow-md
                        hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]
                        transition duration-300 ease-in-out cursor-pointer">
          
          <p className="text-3xl bg-white rounded-xl p-3 
                        group-hover:scale-110 group-hover:rotate-6 transition">
            ⬇️
          </p>

          <h3 className="font-bold my-3 text-xl sm:text-2xl 
                         group-hover:text-pink-600 transition">
            One Click Download
          </h3>

          <p className="text-gray-600">Download your resume</p>
          <p className="text-gray-600">in PDF format with one</p>
          <p className="text-gray-600">simple click.</p>
        </div>

        {/* Card 4 */}
        <div className="group flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[22%] 
                        p-6 rounded-2xl bg-pink-100 backdrop-blur-md border border-white/30 shadow-md
                        hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]
                        transition duration-300 ease-in-out cursor-pointer">
          
          <p className="text-3xl bg-white rounded-xl p-3 
                        group-hover:scale-110 group-hover:rotate-6 transition">
            🔐
          </p>

          <h3 className="font-bold my-3 text-xl sm:text-2xl 
                         group-hover:text-pink-600 transition">
            Safe, Secure & Private
          </h3>

          <p className="text-gray-600">Your data is secure and</p>
          <p className="text-gray-600">never shared with</p>
          <p className="text-gray-600">anyone.</p>
        </div>

      </div>
    </main>
  );
}