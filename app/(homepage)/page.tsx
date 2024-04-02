"use client";

import { Loading } from "@/components/auth/loading";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const store = useMutation(api.users.store);
  const router = useRouter();

  useEffect(() => {
    store({});
    router.push("/new");
  });

  return <Loading />;
}
