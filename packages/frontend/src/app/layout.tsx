/**
 * @file layout.tsx
 * @description Root layout for the very-princess Next.js application.
 * 
 * This is a minimal root layout that delegates to the locale-specific layouts.
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
