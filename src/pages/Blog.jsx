const posts = [
  {
    id: 1,
    title: "Transformación Digital en PyMEs",
    excerpt: "Explora cómo la tecnología está revolucionando las pequeñas y medianas empresas en Latinoamérica.",
    author: "Carla Gómez",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    tags: ["Transformación", "Negocios", "Digital"],
    rating: 4
  },
  {
    id: 2,
    title: "5 Claves para Escalar tu Infraestructura IT",
    excerpt: "Descubre prácticas recomendadas para crecer sin comprometer la estabilidad técnica.",
    author: "Luis Ortega",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    tags: ["Infraestructura", "Escalabilidad", "DevOps"],
    rating: 5
  },
  {
    id: 3,
    title: "Capacitación Interna: Clave del Éxito Tecnológico",
    excerpt: "Invertir en tu equipo es tan importante como la tecnología que eliges implementar.",
    author: "Mariana Torres",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    tags: ["Capacitación", "Talento", "Cultura"],
    rating: 5
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen bg-base-200 text-base-content px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestro Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag, index) => (
                    <div key={index} className="badge badge-outline">{tag}</div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={`https://i.pravatar.cc/40?u=${post.author}`} alt={post.author} />
                      </div>
                    </div>
                    <span className="text-sm">{post.author}</span>
                  </div>

                  <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${post.id}`}
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked={post.rating === i}
                        disabled
                      />
                    ))}
                  </div>
                </div>

                <div className="card-actions mt-4">
                  <button className="btn btn-sm btn-primary w-full">Leer más</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="divider">¿Quieres escribir para nosotros?</div>
          <div className="text-center">
            <p className="mb-4">Estamos abiertos a nuevas voces. Comparte tu experiencia con nuestra comunidad.</p>
            <button className="btn btn-secondary btn-sm">Enviar propuesta</button>
          </div>
        </div>
      </div>
    </section>
  );
}
