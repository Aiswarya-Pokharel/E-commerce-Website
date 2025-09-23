import React from "react";
import "../css/Terms.css";

const Terms = () => {
  return (
    <section className="terms">
      <div className="terms-container">
        <h1 className="terms-title">Terms and Conditions</h1>
        <p className="terms-intro">
          Welcome to Aarush Trade Center. By using our website or purchasing our
          products, you agree to the following Terms and Conditions. Please read
          them carefully before placing any orders.
        </p>

        <div className="terms-section">
          <h2>1. General</h2>
          <p>
            These Terms apply to all visitors, customers, and users of our
            website. We may update these Terms at any time, and your continued
            use of our site means you accept the latest version.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Products and Pricing</h2>
          <ul>
            <li>
              All prices are listed in Nepalese Rupees (NPR) and are subject to
              change without notice.
            </li>
            <li>
              We make every effort to display product colors and designs
              accurately, but slight variations may occur.
            </li>
            <li>
              Product availability is not guaranteed. If an item is out of stock
              after you place an order, we will notify you.
            </li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>3. Orders and Payments</h2>
          <ul>
            <li>
              Orders are confirmed only after successful payment or verification
              (for Cash on Delivery).
            </li>
            <li>
              Accepted payment methods include Cash on Delivery, eSewa, Khalti,
              and bank transfer.
            </li>
            <li>
              We reserve the right to cancel any order if fraud or misuse is
              suspected.
            </li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>4. Shipping and Delivery</h2>
          <ul>
            <li>
              We deliver within [insert delivery areas, e.g., Kathmandu Valley
              or nationwide].
            </li>
            <li>
              Delivery times are estimates and may vary due to location or
              courier delays.
            </li>
            <li>Shipping fees, if applicable, will be shown at checkout.</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>5. Returns and Exchanges</h2>
          <ul>
            <li>
              You may request a return or exchange within 7 days of receiving
              the product, provided the item is unused, unwashed, and in its
              original condition with tags.
            </li>
            <li>
              Items purchased on sale or discounts are not eligible for return
              or exchange.
            </li>
            <li>
              Return shipping costs are the responsibility of the customer
              unless the product was defective or incorrect.
            </li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>6. Privacy</h2>
          <p>
            Your personal information (name, phone number, address, etc.) will
            only be used for order processing and delivery. We do not share
            customer data with third parties without consent.
          </p>
        </div>

        <div className="terms-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            Aarush Trade Center is not responsible for delays caused by courier
            services, natural disasters, or circumstances beyond our control. We
            are not liable for indirect losses arising from the use of our
            products or website.
          </p>
        </div>

        <div className="terms-section">
          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website, including images, logos, and text, is
            the property of Aarush Trade Center. Copying, reproduction, or use
            of our materials without permission is strictly prohibited.
          </p>
        </div>

        <div className="terms-section contact">
          <h2>9. Contact Us</h2>
          <p>For any questions about these Terms, please contact us at:</p>
          <p>📍 Address: [Insert your shop address]</p>
          <p>📞 Phone: [Insert contact number]</p>
          <p>📧 Email: [Insert email address]</p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
