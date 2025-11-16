import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-in-up">
            Anılarınızı{" "}
            <span className="text-gradient">Sinemaya</span>{" "}
            Dönüştürüyoruz
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Düğünlerden sporcu çekimlerine, müzik videolarından kurumsal projelere.
            Her karenin bir hikaye anlattığı profesyonel prodüksiyon hizmetleri.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-glow group"
            >
              Portfolyomuzu İnceleyin
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary/50 hover:border-primary group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Showreel İzle
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in delay-600">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">500+</div>
              <div className="text-sm md:text-base text-foreground/60">Mutlu Müşteri</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">10+</div>
              <div className="text-sm md:text-base text-foreground/60">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">1000+</div>
              <div className="text-sm md:text-base text-foreground/60">Tamamlanan Proje</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
