import { motion } from 'motion/react';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function CVSection() {
  const cvUrl = 'https://flowcv.com/resume/rdkcbq0k8wha';
  
  const downloadCV = () => {
    window.open(cvUrl, '_blank');
  };

  const viewCV = () => {
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="cv" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Curriculum Vitae</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Download my complete CV to learn more about my professional experience, 
            education, certifications, and accomplishments in the field of AI and machine learning.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* CV Preview Placeholder */}
                <div className="bg-muted/50 aspect-[8.5/11] flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <FileText className="w-24 h-24 text-primary/60" />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-2xl mb-4"
                  >
                    Hassan Alaoui Taibi - Data Science & AI Engineer
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground mb-6 max-w-md"
                  >
                    Preview of my professional CV showcasing my experience 
                    in AI & Machine Learning engineering and internships.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4 text-sm text-muted-foreground"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Education & Certifications
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Professional Experience
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Technical Skills
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Research Publications
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Projects & Achievements
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        References
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Download Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-8 bg-card border-t"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg mb-2">View & Download Complete CV</h4>
                      <p className="text-sm text-muted-foreground">
                        Get the full version with detailed information about my background and experience.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button onClick={viewCV} variant="outline" size="lg" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Online
                      </Button>
                      <Button onClick={downloadCV} size="lg" className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
          >
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">2</div>
                <div className="text-sm text-muted-foreground">Internship Experiences</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">2</div>
                <div className="text-sm text-muted-foreground">Research Papers</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">5+</div>
                <div className="text-sm text-muted-foreground">AI Technologies</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}