'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Анимация заднего фона с сеткой и частицами
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(${Math.random() < 0.33 ? '0, 195, 255' : Math.random() < 0.5 ? '190, 0, 255' : '0, 255, 240'}, ${Math.random() * 0.5 + 0.25})`,
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Рисуем сетку
      ctx.strokeStyle = 'rgba(0, 195, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Вертикальные линии
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Горизонтальные линии
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Рисуем и обновляем частицы
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Проверяем границы
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    createParticles();
    animate();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Варианты анимации для текста
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновая анимация */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom, rgb(10, 10, 15), rgb(5, 5, 10))' }}
      />
      
      {/* Содержимое */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          >
            K.CONSULTING —<br/>
            КРИПТО-КОНСАЛТИНГ<br/>
            НОВОГО ПОКОЛЕНИЯ
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-10 text-gray-300"
          >
            Токанизация, запуск проектов, блокчейн-решения и маркетинг<br/>
            в крипте
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="#consultation" className="cyber-button">
              Получить консультацию
            </Link>
            
            <Link href="#cases" className="cyber-button purple">
              Посмотреть кейсы
            </Link>
            
            <Link href="#services" className="cyber-button cyan">
              Запустить проект
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 