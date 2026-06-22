"use client";
import { useState, useEffect } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function ObfuscatedEmail({ className, children }: Props) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const u = "josh";
    const d = "appliedaiworks.com";
    setEmail(`${u}@${d}`);
  }, []);

  if (!email) {
    return <span className={className}>{children ?? "Email us"}</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {children ?? email}
    </a>
  );
}
