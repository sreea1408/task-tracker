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
import {
  Switch,
  useMantineColorScheme,
  useMantineTheme,
  Grid,
  Group,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

function Theme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Grid>
      <Grid.Col span={1}></Grid.Col>
      <Grid.Col span={2}>Theme</Grid.Col>
      <Grid.Col span="auto"></Grid.Col>
      <Grid.Col span={1}>
        <Group position="left">
          <Switch
            checked={colorScheme === "dark"}
            onChange={() => toggleColorScheme()}
            size="lg"
            onLabel={
              <IconSun color={theme.white} size="1.25rem" stroke={1.5} />
            }
            offLabel={
              <IconMoonStars
                color={theme.colors.gray[6]}
                size="1.25rem"
                stroke={1.5}
              />
            }
          />
        </Group>
      </Grid.Col>
      <Grid.Col span={1}></Grid.Col>
    </Grid>
  );
}

function Settings() {
  return <Theme />;
}

export default Settings;
