
const BlobBackground = () => {
  const blobs = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    size: Math.random() * (150 - 80) + 80, 
    top: Math.random() * 100, 
    left: Math.random() * 100, 
    duration: Math.random() * (20 - 10) + 10, 
    delay: Math.random() * 5, 
    color: `hsl(${Math.random() * 30 + 190}, 70%, 50%)`, 
    opacity: Math.random() * (0.4 - 0.2) + 0.2, 
  }));

  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * (2 - 0.5) + 0.5, 
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map(blob => (
        <div
          key={blob.id}
          className="absolute rounded-full filter blur-xl opacity-40 animate-blob-move"
          style={{
            width: blob.size,
            height: blob.size,
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            backgroundColor: blob.color,
            animationDuration: `${blob.duration}s`,
            animationDelay: `${blob.delay}s`,
            opacity: blob.opacity,
          }}
        ></div>
      ))}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-star-blink"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
     
      <style>{`
        @keyframes blob-move {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(calc(50vw - 100%), calc(50vh - 100%)) scale(1.1);
          }
          66% {
            transform: translate(calc(20vw - 100%), calc(20vh - 100%)) scale(0.9);
          }
        }

        @keyframes star-blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Adjust blob-move for smaller screens to prevent overflow */
        @media (max-width: 768px) {
          @keyframes blob-move {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(calc(20vw - 100%), calc(20vh - 100%)) scale(1.1);
            }
            66% {
              transform: translate(calc(10vw - 100%), calc(10vh - 100%)) scale(0.9);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default BlobBackground;