/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
 import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList { }
   }
 }
 
 export type RootStackParamList = {
   Root: NavigatorScreenParams<RootTabParamList> | undefined;
   Modal: undefined;
   NotFound: undefined;
   Login: undefined;
   Sensor: undefined;
   EditDevice: undefined;
   EditAlarm: undefined;
   CreateAlarm: undefined;
   EditZone: undefined;
   CreateDevice: undefined;
   EditGateway: undefined;
   CreateGateway: undefined;
   ScanQrCode: undefined;
   SelectDeviceType: undefined;
   CreateZone: undefined;
   Alarm: undefined;
   Profile: undefined;
   EditUser: undefined;
   Analytics: undefined;
   DataList: undefined;
   GraphScreen: undefined;
   CreateUser: undefined;
   MultipleAlarm: undefined;
   AlarmNavigator: undefined;
   Notifications: undefined;
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 
 export type RootTabParamList = {
   Dashboard: undefined;
   AlarmNavigator: undefined;
   TabThree: undefined;
 };
 
 export type DrawerParamList = {
   Root: undefined;
   Sensor: undefined;
   Gateway: undefined;
   LogOut: undefined;
   Login: undefined;
   Zones: undefined;
   Logout: undefined;
   ScanQrCode: undefined;
   EditDevice: undefined;
   EditAlarm: undefined;
   CreateAlarm: undefined;
   EditGateway: undefined;
   CreateGateway: undefined;
   EditZone: undefined;
   Users: undefined
   Alarm: undefined;
   EditUser: undefined;
   // Zone: undefined;
 };
 
 export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
   BottomTabScreenProps<RootTabParamList, Screen>,
   NativeStackScreenProps<RootStackParamList>
 >;
 // export type MyDrawerTabScreenProps<Screen extends keyof DrawerTabParamList> = CompositeScreenProps<
 //   DrawerScr<DrawerTabParamList, Screen>,
 //   NativeStackScreenProps<DrawerTabParamList>
 // >