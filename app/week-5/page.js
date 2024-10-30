import react from 'react';
import NewItem from './new-item';
import Link from 'next/link';

export default function Page() {
    return (
        <main>
                  <Link href="/" className="absolute top-5 left-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Back to Home
      </Link>
            <NewItem/>
        </main>
    )
};
