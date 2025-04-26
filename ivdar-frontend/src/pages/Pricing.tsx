export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Start with our free plan and upgrade when you're ready.
        </p>
      </div>

      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
        <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Free</h3>
            <p className="mt-4 text-sm text-gray-500">
              Basic features to get started
            </p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </p>
          </div>
        </div>

        <div className="border border-primary rounded-lg shadow-sm divide-y divide-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Pro</h3>
            <p className="mt-4 text-sm text-gray-500">
              Advanced features for professionals
            </p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">$5</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
            <p className="mt-4 text-sm text-gray-500">
              Custom solutions for large teams
            </p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-gray-900">Custom</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 