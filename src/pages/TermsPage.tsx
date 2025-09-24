import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-muted-foreground text-center">
              Last updated: December 2024
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Aarvi Fashion website and services, you accept and agree 
                to be bound by the terms and provision of this agreement. If you do not agree to 
                abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Permission is granted to temporarily download one copy of the materials on 
                  Aarvi Fashion's website for personal, non-commercial transitory viewing only.
                </p>
                <div>
                  <h3 className="text-lg font-medium mb-2">This license shall automatically terminate if you violate any of these restrictions:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for commercial purposes or public display</li>
                    <li>Attempt to reverse engineer any software on the website</li>
                    <li>Remove any copyright or proprietary notations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We strive to provide accurate product descriptions, prices, and availability. 
                  However, we do not warrant that product descriptions are accurate, complete, 
                  reliable, current, or error-free.
                </p>
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Please Note:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                    <li>Colors may vary slightly due to screen settings</li>
                    <li>Fabric and design details are representative</li>
                    <li>Handcrafted items may have minor variations</li>
                    <li>Prices are subject to change without notice</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Orders and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Order Acceptance</h3>
                  <p className="text-muted-foreground">
                    Your receipt of an electronic order confirmation does not signify our acceptance 
                    of your order. We reserve the right to accept or decline your order for any reason.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Payment Terms</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>All prices are in Indian Rupees (INR)</li>
                    <li>Payment is due at the time of order</li>
                    <li>We accept major credit cards, debit cards, UPI, and COD</li>
                    <li>Additional charges may apply for international orders</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping and Delivery</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Delivery Timeline</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Standard delivery: 7-10 business days</li>
                    <li>Express delivery: 3-5 business days</li>
                    <li>International delivery: 10-21 business days</li>
                    <li>Custom orders may take additional time</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Risk of Loss</h3>
                  <p className="text-muted-foreground">
                    All items purchased are made pursuant to a shipment contract. Risk of loss 
                    and title for items pass to you upon delivery to the carrier.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Returns and Exchanges</h2>
              <p className="text-muted-foreground mb-4">
                Our return and exchange policy is detailed in our Returns & Refunds page. 
                By making a purchase, you agree to these policies.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Key Points:</strong> 30-day return window, items must be in original condition, 
                  custom items are non-returnable.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  When you create an account with us, you must provide accurate and complete information. 
                  You are responsible for maintaining the confidentiality of your account.
                </p>
                <div>
                  <h3 className="text-lg font-medium mb-2">Account Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Maintain secure login credentials</li>
                    <li>Notify us immediately of unauthorized use</li>
                    <li>Provide accurate personal information</li>
                    <li>Use the account only for lawful purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                The content, design, graphics, and other materials on this website are protected 
                by intellectual property rights. You may not use any content from this website 
                without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-4">
                  In no event shall Aarvi Fashion be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including loss of profits, data, 
                  or use, incurred by you or any third party.
                </p>
                <p className="text-sm text-muted-foreground">
                  Some jurisdictions do not allow the exclusion or limitation of liability 
                  for consequential or incidental damages, so the above limitation may not apply to you.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the 
                laws of India. Any disputes shall be subject to the exclusive jurisdiction of 
                the courts in Mumbai, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to update these Terms of Service at any time. Changes will 
                be effective immediately upon posting on this page. Your continued use of the 
                service constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="bg-card p-6 rounded-lg">
                <p className="mb-4">
                  If you have any questions about these Terms of Service:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li><strong>Email:</strong> legal@kanchanfashion.com</li>
                  <li><strong>Phone:</strong> +91 98765 43210</li>
                  <li><strong>Address:</strong> 123 Fashion Street, Mumbai, Maharashtra 400001, India</li>
                </ul>
              </div>
            </section>

            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                By using our website and services, you acknowledge that you have read and 
                understood these Terms of Service and agree to be bound by them.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsPage;