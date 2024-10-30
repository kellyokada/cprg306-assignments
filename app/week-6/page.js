import Link from 'next/link';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <Link href="/" className="absolute top-5 left-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
      Back to Home
    </Link>
      <h1 className="text-4xl font-bold mb-8 text-black">Shopping List</h1>
      <ItemList />
    </main>
  );
}
