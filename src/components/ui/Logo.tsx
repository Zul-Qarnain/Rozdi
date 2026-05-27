export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
    >
      <rect width="100" height="100" rx="20" fill="#1A1A1A" />
      <path 
        d="M35 30H55C65 30 70 35 70 45C70 55 65 60 55 60H45V75H35V30Z" 
        fill="white" 
      />
      <path 
        d="M50 60L65 75H52L42 60H50Z" 
        fill="white" 
      />
      <circle cx="65" cy="45" r="5" fill="#1A1A1A" />
    </svg>
  );
}

export function LogoText({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-bold tracking-tight text-[var(--color-charcoal)] ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path d="M25 20H55C70 20 80 30 80 45C80 60 70 70 55 70H40V85H25V20Z" fill="#1A1A1A" />
        <path d="M45 70L65 85H48L35 70H45Z" fill="#1A1A1A" />
        <circle cx="60" cy="45" r="8" fill="white" />
      </svg>
      <span className="text-[22px]">Rozdi</span>
    </div>
  );
}
