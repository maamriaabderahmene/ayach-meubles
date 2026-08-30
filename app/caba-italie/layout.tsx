import { AdminSessionProvider } from "./providers";
import "../globals.css";

// Force dynamic rendering for all admin pages — they require auth
// and NEXTAUTH_URL is not available at build time on Vercel
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Admin Dashboard - ZAK SHOP",
  description: "Admin dashboard for managing the ZAK SHOP store",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      className="antialiased bg-gray-50 text-gray-900"
      style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <AdminSessionProvider>{children}</AdminSessionProvider>
    </div>
  );
}
