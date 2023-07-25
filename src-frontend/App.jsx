/******************************************************************************
 * Copyright (C) 2023  sreea1408
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *****************************************************************************/

import React from "react";
import { useState } from "react";
import { Tabs, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import Today from "./Today";
import Calendar from "./Calendar";
import Settings from "./Settings";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Tabs defaultValue="today">
          <Tabs.List position="center">
            <Tabs.Tab value="today">Today</Tabs.Tab>
            <Tabs.Tab value="calendar">Calendar</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="today" pt="xs">
            <Today />
          </Tabs.Panel>

          <Tabs.Panel value="calendar" pt="xs">
            <Calendar />
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            <Settings />
          </Tabs.Panel>
        </Tabs>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
