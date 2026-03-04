import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import LogoImg from '../assets/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src={LogoImg} alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-2xl tracking-tight">Hassan Alaoui Taibi</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Ingénieur IA & Data Science
          </div>
          <div className="text-xs text-muted-foreground max-w-md mx-auto">
            Ce portfolio témoigne de ma passion pour l'intelligence artificielle et la data science. Conçu avec React, Tailwind CSS, et une grande conviction quant au potentiel de l'IA.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}