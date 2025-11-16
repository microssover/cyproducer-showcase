import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-heading font-bold text-gradient">
                CyProducer
              </span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Anılarınızı sinemaya dönüştüren profesyonel video prodüksiyon ve fotoğrafçılık hizmetleri.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-foreground/70 hover:text-primary transition-colors">
                  Portfolyo
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">Düğün Çekimleri</li>
              <li className="text-foreground/70">Sporcu Çekimleri</li>
              <li className="text-foreground/70">Müzik Klipleri</li>
              <li className="text-foreground/70">Kurumsal Videolar</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} CyProducer. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
