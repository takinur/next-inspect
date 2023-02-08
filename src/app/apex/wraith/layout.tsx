import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen bg-green-600">{children}</div>;
}
