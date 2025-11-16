import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, Video, Users, Mountain } from "lucide-react";

const categories = [
  {
    id: "dugun",
    title: "Düğün Çekimleri",
    description: "Hayatınızın en özel gününü sinemalık anlara dönüştürüyoruz",
    icon: Users,
    image: "/placeholder.svg",
  },
  {
    id: "sporcu",
    title: "Sporcu Çekimleri",
    description: "Sporcuların dinamizmini ve gücünü profesyonel çekimlerle yakalıyoruz",
    icon: Camera,
    image: "/placeholder.svg",
  },
  {
    id: "klip",
    title: "Klip Çekimleri",
    description: "Müziğinize yaratıcı ve etkileyici görüntülerle hayat veriyoruz",
    icon: Video,
    image: "/placeholder.svg",
  },
  {
    id: "dis-cekim",
    title: "Dış Çekimler",
    description: "Doğanın güzelliğinde unutulmaz kareler yaratıyoruz",
    icon: Mountain,
    image: "/placeholder.svg",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Portföyümüz
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Yılların deneyimi ve tutkuyla oluşturduğumuz eserlerimiz
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.id}
                    to={`/portfolio/${category.id}`}
                    className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in hover-scale"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-primary/20 rounded-lg backdrop-blur-sm">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="font-display text-3xl font-bold">{category.title}</h2>
                      </div>
                      <p className="text-muted-foreground">{category.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                        <span className="text-sm font-medium">Galeriyi İncele</span>
                        <span className="text-xl">→</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
