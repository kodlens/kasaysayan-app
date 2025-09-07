export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f5e7] text-[#3b2f2f] font-serif">
      {/* Header */}
      <header className="bg-[#d6c6a8] shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">Kasaysayan</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#timeline" className="hover:underline">Timeline</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#about" className="hover:underline">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549887534-4c0b3c56b4b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="bg-black/50 w-full h-full absolute"></div>
        <div className="relative z-10 text-[#f8f5e7] px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Rediscover the Past</h2>
          <p className="text-base md:text-lg">Stories, memories, and the heritage that shaped our nation.</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-[#b89f7e] inline-block">Historical Timeline</h3>
        <div className="space-y-6">
          <div className="p-4 bg-[#ede4d0] rounded-lg shadow">
            <h4 className="font-bold text-lg">1898 – Philippine Independence</h4>
            <p className="text-sm mt-2">The declaration of independence from Spanish rule marked a turning point in history.</p>
          </div>
          <div className="p-4 bg-[#ede4d0] rounded-lg shadow">
            <h4 className="font-bold text-lg">1946 – Sovereignty Restored</h4>
            <p className="text-sm mt-2">The Philippines gained full independence after World War II.</p>
          </div>
          <div className="p-4 bg-[#ede4d0] rounded-lg shadow">
            <h4 className="font-bold text-lg">1986 – People Power Revolution</h4>
            <p className="text-sm mt-2">A peaceful revolution that restored democracy through unity and courage.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-[#f0e8d9] py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-[#b89f7e] inline-block">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1569154941061-dc6cdb6752a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Historical site" className="rounded-lg shadow-md object-cover h-40 w-full" />
          <img src="https://images.unsplash.com/photo-1558981359-219d6364c6c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Old manuscripts" className="rounded-lg shadow-md object-cover h-40 w-full" />
          <img src="https://images.unsplash.com/photo-1564758560339-23ad69b06130?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Heritage" className="rounded-lg shadow-md object-cover h-40 w-full" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">About</h3>
        <p className="text-base md:text-lg leading-relaxed">
          <span className="font-bold">Kasaysayan</span> is a digital archive and storytelling platform that brings together
          the rich history and culture of the Philippines. It aims to preserve heritage and make it accessible to the next generations.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#d6c6a8] py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Kasaysayan. All rights reserved.</p>
      </footer>
    </div>
  );
}
