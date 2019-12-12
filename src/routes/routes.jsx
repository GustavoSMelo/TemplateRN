import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import PageRegister from "../pages/Register/PageRegister";
import PageData from "../pages/Data/index";

const MyPages = createStackNavigator(
    {
        PageRegister: PageRegister,
        PageData: PageData
    },
    {
        initialRouteName: "PageRegister"
    }
);

const Routes = createAppContainer(MyPages);

export default Routes;
