import { cn } from "@/lib/utils";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function ProtectedRoutesLayout({ children }: AuthLayoutProps) {
  const pathname = "/dashboard";

  return (
    <div className="grid place-items-center h-screen">
      <div className="w-[290px] left-0 absolute h-screen py-4 px-2">
        <div className="px-3 py-2 flex-1">
          <h4 className="text-xl text-white font-semibold">
            Portal estudiantil
          </h4>

          <div className="flex flex-col gap-y-1 text-white mt-4">
            <Link
              href="/"
              className={cn(
                "flex gap-x-2 items-center py-3 px-4 rounded-md text-sm hover:bg-[#262626]",
                pathname === "/dashboard" && "bg-[#262626]"
              )}
            >
              Panel principal
            </Link>
            <Link
              href="/"
              className={cn(
                "flex gap-x-2 items-center py-3 px-4 rounded-md text-sm hover:bg-[#262626]",
                pathname === "/dashboard" && "bg-[#262626]"
              )}
            >
              Mis pagos
            </Link>
            <Link
              href="/"
              className={cn(
                "flex gap-x-2 items-center py-3 px-4 rounded-md text-sm hover:bg-[#262626]",
                pathname === "/dashboard" && "bg-[#262626]"
              )}
            >
              Configuración
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
