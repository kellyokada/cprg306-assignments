import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <ul className="space-y-4">
          <li>
            <Link href="week-2" className="text-blue-600 hover:text-blue-800 hover:underline">
              Week 2
            </Link>
          </li>
          <li>
            <Link href="week-3" className="text-blue-600 hover:text-blue-800 hover:underline">
              Week 3
            </Link>
          </li>
          <li>
            <Link href="week-4" className="text-blue-600 hover:text-blue-800 hover:underline">
              Week 4
            </Link>
          </li>
          <li>
            <Link href="week-5" className="text-blue-600 hover:text-blue-800 hover:underline">
              Week 5
            </Link>
          </li>
          <li>
            <Link href="week-6" className="text-blue-600 hover:text-blue-800 hover:underline">
              Week 6
            </Link>
          </li>
          <li>
            <Link href="week-7" className="text-blue-600 hover:text-blue-800 hover:underline">
              Week 7
            </Link>
            
          </li>

          <li>
            <Link href="week-8" className="text-blue-600 hover:text-blue-800 hover:underline">
              Week 8
            </Link>
          </li>
          <li>
            <Link href="week-9" className="text-blue-600 hover:text-blue-800 hover:underline">
              Week 9
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
