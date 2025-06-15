'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Users, 
  Briefcase, 
  Bot, 
  Mic, 
  FileText, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Menu,
  X,
  Play,
  Code,
  Building,
  MessageSquare,
  Globe,
  Target,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CareerWayLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jobBoardFeatures = [
    { icon: <Search className="w-5 h-5" />, title: "Smart Job Search", desc: "Find tech jobs with advanced filtering" },
    { icon: <Users className="w-5 h-5" />, title: "Direct Connections", desc: "Connect directly with hiring managers" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Free for All", desc: "100% free for both employers and candidates" }
  ];

  const aiAgentFeatures = [
    { icon: <Bot className="w-5 h-5" />, title: "Custom AI Agents", desc: "Create personalized interview assistants" },
    { icon: <Mic className="w-5 h-5" />, title: "Voice Conversations", desc: "Practice with real-time voice interactions" },
    { icon: <FileText className="w-5 h-5" />, title: "Detailed Analysis", desc: "Get transcripts and performance insights" }
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "Frontend Developer", content: "CareerWay's AI helped me practice for interviews. I landed my dream job at a tech startup!", rating: 5 },
    { name: "Ahmed Bekkai", role: "Hiring Manager", content: "Posting jobs is incredibly easy and we've found great candidates through the platform.", rating: 5 },
    { name: "Maria Rodriguez", role: "Full Stack Engineer", content: "The interview practice with AI agents boosted my confidence tremendously.", rating: 5 }
  ];

  const pricingPlans = [
    {
      name: "Job Board",
      price: "Free",
      description: "Perfect for job seekers and employers",
      features: ["Unlimited job browsing", "Direct employer contact", "Resume uploads", "Job alerts"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "AI Agents Pro",
      price: "2,999 DZD",
      period: "/month",
      description: "For serious interview preparation",
      features: ["Unlimited AI interviews", "Custom agent creation", "Detailed analytics", "Priority support"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "API Access",
      price: "1,000 DZD",
      period: "/100 calls",
      description: "Integrate AI agents into your product",
      features: ["REST API access", "Custom integrations", "Developer support", "SLA guarantee"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">CareerWay</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <Button>Get Started</Button>
            </div>

            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-primary">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary">Pricing</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary">About</a>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Career Platform
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Career Journey <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with top tech companies through our free job board, then master your interviews 
              with AI-powered practice sessions. The complete career platform for tech professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8">
                Explore Jobs
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Play className="w-5 h-5 mr-2" />
                Try AI Interview
              </Button>
            </div>
          </div>

          {/* Stats */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                  <div className="text-muted-foreground">Candidates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Two Powerful Platforms, One Career Goal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're seeking your next opportunity or preparing for interviews, 
              CareerWay has the tools you need to succeed.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs defaultValue="jobboard" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="jobboard">Job Board</TabsTrigger>
                <TabsTrigger value="aiagents">AI Agents</TabsTrigger>
              </TabsList>
              
              <div className="mt-12">
                <TabsContent value="jobboard">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="fade-in-up">
                      <Badge variant="outline" className="mb-6 text-green-600 border-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Live Now - 100% Free
                      </Badge>
                      <h3 className="text-3xl font-bold text-foreground mb-6">
                        Free Job Board for Tech Professionals
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8">
                        Connect with leading tech companies without any fees. Our platform makes it easy 
                        for employers to post opportunities and for candidates to find their perfect match.
                      </p>
                      <div className="space-y-4">
                        {jobBoardFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{feature.title}</h4>
                              <p className="text-muted-foreground">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="fade-in-up">
                      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-2xl">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <div className="flex items-center justify-between bg-primary-foreground/20 rounded-xl p-4">
                              <div>
                                <h4 className="font-semibold">Frontend Developer</h4>
                                <p className="text-primary-foreground/80">TechCorp • Remote</p>
                              </div>
                              <Badge variant="secondary">New</Badge>
                            </div>
                            <div className="flex items-center justify-between bg-primary-foreground/20 rounded-xl p-4">
                              <div>
                                <h4 className="font-semibold">Backend Engineer</h4>
                                <p className="text-primary-foreground/80">StartupXYZ • Hybrid</p>
                              </div>
                              <Badge variant="secondary">Featured</Badge>
                            </div>
                            <div className="flex items-center justify-between bg-primary-foreground/20 rounded-xl p-4">
                              <div>
                                <h4 className="font-semibold">DevOps Specialist</h4>
                                <p className="text-primary-foreground/80">CloudTech • On-site</p>
                              </div>
                              <Badge variant="secondary">Urgent</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="aiagents">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="fade-in-up">
                      <Badge variant="outline" className="mb-6 text-purple-600 border-purple-600">
                        <Bot className="w-4 h-4 mr-2" />
                        Beta - AI-Powered
                      </Badge>
                      <h3 className="text-3xl font-bold text-foreground mb-6">
                        AI Interview Assistant Suite
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8">
                        Practice interviews with custom AI agents, get real-time feedback, and build 
                        confidence before your actual interviews. Perfect your skills with unlimited practice.
                      </p>
                      <div className="space-y-4">
                        {aiAgentFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{feature.title}</h4>
                              <p className="text-muted-foreground">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="fade-in-up">
                      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-2xl">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <Card className="bg-primary-foreground/20 border-primary-foreground/30">
                              <CardContent className="p-4">
                                <div className="flex items-center space-x-3 mb-3">
                                  <Bot className="w-6 h-6" />
                                  <span className="font-semibold">AI Interviewer</span>
                                </div>
                                <p className="text-primary-foreground/90 mb-3">"Tell me about a challenging project you worked on..."</p>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                  <span className="text-sm text-primary-foreground/80">Listening...</span>
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="bg-primary-foreground/20 border-primary-foreground/30">
                              <CardContent className="p-4">
                                <h4 className="font-semibold mb-2">Session Analytics</h4>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span>Confidence Level</span>
                                    <span>87%</span>
                                  </div>
                                  <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                                    <div className="bg-green-400 h-2 rounded-full w-[87%]"></div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by Professionals Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our users say about their CareerWay experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="fade-in-up">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`transition-all hover:shadow-xl fade-in-up ${
                plan.popular ? 'border-primary relative shadow-lg' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-foreground to-foreground/90 text-background">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="fade-in-up">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Build with CareerWay API
                  </h2>
                  <p className="text-xl text-background/80 mb-8">
                    Integrate our AI agents into your products. Perfect for customer support, 
                    HR automation, and building intelligent conversational interfaces.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <Code className="w-6 h-6 text-primary" />
                      <span>REST API</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-6 h-6 text-primary" />
                      <span>99.9% Uptime</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      <span>Voice & Text</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-6 h-6 text-primary" />
                      <span>Custom Training</span>
                    </div>
                  </div>
                  <Button variant="secondary" size="lg">
                    View Documentation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                
                <div className="fade-in-up">
                  <Card className="bg-background/10 border-background/20">
                    <CardContent className="p-6">
                      <div className="text-sm text-background/60 mb-4">API Example</div>
                      <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST "https://api.careerway.dz/v1/agents" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_type": "interviewer",
    "instructions": "Act as a senior frontend developer...",
    "voice_enabled": true
  }'`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">CareerWay</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Connecting talent with opportunity through innovative technology and AI-powered solutions.
              </p>
              <div className="text-sm text-muted-foreground">
                Made with ❤️ in Algeria
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Job Board</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Agents</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 CareerWay. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default CareerWayLanding;