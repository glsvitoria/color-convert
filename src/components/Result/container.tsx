import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex h-80 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-xl sm:w-picker-sm md:h-picker md:w-picker md:gap-4 lg:gap-6">
      {children}
    </div>
  );
};
