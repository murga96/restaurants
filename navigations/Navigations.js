import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import Favorites from '../screens/Favorites'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/Account'
import Restaurants from '../screens/Restaurants'


const Tab = createBottomTabNavigator()

export default function Navigations() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={Restaurants}
                    options={{title: "Restaurantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={Favorites}
                    options={{title: "Favoritos"}}
                />
                <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurants}
                    options={{title: "Top 5"}}
                />
                <Tab.Screen
                    name="search"
                    component={Search}
                    options={{title: "Buscar"}}
                />
                <Tab.Screen
                    name="account"
                    component={Account}
                    options={{title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
