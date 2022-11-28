import create from "zustand";
import { persist } from "zustand/middleware";

const useTheme = create(
  persist(
    (set) => ({
      colorScheme: "light",
      toggleColorScheme: (value) => {
        set((state) => ({
          colorScheme:
            value || (state.colorScheme === "dark" ? "light" : "dark"),
        }));
      },
    }),
    {
      name: "project:theme",
      getStorage: () => localStorage,
      partialize: (state) => ({
        colorScheme: state.colorScheme,
      }),
    }
  )
);

export default useTheme;
