import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  category: 'ml' | 'dl' | 'cv' | 'nlp' | 'autoencoder' | 'gan' | 'generativeai' | 'powerbi' | 'etl' | 'devops' | 'nosql' | 'dataviz' ;
}

export function ProjectsSection() {
  const projects: Project[] = [
    // Machine Learning Projects
    {
      id: 'ml1',
      title: 'CinéMatch AI — Système de recommandation de films',
      description: 'Moteur de recommandation de films basé sur le filtrage collaboratif (KNN), exposé via une API REST FastAPI avec interface web interactive. Precision@5 de 76% sur MovieLens 100K — l\'algorithme analyse les patterns de notation pour suggérer 5 films similaires.',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Scikit-learn', 'FastAPI', 'KNN', 'Pandas', 'Docker'],
      githubUrl: 'https://github.com/Hassanala0ui/Movie-Recommendation-System-KNN-FastAPI-',
      category: 'ml'
    },
    {
      id: 'ml2',
      title: 'Prédiction des maladies cardiaques',
      description: 'Pipeline ML complet pour la prédiction de maladies cardiaques : prétraitement, feature engineering et modèles d\'ensemble. XGBoost atteignant 91% d\'accuracy (F1 = 0.89) sur le dataset Kaggle Cleveland (303 observations).',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Méthodes d\'ensemble'],
      githubUrl: '',//https://github.com/ahmedashraf792002/ML-Projects/tree/main/Heart%20Diseases
      category: 'ml'
    },
    {
      id: 'ml3',
      title: 'Prédiction de la satisfaction des passagers aériens',
      description: 'Prédiction de la satisfaction des passagers aériens par Random Forest (94.3% accuracy) avec feature engineering avancé. Visualisation des insights et performances via un dashboard Power BI interactif.',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Classification ML', 'Ingénierie des caractéristiques', 'Power BI'],
      githubUrl: '',//https://github.com/ahmedashraf792002/ML-Projects/tree/main/Advanced%20Data%20Analytics%20AirLine%20Passenger%20Satisfaction
      category: 'ml'
    },
    {
      id: 'ml4',
      title: 'Prédiction des maladies hépatiques',
      description: 'Développement de modèles ML pour prédire les maladies hépatiques à partir des dossiers patients, permettant une détection précoce.',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Apprentissage automatique', 'Données médicales', 'Détection précoce'],
      githubUrl: '',//https://github.com/ahmedashraf792002/ML-Projects/tree/main/Liver%20Disease%20Prediction
      category: 'ml'
    },
    {
      id: 'ml5',
      title: 'Prédiction du risque de cancer de la prostate',
      description: 'Construction d\'un classifieur pour évaluer le risque de cancer de la prostate à partir d\'indicateurs de mode de vie et médicaux ; visualisation des insights avec Power BI.',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Classification', 'Indicateurs de santé', 'Power BI'],
      githubUrl: '',//https://github.com/ahmedashraf792002/ML-Projects/tree/main/Prostate%20Cancer%20Risk%20Prediction%20Using%20Lifestyle%20and%20Health%20Indicators
      category: 'ml'
    },
    

    // Deep Learning Projects
    {
      id: 'dl1',
      title: 'Détection de tumeurs cérébrales par IRM',
      description: 'Entraînement d\'un CNN pour détecter les tumeurs cérébrales à partir d\'IRM, contribuant au diagnostic précoce.',
      image: 'https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYnJhaW4lMjBzY2FuJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NTYyOTQ3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['TensorFlow', 'CNN', 'Imagerie médicale', 'Analyse IRM'],
      githubUrl: '',//https://github.com/ahmedashraf792002/DL-Projects/tree/main/Brain%20Tumors
      category: 'dl'
    },
    {
      id: 'dl2',
      title: 'Classification de radiographies thoraciques (Pneumonie)',
      description: 'Développement d\'un modèle de deep learning pour classifier les radiographies thoraciques pour la détection de pneumonie à l\'aide d\'architectures CNN, améliorant la précision diagnostique des maladies respiratoires.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Deep Learning', 'CNN', 'Imagerie médicale', 'Classification'],
      githubUrl: '',//https://github.com/ahmedashraf792002/DL-Projects/tree/main/Chest%20X-Ray%20Images%20(Pneumonia)
      category: 'dl'
    },
    {
      id: 'dl3',
      title: 'Système de reconnaissance vocale',
      description: 'Construction d\'un système de transcription parole-texte basé sur le deep learning avec gestion du bruit et inférence en temps réel.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Deep Learning', 'Traitement de la parole', 'Inférence temps réel', 'Gestion du bruit'],
      githubUrl: '',//https://github.com/ahmedashraf792002/DL-Projects/tree/main/Speech%20Recognition
      category: 'dl'
    },
    {
      id: 'dl4',
      title: 'Classification ELpv et évaluation de qualité par analyse d\'images',
      description: 'Implémentation de modèles de deep learning pour la classification de cellules photovoltaïques par électroluminescence et l\'évaluation de qualité à l\'aide de techniques avancées d\'analyse d\'images pour la détection de défauts de panneaux solaires.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Deep Learning', 'Analyse d\'images', 'Évaluation de qualité', 'Technologie solaire'],
      githubUrl: '',//https://github.com/ahmedashraf792002/DL-Projects/tree/main/Elpv%20Classification%20and%20Quality%20Evaluation%20Using%20Image%20Analysis
      category: 'dl'
    },

    // Computer Vision Projects
    {
      id: 'cv1',
      title: 'Classification de fractures osseuses avec MobileViT Transformer',
      description: 'Construction d\'un modèle MobileViT Transformer pour classifier les fractures osseuses à partir de radiographies, améliorant l\'efficacité diagnostique.',
      image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwcmVjb2duaXRpb258ZW58MXx8fHwxNzU2Mjk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['MobileViT', 'Transformer', 'Imagerie médicale', 'Analyse de radiographies'],
      githubUrl: '',//https://github.com/ahmedashraf792002/CV-Projects/tree/main/Bone%20Fracture%20Classification%20Using%20Mobilevit
      category: 'cv'
    },
    {
      id: 'cv2',
      title: 'Détection ASL avec CycleGAN et Deep Learning',
      description: 'Utilisation de CycleGAN pour générer des données ASL synthétiques et entraînement d\'un modèle pour la reconnaissance des signes en temps réel.',
      image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwcmVjb2duaXRpb258ZW58MXx8fHwxNzU2Mjk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['CycleGAN', 'Deep Learning', 'Reconnaissance temps réel', 'ASL'],
      githubUrl: '',//https://github.com/ahmedashraf792002/CV-Projects/tree/main/ASL%20Detection%20%26%20Real%20Time
      category: 'cv'
    },
    {
      id: 'cv3',
      title: 'Segmentation cardiaque CT avec UNet',
      description: 'Développement d\'un modèle de deep learning basé sur UNet pour la segmentation précise du cœur à partir d\'images CT, permettant une analyse précise des structures cardiaques pour le diagnostic médical et la planification de traitement.',
      image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwcmVjb2duaXRpb258ZW58MXx8fHwxNzU2Mjk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['UNet', 'Segmentation médicale', 'Imagerie CT', 'Analyse cardiaque'],
      githubUrl: '',//https://github.com/ahmedashraf792002/DL-Projects/tree/main/CT%20Heart%20Segmentation%20Using%20UNet
      category: 'cv'
    },
    {
      id: 'cv4',
      title: 'Segmentation des vaisseaux sanguins rétiniens avec U-Net',
      description: 'Implémentation de l\'architecture U-Net pour la segmentation précise des vaisseaux sanguins dans les images rétiniennes, soutenant le diagnostic ophtalmologique et la détection de rétinopathie diabétique.',
      image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwcmVjb2duaXRpb258ZW58MXx8fHwxNzU2Mjk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['U-Net', 'Imagerie médicale', 'Analyse rétinienne', 'Segmentation vasculaire'],
      githubUrl: '',//https://github.com/ahmedashraf792002/DL-Projects/tree/main/%F0%9F%A9%B8Retina%20Blood%20Vessel%20Segmentation%20using%20U-Net%F0%9F%A7%A0%F0%9F%93%88
      category: 'cv'
    },

    // NLP Projects
    
    {
      id: 'nlp6',
      title: 'Milano-Cortina 2026 — Analyse de sentiments sociaux',
      description: 'Analyse NLP des données sociales autour des JO d\'hiver Milano-Cortina 2026 : extraction de sentiments via TextBlob, traitement de texte multilingue et visualisation interactive des tendances d\'opinion avec Streamlit et Plotly.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['NLP', 'TextBlob', 'Analyse de sentiments', 'Streamlit', 'Python'],
      githubUrl: 'https://github.com/Hassanala0ui/Milano-2026-social-dashboard',
      category: 'nlp'
    },
    {
      id: 'nlp1',
      title: 'Système de détection de langue',
      description: 'Construction d\'un classifieur NLP pour identifier la langue d\'échantillons de texte avec une haute précision.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['NLP', 'Classification de texte', 'Détection de langue', 'Apprentissage automatique'],
      githubUrl: '',//https://github.com/ahmedashraf792002/NLP-Projects/tree/main/Language%20Detection  
      category: 'nlp'
    },
    {
      id: 'nlp3',
      title: 'Classification et génération de paraphrases avec Transformers',
      description: 'Utilisation de XLNet pour la détection de paraphrases et T5 pour la génération de paraphrases avec des structures variées.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['XLNet', 'T5', 'Transformers', 'Génération de paraphrases'],
      githubUrl: '',//https://github.com/ahmedashraf792002/NLP-Projects/tree/main/Paraphrase%20Classification%20and%20Generation%20Using%20Transformers
      category: 'nlp'
    },
    {
      id: 'nlp4',
      title: 'Classification de texte avec Longformer-FineTuning',
      description: 'Fine-tuning du modèle Longformer pour la classification de textes longs, gérant efficacement les séquences étendues pour une meilleure précision dans les tâches de catégorisation de documents.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Longformer', 'Fine-tuning', 'Classification de texte', 'Documents longs'],
      githubUrl: '',  //https://github.com/ahmedashraf792002/NLP-Projects/tree/main/Text%20Classification%20Using%20Longformer-FineTuning
      category: 'nlp'
    },
    {
      id: 'nlp5',
      title: 'Avis Amazon',
      description: 'Développement d\'un système complet d\'analyse de sentiments pour les avis produits Amazon à l\'aide de techniques de deep learning, fournissant des insights sur la satisfaction client et l\'évaluation de la qualité des produits.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Deep Learning', 'Analyse de sentiments', 'Traitement d\'avis', 'Données Amazon'],
      githubUrl: '',//https://github.com/ahmedashraf792002/DL-Projects/tree/main/Amazon%20Reviews
      category: 'nlp'
    },

    /* // AutoEncoder Projects
    {
      id: 'ae1',
      title: 'Colorisation d\'images CIFAR-10',
      description: 'Implémentation d\'un système basé sur les auto-encodeurs pour coloriser les images en niveaux de gris de CIFAR-10, utilisant des techniques de deep learning pour prédire et générer des mappages de couleurs réalistes.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Auto-encodeur', 'Colorisation d\'images', 'CIFAR-10', 'Deep Learning'],
      githubUrl: '',//https://github.com/ahmedashraf792002/AutoEncoder-Projects/tree/main/Cifar10%20Image%20Colorization
      category: 'autoencoder'
    },
    {
      id: 'ae2',
      title: 'Visualisation MNIST',
      description: 'Création d\'un système de visualisation basé sur les auto-encodeurs pour le jeu de données MNIST, permettant la réduction de dimensionnalité et l\'apprentissage de représentations pour une meilleure compréhension des motifs de chiffres manuscrits.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Auto-encodeur', 'MNIST', 'Visualisation', 'Réduction de dimensionnalité'],
      githubUrl: '',//https://github.com/ahmedashraf792002/AutoEncoder-Projects/tree/main/Visualize%20Mnist
      category: 'autoencoder'
    },

    // GAN Projects
    {
      id: 'gan1',
      title: 'CycleGAN pour ASL',
      description: 'Implémentation de CycleGAN pour la traduction d\'images de langue des signes américaine (ASL), permettant l\'adaptation de domaine et l\'augmentation de données pour une meilleure reconnaissance des gestes.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['CycleGAN', 'ASL', 'Traduction d\'images', 'Adaptation de domaine'],
      githubUrl: '',//https://github.com/ahmedashraf792002/GAN-Projects/tree/main/Cycle%20GAN%20For%20ASL
      category: 'gan'
    },
    {
      id: 'gan2',
      title: 'DCGAN pour Fashion MNIST',
      description: 'Développement d\'un GAN convolutionnel profond (DCGAN) pour générer des articles de mode réalistes à partir du jeu Fashion-MNIST, créant des images synthétiques de vêtements pour l\'augmentation de données et le design de mode.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['DCGAN', 'Fashion-MNIST', 'Génération d\'images', 'Design de mode'],
      githubUrl: '',//https://github.com/ahmedashraf792002/GAN-Projects/tree/main/DCGAN%20For%20Fashion%20Minst
      category: 'gan'
    },
    */

    // Generative AI Projects
    {
      id: 'genai1',
      title: 'LLAMA_3_1 RAG Doc QA ChromaDB',
      description: 'Construction d\'un système de génération augmentée par récupération (RAG) utilisant LLAMA 3.1 et ChromaDB pour la réponse intelligente aux questions sur des documents, permettant une extraction efficace des connaissances.',
      image: 'https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYWklMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1NjI5NDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['LLAMA 3.1', 'RAG', 'ChromaDB', 'QA documentaire'],
      githubUrl: '',//https://github.com/ahmedashraf792002/Generative-AI-Projects/tree/main/LLAMA_3_1%20%20RAG%20Doc%20QA%20ChromaDB
      category: 'generativeai'
    },
    {
      id: 'genai2',
      title: 'LLAMA_3_1 RAG Multi Doc QA Streamlit',
      description: 'Création d\'un système RAG multi-documents avec LLAMA 3.1 et interface Streamlit, permettant aux utilisateurs d\'interroger simultanément plusieurs documents pour une recherche et analyse complète des connaissances.',
      image: 'https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYWklMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1NjI5NDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['LLAMA 3.1', 'RAG', 'Streamlit', 'QA multi-documents'],
      githubUrl: '',//https://github.com/ahmedashraf792002/Generative-AI-Projects/tree/main/LLAMA_3_1%20%20RAG%20Multi%20Doc%20QA%20Streamlit
      category: 'generativeai'
    },
    {
      id: 'genai3',
      title: 'Résumeur de documents avec LlamaIndex & Llama 3',
      description: 'Développement d\'un système avancé de résumé de documents utilisant LlamaIndex et Llama 3, offrant des capacités intelligentes de résumé de texte pour une extraction efficace d\'informations et une analyse de contenu.',
      image: 'https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYWklMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1NjI5NDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['LlamaIndex', 'Llama 3', 'Résumé de documents', 'NLP'],
      githubUrl: '',//https://github.com/ahmedashraf792002/Generative-AI-Projects/tree/main/Document%20Summarizer%20with%20LlamaIndex%20%26%20Llama%203
      category: 'generativeai'
    },

    // PowerBI Projects
    {
      id: 'pbi1',
      title: 'Tableau de bord Satisfaction des passagers aériens',
      description: 'Création de tableaux de bord Power BI complets analysant les indicateurs de satisfaction des passagers aériens, offrant des insights sur la qualité de service, les retours clients et la performance opérationnelle pour une prise de décision stratégique.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Power BI', 'Visualisation de données', 'Analyse client', 'Conception de tableaux de bord'],
      githubUrl: 'https://github.com/Hassanala0ui/Airline-Passenger-Satisfaction-Report',
      category: 'powerbi'
    },
    {
      id: 'pbi2',
      title: 'Tableau de bord Prestataire de santé',
      description: 'Développement d\'un tableau de bord interactif d\'analyse de santé avec Power BI, suivant les résultats des patients, l\'utilisation des ressources et les KPIs opérationnels pour améliorer la gestion hospitalière et la qualité des soins.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Power BI', 'Analyse de santé', 'Suivi des KPI', 'Résultats patients'],
      githubUrl: 'https://github.com/Hassanala0ui/Healthcare_Provider_Dashboard',
      category: 'powerbi'
    },
    {
      id: 'pbi3',
      title: 'Tableau de bord Prédiction du risque de cancer de la prostate',
      description: 'Conception d\'un tableau de bord Power BI pour visualiser les facteurs de risque du cancer de la prostate basés sur le mode de vie et les indicateurs de santé, permettant une évaluation précoce des risques et des stratégies de prévention.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Power BI', 'Analyse de santé', 'Prédiction de risques', 'Visualisation de données'],
      githubUrl: 'https://github.com/Hassanala0ui/Dashboard_Prostate_Cancer_Risk_Prediction',
      category: 'powerbi'
    },

    // NoSQL Projects
    {
      id: 'nosql1',
      title: 'Milano-Cortina 2026 — Social Intelligence Dashboard',
      description: 'Dashboard d\'analyse de données sociales autour des JO d\'hiver Milano-Cortina 2026, combinant MongoDB (stockage documentaire), Neo4j (graphe de relations sociales) et NLP (analyse de sentiments via TextBlob). Interface interactive Streamlit avec visualisations Plotly et graphes PyVis pour l\'exploration des réseaux sociaux.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['MongoDB', 'Neo4j', 'Streamlit', 'Python', 'NLP', 'Plotly'],
      githubUrl: 'https://github.com/Hassanala0ui/Milano-2026-social-dashboard',
      category: 'nosql'
    },

    // DevOps / Docker Projects
    {
      id: 'devops1',
      title: 'Todo List Microservices — Docker Compose, FastAPI & React',
      description: 'Déploiement d\'une application multi-conteneurs avec Docker Compose : 3 services (FastAPI, React/Nginx, PostgreSQL 16) communiquant via un réseau Docker personnalisé. Mise en place de health checks, gestion sécurisée des secrets Docker, builds multi-stage et orchestration complète de l\'infrastructure conteneurisée.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2NrZXIlMjBjb250YWluZXIlMjBtaWNyb3NlcnZpY2VzfGVufDF8fHx8MTc1NjI5NDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Docker', 'Docker Compose', 'FastAPI', 'PostgreSQL', 'Nginx', 'Microservices'],
      githubUrl: 'https://github.com/Hassanala0ui/Todo-List-Microservices---FastAPI-React-PostgreSQL',
      category: 'devops'
    },

    // Data Visualization Projects (Tableau)
    {
      id: 'dataviz1',
      title: 'Analyse de l\'Accidentalité Routière en France — Tableau',
      description: 'Étude exploratoire de l\'accidentalité routière en France à partir des données ouvertes data.gouv.fr, déclinée en 3 tableaux de bord Tableau : (1) carte de densité géographique révélant les zones de forte accidentalité par département (Île-de-France, Lyon, Marseille), (2) heatmap temporelle identifiant les créneaux les plus accidentogènes — pic entre 17h et 19h —, et (3) analyse météorologique démontrant que 76,8% des accidents surviennent par temps normal. Des insights décisionnels clés pour orienter les politiques de prévention routière.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Tableau', 'Data Visualization', 'data.gouv.fr', 'Analyse géospatiale', 'Heatmap', 'Open Data'],
      githubUrl: 'https://github.com/Hassanala0ui/Dashboards-de-R-partition-des-accidents',
      category: 'dataviz'
    },

    // ETL Projects
    {
      id: 'etl1',
      title: 'Pipeline ETL — Dépenses USD/CAD avec Oracle & Python',
      description: 'Pipeline ETL complet extrayant des données financières depuis l\'API de la Banque du Canada et un fichier Excel, les transformant via Python (petl) et PL/SQL, puis les chargeant dans une base Oracle avec procédures stockées et vues analytiques.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Oracle DB', 'PL/SQL', 'petl', 'API REST', 'ETL'],
      githubUrl: 'https://github.com/Hassanala0ui/ETL-pipeline',
      category: 'etl'
    },

    // Graduation Project
    /**
      id: 'grad1',
      title: 'Alzheimer\'s Detection With Generative AI',
      description: 'Many of us face challenges related to early Alzheimer\'s diagnosis, affecting the opportunities for effective treatment and management. Our project offers an innovative solution based on artificial intelligence technologies to early detect symptoms.',
      image: 'https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYnJhaW4lMjBzY2FuJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NTYyOTQ3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Generative AI', 'Medical Diagnosis', 'Early Detection', 'Deep Learning'],
      githubUrl: '',//https://github.com/ahmedashraf792002/Leader-Graduation-Project
      category: 'graduation'
    }**/
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', count: projects.length },
    { id: 'ml', label: 'ML', count: projects.filter(p => p.category === 'ml').length },
    { id: 'etl', label: 'ETL', count: projects.filter(p => p.category === 'etl').length },
    { id: 'devops', label: 'DevOps', count: projects.filter(p => p.category === 'devops').length },
    { id: 'nosql', label: 'NoSQL', count: projects.filter(p => p.category === 'nosql').length },
    { id: 'dataviz', label: 'Tableau', count: projects.filter(p => p.category === 'dataviz').length },
    { id: 'nlp', label: 'NLP', count: projects.filter(p => p.category === 'nlp').length },
    { id: 'dl', label: 'DL', count: projects.filter(p => p.category === 'dl').length },
    { id: 'cv', label: 'CV', count: projects.filter(p => p.category === 'cv').length },
    //{ id: 'autoencoder', label: 'AutoEncoder', count: projects.filter(p => p.category === 'autoencoder').length },
    //{ id: 'gan', label: 'GAN', count: projects.filter(p => p.category === 'gan').length },
    { id: 'generativeai', label: 'IA Générative', count: projects.filter(p => p.category === 'generativeai').length },
    { id: 'powerbi', label: 'Power BI', count: projects.filter(p => p.category === 'powerbi').length },
    //{ id: 'graduation', label: 'Graduation', count: projects.filter(p => p.category === 'graduation').length }
  ];

  const categoryRepositories = {
    ml: '',//https://github.com/ahmedashraf792002/ML-Projects
    dl: '',//https://github.com/ahmedashraf792002/DL-Projects
    cv: '',//https://github.com/ahmedashraf792002/CV-Projects
    nlp: '',//https://github.com/ahmedashraf792002/NLP-Projects
    //autoencoder: '',//https://github.com/ahmedashraf792002/AutoEncoder-Projects
    //gan: '',//https://github.com/ahmedashraf792002/GAN-Projects
    generativeai: '',//https://github.com/ahmedashraf792002/Generative-AI-Projects
    powerbi: '',//https://github.com/ahmedashraf792002/PowerBI-Projects
    etl: 'https://github.com/Hassanala0ui/ETL-pipeline',
    devops: 'https://github.com/Hassanala0ui/Todo-List-Microservices---FastAPI-React-PostgreSQL',
    nosql: 'https://github.com/Hassanala0ui/Milano-2026-social-dashboard',
    dataviz: 'https://github.com/Hassanala0ui/Dashboards-de-R-partition-des-accidents',
   // graduation: '',//https://github.com/ahmedashraf792002/Leader-Graduation-Project
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <CardContent className="flex-1 p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="text-xs uppercase tracking-wide">
              {project.category.toUpperCase()}
            </Badge>
          </div>
          
          <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4} de plus
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 flex gap-3">
          <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

  const ViewMoreButton = ({ category }: { category: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="col-span-full flex justify-center mt-8"
    >
      <Button variant="outline" size="lg" className="group" asChild>
        <a 
          href={categoryRepositories[category as keyof typeof categoryRepositories]} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          Voir plus de projets {category.toUpperCase()}
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </Button>
    </motion.div>
  );

  // Ordre de mise en avant : projets avec GitHub, classés par robustesse
  const featuredOrder = ['devops1', 'nosql1', 'etl1', 'dataviz1', 'ml5', 'nlp6', 'pbi1', 'pbi2', 'pbi3'];
  const sortedProjects = [...projects].sort((a, b) => {
    const aIdx = featuredOrder.indexOf(a.id);
    const bIdx = featuredOrder.indexOf(b.id);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return 0;
  });

  const AllProjectsButton = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="col-span-full flex justify-center mt-8"
    >
      <Button variant="default" size="lg" className="group" asChild>
        <a 
          href="https://github.com/Hassanala0ui" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          Voir tous mes projets
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </Button>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Projets à la Une
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
           Une collection de projets en Data Science, Intelligence Artificielle et Développement Fullstack, illustrant mes compétences techniques et ma capacité à résoudre des problèmes concrets.
           De l’analyse de données à la modélisation prédictive, en passant par la conception de tableaux de bord web, chaque projet met en avant une approche pratique de l’IA et de l’ingénierie logicielle.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-16 bg-muted/50 p-2 h-auto w-full">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-sm font-medium py-3 px-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                <div className="flex flex-col items-center gap-1">
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5">
                    {category.count}
                  </Badge>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.slice(0, 12).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              <AllProjectsButton />
            </div>
          </TabsContent>

          {['ml', 'etl', 'devops', 'nosql', 'dataviz', 'nlp', 'dl', 'cv', 'generativeai', 'powerbi'].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                <ViewMoreButton category={category} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}