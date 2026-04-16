"use client"

import { useEffect, useRef } from 'react'

export default function Home() {
  const chkRef = useRef<HTMLInputElement>(null)
  const hamburgerRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dark mode toggle
    const chk = chkRef.current
    if (chk) {
      chk.addEventListener('change', () => {
        document.body.classList.toggle('dark')
      })
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const header = document.querySelector('.cabecalho')
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 60)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Scroll reveal with IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    revealElements.forEach((el) => observer.observe(el))

    // Skill bars animation
    const skillFills = document.querySelectorAll('.skill-fill')
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.5 })

    skillFills.forEach((el) => skillObserver.observe(el))

    // Mobile menu toggle
    const hamburger = hamburgerRef.current
    const mobileMenu = mobileMenuRef.current
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        mobileMenu.classList.toggle('active')
      })

      // Close mobile menu when clicking a link
      const mobileLinks = mobileMenu.querySelectorAll('.nav-link')
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active')
          mobileMenu.classList.remove('active')
        })
      })
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
      skillObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* HEADER / NAVBAR */}
      <header className="cabecalho">
        <div className="logo-container">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fl%20logo-67hjn6TMte1LVynxE90eEFtAtTXILB.jpg" alt="Fegaduolize Company Logo" />
        </div>

        <nav className="nav-menu">
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#portfolio" className="nav-link">Portfólio</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#orcamento" className="nav-link">Orçamento</a>
        </nav>

        <div className="nav-right">
          <input type="checkbox" id="chk-menu" className="theme-checkbox" ref={chkRef} />
          <label className="label-menu" htmlFor="chk-menu">
            <svg className="imagem-menu sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg className="imagem-menu moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            <div className="ball"></div>
          </label>

          <a href="#orcamento" className="btn btn-primary">Solicitar Orçamento</a>

          <div className="hamburger" ref={hamburgerRef}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu" ref={mobileMenuRef}>
        <a href="#inicio" className="nav-link">Início</a>
        <a href="#servicos" className="nav-link">Serviços</a>
        <a href="#portfolio" className="nav-link">Portfólio</a>
        <a href="#sobre" className="nav-link">Sobre</a>
        <a href="#orcamento" className="nav-link">Orçamento</a>
      </div>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section" id="inicio">
          <div className="hero-container">
            <div className="hero-text">
              <span className="hero-badge">✦ Agência de Marketing Digital</span>
              <h1 className="hero-title">
                Transforme sua marca em <span className="highlight">resultados</span> reais
              </h1>
              <p className="hero-subtitle">
                Estratégias de marketing digital personalizadas para fazer sua empresa 
                crescer, atrair clientes e dominar o mercado.
              </p>
              <div className="hero-buttons">
                <a href="#orcamento" className="btn btn-primary">Quero meu orçamento</a>
                <a href="#portfolio" className="btn btn-outline">Ver portfólio</a>
              </div>
              <div className="trust-row">
                <div className="trust-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>+15 clientes atendidos</span>
                </div>
                <div className="trust-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>7 anos de experiência</span>
                </div>
                <div className="trust-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Resultados comprovados</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-marketing-container">
                <img src="/hero-marketing-new.jpg" alt="Marketing Digital Moderno" className="hero-marketing-main" />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="servicos-section" id="servicos">
          <div className="section-container">
            <div className="section-header reveal">
              <span className="section-label">O que fazemos</span>
              <h2 className="section-title">Serviços que geram resultado</h2>
            </div>
            <div className="servicos-grid">
              {/* Service Card 1 */}
              <div className="servico-card reveal">
                <svg className="servico-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
                <h3>Gestão de Redes Sociais</h3>
                <p>Criação de conteúdo estratégico, calendário editorial e gestão completa das suas redes sociais para engajar e converter.</p>
                <a href="#orcamento" className="servico-link">Saiba mais →</a>
              </div>

              {/* Service Card 2 */}
              <div className="servico-card reveal">
                <svg className="servico-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <h3>Tráfego Pago (Meta &amp; Google Ads)</h3>
                <p>Campanhas de anúncios otimizadas no Facebook, Instagram e Google para atrair o cliente certo no momento certo.</p>
                <a href="#orcamento" className="servico-link">Saiba mais →</a>
              </div>

              {/* Service Card 3 */}
              <div className="servico-card reveal">
                <svg className="servico-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"></path>
                </svg>
                <h3>Identidade Visual &amp; Design</h3>
                <p>Criação de logos, materiais gráficos e toda a identidade visual da sua marca com consistência e personalidade.</p>
                <a href="#orcamento" className="servico-link">Saiba mais →</a>
              </div>

              {/* Service Card 4 */}
              <div className="servico-card reveal">
                <svg className="servico-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
                <h3>Produção de Conteúdo</h3>
                <p>Textos, artes, vídeos curtos e reels que comunicam o valor da sua marca e conectam com seu público ideal.</p>
                <a href="#orcamento" className="servico-link">Saiba mais →</a>
              </div>

              {/* Service Card 5 */}
              <div className="servico-card reveal">
                <svg className="servico-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
                <h3>Relatórios &amp; Estratégia</h3>
                <p>Análise de métricas, planejamento estratégico mensal e relatórios de performance transparentes e detalhados.</p>
                <a href="#orcamento" className="servico-link">Saiba mais →</a>
              </div>

              {/* Service Card 6 */}
              <div className="servico-card reveal">
                <svg className="servico-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <h3>Sites &amp; Landing Pages</h3>
                <p>Desenvolvimento de sites modernos e landing pages de alta conversão focados em gerar leads e vendas.</p>
                <a href="#orcamento" className="servico-link">Saiba mais →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="sobre-section" id="sobre">
          <div className="sobre-container">
            <div className="sobre-image reveal">
              <div className="sobre-image-frame">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fotodeby-TC4Pstffmkg6g9UwR7G2Fu3NRJO9IE.png" alt="Deby - Profissional de Marketing" />
              </div>
            </div>
            <div className="sobre-text">
              <span className="section-label reveal">Quem está por trás da magia</span>
              <h2 className="section-title reveal">Profissional apaixonada por resultados</h2>
              <p className="sobre-description reveal">
                Sou uma profissional dedicada ao marketing digital, com especialização 
                no setor de logística e transportes. Com mais de 3 anos de experiência, 
                transformo a presença digital de empresas, criando estratégias 
                personalizadas que geram resultados reais e mensuráveis.
              </p>
              
              <div className="skills-container reveal">
                <div className="skill-item">
                  <div className="skill-header">
                    <span>Redes Sociais</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ '--skill-width': '85%' } as React.CSSProperties}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span>Tráfego Pago</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ '--skill-width': '80%' } as React.CSSProperties}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span>Design</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ '--skill-width': '80%' } as React.CSSProperties}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span>Estratégia</span>
                    <span>96%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ '--skill-width': '96%' } as React.CSSProperties}></div>
                  </div>
                </div>
              </div>

              <div className="achievements reveal">
                <div className="achievement-item">
                  <span className="achievement-number">+15</span>
                  <span className="achievement-label">Clientes</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">7</span>
                  <span className="achievement-label">Anos Exp.</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">100%</span>
                  <span className="achievement-label">Dedicação</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / VALUES SECTION */}
        <section className="missao-section">
          <div className="missao-grid">
            <div className="missao-card reveal">
              <h3>Missão</h3>
              <p>Conectar marcas ao seu verdadeiro potencial, com marketing eficaz, comprometimento e resultados reais.</p>
            </div>
            <div className="missao-card reveal">
              <h3>Visão</h3>
              <p>Tornar-se a principal agência de marketing especializada em logística e transportes.</p>
            </div>
            <div className="missao-card reveal">
              <h3>Valores</h3>
              <div className="valores-list">
                <span>✦ Comprometimento</span>
                <span>✦ Agilidade</span>
                <span>✦ Inovação</span>
                <span>✦ Parceria</span>
                <span>✦ Excelência</span>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section className="portfolio-section" id="portfolio">
          <div className="section-container">
            <div className="section-header reveal">
              <span className="section-label">Nosso trabalho</span>
              <h2 className="section-title">Projetos que falam por si</h2>
            </div>
            <div className="portfolio-grid">
              <div className="portfolio-card reveal">
                <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #E18A22 0%, #e9b665 100%)', width: '100%', height: '100%' }}></div>
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Redes Sociais</span>
                  <h3 className="portfolio-title">Transportadora Aan Transportes LTDA</h3>
                  <a href="https://www.instagram.com/aantransportes/" className="portfolio-link">Ver projeto →</a>
                </div>
              </div>
              <div className="portfolio-card reveal">
                <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #972462 0%, #c45a8d 100%)', width: '100%', height: '100%' }}></div>
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Identidade Visual</span>
                  <h3 className="portfolio-title">Tucanos Br</h3>
                  <a href="https://www.instagram.com/tucanosbr/" className="portfolio-link">Ver projeto →</a>
                </div>
              </div>
              <div className="portfolio-card reveal">
                <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #363A3E 0%, #5a6066 100%)', width: '100%', height: '100%' }}></div>
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Tráfego Pago</span>
                  <h3 className="portfolio-title">Frota Brasil</h3>
                  <a href="#orcamento" className="portfolio-link">Ver projeto →</a>
                </div>
              </div>
              <div className="portfolio-card reveal">
                <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #E18A22 0%, #972462 100%)', width: '100%', height: '100%' }}></div>
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">Landing Page</span>
                  <h3 className="portfolio-title">Cargas Rápidas</h3>
                  <a href="#orcamento" className="portfolio-link">Ver projeto →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="depoimentos-section">
          <div className="section-container">
            <div className="section-header reveal">
              <span className="section-label">Feedback</span>
              <h2 className="section-title">O que dizem nossos clientes</h2>
            </div>
            <div className="depoimentos-grid">
              <div className="depoimento-card reveal">
                <div className="depoimento-stars">★★★★★</div>
                <p className="depoimento-text">
                  &quot;A Fegaduolize transformou completamente nossa presença digital. 
                  Os resultados foram além do esperado, com aumento significativo 
                  no engajamento e novos clientes.&quot;
                </p>
                <div className="depoimento-author">
                  <div className="depoimento-avatar">MC</div>
                  <div className="depoimento-info">
                    <h4>João Lemos</h4>
                    <span>Gerente Comercial, Aan Transportes LTDA</span>
                  </div>
                </div>
              </div>

              <div className="depoimento-card reveal">
                <div className="depoimento-stars">★★★★★</div>
                <p className="depoimento-text">
                  &quot;Profissionalismo e dedicação em cada projeto. As campanhas 
                  de tráfego pago trouxeram um ROI impressionante para nossa empresa.&quot;
                </p>
                <div className="depoimento-author">
                  <div className="depoimento-avatar">AS</div>
                  <div className="depoimento-info">
                    <h4>Deila Pepe</h4>
                    <span>Diretora, Tucanos Br</span>
                  </div>
                </div>
              </div>

              <div className="depoimento-card reveal">
                <div className="depoimento-stars">★★★★★</div>
                <p className="depoimento-text">
                  &quot;A identidade visual criada para nossa marca reflete exatamente 
                  o que somos. Trabalho impecável e atendimento excepcional!&quot;
                </p>
                <div className="depoimento-author">
                  <div className="depoimento-avatar">RP</div>
                  <div className="depoimento-info">
                    <h4>Roberto Pereira</h4>
                    <span>Fundador, Frota Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUDGET / CONTACT SECTION */}
        <section className="orcamento-section" id="orcamento">
          <div className="orcamento-container">
            <div className="orcamento-text">
              <h2 className="reveal">Vamos conversar sobre o seu projeto?</h2>
              <p className="reveal">
                Entre em contato para uma consulta gratuita. Vamos entender suas 
                necessidades e criar uma estratégia personalizada para o seu negócio.
              </p>
              <div className="contact-items reveal">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <span>de-ata@hotmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>WhatsApp disponível</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>Brasil</span>
                </div>
              </div>
            </div>
            <div className="form-container reveal">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo</label>
                  <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" placeholder="seu@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="servico">Tipo de serviço</label>
                  <select id="servico" name="servico" required>
                    <option value="">Selecione um serviço</option>
                    <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
                    <option value="Tráfego Pago">Tráfego Pago</option>
                    <option value="Identidade Visual">Identidade Visual</option>
                    <option value="Produção de Conteúdo">Produção de Conteúdo</option>
                    <option value="Relatórios & Estratégia">Relatórios & Estratégia</option>
                    <option value="Sites & Landing Pages">Sites & Landing Pages</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" placeholder="Conte-nos sobre seu projeto..." rows={4}></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  onClick={() => {
                    const nome = (document.getElementById("nome") as HTMLInputElement).value;
                    const email = (document.getElementById("email") as HTMLInputElement).value;
                    const telefone = (document.getElementById("telefone") as HTMLInputElement).value;
                    const servico = (document.getElementById("servico") as HTMLSelectElement).value;
                    const mensagem = (document.getElementById("mensagem") as HTMLTextAreaElement).value;

                    const texto = `Olá! Vim pelo site e gostaria de solicitar um orçamento. 📋

            *Nome:* ${nome}
            *E-mail:* ${email}
            *Telefone:* ${telefone || "Não informado"}
            *Serviço:* ${servico || "Não selecionado"}
            *Mensagem:* ${mensagem || "Não informada"}`;

                    const numeroWhatsApp = "+5541996534541"; // 👈 Substitua pelo número real (ex: 5541999999999)
                    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
                    window.open(url, "_blank");
                  }}
                >
                  Solicitar Orçamento
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="rodape">
        <div className="rodape-container">
          <div className="rodape-brand">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fl%20logo-67hjn6TMte1LVynxE90eEFtAtTXILB.jpg" alt="Fegaduolize Company Logo" />
            <p>Transformando marcas em resultados</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/fegaduolizecompany?igsh=cXNka2tzampwc3Fw&utm_source=qr" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/deborah-fegaduoli-lemos-398105244" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://w.app/fegaduolizecompany" className="social-icon" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>

                </svg>
              </a>
            </div>
          </div>

          <div className="rodape-column">
            <h4>Links</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#orcamento">Contato</a></li>
            </ul>
          </div>

          <div className="rodape-column">
            <h4>Contato</h4>
            <div className="rodape-contact">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                contato de-ata@hotmail.com
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                WhatsApp +55 (41) 99653-4541
              </p>
            </div>
          </div>
        </div>

        <div className="rodape-bottom">
          <p>© 2026 Fegaduolize Company. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}
