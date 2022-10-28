//import { replaceApostrophe }  from '@dotse-monorepo/shared/utils';

import React, {useState} from 'react';
import {Controller, FieldErrors} from 'react-hook-form';
import {TextField, TextFieldProps} from "@mui/material";

export type FormInputProps = {
  control: any;
  setValue?: any;
  errros?: FieldErrors;
  customHelperText?: string;
  uppercase?: boolean;
  readOnly?: boolean;
  handleHelperIconClick?: (event: React.SyntheticEvent) => void;
  showHelperIcon?: boolean;
} & TextFieldProps;

/**
 * * TextField integrado com hook-form
 *
 * @prop {any} control control do hook-form
 * @prop {any} setValue setValue do hook-form
 * @prop {FieldErrors} errros erros do hook-form
 * @prop {string} customHelperText helper text a ser exibido abaixo do campo
 * @prop {(event: React.SyntheticEvent) => void} handleHelperIconClick callback para o click do ícone de ajuda
 * @prop {boolean} showHelperIcon indica se o ícone de ajuda deve ser exibido
 * @prop {boolean} readOnly indica se o campo deve ser somente leitura
 * @prop {boolean} uppercase indica se o campo deve ser convertido para maiúsculo
 * ## Ícone de Ajuda
 *
 * A responsabilidade do controle é do componente pai
 *
 * As seguintes propriedades são necessárias para o correto funcionamento:
 * - customHelperText
 * - handleHelperIconClick
 * - showHelperIcon
 */
export const FormInputText = ({
                                control,
                                customHelperText,
                                name,
                                uppercase,
                                readOnly,
                                handleHelperIconClick,
                                showHelperIcon,
                                ...props
                              }: FormInputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <Controller
      name={name || ''}
      control={control}
      render={({field, field: {value}, fieldState: {error}}) => (
        <TextField
          {...field}
          {...props}
          helperText={
            error
              ? error.message
              : customHelperText ?? ""
          }
          InputProps={{
            ...(showHelperIcon && handleHelperIconClick && {
              // endAdornment: <onClick={handleHelperIconClick}/>
            }),
          }}
          size="small"
          error={!!error}
          fullWidth
          inputProps={{
            style: uppercase ? {textTransform: 'uppercase'} : {},
            readOnly: readOnly === true,
          }}
          type={props.type ?? 'text'}
        />
      )}
    />
  );
};
