import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Users, TrendingUp, Star, ArrowRight, Copy, ExternalLink } from "lucide-react";

const AffiliateProgramPage = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "High Commission Rates",
      description: "Earn up to 15% commission on every sale you refer to our store"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Easy Referral Process",
      description: "Simple link sharing and tracking system for all your referrals"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Real-time Analytics",
      description: "Track your performance with detailed analytics and reporting"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Exclusive Perks",
      description: "Get early access to new collections and special affiliate-only discounts"
    }
  ];

  const commissionTiers = [
    {
      tier: "Starter",
      commission: "5%",
      requirements: "0-10 sales",
      color: "bg-blue-100 text-blue-800"
    },
    {
      tier: "Rising",
      commission: "8%",
      requirements: "11-50 sales",
      color: "bg-green-100 text-green-800"
    },
    {
      tier: "Pro",
      commission: "12%",
      requirements: "51-100 sales",
      color: "bg-purple-100 text-purple-800"
    },
    {
      tier: "Elite",
      commission: "15%",
      requirements: "100+ sales",
      color: "bg-gold-100 text-gold-800"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Sign Up",
      description: "Create your affiliate account and get approved within 24 hours"
    },
    {
      step: 2,
      title: "Get Your Links",
      description: "Access your unique affiliate links and promotional materials"
    },
    {
      step: 3,
      title: "Start Promoting",
      description: "Share your links on social media, blogs, or any platform you prefer"
    },
    {
      step: 4,
      title: "Earn Commissions",
      description: "Get paid monthly for every sale you refer to our store"
    }
  ];

  const faqs = [
    {
      question: "How do I join the affiliate program?",
      answer: "Simply fill out our application form with your details and social media presence. We review applications within 24 hours and notify you of approval status."
    },
    {
      question: "What commission rate will I earn?",
      answer: "Commission rates start at 5% for new affiliates and can go up to 15% based on your performance tier. The more sales you generate, the higher your commission rate becomes."
    },
    {
      question: "How often do I get paid?",
      answer: "We process affiliate payments monthly, typically by the 15th of each month for the previous month's earnings. Minimum payout is ₹500."
    },
    {
      question: "Can I promote on social media?",
      answer: "Absolutely! We encourage promotion on all social media platforms including Instagram, Facebook, YouTube, TikTok, and personal blogs."
    },
    {
      question: "Are there any restrictions on promotion?",
      answer: "We only ask that you promote our products honestly and follow platform guidelines. You cannot use misleading claims or spam tactics."
    },
    {
      question: "How do I track my performance?",
      answer: "You'll have access to a comprehensive dashboard showing clicks, conversions, earnings, and detailed analytics for all your promotional activities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon to-emerald text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliate Program</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join our affiliate program and earn money by promoting our beautiful Indian fashion collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Our Affiliate Program?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Commission Tiers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionTiers.map((tier, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className={`w-fit mx-auto ${tier.color}`}>
                    {tier.tier}
                  </Badge>
                  <CardTitle className="text-3xl text-primary">{tier.commission}</CardTitle>
                  <CardDescription>Commission Rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tier.requirements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful affiliates who are already earning with our program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Apply to Join
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Terms & Conditions
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our affiliate team is here to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
            <Button variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Download Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateProgramPage;
