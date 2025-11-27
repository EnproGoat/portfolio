import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import profilePhoto from './assets/pdp.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C', 'C#', 'Lua'],
    frontend: ['React.js', 'Next.js', 'React Native', 'Expo', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Flask', 'Express.js', 'REST API', 'Laravel', 'Symfony'],
    databases: ['MongoDB', 'GraphQL', 'Redis', 'MySQL', 'PostgreSQL', 'Oracle', 'SQLite', 'MariaDB'],
    cloud: ['AWS S3', 'AWS Lambda', 'Serverless', 'Stripe', 'Webhooks', 'Github Workflow', 'Git', 'Docker', 'Postman']
  };

  const projects = [
    {
      title: 'Application Météorologique Full-Stack',
      tags: ['PHP', 'Node.js', 'WebSocket', 'Webhook', 'IA', 'MongoDB', 'MySQL'],
      description: 'Application météo complète avec architecture MVC, assistant IA (Llama 3.2) intégré via tchat temps réel, et système de gestion de comptes.',
      features: [
        'Architecture MVC modulaire et scalable',
        'Météothèque avec opérations CRUD',
        'Assistant IA temps réel via WebSockets',
        'API REST sécurisée pour l\'historique',
        'Suivi d\'activité par Webhook'
      ],
      link: 'https://github.com/Samwert45/SAE-S3'
    },
    {
      title: 'Plateforme de Télé-Collaboration Médicale',
      tags: ['React', 'TypeScript', 'WebRTC', 'Kafka', 'IA', 'Neo4J', 'Qdrant', 'PostgreSQL', 'Supabase', 'NodeJS'],
      description: 'Plateforme de téléconsultation médicale avec visioconférence collaborative et génération automatique de rapports.',
      features: [
        'Interface React/TS pour RCP',
        'Visio collaborative (WebRTC)',
        'Backend Node.js avec Kafka',
        'Base Vectorielle (Qdrant) et Graphe (Neo4j)',
        'Génération de rapports via MistralAI'
      ]
    },
    {
      title: 'SaaS Vidéo B2B - Pop Eye',
      tags: ['Next.js', 'AWS', 'MongoDB', 'Stripe', 'NodeJS'],
      description: 'Solution SaaS de gestion de trombinoscope d\'entreprise avec paiements intégrés.',
      features: [
        'Architecture Next.js performante',
        'Stockage AWS S3',
        'Intégration Stripe pour paiements',
        'Gestion MongoDB',
        'Interface d\'administration complète'
      ]
    },
    {
      title: 'Jeu de Démineur',
      tags: ['JavaScript', 'HTML5', 'CSS3'],
      description: 'Jeu de démineur classique développé en JavaScript vanilla avec interface interactive.',
      features: [
        'Logique de jeu complète',
        'Interface utilisateur responsive',
        'Système de drapeaux et révélation',
        'Chronomètre et compteur de mines',
        'Différents niveaux de difficulté'
      ],
      link: 'https://github.com/EnproGoat/Minesweeper'
    },
    {
      title: 'Shooter - Roblox',
      tags: ['Lua', 'Roblox Studio'],
      description: 'Jeu de tir multijoueur sur Roblox avec système de points, boutique d\'armes et progression.',
      features: [
        'Système de tir fluide et précis',
        'Gestion de points par élimination',
        'Boutique d\'armes avec amélioration',
        'Système de progression',
        'Multijoueur compétitif'
      ]
    },
    {
      title: 'Morpion Multijoueur - Roblox',
      tags: ['Lua', 'Roblox Studio'],
      description: 'Jeu de morpion (tic-tac-toe) développé sur Roblox avec mode multijoueur.',
      features: [
        'Logique de jeu morpion complète',
        'Mode multijoueur',
        'Détection de victoire automatique',
        'Interface 3D interactive'
      ]
    }
  ];

  const experience = {
    company: 'Pop Eye',
    role: 'Stagiaire Développeur Full-Stack',
    duration: '2 mois',
    tasks: [
      'Développement et maintenance de l\'application mobile React Native',
      'Mise en place de fonctions Serverless (AWS Lambda)',
      'Gestion de la synchronisation bidirectionnelle des données (MongoDB)',
      'Amélioration de la performance du back-office Next.js',
      'Création d\'un SaaS vidéo B2B complet'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 relative">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent absolute left-0">
              CL
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 mx-auto">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium hover:text-purple-400 transition-colors ${activeSection === item ? 'text-purple-400' : 'text-gray-300'}`}
                >
                  {item === 'home' ? 'Accueil' : item === 'about' ? 'À propos' : item === 'experience' ? 'Expérience' : item === 'projects' ? 'Projets' : item === 'skills' ? 'Compétences' : 'Contact'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden absolute right-0 text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-900/50 rounded transition-colors"
                >
                  {item === 'home' ? 'Accueil' : item === 'about' ? 'À propos' : item === 'experience' ? 'Expérience' : item === 'projects' ? 'Projets' : item === 'skills' ? 'Compétences' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src={profilePhoto}
              alt="Cédric Lok"
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-purple-400 shadow-lg shadow-purple-500/50 animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse animate-slide-up">
            Cédric Lok
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-6 animate-slide-up delay-100">
            Développeur Full-Stack Junior
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up delay-200">
            Étudiant en 3ème année de BUT Informatique, passionné par le développement web et mobile, l'architecture cloud et l'intelligence artificielle.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-300">
            <a href="https://github.com/EnproGoat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 text-white font-extrabold text-lg tracking-wide rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-white/20 border border-white/20 transform-gpu">
              <Github size={24} strokeWidth={2.5} /> GitHub
            </a>
            <a href="https://linkedin.com/in/cédric-lok" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white font-extrabold text-lg tracking-wide rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-sky-500/50 border border-white/20 transform-gpu">
              <Linkedin size={24} strokeWidth={2.5} /> LinkedIn
            </a>
            <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-600 hover:from-amber-300 hover:to-orange-500 text-white font-extrabold text-lg tracking-wide rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-orange-500/50 border border-white/20 transform-gpu">
              <Mail size={24} strokeWidth={2.5} /> Contact
            </button>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
            À Propos
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all animate-slide-in-left hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-400" /> Formation
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-purple-300">BUT Informatique</h4>
                  <p className="text-gray-400">2023 - 2026</p>
                  <p className="text-gray-300">Université Paris-Est Créteil</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300">Baccalauréat Technologique SIN</h4>
                  <p className="text-gray-400">2023</p>
                  <p className="text-gray-300">Lycée Paul Valéry - Paris</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all animate-slide-in-right hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6">Profil</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Développeur full-stack junior passionné par la création d'applications web et mobiles innovantes. Je maîtrise l'ensemble du cycle de développement, de la conception à la mise en production.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Actuellement à la recherche d'un stage de 3 mois à partir de mars ou d'une alternance pour décembre (1semaine/1semaine) afin de continuer à développer mes compétences dans un environnement professionnel stimulant.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm hover:bg-purple-600/50 transition-all hover:scale-105 cursor-default">Autonomie</span>
                <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm hover:bg-purple-600/50 transition-all hover:scale-105 cursor-default">Rigueur</span>
                <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm hover:bg-purple-600/50 transition-all hover:scale-105 cursor-default">Esprit d'équipe</span>
                <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm hover:bg-purple-600/50 transition-all hover:scale-105 cursor-default">Adaptabilité</span>
                <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm hover:bg-purple-600/50 transition-all hover:scale-105 cursor-default">Anglais courant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
            Expérience Professionnelle
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all animate-scale-in hover:shadow-lg hover:shadow-purple-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-600/30 rounded-lg">
                <Briefcase size={32} className="text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-300">{experience.role}</h3>
                <p className="text-xl text-gray-300">{experience.company}</p>
                <p className="text-gray-400">{experience.duration}</p>
              </div>
            </div>
            <div className="space-y-4">
              {experience.tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300 flex-1">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
            Projets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 flex flex-col animate-fade-in hover:shadow-xl hover:shadow-purple-500/30 delay-${Math.min((idx + 1) * 100, 600)} transform-gpu`}>
                <h3 className="text-xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/30 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="space-y-2 mb-4 flex-grow">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5"></div>
                      <p className="text-gray-400 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-cyan-400 to-teal-500 hover:from-cyan-300 hover:to-teal-400 text-white font-extrabold text-base tracking-wide rounded-xl transition-all mt-auto hover:scale-105 shadow-md hover:shadow-xl hover:shadow-cyan-500/50 border border-white/20 transform-gpu"
                  >
                    <ExternalLink size={20} strokeWidth={2.5} />
                    Voir le projet
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
            Compétences
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all animate-slide-in-left hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-3">
                <Code size={24} /> Langages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-all hover:scale-110 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all animate-slide-in-right hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-pink-600/30 rounded-lg hover:bg-pink-600/50 transition-all hover:scale-110 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all animate-slide-in-left delay-100 hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-600/30 rounded-lg hover:bg-blue-600/50 transition-all hover:scale-110 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all animate-slide-in-right delay-100 hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Bases de Données</h3>
              <div className="flex flex-wrap gap-3">
                {skills.databases.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-green-600/30 rounded-lg hover:bg-green-600/50 transition-all hover:scale-110 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 md:col-span-2 hover:border-purple-500/50 transition-all animate-scale-in hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {skills.cloud.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-orange-600/30 rounded-lg hover:bg-orange-600/50 transition-all hover:scale-110 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
            Contact
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 animate-scale-in hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
            <p className="text-xl text-center mb-8 text-gray-300">
              Actuellement à la recherche d'un stage de 3 mois à partir de mars
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="mailto:lokcedriclok@gmail.com" className="flex items-center gap-4 p-4 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                <Mail size={24} className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">lokcedriclok@gmail.com</p>
                </div>
              </a>
              <a href="tel:0677417962" className="flex items-center gap-4 p-4 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                <Phone size={24} className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Téléphone</p>
                  <p className="text-white">06 77 41 79 62</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 bg-purple-600/20 rounded-lg">
                <MapPin size={24} className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Localisation</p>
                  <p className="text-white">Paris 13</p>
                </div>
              </div>
              <a href="https://github.com/EnproGoat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                <Github size={24} className="text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="text-white">EnproGoat</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Cédric Lok. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
