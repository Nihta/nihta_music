import {
  NavigationState,
  ParamListBase,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * Navigating without the navigation prop
 * @todo Update type
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop
 */
export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name as never, params as never);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

/**
 * GoBack if possible
 */
export function goBack() {
  if (navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export const getKeyByRouteName = (
  routes: NavigationState<ParamListBase>['routes'],
  routeName: string,
) => {
  const routeKey = routes.find(route => route.name === routeName);
  return routeKey?.key;
};
