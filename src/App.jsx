import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ShieldCheck, 
  Music, 
  Radio, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  HardDrive, 
  ListMusic, 
  Headphones, 
  Play, 
  Pause, 
  Volume2, 
  CheckCircle2, 
  Activity,
  Layers,
  Cpu,
  VolumeX,
  Disc,
  Compass,
  Flame
} from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  // Real-time equalizer height array state for visualizer
  const [eqHeights, setEqHeights] = useState([35, 65, 40, 85, 95, 60, 45, 90, 75, 55, 70, 40]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        setEqHeights(prev => prev.map(() => Math.floor(Math.random() * 75) + 20));
      } else {
        setEqHeights(prev => prev.map(() => 12));
      }
    }, 140);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleDownload = () => {
    setDownloading(true);
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDownloadComplete(true);
          return 100;
        }
        return prev + 15;
      });
    }, 160);
  };

  const featuresList = [
    {
      title: "Scan Local Instantané",
      desc: "Détection immédiate et ultra-rapide de votre bibliothèque audio sur stockage interne et cartes SD sans aucune latence ni recours au Cloud.",
      icon: <HardDrive className="feature-icon" />
    },
    {
      title: "Lecture Arrière-Plan Haute Fidélité",
      desc: "Maintien d'un flux audio bit-perfect même lorsque l'appareil est verrouillé ou en usage multitâche intensif.",
      icon: <Headphones className="feature-icon" />
    },
    {
      title: "Gestion Souveraine des Playlists",
      desc: "Organisation sur-mesure de vos morceaux favoris sans contrainte de compte, sans traçage et sans abonnement.",
      icon: <ListMusic className="feature-icon" />
    }
  ];

  return (
    <div className="tressbit-app-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --bg-deep: #041208;
          --bg-surface: #071A0E;
          --bg-card: #0A2414;
          --accent-mint: #95B8C0;
          --accent-glow: rgba(149, 184, 192, 0.25);
          --text-main: #EBF2F4;
          --text-muted: #9BAEAD;
          --border-subtle: rgba(149, 184, 192, 0.15);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
          background-color: var(--bg-deep);
          color: var(--text-main);
          overflow-x: hidden;
          width: 100%;
        }

        .tressbit-app-container {
          min-height: 100vh;
          background: radial-gradient(circle at 50% 12%, rgba(149, 184, 192, 0.08) 0%, rgba(4, 18, 8, 0.98) 65%), var(--bg-deep);
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        /* Ambient Cyber Grids & Glows */
        .ambient-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(149, 184, 192, 0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(149, 184, 192, 0.02) 1px, transparent 1px);
          background-size: 70px 70px;
          z-index: 0;
          pointer-events: none;
        }

        .ambient-glow-main {
          position: absolute;
          top: 15%;
          left: 20%;
          width: min(500px, 80vw);
          height: min(500px, 80vw);
          background: rgba(149, 184, 192, 0.07);
          filter: blur(140px);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        /* Header */
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: rgba(4, 18, 8, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 1000;
        }

        @media (min-width: 768px) {
          header {
            padding: 22px 48px;
          }
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-img-wrapper {
          position: relative;
          padding: 2px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-mint), #4A7A84);
          box-shadow: 0 0 20px rgba(149, 184, 192, 0.3);
          flex-shrink: 0;
        }

        .logo-img {
          width: 34px;
          height: 34px;
          object-fit: contain;
          border-radius: 10px;
          background: var(--bg-deep);
          display: block;
        }

        @media (min-width: 768px) {
          .logo-img {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }
        }

        .brand-title {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #FFFFFF 30%, var(--accent-mint) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (min-width: 768px) {
          .brand-title {
            font-size: 24px;
          }
        }

        .header-cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--accent-mint);
          color: #041208;
          padding: 10px 18px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 13px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 25px rgba(149, 184, 192, 0.25);
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .header-cta-btn {
            padding: 12px 26px;
            border-radius: 14px;
            font-size: 14px;
            gap: 10px;
          }
        }

        .header-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(149, 184, 192, 0.5);
          background: #B0D0d8;
        }

        .header-cta-logo {
          width: 16px;
          height: 16px;
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .header-cta-logo {
            width: 18px;
            height: 18px;
          }
        }

        /* Hero Section */
        .hero-section {
          padding: 130px 16px 80px;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .hero-section {
            grid-template-columns: 1.1fr 0.9fr;
            padding: 190px 24px 130px;
            gap: 60px;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(149, 184, 192, 0.08);
          border: 1px solid rgba(149, 184, 192, 0.3);
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-mint);
          margin-bottom: 20px;
          box-shadow: inset 0 0 15px rgba(149, 184, 192, 0.1);
          text-align: left;
        }

        @media (min-width: 768px) {
          .hero-badge {
            padding: 8px 18px;
            font-size: 13px;
            margin-bottom: 24px;
          }
        }

        .hero-title {
          font-size: 34px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 20px;
        }

        @media (min-width: 640px) {
          .hero-title {
            font-size: 44px;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 58px;
            letter-spacing: -2px;
            margin-bottom: 24px;
          }
        }

        .hero-title span {
          background: linear-gradient(135deg, var(--accent-mint) 0%, #FFFFFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 40px rgba(149, 184, 192, 0.25);
        }

        .hero-description {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 30px;
        }

        @media (min-width: 768px) {
          .hero-description {
            font-size: 18px;
            margin-bottom: 40px;
          }
        }

        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .hero-cta-group {
            flex-direction: row;
            gap: 16px;
          }
        }

        .btn-massive-download {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, var(--accent-mint), #729FA9);
          color: #041208;
          padding: 16px 24px;
          border-radius: 14px;
          font-weight: 800;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 35px rgba(149, 184, 192, 0.3);
          animation: pulseGlow 3.5s infinite;
          width: 100%;
        }

        @media (min-width: 640px) {
          .btn-massive-download {
            width: auto;
            padding: 18px 32px;
            font-size: 16px;
            border-radius: 16px;
          }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 25px rgba(149, 184, 192, 0.25); }
          50% { box-shadow: 0 0 55px rgba(149, 184, 192, 0.55), 0 0 80px rgba(149, 184, 192, 0.2); }
        }

        .btn-massive-download:hover {
          transform: translateY(-2px) scale(1.01);
          background: linear-gradient(135deg, #B0D0D8, var(--accent-mint));
        }

        .btn-massive-logo {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .btn-massive-logo {
            width: 24px;
            height: 24px;
          }
        }

        .btn-secondary-explore {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(149, 184, 192, 0.04);
          color: var(--text-main);
          padding: 16px 24px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 15px;
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        @media (min-width: 640px) {
          .btn-secondary-explore {
            width: auto;
            padding: 18px 28px;
            font-size: 16px;
            border-radius: 16px;
          }
        }

        .btn-secondary-explore:hover {
          background: rgba(149, 184, 192, 0.1);
          border-color: rgba(149, 184, 192, 0.3);
        }

        /* Spectacular Spinning Vinyl Stage */
        .vinyl-stage-hero {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .vinyl-stage-hero {
            height: 480px;
          }
        }

        .cyber-vinyl-disc {
          position: relative;
          width: min(300px, 85vw);
          height: min(300px, 85vw);
          background: radial-gradient(circle, #0c2314 0%, #041208 75%);
          border-radius: 50%;
          box-shadow: 0 0 50px rgba(149, 184, 192, 0.18), 0 0 90px rgba(4, 18, 8, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          animation: spinCyberVinyl 12s linear infinite;
          animation-play-state: ${isPlaying ? 'running' : 'paused'};
          border: 2px solid rgba(149, 184, 192, 0.35);
        }

        @media (min-width: 768px) {
          .cyber-vinyl-disc {
            width: 380px;
            height: 380px;
          }
        }

        @keyframes spinCyberVinyl {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .cyber-vinyl-grooves {
          position: absolute;
          width: 92%;
          height: 92%;
          border-radius: 50%;
          background: repeating-radial-gradient(
            circle,
            transparent,
            transparent 6px,
            rgba(149, 184, 192, 0.08) 7px,
            transparent 8px
          );
          box-shadow: inset 0 0 30px rgba(149, 184, 192, 0.12);
        }

        .cyber-vinyl-label {
          width: min(100px, 30vw);
          height: min(100px, 30vw);
          background: linear-gradient(135deg, var(--bg-surface), #041208);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid var(--accent-mint);
          box-shadow: 0 0 25px rgba(149, 184, 192, 0.4);
          z-index: 2;
        }

        @media (min-width: 768px) {
          .cyber-vinyl-label {
            width: 130px;
            height: 130px;
          }
        }

        .cyber-vinyl-label img {
          width: min(40px, 12vw);
          height: min(40px, 12vw);
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .cyber-vinyl-label img {
            width: 50px;
            height: 50px;
          }
        }

        /* Equalizer Widget Card */
        .hero-equalizer-card {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(7, 26, 14, 0.9);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(149, 184, 192, 0.3);
          padding: 12px 16px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
          z-index: 5;
        }

        @media (min-width: 768px) {
          .hero-equalizer-card {
            bottom: 20px;
            left: 20px;
            padding: 18px 24px;
            border-radius: 18px;
            gap: 20px;
          }
        }

        .eq-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 30px;
        }

        @media (min-width: 768px) {
          .eq-bars {
            gap: 4px;
            height: 38px;
          }
        }

        .eq-bar {
          width: 4px;
          background: linear-gradient(to top, #4A7A84, var(--accent-mint));
          border-radius: 3px;
          transition: height 0.1s ease;
        }

        @media (min-width: 768px) {
          .eq-bar {
            width: 5px;
          }
        }

        /* Interactive Showcase & Mascot & Black Portraits */
        .showcase-section {
          padding: 80px 16px;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .showcase-section {
            padding: 110px 24px;
          }
        }

        .section-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 50px;
        }

        @media (min-width: 768px) {
          .section-header {
            margin: 0 auto 70px;
          }
        }

        .section-header h2 {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }

        @media (min-width: 640px) {
          .section-header h2 {
            font-size: 36px;
          }
        }

        @media (min-width: 1024px) {
          .section-header h2 {
            font-size: 44px;
            letter-spacing: -1px;
            margin-bottom: 16px;
          }
        }

        .section-header p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .section-header p {
            font-size: 16px;
          }
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .showcase-grid {
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
        }

        .mascot-display-card {
          background: linear-gradient(145deg, var(--bg-surface), var(--bg-deep));
          border: 1px solid var(--border-subtle);
          border-radius: 28px;
          padding: 36px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6);
        }

        @media (min-width: 768px) {
          .mascot-display-card {
            border-radius: 36px;
            padding: 60px;
          }
        }

        .ghost-mascot-img {
          width: min(160px, 50vw);
          height: min(160px, 50vw);
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(149, 184, 192, 0.5));
          animation: levitateGhost 4.5s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .ghost-mascot-img {
            width: 200px;
            height: 200px;
          }
        }

        @keyframes levitateGhost {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-16px) scale(1.03); }
        }

        .ghost-halo {
          position: absolute;
          width: min(200px, 60vw);
          height: min(200px, 60vw);
          background: radial-gradient(circle, rgba(149, 184, 192, 0.25) 0%, transparent 75%);
          border-radius: 50%;
          filter: blur(20px);
          animation: pulseHalo 4.5s ease-in-out infinite;
        }

        @keyframes pulseHalo {
          0%, 100% { transform: scale(0.85); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.95; }
        }

        /* High-End Black Photography Festival Showcase */
        .photo-gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        @media (min-width: 640px) {
          .photo-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .photo-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 50px;
          }
        }

        .photo-card {
          position: relative;
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        @media (min-width: 768px) {
          .photo-card {
            height: 320px;
            border-radius: 24px;
          }
        }

        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%) contrast(125%) brightness(88%);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .photo-card:hover img {
          transform: scale(1.06);
        }

        .photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(4, 18, 8, 0.92) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
        }

        /* Features Section */
        .features-section {
          padding: 80px 16px;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .features-section {
            padding: 110px 24px;
          }
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
        }

        .feature-card-modern {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          padding: 30px 24px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .feature-card-modern {
            border-radius: 28px;
            padding: 40px 32px;
          }
        }

        .feature-card-modern:hover {
          transform: translateY(-4px);
          border-color: rgba(149, 184, 192, 0.45);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(149, 184, 192, 0.04);
        }

        .feature-icon-wrapper {
          width: 52px;
          height: 52px;
          background: rgba(149, 184, 192, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 22px;
        }

        @media (min-width: 768px) {
          .feature-icon-wrapper {
            width: 60px;
            height: 60px;
            border-radius: 18px;
            margin-bottom: 28px;
          }
        }

        .feature-icon {
          width: 24px;
          height: 24px;
          color: var(--accent-mint);
        }

        .feature-card-modern h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        @media (min-width: 768px) {
          .feature-card-modern h3 {
            font-size: 22px;
            margin-bottom: 12px;
          }
        }

        .feature-card-modern p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .feature-card-modern p {
            font-size: 15px;
          }
        }

        /* Final APK Download CTA Section */
        .download-cta-section {
          padding: 80px 16px;
          max-width: 1040px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .download-cta-section {
            padding: 130px 24px;
          }
        }

        .download-box-cyber {
          background: linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-deep) 100%);
          border: 1px solid var(--accent-mint);
          border-radius: 28px;
          padding: 40px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(149, 184, 192, 0.12);
        }

        @media (min-width: 768px) {
          .download-box-cyber {
            border-radius: 40px;
            padding: 72px 48px;
          }
        }

        .download-box-cyber h2 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
        }

        @media (min-width: 640px) {
          .download-box-cyber h2 {
            font-size: 36px;
          }
        }

        @media (min-width: 1024px) {
          .download-box-cyber h2 {
            font-size: 46px;
            margin-bottom: 18px;
            letter-spacing: -1px;
          }
        }

        .download-box-cyber p {
          color: var(--text-muted);
          font-size: 15px;
          max-width: 620px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .download-box-cyber p {
            font-size: 17px;
            margin: 0 auto 40px;
          }
        }

        .offline-assurance-pills {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-top: 30px;
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .offline-assurance-pills {
            flex-direction: row;
            justify-content: center;
            gap: 30px;
            font-size: 14px;
            margin-top: 40px;
          }
        }

        .assurance-pill {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Modal Overlay with Logo & APK download */
        .cyber-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(4, 18, 8, 0.92);
          backdrop-filter: blur(18px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          padding: 16px;
        }

        .cyber-modal-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .cyber-modal-content {
          background: var(--bg-surface);
          border: 1px solid var(--accent-mint);
          border-radius: 28px;
          padding: 36px 24px;
          width: 100%;
          max-width: 480px;
          text-align: center;
          position: relative;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(149, 184, 192, 0.2);
          transform: scale(0.94);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 768px) {
          .cyber-modal-content {
            border-radius: 32px;
            padding: 48px 40px;
          }
        }

        .cyber-modal-overlay.open .cyber-modal-content {
          transform: scale(1);
        }

        .modal-brand-logo {
          width: 64px;
          height: 64px;
          object-fit: contain;
          margin: 0 auto 18px;
          filter: drop-shadow(0 0 20px rgba(149, 184, 192, 0.6));
          border-radius: 16px;
          background: var(--bg-deep);
          padding: 6px;
          border: 1px solid var(--accent-mint);
        }

        @media (min-width: 768px) {
          .modal-brand-logo {
            width: 72px;
            height: 72px;
            margin: 0 auto 20px;
            border-radius: 18px;
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 22px;
          transition: color 0.2s;
          padding: 8px;
        }

        @media (min-width: 768px) {
          .modal-close-btn {
            top: 22px;
            right: 22px;
          }
        }

        .modal-close-btn:hover {
          color: var(--accent-mint);
        }

        .progress-track {
          width: 100%;
          height: 10px;
          background: rgba(149, 184, 192, 0.08);
          border-radius: 5px;
          overflow: hidden;
          margin: 24px 0 16px;
          border: 1px solid var(--border-subtle);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4A7A84, var(--accent-mint));
          transition: width 0.2s linear;
        }

        /* Footer */
        footer {
          border-top: 1px solid var(--border-subtle);
          padding: 36px 16px;
          text-align: center;
          color: var(--text-muted);
          font-size: 13px;
          background: #020D05;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          footer {
            padding: 48px 24px;
            font-size: 14px;
          }
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .footer-inner {
            flex-direction: row;
            gap: 20px;
          }
        }

        .footer-nav-links {
          display: flex;
          gap: 24px;
        }

        .footer-nav-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-nav-links a:hover {
          color: var(--accent-mint);
        }
      `}</style>

      <div className="ambient-grid"></div>
      <div className="ambient-glow-main"></div>

      {/* Header */}
      <header>
        <a href="#" className="logo-container">
          <div className="logo-img-wrapper">
            <img src="logo.png" alt="TressBit Logo" className="logo-img"  />
          </div>
          <span className="brand-title">TressBit</span>
        </a>
        <button className="header-cta-btn" onClick={() => setDownloadModalOpen(true)}>
          <img src="logo.png" alt="Logo" className="header-cta-logo" onError={(e)=>{e.target.src='https://placehold.co/40x40/041208/95B8C0?text=TB'}} />
          Télécharger l'APK
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Radio size={14} />
            100% Hors-Ligne &middot; Zéro Compte &middot; Zéro Connexion
          </div>
          <h1 className="hero-title">
            L'excellence audio haute fidélité en mode <span>souverain et hors-ligne</span>
          </h1>
          <p className="hero-description">
            Découvrez une expérience d'écoute nocturne ultime. TressBit analyse instantanément votre stockage local pour libérer votre musique avec une précision acoustique et visuelle incomparable sur Android.
          </p>
          <div className="hero-cta-group">
            <button className="btn-massive-download" onClick={() => setDownloadModalOpen(true)}>
              <img src="logo.png" alt="Logo" className="btn-massive-logo" onError={(e)=>{e.target.src='https://placehold.co/40x40/041208/95B8C0?text=TB'}} />
              Télécharger l'APK Android
            </button>
            <button className="btn-secondary-explore" onClick={() => {
              const el = document.getElementById('features');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explorer
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="vinyl-stage-hero">
          <div className="cyber-vinyl-disc">
            <div className="cyber-vinyl-grooves"></div>
            <div className="cyber-vinyl-label">
              <img src="logo.png" alt="TressBit" onError={(e)=>{e.target.src='https://placehold.co/100x100/041208/95B8C0?text=TB'}} />
            </div>
          </div>

          <div className="hero-equalizer-card">
            <button 
              style={{ background: 'transparent', border: 'none', color: 'var(--accent-mint)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause" : "Lecture"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <div className="eq-bars">
              {eqHeights.map((h, i) => (
                <div key={i} className="eq-bar" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase-section">
        <div className="section-header">
          <h2>Immersion Nocturne & Esthétique Audiophile</h2>
          <p>Un design sombre inspiré des meilleurs standards du mastering, sublimé par la lévitation de notre mascotte.</p>
        </div>

        <div className="showcase-grid">
          <div className="mascot-display-card">
            <div className="ghost-halo"></div>
            <img 
              src="ghoast.png" 
              alt="TressBit Ghost Mascot" 
              className="ghost-mascot-img"
              onError={(e)=>{e.target.src='https://placehold.co/180x180/071A0E/95B8C0?text=Ghost'}} 
            />
            <div style={{ marginTop: '24px', fontWeight: 700, fontSize: '18px', color: '#FFFFFF', textAlign: 'center' }}>Mascotte Cybernétique TressBit</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '6px', maxWidth: '340px' }}>
              Un compagnon invisible et ultra-léger pour vos sessions d'écoute musicale locale sans compromis.
            </div>
          </div>

          <div>
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '28px', padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>Philosophie Sans Connexion</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', marginBottom: '22px' }}>
                TressBit a été pensé pour les puristes qui possèdent leurs fichiers audio. Aucun serveur distant, aucun profil utilisateur exigé et aucune publicité intrusive. Votre musique vous appartient en totalité.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--accent-mint)', fontWeight: 600 }}>
                  <Activity size={18} /> 0% Cloud
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#B0D0D8', fontWeight: 600 }}>
                  <Cpu size={18} /> Bit-Perfect
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-End Black Photography Festival Showcase */}
        <div className="photo-gallery-grid">
          <div className="photo-card">
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" alt="Audio Enthusiast" />
            <div className="photo-overlay">
              <div style={{ fontWeight: 700, fontSize: '16px', color: '#FFFFFF' }}>Immersion Pure</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Son brut et sans compression</div>
            </div>
          </div>
          <div className="photo-card">
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80" alt="Concert Atmosphere" />
            <div className="photo-overlay">
              <div style={{ fontWeight: 700, fontSize: '16px', color: '#FFFFFF' }}>Ambiance Nocturne</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Contrastes sombres soignés</div>
            </div>
          </div>
          <div className="photo-card">
            <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" alt="DJ Session" />
            <div className="photo-overlay">
              <div style={{ fontWeight: 700, fontSize: '16px', color: '#FFFFFF' }}>Liberté Totale</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Vos fichiers, vos règles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="section-header">
          <h2>Architecture & Fonctionnalités Clés</h2>
          <p>Tout ce dont un puriste de la musique locale a besoin, optimisé pour les performances Android.</p>
        </div>

        <div className="features-grid">
          {featuresList.map((feat, idx) => (
            <div key={idx} className="feature-card-modern">
              <div className="feature-icon-wrapper">
                {feat.icon}
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Download CTA Section */}
      <section className="download-cta-section">
        <div className="download-box-cyber">
          <h2>Prêt à libérer votre son ?</h2>
          <p>
            Téléchargez l'APK TressBit dès maintenant. Aucune inscription, aucun profil requis et aucune collecte de données personnelles.
          </p>
          <button className="btn-massive-download" style={{ margin: '0 auto', width: 'fit-content' }} onClick={() => setDownloadModalOpen(true)}>
            <img src="logo.png" alt="Logo" className="btn-massive-logo" onError={(e)=>{e.target.src='https://placehold.co/40x40/041208/95B8C0?text=TB'}} />
            Télécharger l'APK Sécurisé
          </button>

          <div className="offline-assurance-pills">
            <div className="assurance-pill">
              <ShieldCheck size={16} color="var(--accent-mint)" />
              100% Hors-Ligne
            </div>
            <div className="assurance-pill">
              <Zap size={16} color="var(--accent-mint)" />
              Zéro Inscription
            </div>
            <div className="assurance-pill">
              <CheckCircle2 size={16} color="var(--accent-mint)" />
              APK Natif Android
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <div className={`cyber-modal-overlay ${downloadModalOpen ? 'open' : ''}`} onClick={() => setDownloadModalOpen(false)}>
        <div className="cyber-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={() => setDownloadModalOpen(false)}>&times;</button>
          
          <img 
            src="logo.png" 
            alt="TressBit Logo" 
            className="modal-brand-logo"
            onError={(e)=>{e.target.src='https://placehold.co/100x100/041208/95B8C0?text=TB'}} 
          />
          
          <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Télécharger TressBit APK</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '22px' }}>
            Application Android native &middot; 100% Hors-ligne &middot; Sans aucun compte.
          </p>

          {!downloading && !downloadComplete && (
            <button className="header-cta-btn" style={{ width: '100%', justifyContent: 'center', padding: '14px' }} onClick={handleDownload}>
              <img src="logo.png" alt="Logo" style={{width: 18, height: 18, objectFit: 'contain'}} onError={(e)=>{e.target.src='https://placehold.co/40x40/041208/95B8C0?text=TB'}} />
              Lancer le téléchargement direct
            </button>
          )}

          {downloading && (
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-mint)' }}>Préparation de l'APK sécurisé ({downloadProgress}%)...</div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${downloadProgress}%` }}></div>
              </div>
            </div>
          )}

          {downloadComplete && (
            <div style={{ background: 'rgba(149, 184, 192, 0.08)', border: '1px solid var(--accent-mint)', borderRadius: '16px', padding: '16px' }}>
              <CheckCircle2 size={32} color="var(--accent-mint)" style={{ margin: '0 auto 8px', display: 'block' }} />
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#FFFFFF' }}>Téléchargement prêt !</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Le fichier TressBit.apk est disponible sur votre appareil Android.</div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div>&copy; {new Date().getFullYear()} TressBit. Tous droits réservés. Lecteur audio souverain et 100% hors-ligne.</div>
          <div className="footer-nav-links">
            <a href="#">Confidentialité</a>
            <a href="#">Sécurité APK</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}