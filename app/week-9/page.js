"use client"
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function SignInPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <header className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Kelly List</h1>
                </header>
                {user ? (
                    <div className="text-center">
                        <p className="text-lg mb-2">Hello,{user.displayName}!</p>
                        <p className="text-gray-600 mb-4">Your e-mail is: {user.email}</p>
                        <button className="bg-blue-500 text-white mr-4 px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            <Link href="./week-8">Go to my list</Link>
                        </button>
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-700 mb-4">Please, sign in.</p>
                        <button
                            type="button"
                            onClick={handleSignIn}
                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                        >
                            Sign in With GitHub
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
