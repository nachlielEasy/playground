"use client";

import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  return (
    <main>
      <h1>Search Parameters</h1>
      <ul>
        {Array.from(searchParams.entries()).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
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
