import { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('pre');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['pre', 'production', 'post'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#192A51] via-[#192A51] to-[#2a3a61]">
      {/* Dropdown Navigation */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-[#192A51] backdrop-blur-lg rounded-lg px-6 py-3 border-2 border-[#967AA1] shadow-lg text-[#F5E6E8] hover:bg-[#2a3a61] transition-all duration-300"
        >
          <pre className="text-xs leading-tight">
{isMenuOpen ? `╔═══════════╗
║   MENU ▲  ║
╚═══════════╝` : `╔═══════════╗
║   MENU ▼  ║
╚═══════════╝`}
          </pre>
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-[#192A51] backdrop-blur-lg rounded-lg border-2 border-[#967AA1] shadow-xl overflow-hidden">
            <a
              href="#pre"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-8 py-5 transition-all duration-200 border-b-2 border-[#967AA1]/30 ${
                activeSection === 'pre'
                  ? 'bg-[#967AA1] text-white'
                  : 'text-[#D5C6E0] hover:bg-[#2a3a61] hover:text-white'
              }`}
            >
              <pre className="text-sm leading-tight">
{`>>> PRE-PRODUCTION`}
              </pre>
            </a>
            <a
              href="#production"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-8 py-5 transition-all duration-200 border-b-2 border-[#967AA1]/30 ${
                activeSection === 'production'
                  ? 'bg-[#967AA1] text-white'
                  : 'text-[#D5C6E0] hover:bg-[#2a3a61] hover:text-white'
              }`}
            >
              <pre className="text-sm leading-tight">
{`>>> PRODUCTION`}
              </pre>
            </a>
            <a
              href="#post"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-8 py-5 transition-all duration-200 ${
                activeSection === 'post'
                  ? 'bg-[#967AA1] text-white'
                  : 'text-[#D5C6E0] hover:bg-[#2a3a61] hover:text-white'
              }`}
            >
              <pre className="text-sm leading-tight">
{`>>> POST-PRODUCTION`}
              </pre>
            </a>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="w-full">
        {/* Pre-Production Section */}
        <section id="pre" className="min-h-screen bg-gradient-to-br from-[#192A51] to-[#2a3a61] p-16 flex items-center justify-center relative overflow-hidden">
          {/* ASCII Art Background Elements */}
          <div className="absolute top-10 left-10 text-[#967AA1] opacity-40 pointer-events-none">
            <pre className="text-xs leading-tight">
{`   ╔═══╗
   ║ ★ ║
   ╚═══╝`}
            </pre>
          </div>
          
          <div className="absolute top-32 right-20 text-[#AAA1C8] opacity-40 pointer-events-none">
            <pre className="text-sm leading-tight">
{`  ♪ ♫
 ♫ ♪ ♫
  ♪ ♫`}
            </pre>
          </div>
          
          <div className="absolute bottom-20 left-32 text-[#D5C6E0] opacity-30 pointer-events-none">
            <pre className="text-xs leading-tight">
{`╔════════╗
║ K-POP  ║
╚════════╝`}
            </pre>
          </div>
          
          <div className="absolute bottom-40 right-16 text-[#967AA1] opacity-40 pointer-events-none">
            <pre className="text-sm leading-tight">
{`  ✿ ❀ ✿
 ❀ ✿ ❀ ✿
  ✿ ❀ ✿`}
            </pre>
          </div>

          <div className="absolute top-1/2 right-40 text-[#AAA1C8] opacity-30 pointer-events-none">
            <pre className="text-xs leading-tight">
{`♥ ♥ ♥
 ♥ ♥
  ♥`}
            </pre>
          </div>

          <div className="max-w-4xl relative z-10 w-full">
            <div className="mb-16 text-center">
              <pre className="text-[#967AA1] text-sm mb-4 inline-block">
{`╔════════════════════════════════════════════╗
║  >>>  P R E - P R O D U C T I O N  <<<   ║
╚════════════════════════════════════════════╝`}
              </pre>
              <h2 className="text-5xl text-white mb-2">Pre-Production</h2>
              <p className="text-[#D5C6E0] text-lg">The Foundation Stage</p>
            </div>

            <div className="space-y-12 text-[#F5E6E8]">
              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#967AA1] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`✿\n✿`}
                  </pre>
                  <span>Topic One</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  pre-production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#AAA1C8] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`★\n★`}
                  </pre>
                  <span>Topic Two</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  pre-production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#967AA1] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`♥\n♥`}
                  </pre>
                  <span>Topic Three</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  pre-production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#AAA1C8] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`✦\n✦`}
                  </pre>
                  <span>Topic Four</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  pre-production value chain. Add your content here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Production Section */}
        <section id="production" className="min-h-screen bg-gradient-to-br from-[#2a3a61] to-[#192A51] p-16 flex items-center justify-center relative overflow-hidden">
          {/* ASCII Art Background Elements */}
          <div className="absolute top-20 right-10 text-[#967AA1] opacity-40 pointer-events-none">
            <pre className="text-sm leading-tight">
{`  ╔══╗
  ║♫ ║
  ╚══╝`}
            </pre>
          </div>
          
          <div className="absolute top-48 left-24 text-[#AAA1C8] opacity-30 pointer-events-none">
            <pre className="text-xs leading-tight">
{`░▒▓█ PRODUCTION █▓▒░
░▒▓█ ░▒▓█ ░▒▓█ ░▒▓█`}
            </pre>
          </div>
          
          <div className="absolute bottom-32 right-24 text-[#D5C6E0] opacity-40 pointer-events-none">
            <pre className="text-sm leading-tight">
{`★ ✦ ★ ✦
 ✦ ★ ✦
  ★ ✦`}
            </pre>
          </div>
          
          <div className="absolute bottom-16 left-16 text-[#967AA1] opacity-40 pointer-events-none">
            <pre className="text-xs leading-tight">
{`  ╔════╗
  ║ ♥♥ ║
  ╚════╝`}
            </pre>
          </div>

          <div className="absolute top-1/3 left-1/4 text-[#AAA1C8] opacity-30 pointer-events-none">
            <pre className="text-xs leading-tight">
{`✿ ✿ ✿
 ✿ ✿
  ✿`}
            </pre>
          </div>

          <div className="max-w-4xl relative z-10 w-full">
            <div className="mb-16 text-center">
              <pre className="text-[#967AA1] text-sm mb-4 inline-block">
{`╔════════════════════════════════════════════╗
║  >>>  P R O D U C T I O N  P H A S E  <<<  ║
╚════════════════════════════════════════════╝`}
              </pre>
              <h2 className="text-5xl text-white mb-2">Production</h2>
              <p className="text-[#D5C6E0] text-lg">Creation & Recording</p>
            </div>

            <div className="space-y-12 text-[#F5E6E8]">
              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#967AA1] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`♫\n♫`}
                  </pre>
                  <span>Topic One</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#AAA1C8] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`★\n★`}
                  </pre>
                  <span>Topic Two</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#967AA1] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`✿\n✿`}
                  </pre>
                  <span>Topic Three</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#AAA1C8] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`♥\n♥`}
                  </pre>
                  <span>Topic Four</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#967AA1] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`✦\n✦`}
                  </pre>
                  <span>Topic Five</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  production value chain. Add your content here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Production Section */}
        <section id="post" className="min-h-screen bg-gradient-to-br from-[#192A51] to-[#2a3a61] p-16 flex items-center justify-center relative overflow-hidden">
          {/* ASCII Art Background Elements */}
          <div className="absolute top-16 left-12 text-[#967AA1] opacity-40 pointer-events-none">
            <pre className="text-sm leading-tight">
{`★ ✦ ★
 ✦ ★ ✦
  ★ ✦`}
            </pre>
          </div>
          
          <div className="absolute top-40 right-16 text-[#AAA1C8] opacity-30 pointer-events-none">
            <pre className="text-xs leading-tight">
{`╔═══════════╗
║ POST-PROD ║
╚═══════════╝`}
            </pre>
          </div>
          
          <div className="absolute bottom-24 left-20 text-[#D5C6E0] opacity-40 pointer-events-none">
            <pre className="text-sm leading-tight">
{`✿  ✿ ❀
 ❀ ✿ ❀
  ✿ ❀`}
            </pre>
          </div>
          
          <div className="absolute bottom-48 right-32 text-[#967AA1] opacity-40 pointer-events-none">
            <pre className="text-xs leading-tight">
{`♥ ♥ ♥ ♥
 ♥ ♥ ♥
  ♥ ♥`}
            </pre>
          </div>

          <div className="absolute top-2/3 left-1/3 text-[#AAA1C8] opacity-30 pointer-events-none">
            <pre className="text-xs leading-tight">
{`  ╔══╗
  ║♪♫║
  ╚══╝`}
            </pre>
          </div>

          <div className="max-w-4xl relative z-10 w-full">
            <div className="mb-16 text-center">
              <pre className="text-[#967AA1] text-sm mb-4 inline-block">
{`╔════════════════════════════════════════════╗
║  >>>  P O S T - P R O D U C T I O N  <<<   ║
╚═══════════════════════════════════════���════╝`}
              </pre>
              <h2 className="text-5xl text-white mb-2">Post-Production</h2>
              <p className="text-[#D5C6E0] text-lg">Polish & Promotion</p>
            </div>

            <div className="space-y-12 text-[#F5E6E8]">
              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#967AA1] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`✦\n✦`}
                  </pre>
                  <span>Topic One</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  post-production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#AAA1C8] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`★\n★`}
                  </pre>
                  <span>Topic Two</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  post-production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#967AA1] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`♥\n♥`}
                  </pre>
                  <span>Topic Three</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  post-production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#AAA1C8] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`✿\n✿`}
                  </pre>
                  <span>Topic Four</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  post-production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#967AA1] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`♫\n♫`}
                  </pre>
                  <span>Topic Five</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  post-production value chain. Add your content here.
                </p>
              </div>

              <div className="transition-all duration-300 hover:translate-x-2">
                <h3 className="text-[#AAA1C8] text-2xl mb-3 flex items-start gap-3">
                  <pre className="text-xs leading-none mt-1">
{`❀\n❀`}
                  </pre>
                  <span>Topic Six</span>
                </h3>
                <p className="text-[#D5C6E0] text-lg leading-relaxed ml-12">
                  Placeholder text for your research content. This will be replaced with your actual research about the K-pop 
                  post-production value chain. Add your content here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}