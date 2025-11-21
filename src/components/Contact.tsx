import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Linkedin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:hello@example.com", color: "hover:text-red-500" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-600 hover:bg-green-200">Contact</Badge>
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-8 border-0 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
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
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
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
                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
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
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <h3 className="mb-4">Connect With Me</h3>
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
              <h3 className="mb-2">Quick Response</h3>
              <p className="text-gray-600">
                I typically respond within 24 hours during business days.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}