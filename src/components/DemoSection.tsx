import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

interface DemoExample {
  scenario: string;
  genericResponse: string;
  brandVoiceResponse: string;
}

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState<string>("customer-support");

  const demoExamples: DemoExample[] = [
    {
      scenario: "customer-support",
      genericResponse:
        "I apologize for the confusion with your recent order. According to our records, your order #12345 was shipped on June 15th and should arrive within 3-5 business days. If you haven't received it by June 22nd, please contact our support team for further assistance.",
      brandVoiceResponse:
        "We're truly sorry about the mix-up with your order! We've checked our system and can see your package (Order #12345) left our fulfillment center on June 15th. Based on our typical delivery times, you should see it at your doorstep within 3-5 business days. If it doesn't arrive by June 22nd, please reach out to our Customer Happiness team at support@yourbrand.com, and we'll make things right immediately!",
    },
    {
      scenario: "product-info",
      genericResponse:
        "The Pro Plan includes unlimited storage, priority support, and access to all premium features. It costs $29.99 per month or $299 annually, which saves you two months compared to the monthly subscription.",
      brandVoiceResponse:
        "Our Pro Plan is designed for growing teams like yours! You'll get unlimited cloud storage (seriously, no caps!), VIP support with 4-hour response times, and full access to our entire suite of collaboration tools including our new AI assistant. At just $29.99/month, or save 20% with our annual plan at $299/year. Many of our customers tell us the time-saving features alone pay for themselves within weeks!",
    },
    {
      scenario: "technical-docs",
      genericResponse:
        "To implement the API, you need to generate an API key in your dashboard, then use the provided SDK to make requests. The basic implementation requires initializing the client with your API key and making GET or POST requests to the appropriate endpoints.",
      brandVoiceResponse:
        "Ready to supercharge your app with our API? Here's how to get started in 3 simple steps:\n\n1. Generate your unique API key in your developer dashboard (Settings → API)\n2. Install our lightweight SDK: `npm install @brandvoice/sdk`\n3. Initialize with just two lines of code:\n\n```javascript\nconst bv = new BrandVoice('YOUR_API_KEY');\nawait bv.connect();\n```\n\nCheck out our [complete implementation guide](https://docs.example.com) for more examples and best practices. Need help? Our Developer Success team is available via live chat right from your dashboard!",
    },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const activeExample =
    demoExamples.find((example) => example.scenario === activeTab) ||
    demoExamples[0];

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            See the BrandVoice Difference
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Compare generic AI responses with BrandVoice-enhanced communication
            that captures your authentic brand personality.
          </p>
        </div>

        <Tabs
          defaultValue="customer-support"
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="customer-support">
                Customer Support
              </TabsTrigger>
              <TabsTrigger value="product-info">
                Product Information
              </TabsTrigger>
              <TabsTrigger value="technical-docs">
                Technical Documentation
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200 dark:border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Quote size={20} className="text-slate-400" />
                  Generic AI Response
                </CardTitle>
                <CardDescription>
                  Standard output from a general-purpose LLM
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="whitespace-pre-line text-slate-700 dark:text-slate-300">
                  {activeExample.genericResponse}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 dark:bg-primary/10 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Quote size={20} className="text-primary" />
                  BrandVoice Response
                </CardTitle>
                <CardDescription>
                  AI response enhanced with your brand's unique voice
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="whitespace-pre-line text-slate-700 dark:text-slate-300">
                  {activeExample.brandVoiceResponse}
                </p>
              </CardContent>
            </Card>
          </div>
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            Try BrandVoice Demo <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
