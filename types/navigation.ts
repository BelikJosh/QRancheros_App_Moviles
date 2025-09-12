// types/navigation.ts
export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined; // ← Nueva pantalla para los tabs
  Bank_Card: undefined; // ← Agregar esta ruta con el nombre exac
};

export type MainTabParamList = {
  Home: undefined;
  Pay: undefined;
  Scan: undefined;
  Map: undefined;
  Profile: undefined;
  Settings: undefined; 
  Bank: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}