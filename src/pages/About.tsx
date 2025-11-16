import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, Film, Award, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Camera,
      title: "Kalite Odaklı",
      description: "Her projede en yüksek kalite standartlarını koruyarak, anılarınızı en iyi şekilde ölümsüzleştiriyoruz."
    },
    {
      icon: Film,
      title: "Yaratıcı Vizyon",
      description: "Sıradanlıktan uzak, her projede benzersiz ve etkileyici hikayeler yaratıyoruz."
    },
    {
      icon: Award,
      title: "Profesyonel Ekip",
      description: "Alanında uzman, deneyimli ve tutkulu ekibimizle her projeye özel yaklaşım sunuyoruz."
    },
    {
      icon: Users,
      title: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin hayallerini gerçeğe dönüştürmek için sonuna kadar çalışıyoruz."
    }
  ];

  const stats = [
    { number: "500+", label: "Mutlu Müşteri" },
    { number: "1000+", label: "Tamamlanan Proje" },
    { number: "10+", label: "Yıllık Deneyim" },
    { number: "50+", label: "Ödül & Başarı" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Anılarınızı Sanata Dönüştüren Tutkulu Bir Ekip
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2073"
                alt="CyProducer Studio"
                className="rounded-lg shadow-elegant"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-foreground">
                Bizim Hikayemiz
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CyProducer, 2014 yılında hayata geçirilen bir tutku projesi olarak başladı. 
                  O günden bu yana, binlerce çiftin düğün günlerini, sporcuların başarı anlarını 
                  ve sanatçıların yaratıcı vizyonlarını görsel sanata dönüştürdük.
                </p>
                <p>
                  Her proje bizim için sadece bir iş değil, bir sanat eseri yaratma fırsatıdır. 
                  Ekibimiz, en son teknoloji ekipmanlar ve yıllara dayanan deneyimimizle, 
                  her anı sinematik bir başyapıta dönüştürüyor.
                </p>
                <p>
                  Müşterilerimizin güvenini kazanmak ve beklentilerini aşmak, her zaman 
                  önceliğimiz oldu. Bu yüzden sadece fotoğraf ve video çekimi yapmıyoruz; 
                  anıları ölümsüzleştiriyoruz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Başarımızın temelini oluşturan prensipler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-elegant transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-primary" />
                <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                  Vizyonumuz
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Türkiye'nin en prestijli prodüksiyon şirketi olmak ve uluslararası 
                  arenada ülkemizi başarıyla temsil etmek vizyonumuzdur.
                </p>
                <p>
                  Sektörde yenilikçi yaklaşımlarımız ve kaliteli hizmet anlayışımızla 
                  fark yaratmaya, her projede sınırları zorlamaya devam ediyoruz.
                </p>
                <p>
                  Teknolojik gelişmeleri yakından takip ediyor, ekipmanlarımızı ve 
                  tekniklerimizi sürekli güncelleyerek müşterilerimize en iyisini sunuyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070"
                alt="Vision"
                className="rounded-lg shadow-elegant"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"
                alt="Future"
                className="rounded-lg shadow-elegant"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-12 h-12 text-primary" />
                <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                  Geleceğimiz
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Önümüzdeki dönemde yapay zeka destekli post-prodüksiyon teknolojileri 
                  ve drone sinematografi alanında yatırımlarımızı artırıyoruz.
                </p>
                <p>
                  Yurt dışı projelerine katılım sağlayarak global pazarda yerimizi 
                  güçlendirmeyi ve uluslararası festivallerden ödüller almayı hedefliyoruz.
                </p>
                <p>
                  Genç yetenekleri keşfetmek ve sektöre kazandırmak için eğitim programları 
                  ve staj imkanları sunmayı planlıyoruz.
                </p>
                <p>
                  Sürdürülebilir ve çevre dostu prodüksiyon teknikleri geliştirerek, 
                  sanatımızı doğaya saygılı bir şekilde icra etmeyi amaçlıyoruz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
