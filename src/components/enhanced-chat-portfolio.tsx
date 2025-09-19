"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  ChevronDown,
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
    skills: [
      "AI/ML",
      "Python",
      "React",
      "TypeScript",
      "Figma",
      "Design Systems",
    ],
    achievements: [
      "Led the creation of an AI feature that improved user engagement, securing a CES Innovators Award for technological innovation and excellence",
      "Developed a chat interface for quick tech patent queries, enhancing platform intuitiveness and search speed",
      "Optimized the tech search and analysis pathway, achieving a 200% speed increase",
      "Established a Design System, ensuring cohesive branding and user experience across the platform",
      "Pioneered a page-as-component design in Figma, cutting web page development time by 50%",
    ],
  },
  {
    title: "UX/UI engineer (Senior software engineer & UX/UI Designer)",
    company: "Sentinel",
    location: "Europe, Remote",
    period: "09/2022-06/2023",
    skills: [
      "Web3",
      "Blockchain",
      "React",
      "Design Systems",
      "Metamask",
      "DeFi",
    ],
    achievements: [
      "As a member of the founding team at Sentinel, played a crucial role in shaping the architecture and direction of all products",
      "Responsible for developing and maintaining a design system that ensured consistency across all products",
      "Created an innovative solution for end-to-end Metamask testing, increasing test coverage by 30%",
      "Dedicated to helping junior developers grow and succeed, providing mentorship and guidance",
      "Led the design and tech department, crucial in developing complex financial products that managed portfolios",
      "Could take a simple idea and turn it into a fully functional MVP in a short time",
      "Experience in the web 3.0/crypto market provided unique perspective and understanding of the industry",
    ],
  },
  {
    title: "Senior Software Engineer (Full-Stack, Web3, Blockchain)",
    company: "Eterlast",
    location: "Europe, Remote",
    period: "04/2022-10/2022",
    skills: [
      "Blockchain",
      "Solidity",
      "React",
      "Node.js",
      "Docker",
      "Multi-platform Architecture",
    ],
    achievements: [
      "As a member of the founding tech team at Eterlast, contributed significantly to the company's growth and success",
      "Played a crucial role in the architecture of all Eterlast products, ensuring they were scalable and efficient",
      "Implemented a design system, ensuring product consistency and reducing design-related issues by 20%",
      "Developed a scalable platform for multi-functional product launches, cutting development time by 25%",
      "Created an innovative solution for end-to-end Metamask testing, increasing test coverage by 30%",
      "Mentored junior developers, boosting team productivity and skill growth by 50%",
      "Developed a multi-platform architecture for launching different games (rugby, tennis, boxing)",
      "Collaborated with cross-functional teams on blockchain-based solutions, resulting in 40% reduction in transaction costs",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Global Savings Group",
    location: "Europe, Hybrid",
    period: "09/2021-04/2022",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Frontend Architecture",
      "Cost Optimization",
    ],
    achievements: [
      "Developed an internal tool that saved the company 200k euros annually in costs",
      "Was a key member of the team, contributing significantly to the development and success of various projects",
      "Participated in architectural and design decisions, ensuring solutions were scalable, maintainable, and cost-effective",
      "Actively sought out and addressed technical or process improvements to increase efficiency and effectiveness",
      "Mentored junior team members and fostered a positive and inclusive team culture",
      "Worked closely with UX designers, product managers, and stakeholders to deliver high-quality user experiences",
    ],
  },
  {
    title: "Software Engineer (Full-Stack, Infra) & UX/UI designer",
    company: "Sycket",
    location: "Seville, Spain. On-site",
    period: "09/2020-09/2021",
    skills: [
      "Full-Stack",
      "Infrastructure",
      "UX/UI Design",
      "React",
      "Node.js",
    ],
    achievements: [
      "Developed an internal tool that saved the company 200k euros annually in costs",
      "Was a key member of the team, contributing significantly to the development and success of various projects",
      "Participated in architectural and design decisions, ensuring solutions were scalable, maintainable, and cost-effective",
      "Actively sought out and addressed technical or process improvements to increase efficiency and effectiveness",
      "Mentored junior team members and fostered a positive and inclusive team culture",
      "Worked closely with UX designers, product managers, and stakeholders to deliver high-quality user experiences",
    ],
  },
  {
    title: "Frontend Engineer & UI/UX Designer",
    company: "Evolution Pos C.A",
    location: "Venezuela, On-site",
    period: "06/2018 - 09/2018",
    skills: ["Frontend", "UI/UX Design", "POS Systems", "Product Design"],
    achievements: [
      "Led the conception and execution of Cibus POS, combining functionality with ease of use",
      "Engineered a robust infrastructure and deployment strategy, enhancing product rollout and adaptability",
      "Positioned the company to compete in the POS market through innovative software solutions and cutting-edge UX designs",
    ],
  },
];

const projects = [
  {
    name: "Hira - AI Talent Platform",
    description:
      "Co-founding an AI-powered recruitment platform that goes beyond keyword matching to understand human potential",
    link: "https://www.hiratalent.com",
    tech: ["AI", "React", "TypeScript", "Python", "FastAPI"],
    highlight: true,
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

// Animated typing component
function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30 + Math.random() * 20); // Variable typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
}

// Message component with scroll trigger
function ScrollTriggeredMessage({
  message,
  index,
}: {
  message: ChatMessage;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "400px" });

  return (
    <motion.div
      ref={ref}
      id={message.id}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{
        delay: index * 0.05,
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`flex gap-2 sm:gap-4 ${
        message.type === "user" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex-shrink-0 hidden sm:block">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.05 + 0.05, duration: 0.15 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 ${
            message.type === "user"
              ? "bg-white/10 text-white glow-on-hover"
              : "bg-white/5 text-white/90"
          }`}
        >
          {message.type === "user" ? (
            <User className="w-5 h-5" />
          ) : (
            <Bot className="w-5 h-5" />
          )}
        </motion.div>
      </div>
      <div
        className={`flex-1 max-w-3xl ${
          message.type === "user" ? "text-right" : ""
        }`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ delay: index * 0.05 + 0.02, duration: 0.2 }}
          className={`inline-block p-3 sm:p-4 rounded-xl sm:rounded-2xl spotlight ${
            message.type === "user"
              ? "bg-white/10 text-white ml-auto border border-white/20 glow-on-hover"
              : "backdrop-blur-xl bg-white/8 border border-white/12 text-gray-200"
          }`}
        >
          {typeof message.content === "string" ? (
            <p className="leading-relaxed">
              {isInView ? (
                <TypewriterText text={message.content} />
              ) : (
                message.content
              )}
            </p>
          ) : (
            message.content
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function EnhancedChatPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const chatHeaderRef = useRef<HTMLElement>(null);

  // Use document scroll instead of ScrollArea
  const { scrollYProgress } = useScroll();

  // Create dynamic light position based on scroll (left to right, then right to left)
  const lightX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["20%", "80%", "20%"]
  );

  // Update scroll progress state for percentage display
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Handle mobile header visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past initial scroll
        setShowMobileHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowMobileHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Calculate dynamic header height
  useEffect(() => {
    const calculateHeaderHeight = () => {
      let totalHeight = 0;

      if (mobileHeaderRef.current) {
        totalHeight += mobileHeaderRef.current.offsetHeight;
      }

      if (chatHeaderRef.current) {
        totalHeight += chatHeaderRef.current.offsetHeight;
      }

      setHeaderHeight(totalHeight);
    };

    // Calculate on mount and window resize
    calculateHeaderHeight();
    window.addEventListener("resize", calculateHeaderHeight);

    // Recalculate after a short delay to ensure elements are rendered
    const timer = setTimeout(calculateHeaderHeight, 100);

    return () => {
      window.removeEventListener("resize", calculateHeaderHeight);
      clearTimeout(timer);
    };
  }, []);

  const chatMessages: ChatMessage[] = [
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
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="/IMG_8150.jpg"
              alt="Cristian Suarez"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-2xl border border-white/20 shadow-lg"
            />
            <div className="absolute bottom-2 right-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full border border-white/20 shadow-lg">
              🌿 Working in the wild
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="font-bold text-xl mb-2">
                Cristian Suarez Gonzalez
              </h3>
              <p className="text-muted-foreground flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Warsaw, Poland
              </p>
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
              <Badge
                variant="outline"
                className="flex items-center gap-1 hover:bg-accent transition-colors cursor-pointer"
                asChild
              >
                <a href="tel:+48453419252">
                  <Phone className="w-3 h-3" />
                  (+48) 453 419 252
                </a>
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center gap-1 hover:bg-accent transition-colors cursor-pointer"
                asChild
              >
                <a href="mailto:cristiansuarezg7@gmail.com">
                  <Mail className="w-3 h-3" />
                  cristiansuarezg7@gmail.com
                </a>
              </Badge>
            </div>
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
          {(showAllExperiences ? experiences : experiences.slice(0, 3)).map(
            (exp, index) => (
              <Card
                key={index}
                className="p-6 glass-card glow-on-hover transition-all duration-300 spotlight"
              >
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location} • {exp.period}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
            )
          )}

          <div className="flex justify-center">
            {!showAllExperiences && experiences.length > 3 ? (
              <Button
                variant="outline"
                className="btn-glass glow-on-hover"
                onClick={() => setShowAllExperiences(true)}
              >
                Show {experiences.length - 3} more experiences
              </Button>
            ) : showAllExperiences ? (
              <Button
                variant="outline"
                className="btn-glass glow-on-hover"
                onClick={() => setShowAllExperiences(false)}
              >
                Show less
              </Button>
            ) : null}
          </div>
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
              className={`transition-all duration-300 spotlight glow-on-hover ${
                project.highlight
                  ? "overflow-hidden glass-card border-white/20 bg-gradient-to-r from-white/10 to-white/5"
                  : "p-6 glass-card"
              }`}
            >
              {project.highlight ? (
                <div className="space-y-0">
                  {/* Featured project with preview */}
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src="/hira-preview.png"
                      alt={`${project.name} preview`}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Project header overlay */}
                    <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
                      <div>
                        <h4 className="font-semibold text-white text-lg flex items-center gap-2">
                          {project.name}
                          <Badge className="text-xs">Featured</Badge>
                        </h4>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-4 space-y-3">
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
                </div>
              ) : (
                /* Regular projects without preview */
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        {project.name}
                      </h4>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="btn-glass glow-on-hover"
                      asChild
                    >
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
              )}
            </Card>
          ))}
        </div>
      ),
      section: "projects",
    },
    {
      id: "8",
      type: "user",
      content: "How can I get in touch with him?",
      section: "contact",
    },
    {
      id: "9",
      type: "ai",
      content: (
        <Card className="p-6 glass-card glow-on-hover">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gradient">
              Let&apos;s Connect!
            </h4>
            <div className="grid gap-3">
              <Button
                variant="outline"
                className="justify-start btn-glass glow-on-hover transition-colors"
                asChild
              >
                <a
                  href="mailto:cristiansuarezg7@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  cristiansuarezg7@gmail.com
                </a>
              </Button>
              <Button
                variant="outline"
                className="justify-start btn-glass glow-on-hover transition-colors"
                asChild
              >
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
              <Button
                variant="outline"
                className="justify-start btn-glass glow-on-hover transition-colors"
                asChild
              >
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
              <Button
                variant="outline"
                className="justify-start btn-glass glow-on-hover transition-colors"
                asChild
              >
                <a href="tel:+48453419252" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (+48) 453 419 252
                </a>
              </Button>
            </div>
          </div>
        </Card>
      ),
      section: "contact",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const sectionMessage = chatMessages.find(
      (msg) => msg.section === sectionId
    );
    if (sectionMessage) {
      const element = document.getElementById(sectionMessage.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background flex flex-col lg:flex-row relative overflow-hidden"
    >
      {/* Enhanced Lighting Effects with Parallax */}
      <motion.div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

        {/* Additional static floating elements */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-secondary/5 rounded-full blur-2xl" />
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        ref={mobileHeaderRef}
        initial={{ y: -100 }}
        animate={{ y: showMobileHeader ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden fixed top-0 left-0 right-0 bg-card/30 backdrop-blur-md border-b border-white/10 p-4 z-30"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gradient">Cristian</h2>
          <div className="flex gap-2 overflow-x-auto">
            {sidebarItems.slice(0, 4).map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className="btn-glass hover:bg-white/10 flex-shrink-0"
                onClick={() => scrollToSection(item.id)}
              >
                {item.icon}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-80 glass-card border-r border-white/10 p-6 hidden lg:block fixed top-0 left-0 h-screen z-10 custom-scrollbar"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-2 text-gradient">
              Portfolio Navigation
            </h2>
            <p className="text-sm text-muted-foreground">
              Click on any section to jump directly to it
            </p>
          </motion.div>

          <div className="h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 transition-all duration-300 spotlight cursor-pointer btn-glass hover:bg-white/10"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Chat Interface */}
      <main className="flex-1 flex flex-col relative z-10 lg:ml-80">
        {/* Header */}
        <motion.header
          ref={chatHeaderRef}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: showMobileHeader ? 0 : -100,
            opacity: showMobileHeader ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="glass-card border-b border-white/10 p-4 fixed top-16 lg:top-0 left-0 lg:left-80 right-0 z-20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm float-animation">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-gradient">
                  Portfolio AI Assistant
                </h1>
                <p className="text-sm text-muted-foreground">
                  Discovering Cristian Suarez&apos;s professional journey
                </p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Header Spacer - dynamically matches header heights */}
        <div
          className="flex-shrink-0"
          style={{ height: `${headerHeight}px` }}
        ></div>

        {/* Chat Messages */}
        <div className="flex-1 p-3 sm:p-6 pt-8 lg:pt-6 overflow-y-auto custom-scrollbar relative">
          {/* Dynamic scroll-based light behind messages */}
          <motion.div
            className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none z-0"
            style={{
              left: lightX,
              top: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
            }}
          />

          <motion.div className="max-w-4xl mx-auto space-y-4 sm:space-y-8 pb-20 sm:pb-8 relative z-10">
            {chatMessages.map((message, index) => (
              <ScrollTriggeredMessage
                key={message.id}
                message={message}
                index={index}
              />
            ))}

            {/* End marker with minimal spacing */}
            <div className="h-8 flex items-center justify-center">
              <div className="text-xs text-muted-foreground/30 text-center">
                ·
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Scroll Progress Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="glass-card px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 glow-on-hover rounded-2xl text-sm sm:text-base">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2"
          >
            <ChevronDown className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              {scrollProgress < 0.95
                ? "Scroll to explore"
                : "Portfolio complete"}
            </span>
          </motion.div>

          <div className="w-px h-4 bg-border"></div>

          <div className="flex items-center gap-2">
            <div className="w-16 h-1 bg-primary/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{
                  width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                }}
              />
            </div>
            <span className="text-xs text-muted-foreground tabular-nums min-w-[2rem]">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
