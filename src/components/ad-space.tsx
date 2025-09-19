interface AdSpaceProps {
  size: "banner" | "sidebar" | "square";
  className?: string;
}

export function AdSpace({ size, className = "" }: AdSpaceProps) {
  const sizeClasses = {
    banner: "h-24 w-full",
    sidebar: "h-96 w-full max-w-xs",
    square: "h-64 w-64",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted`}
    >
      <div className="text-center text-muted-foreground">
        <div className="text-sm font-medium">Espaço para anúncio</div>
        <div className="text-xs">
          {size === "banner"
            ? "728x90"
            : size === "sidebar"
              ? "300x250"
              : "250x250"}
        </div>
      </div>
    </div>
  );
}
