import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-6 bg-white rounded-xl bg-[#ededed]">
      <h1 className="text-sm font-bold border-b pb-2 flex justify-center text-lg text-purple-600">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
