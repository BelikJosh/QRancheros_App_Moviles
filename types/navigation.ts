// types/navigation.ts
export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined; // ← Nueva pantalla para los tabs
};

export type MainTabParamList = {
  Home: undefined;
  Pay: undefined;
  Scan: undefined;
  Map: undefined;
  Profile: undefined;
  Settings: undefined; 
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}