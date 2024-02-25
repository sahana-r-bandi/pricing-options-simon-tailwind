import { PricingPlans } from "@/components/pricing-plans";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight">
        Pricing plans for teams of all sizes
      </h2>
      <p className="mt-4 max-w-3xl text-lg">
        Choose an affordable plan that's packed with the best features for
        engaging your audience, creating customer loyalty, dirving sales.
      </p>
    </div>
    <PricingPlans></PricingPlans>
    </>
  );
}
