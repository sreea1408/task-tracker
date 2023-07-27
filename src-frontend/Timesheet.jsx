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

import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import { Button, Group, Table } from "@mantine/core";
import { Calendar } from "@mantine/dates";

function Timesheet() {
  const [selected, setSelected] = useState();
  const rows = [];
  return (
    <>
      <Group position="center">
        <Calendar
          getDayProps={(date) => ({
            selected: dayjs(date).isSame(selected, "date"),
            onClick: () => setSelected(date),
          })}
        />
      </Group>
      <Button fullWidth color="red">
        Delete day
      </Button>
      <Table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}

export default Timesheet;
