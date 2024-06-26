"use client";

import { ScrollProvider } from "@/hooks/useLenis";
import LoadingBar from "react-top-loading-bar";
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { customCursor } from "./lib/gsap/gsap";
import Cursor from "@/components/cursor/customCursor";
import Preloader from "@/components/preloader/preloader";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const LoadingBarRef: any = useRef(null);

  const pathname = usePathname();

  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (LoadingBarRef.current) {
      LoadingBarRef.current.continuousStart();
    }
    !isTouch &&
      setTimeout(() => {
        customCursor();
      }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleRouteChange = () => {
      if (LoadingBarRef.current) {
        setTimeout(() => {
          LoadingBarRef.current?.complete();
        }, 300);
      }
    };

    handleRouteChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <ChakraProvider theme={theme}>
      <Preloader />
      <LoadingBar ref={LoadingBarRef} height={3} color="#ff98a2" />
      {!isTouch && <Cursor />}
      <ScrollProvider>{children}</ScrollProvider>
    </ChakraProvider>
  );
}
