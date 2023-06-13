import { SessionProvider as Session } from "next-auth/react";

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  return <Session>{children}</Session>;
};

export default SessionProvider;
