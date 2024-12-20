interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="grid place-items-center h-screen">{children}</div>;
}
