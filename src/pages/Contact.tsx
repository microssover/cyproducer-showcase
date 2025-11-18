import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır").max(100, "İsim en fazla 100 karakter olabilir"),
  email: z.string().email("Geçerli bir email adresi giriniz").max(255, "Email en fazla 255 karakter olabilir"),
  phone: z.string().min(10, "Telefon numarası en az 10 karakter olmalıdır").max(20, "Telefon numarası en fazla 20 karakter olabilir"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır").max(1000, "Mesaj en fazla 1000 karakter olabilir"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form data:", data);
    
    toast({
      title: "Mesajınız Alındı!",
      description: "En kısa sürede size dönüş yapacağız.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@cyproducer.com",
      href: "mailto:info@cyproducer.com",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+90 555 123 45 67",
      href: "tel:+905551234567",
    },
    {
      icon: MapPin,
      label: "Adres",
      value: "İstanbul, Türkiye",
      href: "#map",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/cyproducer",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/cyproducer",
      color: "hover:text-blue-500",
    },
    {
      icon: Youtube,
      label: "Youtube",
      href: "https://youtube.com/@cyproducer",
      color: "hover:text-red-500",
    },
  ];

  // WhatsApp link with pre-filled message
  const whatsappNumber = "905551234567"; // Format: country code + number without +
  const whatsappMessage = encodeURIComponent("Merhaba! CyProducer hakkında bilgi almak istiyorum.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Bizimle <span className="text-gradient">İletişime Geçin</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Projeleriniz için profesyonel çözümler sunuyoruz. Size nasıl yardımcı olabileceğimizi öğrenmek için bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-heading font-bold mb-6">İletişim Formu</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>İsim Soyisim</FormLabel>
                        <FormControl>
                          <Input placeholder="Adınız ve soyadınız" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="ornek@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="+90 555 123 45 67" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mesajınız</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Lütfen mesajınızı yazın..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-heading font-bold mb-6">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 text-foreground/80 hover:text-primary transition-colors group"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium text-lg">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media & WhatsApp */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6">Sosyal Medya</h3>
                <div className="flex gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-secondary/50 p-4 rounded-xl hover:bg-secondary transition-all ${social.color} hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>

                {/* WhatsApp Direct Link */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-xl hover:shadow-lg hover:scale-105 transition-all group"
                >
                  <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                  <div className="text-left">
                    <p className="font-bold text-lg">WhatsApp ile İletişime Geç</p>
                    <p className="text-sm text-white/90">Hızlı yanıt için tıklayın</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section id="map" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Konumumuz</h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79587087985!2d28.849653899999998!3d41.005370099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2s%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CyProducer Konum"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
