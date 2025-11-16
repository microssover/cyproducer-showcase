import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Projeniz İçin Hazır mısınız?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim. 
            Size özel teklifimiz için hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-glow group">
              <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              İletişime Geçin
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary/50 hover:border-primary group"
            >
              Portfolyo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-foreground/60 mb-4">veya doğrudan ulaşın:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-foreground/80">
              <a href="mailto:info@cyproducer.com" className="hover:text-primary transition-colors">
                info@cyproducer.com
              </a>
              <span className="hidden sm:block">•</span>
              <a href="tel:+905551234567" className="hover:text-primary transition-colors">
                +90 555 123 45 67
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
