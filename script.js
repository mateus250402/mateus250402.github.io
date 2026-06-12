let currentLang = 'pt';

const content = {
  pt: {
    heroTitle: 'Transformando ideias em <span>Soluções Digitais</span>',
    heroText: 'Desenvolvo sistemas web, dashboards interativos e automações com <span>Inteligência Artificial</span> para otimizar processos, analisar dados e gerar resultados reais para o seu negócio.',
    heroBtn: 'Vamos conversar?',

    aboutTitle: 'Sobre mim',
    aboutText: 'Sou desenvolvedor com sólida experiência em <span>PHP</span>, <span>Python</span> (Flask, Streamlit, Pandas), <span>Java</span> e <span>Kotlin</span>. Especialista em criar <span>sistemas de alta complexidade</span>, incluindo fluxos de autenticação, dashboards analíticos, automações de e-mail e integração de <span>Chatbots com IA</span>. Meu foco é entregar soluções que não apenas funcionam, mas que <span>agregam valor estratégico</span> através de código limpo, portabilidade e foco total no resultado do cliente.',

    servicesTitle: 'Serviços',
    service1Title: 'Sistemas Web & Full-stack',
    service1Text: 'Desenvolvimento de plataformas completas: gestão de usuários, painéis administrativos, relatórios e integração com APIs de pagamento.',
    service2Title: 'Dashboards & Dados',
    service2Text: 'Visualização de dados estratégica com Python, Dash e Streamlit, transformando dados brutos em decisões inteligentes.',
    service3Title: 'IA & Automações',
    service3Text: 'Integração de LLMs (como Gemini e GPT) para criar assistentes inteligentes e scripts que eliminam tarefas manuais repetitivas.',

    projectProSectionTitle: 'Experiência Profissional',
    projectProSectionText: 'Sistemas robustos desenvolvidos para atender demandas reais do mercado.',

    projectProTitle1: 'Sistema de Inscrição - JuvEnart',
    projectProText1: 'Plataforma completa para o maior festival artístico do RS. Inclui gestão de inscritos, recuperação de senha, chatbot inteligente via API do Gemini e integração de pagamentos via Pix. Migrado de PHP para Flask buscando maior escalabilidade.',

    projectProTitle2: 'Gestão de Contatos & Marketing',
    projectProText2: 'Sistema customizado para empresa de streaming com CRUD completo, segmentação dinâmica de perfis e integração com ChatPro para automação de mensagens em massa. Suporte a backups, sincronização, edição em lote.',

    projectProTitle3: 'ERP de Gestão para Grupos de Dança',
    projectProText3: 'Plataforma completa para gestão de companhias de dança. Possui <span>três módulos integrados</span>: Dançarino (agenda e pagamentos via Pix), Coordenador (controle de frequência e gestão operacional) e Gestor (painel analítico de faturamento e métricas). Focado em <span>otimização de processos</span> e visão estratégica do negócio.',

    projectAcadSectionTitle: 'Projetos Acadêmicos & Pesquisa',
    projectAcadSectionText: 'Abaixo alguns exemplos de projetos acadêmicos e de pesquisa que já desenvolvi.',

    projectAcadTitle1: 'Game Backlog Manager',
    projectAcadText1: 'A full-stack web system developed in Haskell to manage game collections, featuring user authentication and external API integration for game metadata.',

    projectAcadTitle2: 'Educational TCG',
    projectAcadText2: 'An interactive trading card game designed for learning programming and exam prep. Built with Java and LibGDX for a rich graphical interface.',

    projectAcadTitle3: 'Healthcare Analysis Dashboard',
    projectAcadText3: 'A Streamlit-based interface for XAI research in healthcare. Visualizes counterfactual data for chronic kidney disease to assist medical researchers.',

    projectAcadTitle4: 'Clinical Decision Support AI',
    projectAcadText4: 'An AI assistant built with Gemini API to aid doctors in making clinical decisions based on established medical protocols.',

    articlesTitle: 'Artigos & Publicações',
    articlesText: 'Scientific research and articles related to my academic projects.',

    articleTitle1: 'Protótipo de Dashboard para explicações contrafactuais em saúde (XAI)',
    articleBtn1: 'Ler Artigo Full',

    contactTitle: 'Contato',
    contactText: 'Vamos transformar seu projeto em realidade?'
  },

  en: {
    heroTitle: 'Turning ideas into <span>Digital Solutions</span>',
    heroText: 'I build web systems, interactive dashboards, and <span>AI-driven automations</span> to streamline processes, analyze data, and drive real results for your business.',
    heroBtn: 'Let\'s talk!',

    aboutTitle: 'About Me',
    aboutText: 'I am a developer with solid experience in <span>PHP</span>, <span>Python</span> (Flask, Streamlit, Pandas), <span>Java</span>, and <span>Kotlin</span>. I specialize in building <span>complex systems</span>, including authentication flows, analytical dashboards, email automations, and <span>AI Chatbot integrations</span>. My focus is on delivering solutions that don\'t just work, but <span>add strategic value</span> through clean code, portability, and a result-oriented approach.',

    servicesTitle: 'Services',
    service1Title: 'Web & Full-stack Systems',
    service1Text: 'Developing complete platforms: user management, admin panels, reporting, and payment API integrations.',
    service2Title: 'Dashboards & Data',
    service2Text: 'Strategic data visualization using Python, Dash, and Streamlit, turning raw data into smart business decisions.',
    service3Title: 'AI & Automations',
    service3Text: 'LLM integration (Gemini/GPT) to create intelligent assistants and scripts that eliminate repetitive manual tasks.',

    projectProSectionTitle: 'Professional Experience',
    projectProSectionText: 'Robust systems developed to meet real market demands.',

    projectProTitle1: 'Registration System - JuvEnart',
    projectProText1: 'A comprehensive platform for the largest art festival in Southern Brazil. Features include participant management, smart chatbot via Gemini API, and Pix payment integration. Migrated from PHP to Flask for scalability.',

    projectProTitle2: 'Contact & Marketing Management',
    projectProText2: 'Custom system for a streaming company featuring full CRUD functionality, dynamic profile segmentation, and ChatPro integration for automated mass messaging.',

    projectProTitle3: 'Dance Group Management ERP',
    projectProText3: 'A comprehensive platform for dance company management. Features <span>three integrated modules</span>: Dancer (scheduling and Pix payments), Coordinator (attendance tracking and operations), and Manager (analytics dashboard for revenue and metrics). Focused on <span>process optimization</span> and strategic insights.',

    projectAcadSectionTitle: 'Academic & Research Projects',
    projectAcadSectionText: 'Highlighting my research and development in academia.',

    projectAcadTitle1: 'Game Backlog Manager',
    projectAcadText1: 'A full-stack web system developed in Haskell to manage game collections, featuring user authentication and external API integration for game metadata.',

    projectAcadTitle2: 'Educational TCG',
    projectAcadText2: 'An interactive trading card game designed for learning programming and exam prep. Built with Java and LibGDX for a rich graphical interface.',

    projectAcadTitle3: 'Healthcare Analysis Dashboard',
    projectAcadText3: 'A Streamlit-based interface for XAI research in healthcare. Visualizes counterfactual data for chronic kidney disease to assist medical researchers.',

    projectAcadTitle4: 'Clinical Decision Support AI',
    projectAcadText4: 'An AI assistant built with Gemini API to aid doctors in making clinical decisions based on established medical protocols.',

    articlesTitle: 'Articles & Publications',
    articlesText: 'Scientific research and articles related to my academic projects.',

    articleTitle1: 'Dashboard Prototype for Counterfactual Explanations in Healthcare (XAI)',
    articleBtn1: 'Read Full Paper',

    contactTitle: 'Contact',
    contactText: 'Let\'s turn your project into reality!'
  }
};

function applyLanguage(lang) {
  const elements = content[lang];

  for (const key in elements) {
    const el = document.getElementById(key);
    if (el) {
      el.innerHTML = elements[key];
    } else {
      console.warn(`Elemento não encontrado no HTML: ${key}`);
    }
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  const btn = document.getElementById('langBtn');
  if (btn) {
    btn.innerText = currentLang === 'pt' ? 'EN' : 'PT';
  }
  applyLanguage(currentLang);
}

/* ===== CARROSSEL ===== */

function nextSlide(button) {
  const carousel = button.closest(".carousel");
  if (!carousel) return;

  const items = carousel.querySelectorAll(".carousel-item");
  let index = Array.from(items).findIndex(item => item.classList.contains("active"));

  if (index === -1) index = 0;

  items[index].classList.remove("active");
  index = (index + 1) % items.length;
  items[index].classList.add("active");
}

function prevSlide(button) {
  const carousel = button.closest(".carousel");
  if (!carousel) return;

  const items = carousel.querySelectorAll(".carousel-item");
  let index = Array.from(items).findIndex(item => item.classList.contains("active"));

  if (index === -1) index = 0;

  items[index].classList.remove("active");
  index = (index - 1 + items.length) % items.length;
  items[index].classList.add("active");
}

/* ===== INICIALIZAÇÃO SEGURA ===== */

document.addEventListener("DOMContentLoaded", function () {
  applyLanguage(currentLang);
});
