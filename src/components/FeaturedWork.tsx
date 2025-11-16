import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedWork = () => {
  const projects = [
    {
      title: "Elif & Murat",
      category: "Düğün",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    },
    {
      title: "Defne Samyeli",
      category: "Müzik Klibi",
      image: "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&h=600&fit=crop",
    },
    {
      title: "Ali Yılmaz",
      category: "Sporcu",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Öne Çıkan <span className="text-gradient">Projeler</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Son dönem çalışmalarımızdan seçmeler
            </p>
          </div>
          <Button variant="outline" size="lg" className="mt-6 md:mt-0 group border-2 border-primary/50 hover:border-primary">
            Tümünü Görüntüle
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary mb-2 font-medium">{project.category}</p>
                  <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Play icon on hover */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-glow">
                  <div className="w-0 h-0 border-l-[16px] border-l-background border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
