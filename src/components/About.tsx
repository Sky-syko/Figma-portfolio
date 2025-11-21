import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Palette, Code, Lightbulb, Users } from "lucide-react";

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

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-600 hover:bg-orange-200">About Me</Badge>
          <h2 className="mb-4">What I Do Best</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              <h3 className="mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-12 text-white text-center">
          <h3 className="mb-4">Let's Create Something Amazing</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
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
  );
}