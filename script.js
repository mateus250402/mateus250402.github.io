let currentLang = 'pt';

const content = {
  pt: {
    heroTitle: 'Olá, eu sou <span>Desenvolvedor Freelancer</span>',
    heroText: 'Crio sistemas web, dashboards interativos, softwares de gerenciamento e lido com <span>Inteligência Artificial</span> para simplificar processos, organizar dados, analisar e gerar resultados reais para o seu negócio.',
    heroBtn: 'Entrar em contato',

    aboutTitle: 'Sobre mim',
    aboutText: 'Sou desenvolvedor com experiência em <span>PHP</span>, <span>Python</span> (Flask, Streamlit, Pandas, Plotly, Dash), <span>R</span> (ggplot2, dplyr, tidyr), <span>Java</span>, <span>Kotlin</span>, <span>HTML</span>, <span>CSS</span> (Bootstrap) e <span>banco de dados</span> como <span>MySQL</span> e <span>SQLite</span>. Já desenvolvi <span>sistemas completos de inscrição, autenticação, recuperação de senha, dashboards analíticos, automações de e-mail, integrações e chatbots</span>. Atuo também em projetos acadêmicos e de pesquisa, incluindo dashboards para <span>análise de dados</span> na <span>área da saúde</span> e <span>chatbots</span> de apoio a decisão médica. Tenho foco em soluções práticas, bem estruturadas, portáveis e orientadas a resultado, sempre buscando <span>entregar valor real para o cliente</span>.',

    servicesTitle: 'Serviços',
    service1Title: 'Sistemas Web',
    service1Text: 'Desenvolvimento de sistemas completos com login, cadastro, relatórios, painéis administrativos, integração com Pix e mais.',
    service2Title: 'Dashboards',
    service2Text: 'Dashboards interativos com Python, Dash e Streamlit para análise de dados e indicadores.',
    service3Title: 'Inteligência Artificial',
    service3Text: 'Scripts e automações para economizar tempo, integrar sistemas e reduzir trabalho manual.',

    projectProSectionTitle: 'Projetos profissionais',
    projectProSectionText: 'Abaixo alguns exemplos de sistemas, dashboards e automações que já desenvolvi.',

    projectProTitle1: 'Sistema de inscrição - JuvEnart',
    projectProText1: 'Desenvolvi um sistema completo de inscrição para o festival JuvEnart, o maior festival artístico do Rio Grande do Sul, incluindo autenticação, recuperação de senha, chatbot, painel administrativo para gestão de inscrições e integração com pagamento via Pix. A primeira versão feita em PHP, posteriormente migrada para Python Flask e utilizando N8N para integração com api do Gemini para chatbot.',

    projectAcadSectionTitle: 'Projetos acadêmicos',
    projectAcadSectionText: 'Abaixo alguns exemplos de projetos acadêmicos e de pesquisa que já desenvolvi.',

    projectAcadTitle1: 'Backlog de Jogos',
    projectAcadText1: 'Desenvolvi um sistema web completo para gerenciar um backlog de jogos, permitindo adicionar, remover, buscar, ordenar e avaliar jogos. O sistema inclui autenticação de usuários, painel administrativo e integração com uma API externa para buscar informações dos jogos. Foi desenvolvido utilizando Haskell no backend e HTML/CSS no frontend.',

    projectAcadTitle2: 'TCG Educativo',
    projectAcadText2: 'Desenvolvi um jogo de cartas colecionáveis (TCG) educativo focado em ensinar e revisar conteúdos do ENEM e de programação de forma divertida e interativa. O jogo permite aos jogadores construir decks, enfrentar desafios e aprender enquanto jogam. Foi desenvolvido utilizando Java e a biblioteca LibGDX para a interface gráfica.',

    projectAcadTitle3: 'Dashboard de Análise de Dados de Saúde',
    projectAcadText3: 'Criei uma interface em Python Streamlit para integração com trabalho de mestrado sobre XAI na área da saúde. O dashboard permite a inserção de dados do paciente e a visualização de contrafactuais para dados de doença renal crônica, facilitando a análise e interpretação dos resultados pelos pesquisadores.',

    projectAcadTitle4: 'Chatbot de Apoio à Decisão Médica',
    projectAcadText4: 'Desenvolvi um chatbot utilizando Python e a API do Gemini para auxiliar médicos na tomada de decisões clínicas. O chatbot é capaz de responder perguntas, fornecer recomendações baseadas em protocolos de atendimento, melhorando a eficiência e a precisão no atendimento ao paciente.',

    articlesTitle: 'Artigos e publicações',
    articlesText: 'Abaixo alguns artigos e publicações relacionados aos meus projetos acadêmicos e de pesquisa.',

    articleTitle1: 'Protótipo de Dashboard para mostrar explicações contrafactuais para dados de doença renal crônica',

    contactTitle: 'Contato',
    contactText: 'Entre em contato comigo pelos canais abaixo:'
  },

  en: {
    heroTitle: 'Hello, I am a <span>Freelance Developer</span>',
    heroText: 'I create web systems, interactive dashboards, management software and deal with <span>Artificial Intelligence</span> to simplify processes, organize data, analyze and generate real results for your business.',
    heroBtn: 'Get in touch',

    aboutTitle: 'About me',
    aboutText: 'I am a developer with experience in <span>PHP</span>, <span>Python</span> (Flask, Streamlit, Pandas, Plotly, Dash), <span>R</span> (ggplot2, dplyr, tidyr), <span>Java</span>, <span>Kotlin</span>, <span>HTML</span>, <span>CSS</span> (Bootstrap) and <span>databases</span> such as <span>MySQL</span> and <span>SQLite</span>. I have developed <span>complete registration systems, authentication, password recovery, analytical dashboards, email automations, integrations and chatbots</span>. I also work on academic and research projects, including dashboards for <span>data analysis</span> in the <span>health sector</span> and <span>chatbots</span> for clinical decision support. I focus on practical, well-structured, portable and result-oriented solutions, always seeking to <span>deliver real value to the client</span>.',

    servicesTitle: 'Services',
    service1Title: 'Web Systems',
    service1Text: 'Development of complete systems with login, registration, reports, admin panels, Pix integration and more.',
    service2Title: 'Dashboards',
    service2Text: 'Interactive dashboards using Python, Dash and Streamlit for data analysis and KPIs.',
    service3Title: 'Artificial Intelligence',
    service3Text: 'Scripts and automations to save time, integrate systems and reduce manual work.',

    projectProSectionTitle: 'Professional Projects',
    projectProSectionText: 'Below are some examples of systems, dashboards and automations I have developed.',

    projectProTitle1: 'Registration System - JuvEnart',
    projectProText1: 'I developed a complete registration system for the JuvEnart festival, the largest art festival in Rio Grande do Sul, including authentication, password recovery, chatbot, administrative panel for registration management and integration with Pix payment. The first version was made in PHP, later migrated to Python Flask and using N8N for integration with Gemini API for the chatbot.',

    projectAcadSectionTitle: 'Academic Projects',
    projectAcadSectionText: 'Below are some examples of academic and research projects I have developed.',

    projectAcadTitle1: 'Game Backlog',
    projectAcadText1: 'I developed a complete web system to manage a game backlog, allowing users to add, remove, search, sort and rate games. The system includes user authentication, administrative panel and integration with an external API to fetch game information. It was developed using Haskell on the backend and HTML/CSS on the frontend.',

    projectAcadTitle2: 'Educational TCG',
    projectAcadText2: 'I developed an educational trading card game (TCG) focused on teaching and reviewing ENEM and programming contents in a fun and interactive way. The game allows players to build decks, face challenges and learn while playing. It was developed using Java and the LibGDX library for the graphical interface.',

    projectAcadTitle3: 'Health Data Analysis Dashboard',
    projectAcadText3: 'I created an interface in Python Streamlit for integration with a master\'s thesis on XAI in healthcare. The dashboard allows patient data insertion and visualization of counterfactuals for chronic kidney disease data, facilitating analysis and interpretation of results by researchers.',

    projectAcadTitle4: 'Clinical Decision Support Chatbot',
    projectAcadText4: 'I developed a chatbot using Python and the Gemini API to assist doctors in clinical decision making. The chatbot is capable of answering questions, providing recommendations based on care protocols, improving efficiency and accuracy in patient care.',

    articlesTitle: 'Articles and Publications',
    articlesText: 'Below are some articles and publications related to my academic and research projects.',

    articleTitle1: 'Dashboard Prototype to show counterfactual explanations for chronic kidney disease data',

    contactTitle: 'Contact',
    contactText: 'Get in touch with me through the channels below:'
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
