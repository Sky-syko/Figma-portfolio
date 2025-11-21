import { useState } from "react";
import { Menu, X, ArrowDown, Mail, Linkedin, ExternalLink, Heart, Palette, Code, Lightbulb, Users } from "lucide-react";

// Inline Button Component
const Button = ({ children, className = "", variant = "default", size = "default", onClick, type = "button" }: any) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border-2 border-current bg-transparent"
  };
  const sizes = {
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

// Inline Badge Component
const Badge = ({ children, className = "", variant = "default" }: any) => {
  const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium";
  const variants = {
    default: "bg-gray-900 text-white",
    secondary: "bg-gray-100 text-gray-900"
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Inline Card Component
const Card = ({ children, className = "" }: any) => {
  return (
    <div className={`rounded-xl bg-white shadow-md ${className}`}>
      {children}
    </div>
  );
};

// Inline Input Component
const Input = ({ className = "", ...props }: any) => {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
};

// Inline Textarea Component
const Textarea = ({ className = "", ...props }: any) => {
  return (
    <textarea
      className={`w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
};

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete brand identity system for a modern tech startup",
    image: "https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MzY2Nzk1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Logo Design", "Brand Guide", "Print"],
    color: "from-blue-500 to-cyan-500",
    link: "https://example.com/brand-identity"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Web Design",
    description: "Modern responsive e-commerce platform with seamless UX",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYzNjQxODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UI/UX", "React", "Tailwind"],
    color: "from-purple-500 to-pink-500",
    link: "https://example.com/ecommerce"
  },
  {
    id: 3,
    title: "Video Game Level Design",
    category: "Game Design",
    description: "Immersive level design and environment art for action adventure game",
    image: "https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBsZXZlbCUyMGRlc2lnbnxlbnwxfHx8fDE3NjM2NzE5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Level Design", "3D", "Unity"],
    color: "from-green-500 to-emerald-500",
    link: "https://example.com/game-level"
  },
  {
    id: 4,
    title: "Digital Illustrations",
    category: "Illustration",
    description: "Custom illustrations for editorial and commercial projects",
    image: "https://images.unsplash.com/photo-1545181824-24c265f8fd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0fGVufDF8fHx8MTc2MzYzODg3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Illustration", "Digital Art", "Creative"],
    color: "from-orange-500 to-red-500",
    link: "https://example.com/illustrations"
  },
  {
    id: 5,
    title: "Colorful Graphics",
    category: "Graphic Design",
    description: "Bold and vibrant graphics for social media campaigns",
    image: "https://images.unsplash.com/photo-1723055931835-ab7bddb56552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYzNTYwMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Social Media", "Graphics", "Marketing"],
    color: "from-yellow-500 to-orange-500",
    link: "https://example.com/graphics"
  },
  {
    id: 6,
    title: "Creative Workspace",
    category: "Photography",
    description: "Professional photography for brand storytelling",
    image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1ODU4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Photography", "Branding", "Content"],
    color: "from-teal-500 to-blue-500",
    link: "https://example.com/photography"
  }
];

const skills = [
  {
    icon: Palette,
    title: "Visual Design",
    description: "Creating stunning visual experiences with a keen eye for aesthetics and detail",
    color: "text-pink-500 bg-pink-100"
  },
  {
    icon: Code,
    title: "Development",
    description: "Building responsive, performant web applications with modern technologies",
    color: "text-blue-500 bg-blue-100"
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "Solving complex problems with innovative and user-centered solutions",
    color: "text-yellow-500 bg-yellow-100"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working seamlessly with teams to bring ideas to life and exceed expectations",
    color: "text-green-500 bg-green-100"
  }
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Portfolio", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:hello@example.com", color: "hover:text-red-500" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" }
  ];

  return (
    <>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div 
              className="cursor-pointer text-2xl font-semibold"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                background: 'linear-gradient(to right, rgb(147, 51, 234), rgb(236, 72, 153))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 border-0"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors py-2 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 border-0"
                  onClick={() => scrollToSection("contact")}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          )}
        </header>

        <main id="home">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90" />
            
            {/* Floating orbs for visual interest */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">
                Hi, I'm <span className="text-yellow-300">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Creative Designer & Developer crafting beautiful digital experiences that make an impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100"
                  onClick={() => scrollToSection("portfolio")}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="h-6 w-6 text-white" />
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-200">Portfolio</Badge>
                <h2 className="text-4xl font-semibold mb-4">Featured Work</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  A collection of projects that showcase my skills in design, development, and creative problem-solving
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card 
                      className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 h-full"
                    >
                      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-orange-100 text-orange-600 hover:bg-orange-200">About Me</Badge>
                <h2 className="text-4xl font-semibold mb-4">What I Do Best</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  I'm passionate about creating meaningful digital experiences that blend creativity with functionality. 
                  With expertise across design and development, I bring ideas to life from concept to execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {skills.map((skill) => (
                  <Card 
                    key={skill.title}
                    className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${skill.color} flex items-center justify-center mb-4`}>
                      <skill.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-12 text-white text-center">
                <h3 className="text-2xl font-semibold mb-4">Let's Create Something Amazing</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
                  I'm always excited to work on new projects and collaborate with creative minds. 
                  Whether you have a clear vision or need help bringing an idea to life, let's talk!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 px-4 py-2">5+ Years Experience</Badge>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 px-4 py-2">50+ Projects Completed</Badge>
                  <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 px-4 py-2">Happy Clients Worldwide</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-100 text-green-600 hover:bg-green-200">Contact</Badge>
                <h2 className="text-4xl font-semibold mb-4">Let's Work Together</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible!
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 p-8 border-0 shadow-lg">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Name</label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="border-gray-200 resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 border-0"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>

                <div className="space-y-6">
                  <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                    <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                    <p className="text-gray-600 mb-6">
                      Follow me on social media or reach out directly through any of these platforms.
                    </p>
                    <div className="space-y-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className={`flex items-center gap-3 text-gray-700 ${social.color} transition-colors`}
                        >
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <social.icon className="h-5 w-5" />
                          </div>
                          <span>{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50">
                    <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                    <p className="text-gray-600">
                      I typically respond within 24 hours during business days.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="flex items-center justify-center gap-2 text-gray-400">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Your Name
            </p>
            <p className="text-gray-500 mt-2">© 2025 All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
