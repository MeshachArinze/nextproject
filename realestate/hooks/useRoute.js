"use client";

import NProgress from "nprogress";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    const url = `${pathname}?${searchParams}`;
    console.log(url);
     NProgress.done();
  }, [pathname, searchParams]);



  return null;
}
