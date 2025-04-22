import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, BookOpen, RefreshCw } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string[];
}

const Feature = (
  { icon, title, problem, solution }: FeatureProps = {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Feature Title",
    problem: "Problem description goes here.",
    solution: ["Solution point 1", "Solution point 2"],
  },
) => {
  return (
    <Card className="h-full bg-white">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mt-2">
          <span className="text-destructive font-medium">Problem:</span>{" "}
          {problem}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <p className="font-medium text-primary mb-2">
            BrandVoice solves it by:
          </p>
          <ul className="space-y-2">
            {solution.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const FeatureSection = () => {
  const features: FeatureProps[] = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Models aren't trained on your data",
      problem:
        "General-purpose LLMs respond with broad knowledge — but they don't know your brand, product, or tone.",
      solution: [
        "Using retrieval-augmented generation (RAG) to dynamically pull from your own content — websites, docs, GitHub, etc.",
        "Delivering responses tailored to your brand's voice, values, and facts — without retraining the model.",
      ],
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "LLMs don't provide sources or references",
      problem:
        "Generic responses lack traceability, which creates trust and compliance issues.",
      solution: [
        "Citing exact source links and document titles in every response.",
        "Letting users verify where answers come from — crucial for internal knowledge bases, regulated industries, or customer-facing tools.",
      ],
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Your content changes, but the LLM doesn't",
      problem:
        "Static models can't reflect updates in products, policies, or support docs.",
      solution: [
        "Continuously syncing with your live content (site, CMS, code, etc.).",
        "Ensuring the AI is always up-to-date, without manual retraining or versioning delays.",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problems BrandVoice Solves
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BrandVoice democratizes AI by making advanced retrieval-augmented
            generation (RAG) accessible to any team — no need for expensive
            infrastructure, in-house AI experts, or custom engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
