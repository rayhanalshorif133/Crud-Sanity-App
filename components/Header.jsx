import Link from "next/link";

export default function Header() {
    return (
        <header className=" max-w-full  shadow shadow-gray-400">
            <div className="max-w-7xl mx-auto flex justify-between p-5">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <h2 className="font-bold uppercase text-sm md:text-xl
                        pl-2">
                            CURD <span className="md:block sm:hidden">Application</span>
                        </h2>
                    </Link>
                </div>
                <div className="hidden lg:inline-flex items-center space-x-5 text-sm">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3
                        className="cursor-pointer text-white bg-green-600 px-4 py-1 rounded-full hover:bg-white hover:text-green-600 
          hover:border hover:border-spacing-3 hover:border-green-600"
                    >
                        Follow
                    </h3>
                </div>
                <div className="flex items-center space-x-5 text-green-600">
                    <h3>Sign In</h3>
                    <h3 className="border px-4 py-1 rounded-full border-green-600">
                        Get Started
                    </h3>
                </div>
            </div>
        </header>
    );
}