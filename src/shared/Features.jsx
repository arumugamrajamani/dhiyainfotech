import React from "react";
import { FaChartLine, FaRobot, FaShieldAlt, FaFileAlt, FaChartBar } from "react-icons/fa";
import "./Features.css";

const features = [
  {
    icon: <FaChartLine size={30} />,
    title: "Analytics Business",
    color: "#35b7f3",
    border: "border-blue",
  },
  {
    icon: <FaRobot size={30} />,
    title: "Artificial Intelligence",
    color: "#f3a935",
    border: "border-yellow",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Privacy & Security",
    color: "#4dc37a",
    border: "border-green",
  },
  {
    icon: <FaFileAlt size={30} />,
    title: "Annual Reports",
    color: "#f35ca6",
    border: "border-pink",
  },
  {
    icon: <FaChartBar size={30} />,
    title: "Performance Analysis",
    color: "#9e8cfc",
    border: "border-purple",
  },
];

const Features = () => {
  return (
    <section className="py-5 bg-white text-center">
      <p className="text-success fw-bold">Faster, Lighter & Dev. Friendly</p>
      <h2 className="fw-bold display-6">Choose dashboard for every stage of your customer journey</h2>
      <p className="text-muted w-75 mx-auto mb-5">
        Customer support for SaaS companies is one of the best ways to understand your customers' feelings about your business.
      </p>

      <div className="container">
        <div className="row justify-content-center">
          {features.map((feature, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
              <div className={`feature-box shadow-sm ${feature.border}`}>
                <div className="icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h6 className="mt-3">{feature.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
