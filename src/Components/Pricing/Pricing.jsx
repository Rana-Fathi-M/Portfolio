import React, { useState } from "react";


const plans = [
    {
        title: "Starter",
        monthly: 199,
        annually: 159,
        features: [
            "Task creation and management",
            "Basic team collaboration tools",
            "Up to 5 projects",
        ],
    },
    {
        title: "Growth",
        monthly: 499,
        annually: 399,
        popular: true,
        features: [
            "Unlimited projects",
            "Advanced task automation",
            "Team chat and file sharing",
        ],
    },
    {
        title: "Scale",
        monthly: 999,
        annually: 799,
        features: [
            "Customizable workflows",
            "Priority customer support",
            "Comprehensive analytics",
        ],
    },
];

const Pricing = () => {
    const [billing, setBilling] = useState("monthly");

    const formatPrice = (price) => `$${price}`;

    return (
        <section className="py-16 px-4 pt-24 md:pt-36 main-gradient-light-bg">
            <div className="max-w-6xl mx-auto text-center">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-sm text-mainBlue py-1 px-3 rounded-3xl bg-white">Simple Pricing</span>

                    <div className="leading-tight mt-2">
                        <h1 className="text-[58px] text-blackColor font-W700 font-fustat">Flexible Plans for Every</h1>
                        <span className="block text-[58px] text-mainBlue font-W700 font-fustat">Team and Budget</span>
                    </div>

                    <p className="text-gray-600 text-subtitle max-w-xl mx-auto">
                        {/* Optional paragraph text here */}
                    </p>
                </div>

                {/* Toggle Tabs */}
                <div className="relative inline-flex mb-12">
                    <div className="bg-offWhite rounded-full p-5 flex">
                        <button
                            onClick={() => setBilling("monthly")}
                            className={`px-10 py-3 rounded-full font-semibold transition-all duration-200 ${billing === "monthly" ? "bg-mainBlue text-white" : "text-blackColor"
                                }`}
                            style={{
                                boxShadow:
                                    billing === "monthly"
                                        ? "inset 0 0 8px 3px rgba(137, 196, 244, 0.7)"
                                        : undefined,
                            }}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBilling("annually")}
                            className={`px-10 py-3 rounded-full font-semibold transition-all duration-200 ${billing === "annually" ? "bg-mainBlue text-white" : "text-blackColor"
                                }`}
                            style={{
                                boxShadow:
                                    billing === "annually"
                                        ? "inset 0 0 8px 3px rgba(137, 196, 244, 0.7)"
                                        : undefined,
                            }}
                        >
                            Annually
                        </button>
                    </div>
                </div>


                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.title}
                            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col text-left"
                        >
                            <div className="flex items-center mb-2">
                                <h3 className="text-mainBlue font-fustat font-W700 text-titleSection mr-2">
                                    {plan.title}
                                </h3>
                                {plan.popular && (
                                    <span className="animate-pulse text-mainBlue border border-maintext-mainBlue text-xs font-semibold px-2 py-0.5 rounded-full">
                                        POPULAR
                                    </span>
                                )}
                            </div>

                            <div className="text-5xl font-bold mb-2 text-blackColor">
                                {formatPrice(plan[billing])}
                                <span className="text-sm font-medium text-gray-500 ml-2">
                                    Per {billing === "monthly" ? "Month" : "Year"}
                                </span>
                            </div>

                            <ul className="text-base space-y-3 mt-4 mb-6 text-blackColor">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <img src="https://cdn.prod.website-files.com/67fb5942fe2143f8740c18cc/67fb5942fe2143f8740c1f6c_checkmark-circle-01.svg" loading="lazy" alt="icon" class="feature-item-icon"></img>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full">
                            </div>
                           

                        </div>
                    ))}
                </div>

                {/* Enterprise / Tailored Section */}
                <div className="mt-16 bg-[#F6F7F9] rounded-3xl p-8 md:p-10 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 items-center gap-6 text-left">
                        {/* Left: Title & Subtitle */}
                        <div>
                            <h4 className="text-mainBlue font-fustat font-W700 text-titleSection mb-2">
                                Starter
                            </h4>
                            <p className="text-gray-500 text-subtitle">
                                Tailored solutions for large <br /> organizations with specific needs.
                            </p>
                        </div>

                        {/* Middle: Features */}
                        <ul className="space-y-3 text-sm text-gray-800">
                            <li className="flex items-center gap-3 text-subtitle">
                                <img src="https://cdn.prod.website-files.com/67fb5942fe2143f8740c18cc/67fb5942fe2143f8740c1f6c_checkmark-circle-01.svg" alt="check icon" className="feature-item-icon" />
                                Dedicated account manager
                            </li>
                            <li className="flex items-center gap-3 text-subtitle">
                                <img src="https://cdn.prod.website-files.com/67fb5942fe2143f8740c18cc/67fb5942fe2143f8740c1f6c_checkmark-circle-01.svg" alt="check icon" className="feature-item-icon" />
                                Custom integrations
                            </li>
                            <li className="flex items-center gap-3 text-subtitle">
                                <img src="https://cdn.prod.website-files.com/67fb5942fe2143f8740c18cc/67fb5942fe2143f8740c1f6c_checkmark-circle-01.svg" alt="check icon" className="feature-item-icon" />
                                Enterprise-level security
                            </li>
                        </ul>

                     
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
