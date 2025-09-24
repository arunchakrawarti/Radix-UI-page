"use client";
import React, { useState } from "react";


const IconCircle = ({ src, alt }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm">
    <img src={src} alt={alt} className="w-6 h-6 object-contain" />
  </div>
);

export default function TechHero() {
  const tabs = [
    "Emerging Tech",
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "Frameworks",
    "Cloud",
    "DevOps",
    "Platforms",
    "Ecommerce",
  ];

  // Har tab ke liye labels + logos
  const tabPills = {
    "Emerging Tech": [
      { img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png", label: "AI (Gen AI)" },
      { img: "https://cdn-icons-png.flaticon.com/512/2721/2721299.png", label: "Machine Learning" },
      { img: "https://cdn-icons-png.flaticon.com/512/4727/4727424.png", label: "Big Data" },
      { img: "https://cdn-icons-png.flaticon.com/512/4144/4144554.png", label: "Cloud" },
    ],
    Frontend: [
      { img: "https://cdn.worldvectorlogo.com/logos/react-2.svg", label: "React" },
      { img: "https://cdn.worldvectorlogo.com/logos/vue-9.svg", label: "Vue.js" },
      { img: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg", label: "Angular" },
      { img: "https://cdn.worldvectorlogo.com/logos/next-js.svg", label: "Next.js" },
    ],
    Backend: [
      { img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", label: "Node.js" },
      { img: "https://cdn.worldvectorlogo.com/logos/express-109.svg", label: "Express.js" },
      { img: "https://cdn.worldvectorlogo.com/logos/django.svg", label: "Django" },
      { img: "https://cdn.worldvectorlogo.com/logos/spring-3.svg", label: "Spring Boot" },
    ],
    Mobile: [
      { img: "https://cdn.worldvectorlogo.com/logos/react-2.svg", label: "React Native" },
      { img: "https://cdn.worldvectorlogo.com/logos/flutter.svg", label: "Flutter" },
      { img: "https://cdn.worldvectorlogo.com/logos/swift-15.svg", label: "Swift" },
      { img: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg", label: "Kotlin" },
    ],
    
    Database: [
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", label: "MySQL" },
  { img: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", label: "PostgreSQL" },
  { img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", label: "MongoDB" },
  { img: "https://cdn.worldvectorlogo.com/logos/redis.svg", label: "Redis" },
],

    Frameworks: [
      { img: "https://cdn.worldvectorlogo.com/logos/next-js.svg", label: "Next.js" },
      { img: "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg", label: "Nuxt.js" },
      { img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", label: "Laravel" },
      { img: "https://cdn.worldvectorlogo.com/logos/rails-1.svg", label: "Ruby on Rails" },
    ],
    Cloud: [
      { img: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", label: "AWS" },
      { img: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg", label: "Azure" },
      { img: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", label: "Google Cloud" },
      { img: "https://cdn.worldvectorlogo.com/logos/digitalocean.svg", label: "DigitalOcean" },
    ],

    DevOps: [
  { img: "https://cdn.worldvectorlogo.com/logos/docker.svg", label: "Docker" },
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg", label: "Kubernetes" },
  { img: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg", label: "Jenkins" },
  { img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", label: "GitHub Actions" },
],

    Platforms: [
      { img: "https://cdn.worldvectorlogo.com/logos/shopify.svg", label: "Shopify" },
      { img: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg", label: "WordPress" },
      { img: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg", label: "Salesforce" },
      { img: "https://cdn.worldvectorlogo.com/logos/heroku-4.svg", label: "Heroku" },
    ],

    Ecommerce: [
  { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/magento/magento-original.svg", label: "Magento" },
  { img: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg", label: "WooCommerce" },
  { img: "https://cdn.iconscout.com/icon/free/png-256/free-bigcommerce-3521271-2944917.png", label: "BigCommerce" },
  { img: "https://cdn.worldvectorlogo.com/logos/shopify.svg", label: "Shopify Plus" },
],

  };

  const [activeTab, setActiveTab] = useState("Emerging Tech");

  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-center text-gray-800">
          Raising Product Innovation with New-age Tech
        </h1>

        {/* Tabs */}
        <nav className="mt-6">
          <div className="border-b border-gray-200">
            <ul className="flex flex-wrap justify-center  gap-6 text-sm md:text-base font-medium">
              {tabs.map((t) => (
                <li key={t} className="py-4 ">
                  <button
                    onClick={() => setActiveTab(t)}
                    className={
                      "relative cursor-pointer  pb-2 focus:outline-none transition-colors " +
                      (activeTab === t
                        ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-blue-300"
                        : "text-gray-700 hover:text-gray-900")
                    }
                  >
                    {t}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Pills */}
        <div className="mt-6 flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 px-4 md:px-8">
            {(tabPills[activeTab] || []).map((p) => (
              <button
                key={p.label}
                className="flex flex-row items-center gap-3 px-5 py-3 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-150 bg-white border-gray-200"
              >
                <IconCircle src={p.img} alt={p.label} />
                <span className="text-sm md:text-base bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
