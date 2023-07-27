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
import { Button, Select } from "@mantine/core";

import "./today.css";

function Today() {
  const [data, setData] = useState(["world"]);
  const [selectDisabled, setSelectDisabled] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <div className="center-screen">
      <Select
        placeholder="Select Task"
        searchable
        creatable
        getCreateLabel={(query) => `+ ${query}`}
        disabled={selectDisabled}
        onChange={(query) => {
          console.log(query);
          setSelectDisabled(true);
          setButtonDisabled(false);
        }}
        onCreate={(query) => {
          const item = { value: query, label: query };
          setData((current) => [...current, item]);
          return item;
        }}
        data={data}
        defaultValue={""}
      />
      <Button
        fullWidth
        disabled={buttonDisabled}
        color="red"
        onClick={() => {
          setButtonDisabled(true);
          setSelectDisabled(false);
        }}
      >
        End Task
      </Button>
    </div>
  );
}

export default Today;
