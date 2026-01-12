export default function Home() {
  return (
    <main className="min-h-screen bg-background-blue-0 p-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-title text-32 font-medium text-text-primary mb-8">
          Nexus UI - Design System Configured
        </h1>
        
        <div className="bg-white-0 rounded-8 p-24 shadow-sm">
          <h2 className="font-title text-24 font-medium text-text-primary mb-16">
            Design Tokens Loaded
          </h2>
          
          <div className="space-y-16">
            <section>
              <h3 className="text-20 font-medium text-text-primary mb-12">Colors</h3>
              <div className="flex gap-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-40 h-40 bg-hot-pink-800 rounded-8"></div>
                  <span className="text-14 text-text-secondary">Hot Pink</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-40 h-40 bg-blue-800 rounded-8"></div>
                  <span className="text-14 text-text-secondary">Blue</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-40 h-40 bg-navy-blue-800 rounded-8"></div>
                  <span className="text-14 text-text-secondary">Navy Blue</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-40 h-40 bg-ice-blue-800 rounded-8"></div>
                  <span className="text-14 text-text-secondary">Ice Blue</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-40 h-40 bg-green-800 rounded-8"></div>
                  <span className="text-14 text-text-secondary">Green</span>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-20 font-medium text-text-primary mb-12">Typography</h3>
              <div className="space-y-8">
                <p className="font-title text-24 font-medium">Outfit - Title Font</p>
                <p className="font-body text-16">Inter - Body Font</p>
              </div>
            </section>
            
            <section>
              <h3 className="text-20 font-medium text-text-primary mb-12">Spacing</h3>
              <div className="flex gap-8 items-end">
                <div className="bg-hot-pink-800 w-4 h-4"></div>
                <div className="bg-hot-pink-800 w-8 h-8"></div>
                <div className="bg-hot-pink-800 w-12 h-12"></div>
                <div className="bg-hot-pink-800 w-16 h-16"></div>
                <div className="bg-hot-pink-800 w-24 h-24"></div>
                <div className="bg-hot-pink-800 w-40 h-40"></div>
              </div>
              <p className="text-12 text-text-tertiary mt-8">4px, 8px, 12px, 16px, 24px, 40px</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
