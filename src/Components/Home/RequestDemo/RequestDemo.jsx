import illustration from "../../../assets/imgs/hr-demo.png"; // adjust the path to your image

export default function RequestDemo() {
    return (
        <div className="w-full flex justify-center py-16 px-4">
            <div className="bg-PinkBg shadow-xl rounded-[50px] w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-5">
                {/* Text Section */}
                <div className="flex-1 py-10 px-6 md:px-0 lg:pl-16 text-center lg:text-left">
                    <h1 className="text-white text-4xl md:text-[46px] font-bold leading-snug my-10">
                        Experience the future of <br />
                        HR management with HR <br />
                        Flow TNC.
                    </h1>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button className="bg-blackColor hover:bg-transparent text-white hover:text-blackColor border-2 border-blackColor px-6 py-3 rounded-full text-sm font-semibold  transition">
                            Request a demo
                        </button>
                        
                    </div>
                </div>

                {/* Image Section */}
                <div className="hidden lg:flex flex-1 pt-10 pr-6 lg:pr-16 ">
                    <img src={illustration} alt="HR Illustration" className="w-full" />
                </div>
            </div>
        </div>
    );
}
