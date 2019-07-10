import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Main from "~/pages/Main";
import Cart from "~/pages/Cart";

const Routes = createAppContainer(createBottomTabNavigator({ Main, Cart }));

export default Routes;
