import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Settings from "./Settings/Settings";
import Balance from "./Balance/Balance";
import Bid from "./Bid/Bid";

import { OPTIONS } from "./Navigator.constants";

const Drawer = createDrawerNavigator();

function Navigator() {
    return (
        <Drawer.Navigator initialRouteName="Settings">
            <Drawer.Screen
                name="Настройки"
                component={Settings}
                options={OPTIONS}
            />
            <Drawer.Screen
                name="Баланс"
                component={Balance}
                options={OPTIONS}
            />
            <Drawer.Screen
                name="Ставки"
                component={Bid}
                options={OPTIONS}
            />
        </Drawer.Navigator>
    );
}

export default Navigator;
