import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mclinic.app',
  appName: 'mclinic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
