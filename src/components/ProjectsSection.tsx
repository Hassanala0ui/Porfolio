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
  category: 'ml' | 'dl' | 'cv' | 'nlp' | 'autoencoder' | 'gan' | 'generativeai' | 'powerbi' | 'graduation';
}

export function ProjectsSection() {
  const projects: Project[] = [
    // Machine Learning Projects
    {
      id: 'ml1',
      title: 'Heart Disease Prediction',
      description: 'Applied ensemble ML models with preprocessing to improve prediction accuracy for heart disease.',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Ensemble Methods'],
      githubUrl: 'https://github.com/ahmedashraf792002/ML-Projects/tree/main/Heart%20Diseases',
      category: 'ml'
    },
    {
      id: 'ml2',
      title: 'Airline Passenger Satisfaction Prediction',
      description: 'Predicted passenger satisfaction using classification models with feature engineering, and visualized insights and performance using Power BI.',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'ML Classification', 'Feature Engineering', 'Power BI'],
      githubUrl: 'https://github.com/ahmedashraf792002/ML-Projects/tree/main/Advanced%20Data%20Analytics%20AirLine%20Passenger%20Satisfaction',
      category: 'ml'
    },
    {
      id: 'ml3',
      title: 'Liver Disease Prediction',
      description: 'Developed ML models to predict liver disease from patient records, enabling early detection.',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Machine Learning', 'Medical Data', 'Early Detection'],
      githubUrl: 'https://github.com/ahmedashraf792002/ML-Projects/tree/main/Liver%20Disease%20Prediction',
      category: 'ml'
    },
    {
      id: 'ml4',
      title: 'Prostate Cancer Risk Prediction',
      description: 'Built a classifier to assess prostate cancer risk using lifestyle and medical indicators; visualized insights with Power BI.',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYyODk0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Classification', 'Health Indicators', 'Power BI'],
      githubUrl: 'https://github.com/ahmedashraf792002/ML-Projects/tree/main/Prostate%20Cancer%20Risk%20Prediction%20Using%20Lifestyle%20and%20Health%20Indicators',
      category: 'ml'
    },

    // Deep Learning Projects
    {
      id: 'dl1',
      title: 'Brain Tumor Detection from MRI Images',
      description: 'Trained a CNN to detect brain tumors from MRI scans, aiding in early diagnosis.',
      image: 'https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYnJhaW4lMjBzY2FuJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NTYyOTQ3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['TensorFlow', 'CNN', 'Medical Imaging', 'MRI Analysis'],
      githubUrl: 'https://github.com/ahmedashraf792002/DL-Projects/tree/main/Brain%20Tumors',
      category: 'dl'
    },
    {
      id: 'dl2',
      title: 'Chest X-Ray Images (Pneumonia) Classification',
      description: 'Developed a deep learning model to classify chest X-ray images for pneumonia detection using CNN architectures, improving diagnostic accuracy for respiratory diseases.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Deep Learning', 'CNN', 'Medical Imaging', 'Classification'],
      githubUrl: 'https://github.com/ahmedashraf792002/DL-Projects/tree/main/Chest%20X-Ray%20Images%20(Pneumonia)',
      category: 'dl'
    },
    {
      id: 'dl3',
      title: 'Speech Recognition System',
      description: 'Built a DL-based speech-to-text system with noise handling and real-time inference.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Deep Learning', 'Speech Processing', 'Real-time Inference', 'Noise Handling'],
      githubUrl: 'https://github.com/ahmedashraf792002/DL-Projects/tree/main/Speech%20Recognition',
      category: 'dl'
    },
    {
      id: 'dl4',
      title: 'Elpv Classification and Quality Evaluation Using Image Analysis',
      description: 'Implemented deep learning models for electroluminescence photovoltaic (ELpv) cell classification and quality assessment using advanced image analysis techniques for solar panel defect detection.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Deep Learning', 'Image Analysis', 'Quality Assessment', 'Solar Technology'],
      githubUrl: 'https://github.com/ahmedashraf792002/DL-Projects/tree/main/Elpv%20Classification',
      category: 'dl'
    },

    // Computer Vision Projects
    {
      id: 'cv1',
      title: 'Bone Fracture Classification using MobileViT Transformer',
      description: 'Built a MobileViT Transformer model to classify bone fractures from X-ray images, improving diagnostic efficiency.',
      image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwcmVjb2duaXRpb258ZW58MXx8fHwxNzU2Mjk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['MobileViT', 'Transformer', 'Medical Imaging', 'X-ray Analysis'],
      githubUrl: 'https://github.com/ahmedashraf792002/CV-Projects/tree/main/Bone%20Fracture%20Classification%20Using%20Mobilevit',
      category: 'cv'
    },
    {
      id: 'cv2',
      title: 'ASL Detection using CycleGAN and Deep Learning',
      description: 'Used CycleGAN to generate synthetic ASL data and trained a model for real-time sign recognition.',
      image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwcmVjb2duaXRpb258ZW58MXx8fHwxNzU2Mjk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['CycleGAN', 'Deep Learning', 'Real-time Recognition', 'ASL'],
      githubUrl: 'https://github.com/ahmedashraf792002/CV-Projects/tree/main/ASL%20Detection%20%26%20Real%20Time',
      category: 'cv'
    },
    {
      id: 'cv3',
      title: 'CT Heart Segmentation Using UNet',
      description: 'Developed a UNet-based deep learning model for precise heart segmentation from CT scan images, enabling accurate cardiac structure analysis for medical diagnosis and treatment planning.',
      image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwcmVjb2duaXRpb258ZW58MXx8fHwxNzU2Mjk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['UNet', 'Medical Segmentation', 'CT Imaging', 'Cardiac Analysis'],
      githubUrl: 'https://github.com/ahmedashraf792002/DL-Projects/tree/main/CT%20Heart%20Segmentation%20Using%20UNet',
      category: 'cv'
    },
    {
      id: 'cv4',
      title: 'Retina Blood Vessel Segmentation using U-Net',
      description: 'Implemented U-Net architecture for precise segmentation of blood vessels in retinal images, supporting ophthalmological diagnosis and diabetic retinopathy detection through advanced medical image processing.',
      image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwcmVjb2duaXRpb258ZW58MXx8fHwxNzU2Mjk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['U-Net', 'Medical Imaging', 'Retinal Analysis', 'Blood Vessel Segmentation'],
      githubUrl: 'https://github.com/ahmedashraf792002/DL-Projects/tree/main/%F0%9F%A9%B8Retina%20Blood%20Vessel%20Segmentation%20using%20U-Net%F0%9F%A7%A0%F0%9F%93%88',
      category: 'cv'
    },

    // NLP Projects
    {
      id: 'nlp1',
      title: 'Language Detection System',
      description: 'Built an NLP classifier to identify the language of given text samples with high precision.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['NLP', 'Text Classification', 'Language Detection', 'Machine Learning'],
      githubUrl: 'https://github.com/ahmedashraf792002/NLP-Projects/tree/main/Language%20Detection',
      category: 'nlp'
    },
    {
      id: 'nlp2',
      title: 'Arabic Sentiment Analysis Using Transformers and Sequence Models',
      description: 'Fine-tuned BERT and trained LSTM to analyze sentiment in Arabic reviews.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['BERT', 'LSTM', 'Arabic NLP', 'Sentiment Analysis'],
      githubUrl: 'https://github.com/ahmedashraf792002/NLP-Projects/tree/main/Arabic%20Sentiment%20Reviews',
      category: 'nlp'
    },
    {
      id: 'nlp3',
      title: 'Paraphrase Classification and Generation Using Transformers',
      description: 'Used XLNet for paraphrase detection and T5 for generating paraphrases with varied structure.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['XLNet', 'T5', 'Transformers', 'Paraphrase Generation'],
      githubUrl: 'https://github.com/ahmedashraf792002/NLP-Projects/tree/main/Paraphrase%20Classification%20and%20Generation%20Using%20Transformers',
      category: 'nlp'
    },
    {
      id: 'nlp4',
      title: 'Text Classification Using Longformer-FineTuning',
      description: 'Fine-tuned Longformer transformer model for long document text classification, handling extended sequences effectively for improved accuracy in document categorization tasks.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Longformer', 'Fine-tuning', 'Text Classification', 'Long Documents'],
      githubUrl: 'https://github.com/ahmedashraf792002/NLP-Projects/tree/main/Text%20Classification%20Using%20Longformer-FineTuning',
      category: 'nlp'
    },
    {
      id: 'nlp5',
      title: 'Amazon Reviews',
      description: 'Developed a comprehensive sentiment analysis system for Amazon product reviews using deep learning techniques, providing insights into customer satisfaction and product quality assessment.',
      image: 'https://images.unsplash.com/photo-1700038778311-0e132fc2e205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dHxlbnwxfHx8fDE3NTYyOTQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Deep Learning', 'Sentiment Analysis', 'Review Processing', 'Amazon Data'],
      githubUrl: 'https://github.com/ahmedashraf792002/DL-Projects/tree/main/Amazon%20Reviews',
      category: 'nlp'
    },

    // AutoEncoder Projects
    {
      id: 'ae1',
      title: 'Cifar10 Image Colorization',
      description: 'Implemented an autoencoder-based system for colorizing grayscale CIFAR-10 images, using deep learning techniques to predict and generate realistic color mappings for enhanced image visualization.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['AutoEncoder', 'Image Colorization', 'CIFAR-10', 'Deep Learning'],
      githubUrl: 'https://github.com/ahmedashraf792002/AutoEncoder-Projects/tree/main/Cifar10%20Image%20Colorization',
      category: 'autoencoder'
    },
    {
      id: 'ae2',
      title: 'Visualize Mnist',
      description: 'Created an autoencoder-based visualization system for MNIST digit dataset, enabling dimensionality reduction and feature representation learning for improved understanding of handwritten digit patterns.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['AutoEncoder', 'MNIST', 'Visualization', 'Dimensionality Reduction'],
      githubUrl: 'https://github.com/ahmedashraf792002/AutoEncoder-Projects/tree/main/Visualize%20Mnist',
      category: 'autoencoder'
    },

    // GAN Projects
    {
      id: 'gan1',
      title: 'Cycle GAN For ASL',
      description: 'Implemented CycleGAN for American Sign Language (ASL) image-to-image translation, enabling domain adaptation and data augmentation for improved ASL recognition and gesture understanding.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['CycleGAN', 'ASL', 'Image Translation', 'Domain Adaptation'],
      githubUrl: 'https://github.com/ahmedashraf792002/GAN-Projects/tree/main/Cycle%20GAN%20For%20ASL',
      category: 'gan'
    },
    {
      id: 'gan2',
      title: 'DCGAN For Fashion Mnist',
      description: 'Developed a Deep Convolutional GAN (DCGAN) for generating realistic fashion items using Fashion-MNIST dataset, creating synthetic clothing images for data augmentation and fashion design applications.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTYyOTQ3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['DCGAN', 'Fashion-MNIST', 'Image Generation', 'Fashion Design'],
      githubUrl: 'https://github.com/ahmedashraf792002/GAN-Projects/tree/main/DCGAN%20For%20Fashion%20Minst',
      category: 'gan'
    },

    // Generative AI Projects
    {
      id: 'genai1',
      title: 'LLAMA_3_1 RAG Doc QA ChromaDB',
      description: 'Built a Retrieval-Augmented Generation (RAG) system using LLAMA 3.1 and ChromaDB for intelligent document question-answering, enabling efficient knowledge extraction from large document collections.',
      image: 'https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYWklMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1NjI5NDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['LLAMA 3.1', 'RAG', 'ChromaDB', 'Document QA'],
      githubUrl: 'https://github.com/ahmedashraf792002/Generative-AI-Projects/tree/main/LLAMA_3_1%20%20RAG%20Doc%20QA%20ChromaDB',
      category: 'generativeai'
    },
    {
      id: 'genai2',
      title: 'LLAMA_3_1 RAG Multi Doc QA Streamlit',
      description: 'Created a multi-document RAG system with LLAMA 3.1 and Streamlit interface, allowing users to query across multiple documents simultaneously for comprehensive knowledge retrieval and analysis.',
      image: 'https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYWklMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1NjI5NDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['LLAMA 3.1', 'RAG', 'Streamlit', 'Multi-Document QA'],
      githubUrl: 'https://github.com/ahmedashraf792002/Generative-AI-Projects/tree/main/LLAMA_3_1%20%20RAG%20Multi%20Doc%20QA%20Streamlit',
      category: 'generativeai'
    },
    {
      id: 'genai3',
      title: 'Document Summarizer with LlamaIndex & Llama 3',
      description: 'Developed an advanced document summarization system using LlamaIndex and Llama 3, providing intelligent text summarization capabilities for efficient information extraction and content analysis.',
      image: 'https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYWklMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1NjI5NDc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['LlamaIndex', 'Llama 3', 'Document Summarization', 'NLP'],
      githubUrl: 'https://github.com/ahmedashraf792002/Generative-AI-Projects/tree/main/Document%20Summarizer%20with%20LlamaIndex%20%26%20Llama%203',
      category: 'generativeai'
    },

    // PowerBI Projects
    {
      id: 'pbi1',
      title: 'Airline Passenger Satisfaction Report',
      description: 'Created comprehensive Power BI dashboards analyzing airline passenger satisfaction metrics, providing insights into service quality, customer feedback, and operational performance for strategic decision-making.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Power BI', 'Data Visualization', 'Customer Analytics', 'Dashboard Design'],
      githubUrl: 'https://github.com/ahmedashraf792002/PowerBI-Projects/tree/main/Airline%20Passenger%20Satisfaction%20Report',
      category: 'powerbi'
    },
    {
      id: 'pbi2',
      title: 'Healthcare Provider Dashboard',
      description: 'Developed an interactive healthcare analytics dashboard using Power BI, tracking patient outcomes, resource utilization, and operational KPIs to support healthcare management and improve patient care delivery.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Power BI', 'Healthcare Analytics', 'KPI Tracking', 'Patient Outcomes'],
      githubUrl: 'https://github.com/ahmedashraf792002/PowerBI-Projects/tree/main/Healthcare%20provider%20Dashboard',
      category: 'powerbi'
    },
    {
      id: 'pbi3',
      title: 'The AI, ML, Data Science Salary Analysis',
      description: 'Built comprehensive salary analysis dashboard for AI, ML, and Data Science roles using Power BI, providing market insights, compensation trends, and career guidance for tech professionals.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTYyOTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Power BI', 'Salary Analysis', 'Data Science', 'Market Research'],
      githubUrl: 'https://github.com/ahmedashraf792002/PowerBI-Projects/tree/main/The%20AI%2C%20ML%2C%20Data%20Science%20Salary%20Analysis',
      category: 'powerbi'
    },

    // Graduation Project
    {
      id: 'grad1',
      title: 'Alzheimer\'s Detection With Generative AI',
      description: 'Many of us face challenges related to early Alzheimer\'s diagnosis, affecting the opportunities for effective treatment and management. Our project offers an innovative solution based on artificial intelligence technologies to early detect symptoms.',
      image: 'https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYnJhaW4lMjBzY2FuJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NTYyOTQ3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Generative AI', 'Medical Diagnosis', 'Early Detection', 'Deep Learning'],
      githubUrl: 'https://github.com/ahmedashraf792002/Leader-Graduation-Project',
      category: 'graduation'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ml', label: 'ML', count: projects.filter(p => p.category === 'ml').length },
    { id: 'dl', label: 'DL', count: projects.filter(p => p.category === 'dl').length },
    { id: 'cv', label: 'CV', count: projects.filter(p => p.category === 'cv').length },
    { id: 'nlp', label: 'NLP', count: projects.filter(p => p.category === 'nlp').length },
    { id: 'autoencoder', label: 'AutoEncoder', count: projects.filter(p => p.category === 'autoencoder').length },
    { id: 'gan', label: 'GAN', count: projects.filter(p => p.category === 'gan').length },
    { id: 'generativeai', label: 'Generative AI', count: projects.filter(p => p.category === 'generativeai').length },
    { id: 'powerbi', label: 'PowerBI', count: projects.filter(p => p.category === 'powerbi').length },
    { id: 'graduation', label: 'Graduation', count: projects.filter(p => p.category === 'graduation').length }
  ];

  const categoryRepositories = {
    ml: 'https://github.com/ahmedashraf792002/ML-Projects',
    dl: 'https://github.com/ahmedashraf792002/DL-Projects',
    cv: 'https://github.com/ahmedashraf792002/CV-Projects',
    nlp: 'https://github.com/ahmedashraf792002/NLP-Projects',
    autoencoder: 'https://github.com/ahmedashraf792002/AutoEncoder-Projects',
    gan: 'https://github.com/ahmedashraf792002/GAN-Projects',
    generativeai: 'https://github.com/ahmedashraf792002/Generative-AI-Projects',
    powerbi: 'https://github.com/ahmedashraf792002/PowerBI-Projects',
    graduation: 'https://github.com/ahmedashraf792002/Leader-Graduation-Project'
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
                +{project.technologies.length - 4} more
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
          View More {category.toUpperCase()} Projects
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </Button>
    </motion.div>
  );

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
          href="https://github.com/ahmedashraf792002/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          View All My Projects
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
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Showcasing 100+ AI & ML projects across machine learning, deep learning, computer vision, 
            natural language processing, generative AI, and business intelligence. Each project demonstrates 
            hands-on implementation with real-world applications.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-16 bg-muted/50 p-1 h-auto">
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
              {projects.slice(0, 12).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              <AllProjectsButton />
            </div>
          </TabsContent>

          {['ml', 'dl', 'cv', 'nlp', 'autoencoder', 'gan', 'generativeai', 'powerbi', 'graduation'].map((category) => (
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