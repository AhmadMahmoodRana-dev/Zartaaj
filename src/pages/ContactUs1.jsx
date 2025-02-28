import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const ContactUs1 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white text-purple-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Zartaaj</h1>
          <p className="text-xl">
            Elevating beauty naturally with premium skincare solutions
          </p>
        </div>
      </div>
     {/* FAQ Section */}
     <section className="bg-white dark:bg-purple-700">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Are Zartaaj products suitable for all skin types?
                </h3>
                <p className="text-white">
                  Yes, our beauty creams and skincare products are formulated
                  with natural ingredients that cater to all skin types,
                  including sensitive skin. However, we recommend a patch test
                  before full application.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Are Zartaaj creams free from harmful chemicals?
                </h3>
                <p className="text-white">
                  Absolutely! Our products are free from parabens, sulfates,
                  and harsh chemicals, ensuring safe and gentle skincare for
                  daily use.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  How long does it take to see results?
                </h3>
                <p className="text-white">
                  Results may vary based on skin type and usage. However, most
                  customers notice visible improvements within 2 to 4 weeks of
                  regular use.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Can I use Zartaaj creams along with other skincare products?
                </h3>
                <p className="text-white">
                  Yes, Zartaaj products can be incorporated into your skincare
                  routine. However, avoid mixing with products containing
                  strong active ingredients without consulting a dermatologist.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Do you offer refunds or exchanges?
                </h3>
                <p className="text-white">
                  We have a customer-friendly return policy. If you experience
                  any issues, contact us within 7 days of receiving your order,
                  and we will be happy to assist you.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Is Zartaaj cruelty-free and vegan?
                </h3>
                <p className="text-white">
                  Yes! Zartaaj is 100% cruelty-free, and most of our products
                  are vegan-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContactUs1;
