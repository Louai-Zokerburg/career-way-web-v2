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
  MessageSquare,
  Globe,
  Target,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Logo from "@/public/logo.png";
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import Image from 'next/image';

const CareerWayLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
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

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu
  };

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
      price: "$10",
      period: "/month",
      description: "For serious interview preparation",
      features: ["Unlimited AI interviews", "Custom agent creation", "Detailed analytics", "Priority support"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "API Access",
      price: "$1",
      period: "/100 calls",
      description: "Integrate AI agents into your product",
      features: ["REST API access", "Custom integrations", "Developer support", "SLA guarantee"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-700/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

 <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Careerway Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">
            <span className="text-primary">areerway</span>
          </h1>
        </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <Link href="https://career.louai.site" className={buttonVariants({ variant: "default", size: "sm" })}>
                Get Started
              </Link>
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
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-slate-700/50">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
              >
                About
              </button>
              <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border-0 animate-bounce">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              AI-Powered Career Platform
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-800 dark:text-white">Your Career Journey</span>
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Connect with top tech companies through our free job board, then master your interviews 
              with AI-powered practice sessions. The complete career platform for tech professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="https://career.louai.site" className={buttonVariants({ variant: "default", size: "lg" })}>
                Explore Jobs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-950 transition-all">
                <Play className="w-5 h-5 mr-2" />
                Try AI Interview
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 mx-auto text-gray-400" />
            </div>
          </div>

          {/* Stats */}
          <Card className="shadow-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Active Jobs</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">1,200+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Candidates</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">150+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Companies</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">95%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Two Powerful Platforms, One Career Goal
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're seeking your next opportunity or preparing for interviews, 
              CareerWay has the tools you need to succeed.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs defaultValue="jobboard" className="w-full max-w-5xl">
              <TabsList className="grid w-full grid-cols-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl">
                <TabsTrigger value="jobboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white">Job Board</TabsTrigger>
                <TabsTrigger value="aiagents" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white">AI Agents</TabsTrigger>
              </TabsList>
              
              <div className="mt-12 bg-blue-50">
                <TabsContent value="jobboard">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="fade-in-up">
                      <Badge variant="outline" className="mb-6 text-green-600 border-green-600 bg-green-50 dark:bg-green-950">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Live Now - 100% Free
                      </Badge>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-green-600 to-primary bg-clip-text text-transparent">
                          Free Job Board for Tech Professionals
                        </span>
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        Connect with leading tech companies without any fees. Our platform makes it easy 
                        for employers to post opportunities and for candidates to find their perfect match.
                      </p>
                      <div className="space-y-6">
                        {jobBoardFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-4 group">
                            <div className="bg-gradient-to-br from-primary to-purple-600 p-3 rounded-xl text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 dark:text-white text-lg">{feature.title}</h4>
                              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="fade-in-up">
                      <Card className="bg-gradient-to-br from-primary to-purple-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all border-0">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
                              <div>
                                <h4 className="font-semibold text-lg">Frontend Developer</h4>
                                <p className="text-white/80">TechCorp • Remote</p>
                              </div>
                              <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                            </div>
                            <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
                              <div>
                                <h4 className="font-semibold text-lg">Backend Engineer</h4>
                                <p className="text-white/80">StartupXYZ • Hybrid</p>
                              </div>
                              <Badge className="bg-orange-500 hover:bg-orange-600">Featured</Badge>
                            </div>
                            <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
                              <div>
                                <h4 className="font-semibold text-lg">DevOps Specialist</h4>
                                <p className="text-white/80">CloudTech • On-site</p>
                              </div>
                              <Badge className="bg-red-500 hover:bg-red-600">Urgent</Badge>
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
                      <Badge variant="outline" className="mb-6 text-purple-600 border-purple-600 bg-purple-50 dark:bg-purple-950">
                        <Bot className="w-4 h-4 mr-2" />
                        Beta - AI-Powered
                      </Badge>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          AI Interview Assistant Suite
                        </span>
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        Practice interviews with custom AI agents, get real-time feedback, and build 
                        confidence before your actual interviews. Perfect your skills with unlimited practice.
                      </p>
                      <div className="space-y-6">
                        {aiAgentFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-4 group">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 dark:text-white text-lg">{feature.title}</h4>
                              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="fade-in-up">
                      <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all border-0">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all">
                              <CardContent className="p-4">
                                <div className="flex items-center space-x-3 mb-3">
                                  <Bot className="w-6 h-6" />
                                  <span className="font-semibold">AI Interviewer</span>
                                </div>
                                <p className="text-white/90 mb-3">"Tell me about a challenging project you worked on..."</p>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                  <span className="text-sm text-white/80">Listening...</span>
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all">
                              <CardContent className="p-4">
                                <h4 className="font-semibold mb-2">Session Analytics</h4>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span>Confidence Level</span>
                                    <span>87%</span>
                                  </div>
                                  <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-green-400 h-2 rounded-full w-[87%] animate-pulse"></div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Loved by Professionals Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what our users say about their CareerWay experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="fade-in-up shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the plan that fits your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`transition-all hover:shadow-2xl fade-in-up transform hover:scale-105 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-0 ${
                plan.popular ? 'relative shadow-2xl ring-2 ring-primary' : 'shadow-xl'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full transition-all ${
                      plan.popular 
                        ? "bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105" 
                        : "border-2 hover:bg-blue-50 dark:hover:bg-blue-950"
                    }`}
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
          <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="fade-in-up">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                      Build with CareerWay API
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Integrate our AI agents into your products. Perfect for customer support, 
                    HR automation, and building intelligent conversational interfaces.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3 group">
                      <Code className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-medium">REST API</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <Globe className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">99.9% Uptime</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <MessageSquare className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Voice & Text</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <Target className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Custom Training</span>
                    </div>
                  </div>
                  <Button className="bg-white text-slate-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all px-8 py-3 text-lg font-semibold">
                    View Documentation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                
                <div className="fade-in-up">
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-xl hover:bg-slate-800/70 transition-all">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-400 mb-4 flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        API Example
                      </div>
                      <pre className="text-green-400 text-sm overflow-x-auto bg-slate-900/50 p-4 rounded-lg">
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

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                About CareerWay
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're revolutionizing the way people find jobs and prepare for interviews in the tech industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="fade-in-up shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To democratize access to tech opportunities and empower professionals with AI-driven interview preparation.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in-up shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Our Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A thriving ecosystem of job seekers, employers, and AI-powered tools working together for career success.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in-up shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Our Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cutting-edge AI technology that adapts to each user's needs, providing personalized career guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
<Link href="/" className="flex items-center">
          <Image src={Logo} alt="Careerway Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">
            <span className="text-primary">areerway</span>
          </h1>
        </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Connecting talent with opportunity through innovative technology and AI-powered solutions.
              </p>
              <div className="text-sm text-gray-500">
                Made with ❤️ in Algeria
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Job Board</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Agents</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CareerWay. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        /* Glassmorphism effect */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
      `}</style>
    </div>
  );
};

export default CareerWayLanding;