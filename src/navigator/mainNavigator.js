import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile84765Navigator from '../features/UserProfile84765/navigator';
import Tutorial84764Navigator from '../features/Tutorial84764/navigator';
import NotificationList84736Navigator from '../features/NotificationList84736/navigator';
import Settings84735Navigator from '../features/Settings84735/navigator';
import Settings84727Navigator from '../features/Settings84727/navigator';
import UserProfile84725Navigator from '../features/UserProfile84725/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile84765: { screen: UserProfile84765Navigator },
Tutorial84764: { screen: Tutorial84764Navigator },
NotificationList84736: { screen: NotificationList84736Navigator },
Settings84735: { screen: Settings84735Navigator },
Settings84727: { screen: Settings84727Navigator },
UserProfile84725: { screen: UserProfile84725Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
