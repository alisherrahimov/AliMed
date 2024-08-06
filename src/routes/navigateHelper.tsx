import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, ...args: any) => {
  if (!navigationRef) return;
  navigationRef.navigate(name, ...args);
};

export const goBack = () => {
  if (!navigationRef) return;
  navigationRef.goBack();
};
