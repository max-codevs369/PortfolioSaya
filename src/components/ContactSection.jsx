import { Instagram, Mail, MapPin, Phone, Send, Youtube, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Halo, saya ${name} (%0AEmail: ${email})%0A%0A${message}`;
    const whatsappNumber = "6285363364853";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    setIsSubmitting(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      toast({
        title: "Pesan Dikirim!",
        description: "Terima kasih atas pesan Anda. Saya akan segera membalasnya melalui WhatsApp.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Hubungi <span className="text-primary">Saya</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Punya proyek atau ingin bekerja sama? Jangan ragu untuk menghubungi saya. 
          Saya selalu terbuka untuk peluang baru dan kolaborasi menarik.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ghanigustio28@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ghanigustio28@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telepon</h4>
                  <a
                    href="tel:+6285363364853"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 853-6336-4853
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Lokasi</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Tanah Datar, Sumatera Barat, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Terhubung dengan Saya</h4>
              <div className="flex space-x-6 justify-center text-primary">
                <a
                  href="https://www.instagram.com/zeeeeelllxxyz"
                  target="_blank"
                  className="hover:text-primary/80 transition"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@gannnzzz17"
                  target="_blank"
                  className="hover:text-primary/80 transition"
                >
                  <Music2 size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@ganigustio"
                  target="_blank"
                  className="hover:text-primary/80 transition"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan nama Anda..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan email Anda..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
