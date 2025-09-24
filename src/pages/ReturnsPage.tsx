import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Returns & Refunds Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-emerald/10 p-6 rounded-lg border border-emerald/20">
              <h2 className="text-xl font-semibold text-emerald-dark mb-2">Easy Returns</h2>
              <p className="text-emerald-dark/80">
                We offer hassle-free returns within 30 days of delivery. Your satisfaction is our priority.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Return Window</h3>
                  <p className="text-muted-foreground">
                    Items can be returned within <strong>30 days</strong> of delivery date. 
                    Return requests made after this period will not be accepted.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Condition Requirements</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Items must be in original condition with all tags attached</li>
                    <li>No signs of wear, damage, or alteration</li>
                    <li>Original packaging must be included</li>
                    <li>Items should be free from odors, stains, or makeup</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Non-Returnable Items</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Customized or personalized items</li>
                    <li>Items worn for special occasions (with clear signs of use)</li>
                    <li>Undergarments and intimate wear</li>
                    <li>Sale items marked as "Final Sale"</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-medium mb-1">Initiate Return</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact our support team or use our online return portal
                  </p>
                </div>
                
                <div className="bg-card p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-medium mb-1">Pack Items</h3>
                  <p className="text-sm text-muted-foreground">
                    Pack items securely in original packaging with all tags
                  </p>
                </div>
                
                <div className="bg-card p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-medium mb-1">Ship Back</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our prepaid return label or arrange pickup
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Processing Time</h3>
                  <p className="text-muted-foreground">
                    Refunds are processed within <strong>5-7 business days</strong> after we receive 
                    and inspect the returned item(s).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Refund Method</h3>
                  <p className="text-muted-foreground">
                    Refunds will be credited back to the original payment method used for the purchase. 
                    For cash on delivery orders, we'll initiate a bank transfer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Shipping Costs</h3>
                  <p className="text-muted-foreground">
                    Original shipping charges are non-refundable. Return shipping is free for 
                    defective items or our error, otherwise customer bears the cost.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Exchange Policy</h2>
              <p className="text-muted-foreground mb-4">
                We offer exchanges for different sizes or colors subject to availability. 
                Exchange requests must be made within the same return window.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> If the new item costs more, you'll pay the difference. 
                  If it costs less, we'll refund the difference.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="bg-card p-6 rounded-lg">
                <p className="mb-2">For return requests or questions:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li><strong>Email:</strong> returns@kanchanfashion.com</li>
                  <li><strong>Phone:</strong> +91 98765 43210</li>
                  <li><strong>WhatsApp:</strong> +91 98765 43210</li>
                  <li><strong>Hours:</strong> Monday-Saturday, 10 AM - 7 PM IST</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReturnsPage;