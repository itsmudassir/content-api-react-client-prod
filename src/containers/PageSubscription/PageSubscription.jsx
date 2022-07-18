import LayoutPage from "../../components/LayoutPage/LayoutPage";
import { CheckIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import { useHistory } from "react-router-dom";

const pricings = [
  {
    isPopular: false,
    name: "Starter",
    pricing: "$5",
    per: "/mo",
    features: ["Article Search", "Article Sharing", "Follow Curated Topics"]
  },
  {
    isPopular: true,
    name: "Basic",
    pricing: "$10",
    per: "/mo",
    features: [
      "Everything in Starter",
      "Make Custom Topic",
      "Insights for Curated Topics",
      "Chat Support",
    ]
  },
  {
    isPopular: false,
    name: "Plus",
    pricing: "$15",
    per: "/mo",
    features: [
      "Everything in Basic",
      "Insights for any search term",
      "Advanced Analytics",
      "Premium Support",
    ]
  },
];

const PageSubscription = ({ className = "" }) => {
  const history = useHistory();
  const renderPricingItem = (pricing, index) => {
    return (
      <div
        key={index}
        className={`h-full relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden ${
          pricing.isPopular
            ? "border-primary-500"
            : "border-neutral-100 dark:border-neutral-700"
        }`}
      >
        {pricing.isPopular && (
          <span className="bg-primary-500 text-white px-3 py-1 tracking-widest text-xs absolute right-3 top-3 rounded-full z-10">
            POPULAR
          </span>
        )}
        <div className="mb-8">
          <h3 className="block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
            {pricing.name}
          </h3>
          <h2 className="text-5xl leading-none flex items-center">
            <span>{pricing.pricing}</span>
            <span className="text-lg ml-1 font-normal text-neutral-500">
              {pricing.per}
            </span>
          </h2>
        </div>
        <nav className="space-y-4 mb-8">
          {pricing.features.map((item, index) => (
            <li className="flex items-center" key={index}>
              <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                <CheckIcon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">
                {item}
              </span>
            </li>
          ))}
        </nav>
        <div className="flex flex-col mt-auto">
          {pricing.isPopular ? (
            <ButtonPrimary onClick={() => history.push(`register`)}>
              Start your free trial
            </ButtonPrimary>
          ) : (
            <ButtonSecondary onClick={() => history.push(`register`)}>
              <span className="font-medium">Start your free trial</span>
            </ButtonSecondary>
          )}
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
            {pricing.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-PageSubcription ${className}`}
      data-nc-id="PageSubcription"
    >
      <LayoutPage
        subHeading="Pricing to fit the needs of any companie size."
        headingEmoji="💎"
        heading="Subscription"
        className=""
        childrenClassName="shadow-none"
      >
        <p className="text-xl md:text-3xl font-semibold text-center pt-10 pb-16">
          Pricing
        </p>
        <section className="text-neutral-600 text-sm md:text-base overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-5 xl:gap-8">
            {pricings.map(renderPricingItem)}
          </div>
        </section>
      </LayoutPage>
    </div>
  );
};

export default PageSubscription;
