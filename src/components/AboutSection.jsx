import { Code, User, Monitor } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleDownloadClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 2000);
    
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tentang <span className="text-primary">Saya</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              Saya adalah seorang developer muda yang memiliki ketertarikan besar
              di dunia teknologi. Meskipun belum memiliki banyak pengalaman, saya
              telah mempelajari berbagai hal seputar pengembangan web, baik di sisi
              <strong> frontend</strong> maupun <strong> backend</strong>.
            </p>

            <p className="text-muted-foreground">
              Selain itu, saya juga mampu membuat <strong>aplikasi desktop </strong> 
              menggunakan teknologi modern. Saya terus belajar dan mengembangkan diri
              untuk menjadi developer yang lebih baik setiap harinya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Hubungi Saya
              </a>

              <a
                href="/cv/profile.pdf" 
                download="CV_Gani_Gustio.pdf"
                onClick={handleDownloadClick}
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center inline-flex items-center justify-center",
                  isSending && "opacity-50 pointer-events-none"
                )}
              >
                {isSending ? "Mengunduh..." : "Unduh CV"}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Menguasai pengembangan frontend dan backend menggunakan teknologi modern.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desain Antarmuka</h4>
                  <p className="text-muted-foreground">
                    Membuat tampilan yang menarik dan mudah digunakan untuk pengguna.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Aplikasi Desktop</h4>
                  <p className="text-muted-foreground">
                    Membangun aplikasi desktop yang fungsional dan efisien dengan teknologi modern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};