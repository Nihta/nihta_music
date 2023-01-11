/**
 * @see https://reactnavigation.org/docs/typescript/#organizing-types
 */

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStack';

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
