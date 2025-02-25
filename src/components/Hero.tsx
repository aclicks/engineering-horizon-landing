
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    <section id="sobre">
      <AuroraBackground>
        <div 
          className="relative z-10 flex flex-col items-center justify-center min-h-screen section-padding"
          style={{
            backgroundImage: 'url("/lovable-uploads/835d269c-6903-406b-9072-0790ea61e9ab.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay - increased from 50% to 65% opacity */}
          <div className="absolute inset-0 bg-black/65 z-0"></div>
          
          <div className="relative z-20 max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#0060E6] text-white rounded-full text-base font-bold mb-6 animate-fade-in font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
              REGULARIZAÇÃO E APROVAÇÃO NO CORPO DE BOMBEIROS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up font-citrine" style={{ fontVariationSettings: '"wght" 700' }}>
              <span className="text-white">Planeje, </span>
              <span className="text-white">projete, </span>
              <span className="text-[#0060E6]">proteja.</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-4xl mx-auto animate-fade-up font-citrine" style={{ fontVariationSettings: '"wght" 550', animationDelay: "0.2s" }}>
              A Projerb Engenharia, é uma empresa de Projetos de Engenharia, que atua no segmento de projetos de prevenção contra incêndio e projetos complementares de engenharia, assim como na gestão de projetos de engenharia, envolvendo o planejamento, elaboração e compatibilização de projetos, proporcionando uma entrega de pacote de projetos ao cliente com redução de conflitos entre eles e melhor otimização para execução da obra.
            </p>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
