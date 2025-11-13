import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Eye, MessageSquare, BarChart3, Settings, Database, PieChart, FlaskConical } from 'lucide-react';

export function AboutSection() {
  const skills = [
    { 
      name: 'Machine Learning', 
      icon: Brain,
      description: 'Advanced ML algorithms and model optimization'
    },
    { 
      name: 'Deep Learning', 
      icon: Brain,
      description: 'Neural networks and transformer architectures'
    },
    { 
      name: 'Computer Vision', 
      icon: Eye,
      description: 'Image processing and visual recognition systems'
    },
    { 
      name: 'Natural Language Processing', 
      icon: MessageSquare,
      description: 'Text analysis and language model fine-tuning'
    },
    { 
      name: 'Data Processing & Analytics', 
      icon: Database,
      description: 'Large-scale data processing and statistical analysis'
    },
    { 
      name: 'MLOps & Deployment', 
      icon: Settings,
      description: 'Production ML systems and pipeline automation'
    },
    { 
      name: 'Data Visualization', 
      icon: PieChart,
      description: 'Interactive dashboards and analytical insights'
    },
    { 
      name: 'Research & Development', 
      icon: FlaskConical,
      description: 'Innovation and cutting-edge AI research'
    }
  ];

  const tools = [
    { category: 'Programming Languages', items: ['Python', 'C++', 'Java'] },
    { category: 'ML & DL', items: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn'] },
    { category: 'NLP & LLMs', items: ['NLTK', 'SpaCy', 'Transformers', 'LangChain', 'LlamaIndex'] },
    { category: 'Computer Vision', items: ['OpenCV', 'Ultralytics YOLO'] },
    { category: 'Data Processing & Analytics', items: ['Pandas', 'NumPy', 'SciPy', 'SQL'] },
    { category: 'Data Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI'] },
    { category: 'MLOps & Deployment', items: ['MLflow', 'CML', 'Streamlit', 'Flask', 'FastAPI'] }
  ];

  const achievements = [
    { number: '+50', label: 'Projets Réalisés', description: 'Solutions IA & ML' },
    { number: '1', label: 'Alternance en cours', description: 'Développeur' },
    { number: '2', label: 'Stages', description: "Expérience en IA & Data Science" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Étudiant-ingénieur en Data Science et IA, je maîtrise les fondamentaux du machine learning, du traitement de données et du développement fullstack. Mon objectif est de concevoir des systèmes intelligents capables de transformer les données en solutions concrètes et performantes. Passionné par l’apprentissage continu, je cherche à allier excellence technique et impact réel.
          </p>
        </motion.div>

        {/* Achievements Stats - Ultra Compact */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12 max-w-2xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center p-3 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-xl md:text-2xl mb-0.5 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm mb-0.5">{achievement.label}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{achievement.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Expérience Professionnelle</h3>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="text-lg text-foreground mb-2">Développeur Full Stack (Alternance) - SpinalCom</h4>
                    <p className="text-sm mb-2">sep 2024 – aug 2027</p>
                    <p>
                     <p> - Conception et développement de dashboards interactifs pour la visualisation et l’analyse temps réel de données IoT industrielles.</p>
                     <p> - Intégration de solutions de monitoring et d’alerting automatisées, améliorant la fiabilité et la réactivité des systèmes.</p>
                     <p> - Collaboration avec les équipes Data et Produit pour industrialiser les modèles d’analyse et optimiser la restitution des insights via des interfaces web modernes.</p>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg text-foreground mb-2">Stage Data Analyst - Telligo</h4>
                    <p className="text-sm mb-2">juin 2024 – août 2024</p>
                    <p>
                      <p> - Création de dashboards interactifs (Power BI / Tableau / Python) pour le suivi des indicateurs clés (taux de satisfaction, inscriptions, fréquentation).</p>
                      <p> - Mise en place de scripts d’automatisation pour accélérer la collecte et la préparation des données (Python, Pandas, SQL).</p>
                      <p> - Présentation des résultats à l’équipe marketing pour appuyer la prise de décision basée sur les données.</p>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg text-foreground mb-2">Stage d'observation - Renault Tanger</h4>
                    <p className="text-sm mb-2">juillet 2023 – août 2023</p>
                    <p>
                      <p> - Participation à la collecte et à l’analyse de données de performance des lignes de montage.</p>
                      <p> - Découverte du fonctionnement d’une usine 4.0 et des interactions entre mécanique, automatisme et data.</p>
                      <p> - Observation du flux de production, de la robotique et de l’organisation industrielle.</p>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education & Certifications */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Education & Certifications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg mb-1">Cycle d'ingénieur En Intelligence Artificielle et Data Science (en alternance)</h4>
                    <p className="text-sm text-muted-foreground mb-1">ESIEA</p>
                    <p className="text-sm text-muted-foreground mb-1">Paris</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Mobilité internationale</h4>
                    <p className="text-sm text-muted-foreground mb-1">Wrexham University, Royaume-Uni</p>
                    <p className="text-sm text-muted-foreground">mai 2025 – août 2025</p>
                  </div>
                  <div className="pt-2">
                    <h5 className="text-md mb-3">Soft Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Communication', 'Problem Solving', 'Teamwork', 'Time Management'].map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills and Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Core Competencies - Compact Modern Design */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-4">Core Competencies</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="group"
                    >
                      <div className="relative p-4 rounded-xl border border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-secondary/30 hover:shadow-md transition-all duration-300 cursor-pointer">
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h4 className="text-sm mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Subtle hover effect overlay */}
                        <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">outils et Technologies</h3>
                <div className="space-y-6">
                  {tools.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                        {category.category}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.items.map((tool) => (
                          <Badge 
                            key={tool}
                            variant="secondary" 
                            className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Research & Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
            {/* 
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5"></Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6 text-center">Research & Publications</h3>
              <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div>
                <h4 className="text-lg mb-2">• Explainable ML for Liver Disease Detection</h4>
                <p className="text-sm text-muted-foreground mb-1"><strong>IEEE, Oct 2024</strong></p>
                <p className="text-sm text-muted-foreground">
                  Integrated SHAP, LIME, and Anchors to improve interpretability in diagnosing FLD and HBV.
                </p>
                </div>
                <div>
                <h4 className="text-lg mb-2">• ML-Based Anomaly Detection in Healthcare</h4>
                <p className="text-sm text-muted-foreground mb-1"><strong>IEEE, Oct 2024</strong></p>
                <p className="text-sm text-muted-foreground">
                  Survey of ML techniques (e.g., autoencoders, XGBoost) for detecting anomalies in healthcare IoT and WSNs.
                </p>
                </div>
              </div>
              </div>
            </CardContent>
            </Card>
            */}
        </motion.div>
      </div>
    </section>
  );
}