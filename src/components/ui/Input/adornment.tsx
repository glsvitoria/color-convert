interface AdornmentProps {
  children: React.ReactNode;
  position: "start" | "end";
}

export const Adornment = ({ children, position }: AdornmentProps) => {
  if (position === "start") {
    return (
      <span className="pointer-events-none absolute inset-y-0 left-0 flex h-7 items-center pl-3">
        <span className="text-[#9CA3AF]">{children}</span>
      </span>
    );
  } else {
    return (
      <span className="pointer-events-none absolute inset-y-0 right-0 flex h-7 items-center pr-3">
        <span className="text-[#9CA3AF]">{children}</span>
      </span>
    );
  }
};
