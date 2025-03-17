import { roboto } from "@/app/fonts";
import AuthForm from "../../features/auth/AuthForm";
import { ShoppingBag } from "lucide-react";
export default function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-gray-100 items-center py-7 flex flex-col rounded-md drop-shadow-md h-[60%] w-[50%]">
        <ShoppingBag size={70} />
        <h1 className={`${roboto.className} text-2xl font-bold mb-5`}>Welcome to OrdersM.</h1>
        <AuthForm />
      </div>
    </div>
  );
}
