import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" bg-slate-600">{children}</div>;
}
