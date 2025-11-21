import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, AppState } from "react-native";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  // 🎯 Same Android immersive UI (your style)
  useEffect(() => {
    if (Platform.OS !== "android") return;

    const hideNav = async () => {
      try {
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setButtonStyleAsync("light");
        await NavigationBar.setBackgroundColorAsync("transparent");
      } catch {}
    };

    const t = setTimeout(hideNav, 100);

    const sub = AppState.addEventListener("change", (state) => {
      if (state === "active") setTimeout(hideNav, 100);
    });

    return () => {
      clearTimeout(t);
      sub.remove();
    };
  }, []);

  return (
    <>
      <StatusBar hidden={Platform.OS === "android"} translucent />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#0a0a0a",
            borderTopWidth: 1,
            borderTopColor: "#1a1a1a",
            height: 65,
            paddingBottom: 10,
            paddingTop: 8,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#555",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            letterSpacing: 0.5,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="movies"
          options={{
            title: "Movies",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="film" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="category"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="movie-details"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </>
  );
}
