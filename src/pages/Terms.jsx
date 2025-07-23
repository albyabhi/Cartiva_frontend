import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions & Privacy Policy</h1>

      <p className="mb-4">
        Welcome to <strong>Cartiva Deals</strong>. By accessing or using our website, Telegram bot, Pinterest channel, or any affiliated platform, you agree to both our Terms & Conditions and Privacy Policy. Please read them carefully before proceeding.
      </p>

      {/* Terms & Conditions Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Terms & Conditions</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Purpose</h3>
      <p className="mb-4">
        Cartiva Deals is a platform that curates and promotes handpicked products and limited-time deals available on <strong>Amazon.in</strong>. We share these offers through automated channels like Telegram and Pinterest to help users discover the best discounts.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Affiliate Disclosure</h3>
      <p className="mb-4">
        We participate in the Amazon Associates Program. When you purchase a product through our affiliate links, we may earn a small commission. This comes at no additional cost to you.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. No Warranty or Guarantee</h3>
      <p className="mb-4">
        While we strive to ensure accuracy, we do not guarantee the correctness, completeness, or availability of any deal or product. Prices and availability are subject to change by Amazon.in.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Use of Platform</h3>
      <p className="mb-4">
        You agree to use Cartiva Deals for lawful purposes only. Any misuse, exploitation, or attempt to harm the platform’s operation or reputation is strictly prohibited.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">5. External Links</h3>
      <p className="mb-4">
        Our content contains links to external sites (mainly Amazon.in). We are not responsible for their content, policies, or practices. Please review their terms and privacy policies before interacting with them.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">6. Changes to Terms</h3>
      <p className="mb-4">
        We may update these terms at any time. Revisions will be posted on this page. Your continued use of our services implies acceptance of any changes.
      </p>

      {/* Privacy Policy Section */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Privacy Policy</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h3>
      <p className="mb-4">
        We do not collect personal data such as names, emails, or payment details directly. However, third-party services like Telegram or Pinterest may collect basic interaction data or cookies as per their respective policies.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Affiliate Tracking</h3>
      <p className="mb-4">
        Our affiliate links may include tracking parameters used by Amazon to track purchases for commission purposes. These do not compromise your personal identity or security.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. Cookies & Analytics</h3>
      <p className="mb-4">
        We may use minimal cookies or analytic tools (e.g., link click count) to understand user behavior and improve our service. You can disable cookies via your browser settings.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Data Sharing</h3>
      <p className="mb-4">
        We do not sell or share any user data with third parties. Any data handled is strictly limited to affiliate tracking or platform improvement.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Policies</h3>
      <p className="mb-4">
        Our services depend on platforms like Amazon, Telegram, and Pinterest. We encourage users to review the respective privacy policies of these platforms for full transparency.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">6. Updates to Privacy Policy</h3>
      <p className="mb-4">
        This policy may change over time. Continued use of our services after changes indicates your acceptance of the revised policy.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Last updated: July 2025
      </p>
    </div>
  );
};

export default Terms;
