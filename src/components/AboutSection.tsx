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
    { number: '100+', label: 'Projects Completed', description: 'AI & ML solutions' },
    { number: '2', label: 'Research Papers', description: 'Published in IEEE' },
    { number: '2', label: 'Internships', description: 'AI & Data Science experience' }
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
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            AI & ML Engineer with a strong foundation in AI and Computer Science. Specializes in designing, developing, and optimizing ML and DL models to tackle complex problems in NLP, CV, and predictive analytics. Proficient in transformer-based architectures (LLMs) and experienced in MLOps for building scalable, production-ready AI systems. Passionate about innovation, data-driven decision-making, and delivering impactful, business-focused AI solutions.
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
                <h3 className="text-2xl mb-6">Professional Journey</h3>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="text-lg text-foreground mb-2">AI & ML Engineer Intern @ Electropi</h4>
                    <p className="text-sm mb-2">Aug 2023 – Dec 2023</p>
                    <p>
                      Worked on developing and implementing machine learning models for real-world applications across 
                      multiple domains including NLP, Deep Learning, and Computer Vision projects. Gained hands-on 
                      experience with the complete ML pipeline from data preprocessing to model deployment, contributing 
                      to innovative AI solutions in a dynamic startup environment. Developed text processing systems, 
                      implemented neural networks for image recognition, and built predictive models using advanced 
                      deep learning techniques.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg text-foreground mb-2">Data Science Intern @ TechnoHacks EduTech</h4>
                    <p className="text-sm mb-2">Aug 2023 – Oct 2023</p>
                    <p>
                      Applied data science techniques to analyze educational data and extract meaningful insights. 
                      Developed data visualizations and predictive models to support decision-making processes, 
                      enhancing understanding of student performance and learning patterns.
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
                    <h4 className="text-lg mb-1">Bachelor of Computer Science and Artificial Intelligence</h4>
                    <p className="text-sm text-muted-foreground mb-1">Benha University, Department of Artificial Intelligence</p>
                    <p className="text-sm text-muted-foreground mb-1">Graduated: 2024 • GPA: 3.76 / 4.0</p>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">AI / ML Training Program</h4>
                    <p className="text-sm text-muted-foreground mb-1">Information Technology Institute (ITI), Menoufia, Egypt</p>
                    <p className="text-sm text-muted-foreground">Aug 2023 – Oct 2023</p>
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
                <h3 className="text-2xl mb-6">Tools & Technologies</h3>
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
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
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
        </motion.div>
      </div>
    </section>
  );
}