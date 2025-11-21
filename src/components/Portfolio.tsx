import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

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

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-600 hover:bg-purple-200">Portfolio</Badge>
          <h2 className="mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithFallback 
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
                  <h3 className="mb-2">{project.title}</h3>
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
  );
}