import { Camera, Clapperboard, Video } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Düğün Çekimleri",
      description: "Hayatınızın en özel gününü sinematik bir anlatımla ölümsüzleştiriyoruz. Her an, her duygu, her mutlu gözyaşı.",
      features: ["4K Video Çekim", "Drone Görüntüleri", "Profesyonel Renklendirme", "Aynı Gün Klibi"],
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Sporcu Çekimleri",
      description: "Sporcuların gücünü ve azimlerini yansıtan dinamik ve etkileyici görüntüler oluşturuyoruz.",
      features: ["Yavaş Çekim", "Aksiyon Kameraları", "Spor Analizi", "Motivasyon Videoları"],
    },
    {
      icon: <Clapperboard className="w-12 h-12" />,
      title: "Müzik Klipleri",
      description: "Sanatçıların vizyonunu gerçeğe dönüştüren, yaratıcı ve özgün müzik videoları üretiyoruz.",
      features: ["Konsept Geliştirme", "Profesyonel Kurgu", "VFX & CGI", "Color Grading"],
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-primary opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Her projeye özgün yaklaşım, profesyonel ekipman ve yılların deneyimi
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-foreground/60">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
