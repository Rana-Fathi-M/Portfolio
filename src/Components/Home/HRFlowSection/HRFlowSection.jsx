import saas from "../../../assets/imgs/saas.png";
import Customer from "../../../assets/imgs/customer.png";
import server from "../../../assets/imgs/server.png";

const resources = [
    {
        image:
            saas,
        category: "SaaS Marketing",
        title: "The Ultimate Guide to SaaS Marketing Strategies.",
        link: "#",
    },
    {
        image:
           Customer,
        category: "SaaS Customer",
        title: "SaaS Retention Strategies: Keeping Customers Engaged and Loyal",
        link: "#",
    },
    {
        image:
            server,
        category: "SaaS Game",
        title: "Understanding SaaS Customer Acquisition Costs (CAC)",
        link: "#",
    },
];


function HRFlow() {
    return (
        <div className="min-h-screen bg-white py-12 px-6 md:px-12">

            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 text-mainDarkBlue">HRFlow TNC Tips & Tricks</h2>
                <p className="text-center text-subTitleLightText mb-12  text-base">
                    Navigating the Terms and Conditions (TNC) with HrFlow is made easy with these tips and tricks.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {resources.map((resource, index) => (
                    <div key={index} className="max-w-sm">
                        <div className="overflow-hidden rounded-xl ">
                            <img
                                src={resource.image}
                                alt={resource.title}
                                className=" w-full h-52 object-cover hover:scale-110 transition-transform duration-300 shadow-lg"
                            />
                        </div>
                        <p className="uppercase text-xs font-medium text-subTitleLightText my-5">
                            {resource.category}
                        </p>
                        <h3 className="text-lg font-medium text-headerLightText mb-6 leading-snug">
                            {resource.title}
                        </h3>
                        <a
                            href={resource.link}
                            className="text-sm text-subTitleLightText underline hover:opacity-70 transition"
                        >
                            Read full Resource
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HRFlow;
