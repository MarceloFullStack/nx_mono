import {Autocomplete, TextField, Typography} from '@mui/material';
import React from 'react';
import {Controller, FieldErrors} from 'react-hook-form';

interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  multiple?: boolean;
  selectOptions?: any[]; //usado para select
  showKeyLabel?: string; //usado para select
  onInputChange?: any; //usado para select
  multiline?: boolean; //usado para textarea
  defaultValue?: any;
  disabled?: boolean;
  errros?: FieldErrors;
  numberFormat?: boolean;
  prefix?: string;
  id?: string;
  dataId?: string;
  freeSolo?: boolean
}

export const FormInputSelect = ({
                                  name,
                                  control,
                                  label,
                                  showKeyLabel = '',
                                  selectOptions = [],
                                  multiple = false,
                                  defaultValue = null,
                                  id = 'id',
                                  dataId = 'id',
                                  freeSolo,
                                  ...props
                                }: FormInputProps) => {

  return (
    <Controller
      control={control}
      name={name}
      rules={{required: false}}
      render={({field, field: {onChange, value}, fieldState: {error}}) => (
        <Autocomplete
          id={id}
          defaultValue={value}
          onChange={(event: any, item: any) => {
            onChange(item);
          }}
          value={value}
          placeholder="Selecionar"
          freeSolo={freeSolo ?? false}
          // onInputChange={(v) => {
          //   onChange(v);
          // }}
          noOptionsText="Nenhum item retornado."
          options={selectOptions}
          getOptionLabel={(option: any) => option[showKeyLabel]?.toString()}
          // getOptionSelected={(option: any, value: any) =>
          //   value === undefined || value === '' || option[id] === value[id]
          // }
          //  {...field}
          multiple={multiple}
          renderInput={(params: any) => (
            <TextField
              {...params}
              {...props}
              label={label}
              style={{width: '100%'}}
              variant="outlined"
              size="small"
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          // renderOption={(option) => (
          //   <Typography noWrap>{option[showKeyLabel]}</Typography>
          // )}
        />
      )}
    />
  );
};
