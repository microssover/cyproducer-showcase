import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { ArrowLeft } from "lucide-react";

// Mock data - gerçek projelerde API'den gelecek
const categoryData: Record<string, { title: string; images: string[] }> = {
  dugun: {
    title: "Düğün Çekimleri",
    images: Array(12).fill("/placeholder.svg"),
  },
  sporcu: {
    title: "Sporcu Çekimleri",
    images: Array(12).fill("/placeholder.svg"),
  },
  klip: {
    title: "Klip Çekimleri",
    images: Array(12).fill("/placeholder.svg"),
  },
  "dis-cekim": {
    title: "Dış Çekimler",
    images: Array(12).fill("/placeholder.svg"),
  },
};

const PortfolioCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const category = categoryData[categoryId || ""];

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Kategori bulunamadı</h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            Portföy sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="py-12 px-4 border-b border-border">
          <div className="container mx-auto max-w-7xl">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Portföye Geri Dön
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold animate-fade-in">
              {category.title}
            </h1>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-scale"
                >
                  <img
                    src={image}
                    alt={`${category.title} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedImageIndex !== null && (
        <ImageLightbox
          images={category.images}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNavigate={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default PortfolioCategory;
