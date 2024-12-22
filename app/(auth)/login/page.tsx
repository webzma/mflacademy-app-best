import LoginForm from "@/components/ui/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-white grid grid-cols-2 shadow-2xl rounded-xl">
      <div>
        <img
          src="/mflacademy-login-image.jpg"
          alt="MFLacademy image"
          className="h-[600px] rounded-l-xl"
        />
      </div>
      <LoginForm />
    </div>
  );
}
