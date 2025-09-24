import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Clock, MapPin, Package, Shield, RefreshCw, AlertCircle, CheckCircle } from "lucide-react";

const ShippingInfoPage = () => {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      duration: "5-7 business days",
      price: "₹99",
      freeThreshold: "Free on orders above ₹999",
      icon: <Truck className="w-6 h-6" />,
      description: "Regular delivery to most locations across India"
    },
    {
      name: "Express Shipping",
      duration: "2-3 business days",
      price: "₹199",
      freeThreshold: "Free on orders above ₹1999",
      icon: <Clock className="w-6 h-6" />,
      description: "Fast delivery for urgent orders"
    },
    {
      name: "Same Day Delivery",
      duration: "Same day",
      price: "₹299",
      freeThreshold: "Available in select cities",
      icon: <Package className="w-6 h-6" />,
      description: "Order before 2 PM for same day delivery (Mumbai, Delhi, Bangalore)"
    },
    {
      name: "International Shipping",
      duration: "7-14 business days",
      price: "₹999",
      freeThreshold: "Free on orders above ₹4999",
      icon: <MapPin className="w-6 h-6" />,
      description: "Worldwide delivery to 50+ countries"
    }
  ];

  const deliveryAreas = [
    {
      region: "Metro Cities",
      cities: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune"],
      deliveryTime: "1-3 days",
      color: "bg-green-100 text-green-800"
    },
    {
      region: "Tier 1 Cities",
      cities: ["Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Indore", "Bhopal", "Kochi"],
      deliveryTime: "3-5 days",
      color: "bg-blue-100 text-blue-800"
    },
    {
      region: "Tier 2 Cities",
      cities: ["Vadodara", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Sangli", "Satara"],
      deliveryTime: "5-7 days",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      region: "Other Locations",
      cities: ["Rest of India", "Remote areas", "Hilly regions"],
      deliveryTime: "7-10 days",
      color: "bg-gray-100 text-gray-800"
    }
  ];

  const trackingSteps = [
    {
      step: 1,
      title: "Order Confirmed",
      description: "Your order has been received and confirmed",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      step: 2,
      title: "Processing",
      description: "Your order is being prepared for shipment",
      icon: <Package className="w-5 h-5 text-blue-500" />
    },
    {
      step: 3,
      title: "Shipped",
      description: "Your order has been dispatched",
      icon: <Truck className="w-5 h-5 text-purple-500" />
    },
    {
      step: 4,
      title: "Out for Delivery",
      description: "Your order is on its way to you",
      icon: <Clock className="w-5 h-5 text-orange-500" />
    },
    {
      step: 5,
      title: "Delivered",
      description: "Your order has been successfully delivered",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    }
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking number sent to your email/SMS. You can also track it in your account dashboard under 'My Orders'."
    },
    {
      question: "What if I'm not available during delivery?",
      answer: "Our delivery partner will attempt delivery 3 times. If unsuccessful, the package will be returned to our warehouse. You can reschedule delivery or pick it up from the nearest collection point."
    },
    {
      question: "Do you ship to international locations?",
      answer: "Yes, we ship to 50+ countries worldwide. International shipping takes 7-14 business days and may be subject to customs duties and taxes."
    },
    {
      question: "Can I change my delivery address after placing an order?",
      answer: "You can change your delivery address within 2 hours of placing the order by contacting our customer support. After that, changes may not be possible if the order is already in processing."
    },
    {
      question: "What if my package is damaged during shipping?",
      answer: "We take full responsibility for any damage during shipping. Please contact us immediately with photos of the damaged package and we'll arrange for a replacement or refund."
    },
    {
      question: "Is there a weight limit for shipping?",
      answer: "Standard shipping has a weight limit of 5kg per package. For heavier items, we may use specialized shipping services with additional charges."
    }
  ];

  const policies = [
    {
      title: "Free Shipping Policy",
      description: "Free shipping is available on orders above ₹999 for domestic delivery and ₹4999 for international delivery. Free shipping applies to standard shipping only.",
      icon: <Shield className="w-6 h-6 text-green-500" />
    },
    {
      title: "Return Shipping",
      description: "We provide free return shipping for defective or wrong items. For other returns, return shipping charges will be deducted from your refund amount.",
      icon: <RefreshCw className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Insurance Coverage",
      description: "All shipments are insured up to ₹50,000. For high-value items, additional insurance can be purchased at checkout.",
      icon: <Shield className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon to-emerald text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Information</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Fast, reliable, and secure delivery to your doorstep across India and worldwide
          </p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shipping Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {option.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{option.price}</div>
                  <div className="text-sm text-muted-foreground mb-4">{option.duration}</div>
                  <Badge variant="outline" className="text-xs">
                    {option.freeThreshold}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Delivery Areas & Timeframes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{area.region}</CardTitle>
                    <Badge className={area.color}>
                      {area.deliveryTime}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {area.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="text-sm text-muted-foreground">
                        • {city}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Tracking */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Order Tracking</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-32">{step.description}</p>
                  {index < trackingSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-muted -z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Policies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shipping Policies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {policy.icon}
                    <CardTitle className="text-lg">{policy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {policy.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
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
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    {faq.question}
                  </CardTitle>
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
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Shipping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help with any shipping questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Track Your Order
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingInfoPage;
