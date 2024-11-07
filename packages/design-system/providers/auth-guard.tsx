"use client"

import React, { useEffect } from 'react';
import { useSession } from "@repo/auth/react";
import { useRouter, usePathname } from 'next/navigation';

const LOGIN_PATH = ['/signin', '/error'];

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const { push } = useRouter();
  const pathname = usePathname();

  const isOnLoginPath = LOGIN_PATH.includes(pathname);

  const shouldRedirectToAuth = status === 'unauthenticated' && !isOnLoginPath;
  const shouldRedirectToApp = status === 'authenticated' && isOnLoginPath;
  const shouldRedirectFromRoot = pathname === '/' && status === 'authenticated';

  useEffect(() => {
    if (shouldRedirectToAuth) push('/signin');
    else if (shouldRedirectToApp) push('/chat');
    else if (shouldRedirectFromRoot) push('/chat');
    else if (pathname === '/' && status === 'unauthenticated') push('/signin');
  }, [shouldRedirectToAuth, shouldRedirectToApp, shouldRedirectFromRoot, pathname, push, status]);

  if (status === 'loading' || shouldRedirectToApp || shouldRedirectToAuth || shouldRedirectFromRoot) {
    return <div />;
  }

  return <>{children}</>;
};

export default AuthGuard;
