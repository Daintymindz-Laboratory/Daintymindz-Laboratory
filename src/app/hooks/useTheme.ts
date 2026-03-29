"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function notifyThemeChange() {
  for (const listener of listeners) {
    listener();
  }
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);

    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : null;
  } catch {
    return null;
  }
}

function hasStoredThemeOverride(): boolean {
  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (storedTheme === "light" || storedTheme === "dark") {
      return true;
    }

    if (storedTheme !== null) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    return false;
  }

  return false;
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function getSnapshot(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const rootTheme = document.documentElement.dataset.theme;
  if (rootTheme === "light" || rootTheme === "dark") {
    return rootTheme;
  }

  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return getSystemTheme();
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  listeners.add(onStoreChange);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handlePreferenceChange = () => {
    if (hasStoredThemeOverride()) {
      return;
    }

    applyTheme(getSystemTheme());
    notifyThemeChange();
  };

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      const nextTheme =
        event.newValue === "light" || event.newValue === "dark"
          ? event.newValue
          : getSystemTheme();
      applyTheme(nextTheme);
      notifyThemeChange();
    }
  };

  mediaQuery.addEventListener("change", handlePreferenceChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(onStoreChange);
    mediaQuery.removeEventListener("change", handlePreferenceChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    getSnapshot,
    () => "dark"
  );

  const updateTheme = (nextTheme: Theme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage errors so the in-memory theme toggle still works.
    }

    applyTheme(nextTheme);
    notifyThemeChange();
  };

  const toggleTheme = () => {
    updateTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, setTheme: updateTheme, toggleTheme };
}