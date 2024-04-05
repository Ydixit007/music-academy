import { cn } from "@/utils/cn";
import Link from "next/link";

const CustomButton = ({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      className={cn(
        "px-8 py-5 rounded-3xl text-sm border-sky-700/30 hover:border-sky-700/80 border-[1px] duration-200 hover:bg-gray-950 shadow-2xl shadow-sky-700/20 hover:shadow-sky-700/30",
        className
      )}
      href={href}
    >
      {label}
    </Link>
  );
};

export default CustomButton;
