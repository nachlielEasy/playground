"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SearchParamsList() {
  const searchParams = useSearchParams();

  return (
    <ul>
      {Array.from(searchParams.entries()).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Search Parameters</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsList />
      </Suspense>
    </main>
  );
}
// Server Component
// export default function Home({ searchParams }) {
//   return (
//     <main>
//       <h1>Search Parameters</h1>
//       <ul>
//         {Object.entries(searchParams).map(([key, value]) => (
//           <li key={key}>
//             <strong>{key}:</strong>{" "}
//             {Array.isArray(value) ? value.join(", ") : value}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
