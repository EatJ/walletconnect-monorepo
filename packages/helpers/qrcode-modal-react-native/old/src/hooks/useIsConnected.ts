import WalletConnect from '@walletconnect/client';
import * as React from 'react';

export default function useIsConnected(connector?: WalletConnect): boolean {
  const [isConnected, setIsConnected] = React.useState<boolean>(
    connector ? connector.connected : false
  );

  React.useEffect(() => {
    !!connector && (() => {
      connector.on('connect', () => {
        setIsConnected(true);
      });
      connector.on('disconnect', () => {
        setIsConnected(false);
      });
    })();
  }, [setIsConnected, connector]);

  return isConnected;
}