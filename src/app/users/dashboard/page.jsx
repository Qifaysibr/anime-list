import Image from "next/image"
import { authUserSession } from "@/libs/auth-libs";
const Page = async() => {
    const user = await authUserSession();
    console.log(user);
    return (
        <div className="text-gray-50">
            <h1>Dashboard</h1>
            <h3>Welcome, {user?.name}</h3>
            <Image className="rounded-full" src={user?.image} alt={user?.name} width={300} height={300} />
        </div>
    );
}

export default Page