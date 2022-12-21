import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Context from "./context";
import DarkTheme from "./theme";
import Navigator from "./Navigator/Navigator";

function App() {
    const [settings, setSettings] = useState({
        waiting: 1,
        balance: 100,
        bidResult: false,
        payment: 10,
        yourName: "yourName",
        opponentName: "opponentName"
    });

    return (
        <Context.Provider value={{ settings, setSettings }}>
            <NavigationContainer theme={DarkTheme}>
                <Navigator />
            </NavigationContainer>
        </Context.Provider>
    );
}

export default App;
