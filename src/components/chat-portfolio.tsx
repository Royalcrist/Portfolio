"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Bot,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Lightbulb,
} from "lucide-react";

interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string | React.ReactNode;
  delay?: number;
  section?: string;
}

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  { id: "intro", label: "Introduction", icon: <User className="w-4 h-4" /> },
  {
    id: "experience",
    label: "Experience",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
  { id: "skills", label: "Skills", icon: <Award className="w-4 h-4" /> },
  {
    id: "education",
    label: "Education",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
];

const experiences = [
  {
    title: "Senior Software Engineer (AI Engineer, Infrastructure, Full-Stack)",
    company: "Focus",
    location: "Europe, Remote",
    period: "03/2023-Present",
    achievements: [
      "Led the creation of an AI feature that improved user engagement, securing a CES Innovators Award",
      "Developed a chat interface for quick tech patent queries, enhancing platform intuitiveness",
      "Optimized the tech search and analysis pathway, achieving a 200% speed increase",
      "Established a Design System, ensuring cohesive branding across the platform",
      "Pioneered a page-as-component design in Figma, cutting web page development time by 50%",
    ],
  },
  {
    title: "UX/UI engineer (Senior software engineer & UX/UI Designer)",
    company: "Sentinel",
    location: "Europe, Remote",
    period: "09/2022-06/2023",
    achievements: [
      "Member of the founding team, shaped architecture and direction of all products",
      "Developed and maintained design system ensuring consistency across products",
      "Created innovative solution for end-to-end Metamask testing, increasing test coverage by 30%",
      "Led design and tech department, developing complex financial products",
      "Mentored junior developers and provided guidance for team growth",
    ],
  },
  {
    title: "Senior Software Engineer (Full-Stack, Web3, Blockchain)",
    company: "Eterlast",
    location: "Europe, Remote",
    period: "04/2022-10/2022",
    achievements: [
      "Founding tech team member, contributed to company growth and success",
      "Implemented design system, reducing design-related issues by 20%",
      "Developed scalable platform for multi-functional product launches, cutting development time by 25%",
      "Collaborated on blockchain-based solutions, resulting in 40% reduction in transaction costs",
      "Mentored junior developers, boosting team productivity by 50%",
    ],
  },
];

const projects = [
  {
    name: "Hira - AI Talent Platform",
    description:
      "Co-founding an AI-powered recruitment platform that goes beyond keyword matching to understand human potential",
    link: "https://www.hiratalent.com/about/",
    tech: ["AI", "React", "TypeScript", "Python", "FastAPI"],
  },
  {
    name: "Scalable Design System",
    description:
      "Built using Chakra UI with predefined color roles, text styles, and flexible components",
    link: "https://github.com/Royalcrist/next-app-template/tree/main/design-system",
    tech: ["React", "Chakra UI", "TypeScript", "Design Systems"],
  },
  {
    name: "NFT Marketplace",
    description:
      "Full-stack NFT marketplace using OpenSea API with custom UI/UX design",
    link: "https://github.com/Royalcrist/nft-marketplace-opensea",
    tech: ["React", "Solidity", "Node.js", "Web3", "OpenSea API"],
  },
  {
    name: "Staking App",
    description:
      "Complete DeFi staking application with rewards system and modern UI",
    link: "https://github.com/Royalcrist/stake.app",
    tech: ["React", "Next.js", "Solidity", "Hardhat", "Docker"],
  },
];

const skills = {
  expert: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Python",
    "CSS",
    "HTML5",
    "Figma",
    "Git",
    "FastAPI",
    "Docker",
  ],
  advanced: [
    "Web3",
    "Blockchain",
    "Cypress",
    "Node.js",
    "Next.js",
    "Design Systems",
    "AI",
    "ElasticSearch",
  ],
  languages: ["Spanish (Native)", "English (Expert)"],
};

export default function ChatPortfolio() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const chatMessages: ChatMessage[] = useMemo(
    () => [
      {
        id: "1",
        type: "ai",
        content:
          "Hello! I'm an AI assistant here to tell you about Cristian Suarez. Let me share his story with you...",
        section: "intro",
      },
      {
        id: "2",
        type: "user",
        content: "Tell me about Cristian's background",
        section: "intro",
      },
      {
        id: "3",
        type: "ai",
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="/api/placeholder/100/100"
                  alt="Cristian Suarez"
                />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">Cristian Suarez Gonzalez</h3>
                <p className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Warsaw, Poland
                </p>
              </div>
            </div>
            <p className="leading-relaxed">
              An experienced Senior Software Engineer and UX/UI Designer with
              over ten years of dedication to the profession. Currently honing
              skills at Focus and AI projects like Hira, building scalable,
              secure, and efficient applications. Passionate about tackling
              complex problems with simple solutions while promoting innovation
              and collaboration.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                (+48) 453 419 252
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                cristiansuarezg7@gmail.com
              </Badge>
            </div>
          </div>
        ),
        section: "intro",
      },
      {
        id: "4",
        type: "user",
        content: "What's his professional experience like?",
        section: "experience",
      },
      {
        id: "5",
        type: "ai",
        content: (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location} • {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        ),
        section: "experience",
      },
      {
        id: "6",
        type: "user",
        content: "Show me his notable projects",
        section: "projects",
      },
      {
        id: "7",
        type: "ai",
        content: (
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-lg">{project.name}</h4>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ),
        section: "projects",
      },
      {
        id: "8",
        type: "user",
        content: "What are his technical skills?",
        section: "skills",
      },
      {
        id: "9",
        type: "ai",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Expert Level
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.expert.map((skill, i) => (
                  <Badge
                    key={i}
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-secondary-foreground" />
                Advanced Level
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.advanced.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, i) => (
                  <Badge key={i} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ),
        section: "skills",
      },
      {
        id: "10",
        type: "user",
        content: "How can I get in touch with him?",
        section: "contact",
      },
      {
        id: "11",
        type: "ai",
        content: (
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Let&apos;s Connect!</h4>
              <div className="grid gap-3">
                <Button variant="outline" className="justify-start" asChild>
                  <a
                    href="mailto:cristiansuarezg7@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    cristiansuarezg7@gmail.com
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a
                    href="https://linkedin.com/in/hicrist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    linkedin.com/in/hicrist
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a
                    href="https://github.com/Royalcrist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    github.com/Royalcrist
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ),
        section: "contact",
      },
    ],
    []
  );

  const scrollToMessage = (messageId: string) => {
    const messageElement = document.getElementById(messageId);
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const sectionMessage = chatMessages.find(
      (msg) => msg.section === sectionId
    );
    if (sectionMessage) {
      scrollToMessage(sectionMessage.id);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessageIndex < chatMessages.length) {
        setIsTyping(true);

        setTimeout(() => {
          setMessages((prev) => [...prev, chatMessages[currentMessageIndex]]);
          setIsTyping(false);
          setCurrentMessageIndex((prev) => prev + 1);
        }, 1000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, chatMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-80 bg-card/30 backdrop-blur-md border-r border-border/50 p-6 hidden lg:block"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Portfolio Navigation</h2>
            <p className="text-sm text-muted-foreground">
              Click on any section to jump directly to it
            </p>
          </div>

          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </div>
          </ScrollArea>

          <Separator />

          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">
              Progress through portfolio
            </p>
            <Progress
              value={(currentMessageIndex / chatMessages.length) * 100}
              className="h-2"
            />
            <p className="text-xs text-muted-foreground mt-1">
              {currentMessageIndex} / {chatMessages.length} sections
            </p>
          </div>
        </div>
      </motion.aside>

      {/* Chat Interface */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-card/30 backdrop-blur-md border-b border-border/50 p-4"
        >
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary" />
            <div>
              <h1 className="font-bold text-lg">Portfolio AI Assistant</h1>
              <p className="text-sm text-muted-foreground">
                Discovering Cristian Suarez&apos;s professional journey
              </p>
            </div>
          </div>
        </motion.header>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-6" ref={chatContainerRef}>
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                id={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-4 ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {message.type === "user" ? (
                      <User className="w-5 h-5" />
                    ) : (
                      <Bot className="w-5 h-5" />
                    )}
                  </div>
                </div>
                <div
                  className={`flex-1 max-w-3xl ${
                    message.type === "user" ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`inline-block p-4 rounded-2xl ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground ml-auto"
                        : "bg-card/50 backdrop-blur-sm border border-border/50"
                    }`}
                  >
                    {typeof message.content === "string" ? (
                      <p className="leading-relaxed">{message.content}</p>
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </main>

      {/* Lighting Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </div>
  );
}
