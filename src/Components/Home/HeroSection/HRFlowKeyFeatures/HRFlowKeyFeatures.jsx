import image1 from "../../../../assets/imgs/smart.jpg";
import image2 from "../../../../assets/imgs/dailyy.jpg";
import image3 from "../../../../assets/imgs/digital.jpg";
import image4 from "../../../../assets/imgs/selfService.jpg";

export default function HRFlowKeyFeatures() {
    const features = [
        {
            image: image1,
            title: "Smart & Secure Attendance Tracking",
            description:"Let employees clock in securely, whether on-site or remote.",
            points: [
                "Facial Recognition: Fast, secure login via device camera",
                "GPS Check-in/Out: Geotagged time logs with map view",
                "QR Code Check-ins: Unique QR for contactless attendance",
                "Kiosk Mode: Team leaders can log attendance for entire shifts",
                "Biometric Integration Ready: Works with external hardware"

            ],
        },
        {
            image: image2,
            title: "Daily Scheduling & Location Awareness",
            description:"Keep distributed teams aligned and on time.",
            points: [
                "Personalized shift schedules available on mobile",
                "Real-time duty location visibility",
                "Push notifications for schedule updates",
                "Integrated with Odoo Attendance, Projects, and Subscriptions"
            ],
        },
        {
            image: image3,
            title: "Digital Access to HR Records",
            description:"Give employees full access to what matters — securely.",
            points: [
                "Login to view personal employee profile",
                "Access and download payslips, contracts, and ID documents",
                "View historical records, including warnings and reviews",
                "Bilingual interface in Arabic & English"
            ],
        },
        {
            image: image4,
            title: "Self-Service HR Requests",
            description:"Streamline employee interactions — no more emails or paper forms",
            points: [
                "Leave Requests: Vacation, sick leave, permissions",
                "Expense Claims: Upload receipts, tag projects or departments",
                "Certificates / Complaints / Letters: Instant digital submission",
                "Auto-synced with Odoo Approvals, Payroll, and Accounting"
            ],
        },
    ];

    return (
        <section className="py-16 " >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#263c61] mb-4">
                        Core ESS Features — Tailored for Mobile Teams
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
                                 <p className="text-[#717185] text-base mb-4">{feature.description}</p>
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
