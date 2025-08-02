import image1 from "../../../../assets/imgs/dashboard 1.png";
import image2 from "../../../../assets/imgs/dashboard 2.png";
import image3 from "../../../../assets/imgs/dashboard 3.png";
import image4 from "../../../../assets/imgs/dashboard 4.png";

export default function HRFlowKeyFeatures() {
    const features = [
        {
            image: image1,
            title: "Streamlined HR Processes",
            points: [
                "Centralized employee database",
                "Automated onboarding and offboarding processes",
                "Customizable workflows and approvals",
            ],
        },
        {
            image: image2,
            title: "Employee Self-Service",
            points: [
                "Portal for employees to manage their data",
                "Time-off requests and approvals",
                "Performance reviews and feedback",
            ],
        },
        {
            image: image3,
            title: "Data-Driven Decisions",
            points: [
                "Advanced analytics and dashboards",
                "Track key HR metrics easily",
                "Exportable reports for management",
            ],
        },
        {
            image: image4,
            title: "Compliance and Security",
            points: [
                "Secure employee records",
                "GDPR and labor law compliance",
                "Role-based access control",
            ],
        },
    ];

    return (
        <section className="py-16 ">
            <div className="max-w-8xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#263c61] mb-4">
                        HRFlow Key Features
                    </h2>
                    <p className="text-[#717185] text-base leading-relaxed">
                        HRMLand is your all-in-one HR management solution. Our user-friendly interface and modules allow you to tailor the software to fit your specific HR needs.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/30 rounded-3xl shadow-sm p-6 md:p-9 flex flex-col md:flex-row gap-6 md:items-center hover:shadow-md transition duration-300"
                        >
                            {/* Image */}
                            <div className="flex-shrink-0 w-full md:w-1/2">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-[#263c61] mb-4 relative inline-block">
                                    {feature.title}
                                    <span className="block w-10 h-[3px] bg-indigo-400 mt-1 rounded-md"></span>
                                </h3>
                                <ul className="space-y-4 text-[#717185] text-base leading-relaxed">
                                    {feature.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="mt-1 text-indigo-500">✓</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
