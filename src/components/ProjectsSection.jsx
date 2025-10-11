import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Website Portfolio Pribadi",
    description:
      "Merancang dan membangun website portfolio pribadi untuk menampilkan keterampilan, pengalaman, dan proyek yang telah dibuat. Fokus pada desain yang responsif dan mudah digunakan.",
    image: "/projects/project1.png",
    tags: ["React", "JavaScript", "TailwindCSS", "TypeScript"],
    linkUrl: "https://ganigustio.netlify.app",
  },
  {
    id: 2,
    title: "Website Tutorial Membuat Aplikasi Catatanku",
    description:
      "Sebuah website interaktif yang berisi panduan langkah demi langkah untuk membuat aplikasi Catatanku. Dirancang untuk membantu pemula memahami dasar-dasar pembuatan aplikasi secara praktis.",
    image: "/projects/tutorial.png",
    tags: ["HTML", "JavaScript", "TailwindCSS"],
    linkUrl: "https://tutorialwebcatatanku.netlify.app",
  },
  {
    id: 3,
    title: "Website Kalkulator Sederhana",
    description:
      "Website kalkulator interaktif yang mampu melakukan berbagai operasi matematika dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian. Dirancang dengan tampilan minimalis dan responsif.",
    image: "/projects/kalkulator.png",
    tags: ["HTML", "JavaScript", "TailwindCSS"],
    linkUrl: "https://max-codevs-kalkulator-sederhana.netlify.app",
  },
  {
    id: 4,
    title: "Website Kursus",
    description:
      "Membangun website kursus berbasis web yang memungkinkan pengguna untuk mendaftar, mengelola kursus, dan memantau progres pembelajaran secara efisien dan interaktif.",
    image: "/projects/project2.png",
    tags: ["PHP", "MySQL", "Laravel", "Bootstrap"],
    demoUrl: "/projects/kursus.mp4",
    githubUrl: "https://github.com/max-codevs369/Web-Kursus",
  },
  {
    id: 5,
    title: "Website To-Do List",
    description:
      "Membuat website To-Do List sederhana yang berfungsi untuk menambah, mengedit, menghapus, dan menandai tugas yang telah selesai dengan antarmuka yang bersih dan mudah dipakai.",
    image: "/projects/project3.png",
    tags: ["PHP", "MySQL", "Laravel", "Bootstrap"],
    demoUrl: "/projects/todo.mp4",
    githubUrl: "https://github.com/max-codevs369/Web-ToDoList",
  },
  {
    id: 6,
    title: "Website Berita Sekolah",
    description:
      "Website sekolah dengan sistem multi-role (Admin, Penulis, dan Siswa). Fitur mencakup manajemen artikel, autentikasi pengguna, serta dashboard khusus untuk setiap peran. Dirancang dengan arsitektur yang kompleks dan aman.",
    image: "/projects/berita.png",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/max-codevs369/WebsiteBerita",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Tugas <span className="text-primary">Unggulan</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Berikut beberapa proyek yang telah saya kerjakan. Setiap proyek dibuat
          dengan perhatian terhadap detail, performa, dan kenyamanan pengguna —
          mencerminkan perjalanan saya sebagai seorang pengembang muda yang
          terus belajar dan berkembang.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, key) => (
                      <span
                        key={key}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 min-h-[110px] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center px-6 pb-6">
                <div className="flex space-x-3">
                  {project.linkUrl ? (
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                    >
                      <ExternalLink size={20} /> Kunjungi
                    </a>
                  ) : project.demoUrl && project.githubUrl ? (
                    <>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </>
                  ) : (
                    project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                      >
                        <Github size={20} /> Github
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/max-codevs369"
          >
            Cek Github Saya <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
