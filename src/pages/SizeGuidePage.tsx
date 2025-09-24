import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SizeGuidePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Size Guide</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">How to Measure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Bust/Chest</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure around the fullest part of your bust/chest with arms down
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Waist</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure around the narrowest part of your waist
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Hips</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure around the fullest part of your hips
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Length</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure from shoulder to desired hemline
                  </p>
                </div>
              </div>
            </div>

            {/* Blouses & Tops Size Chart */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Blouses & Tops</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Size</th>
                      <th className="border border-border p-3 text-left">Bust (inches)</th>
                      <th className="border border-border p-3 text-left">Waist (inches)</th>
                      <th className="border border-border p-3 text-left">Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">XS</td>
                      <td className="border border-border p-3">32-34</td>
                      <td className="border border-border p-3">26-28</td>
                      <td className="border border-border p-3">22-24</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">S</td>
                      <td className="border border-border p-3">34-36</td>
                      <td className="border border-border p-3">28-30</td>
                      <td className="border border-border p-3">23-25</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">M</td>
                      <td className="border border-border p-3">36-38</td>
                      <td className="border border-border p-3">30-32</td>
                      <td className="border border-border p-3">24-26</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">L</td>
                      <td className="border border-border p-3">38-40</td>
                      <td className="border border-border p-3">32-34</td>
                      <td className="border border-border p-3">25-27</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">XL</td>
                      <td className="border border-border p-3">40-42</td>
                      <td className="border border-border p-3">34-36</td>
                      <td className="border border-border p-3">26-28</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">XXL</td>
                      <td className="border border-border p-3">42-44</td>
                      <td className="border border-border p-3">36-38</td>
                      <td className="border border-border p-3">27-29</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Lehenga Size Chart */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Lehengas</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Size</th>
                      <th className="border border-border p-3 text-left">Bust (inches)</th>
                      <th className="border border-border p-3 text-left">Waist (inches)</th>
                      <th className="border border-border p-3 text-left">Hip (inches)</th>
                      <th className="border border-border p-3 text-left">Skirt Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">XS</td>
                      <td className="border border-border p-3">32-34</td>
                      <td className="border border-border p-3">26-28</td>
                      <td className="border border-border p-3">34-36</td>
                      <td className="border border-border p-3">40-42</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">S</td>
                      <td className="border border-border p-3">34-36</td>
                      <td className="border border-border p-3">28-30</td>
                      <td className="border border-border p-3">36-38</td>
                      <td className="border border-border p-3">40-42</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">M</td>
                      <td className="border border-border p-3">36-38</td>
                      <td className="border border-border p-3">30-32</td>
                      <td className="border border-border p-3">38-40</td>
                      <td className="border border-border p-3">40-42</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">L</td>
                      <td className="border border-border p-3">38-40</td>
                      <td className="border border-border p-3">32-34</td>
                      <td className="border border-border p-3">40-42</td>
                      <td className="border border-border p-3">40-42</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">XL</td>
                      <td className="border border-border p-3">40-42</td>
                      <td className="border border-border p-3">34-36</td>
                      <td className="border border-border p-3">42-44</td>
                      <td className="border border-border p-3">40-42</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Saree Blouse Chart */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Saree Blouses</h2>
              <div className="bg-card p-6 rounded-lg">
                <p className="text-muted-foreground mb-4">
                  Standard saree blouse measurements. We also offer custom stitching for perfect fit.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Size 32:</span>
                    <span className="text-muted-foreground"> 32" Bust</span>
                  </div>
                  <div>
                    <span className="font-medium">Size 34:</span>
                    <span className="text-muted-foreground"> 34" Bust</span>
                  </div>
                  <div>
                    <span className="font-medium">Size 36:</span>
                    <span className="text-muted-foreground"> 36" Bust</span>
                  </div>
                  <div>
                    <span className="font-medium">Size 38:</span>
                    <span className="text-muted-foreground"> 38" Bust</span>
                  </div>
                  <div>
                    <span className="font-medium">Size 40:</span>
                    <span className="text-muted-foreground"> 40" Bust</span>
                  </div>
                  <div>
                    <span className="font-medium">Size 42:</span>
                    <span className="text-muted-foreground"> 42" Bust</span>
                  </div>
                  <div>
                    <span className="font-medium">Size 44:</span>
                    <span className="text-muted-foreground"> 44" Bust</span>
                  </div>
                  <div>
                    <span className="font-medium">Size 46:</span>
                    <span className="text-muted-foreground"> 46" Bust</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Helpful Tips */}
            <section className="bg-emerald/10 p-6 rounded-lg border border-emerald/20">
              <h2 className="text-xl font-semibold text-emerald-dark mb-4">Helpful Tips</h2>
              <ul className="space-y-2 text-emerald-dark/80">
                <li>• Measure over your undergarments for accuracy</li>
                <li>• Use a flexible tape measure and keep it parallel to the floor</li>
                <li>• When in doubt, choose the larger size</li>
                <li>• Contact our customer service for custom sizing assistance</li>
                <li>• Our expert tailors can provide alterations if needed</li>
              </ul>
            </section>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                Our sizing experts are here to help you find the perfect fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm">
                  <strong>WhatsApp:</strong> +91 98765 43210
                </div>
                <div className="text-sm">
                  <strong>Email:</strong> sizing@kanchanfashion.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuidePage;