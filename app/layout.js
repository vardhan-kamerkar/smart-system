import "./index.css";


export default function RootLayout({
  children}) {
  return (
    <html
      lang="en" suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
