import { FormControl, FormHelperText, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";

export default function CountrySelector({ value, hanldeOnChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={hanldeOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {
          countries.map((country) =>{
                return <option key={country.id} value={country.CountryCode}>{country.Country}</option>
            })
        }
        </NativeSelect>
        <FormHelperText>Lựa chọn quốc gia!</FormHelperText>
    </FormControl>
  );
}
