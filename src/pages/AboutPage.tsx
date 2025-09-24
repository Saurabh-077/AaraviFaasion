import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About Aarvi Fashion</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a passion for preserving and celebrating Indian heritage through fashion, 
                  Aarvi Fashion has been a trusted name in ethnic wear for over a decade. We believe 
                  that every woman deserves to feel beautiful and confident in authentic Indian attire.
                </p>
              </div>
              <div className="bg-cream/50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To make premium Indian ethnic wear accessible to women worldwide while maintaining 
                  the highest standards of quality and authenticity.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Why Choose Aarvi Fashion?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Authentic Designs</h3>
                  <p className="text-muted-foreground text-sm">
                    Traditional patterns and motifs crafted by skilled artisans
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground text-sm">
                    Only the finest fabrics and materials in every piece
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <h3 className="font-semibold mb-2">Global Delivery</h3>
                  <p className="text-muted-foreground text-sm">
                    Bringing Indian fashion to customers worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to sustainable fashion practices, supporting local artisans, 
                and providing exceptional customer service. Every piece in our collection is 
                carefully curated to ensure it meets our high standards for quality, comfort, and style.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;