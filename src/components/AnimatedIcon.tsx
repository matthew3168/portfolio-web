interface AnimatedIconProps {
  emoji: string;
  label: string;
  delay: number;
  className?: string;
}

export default function AnimatedIcon({ emoji, label, delay, className }: AnimatedIconProps) {
  return (
    <div 
      className={`absolute animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl bg-background/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
        {emoji}
      </div>
      <div className="text-xs mt-2 text-center font-medium opacity-70">{label}</div>
    </div>
  )
}