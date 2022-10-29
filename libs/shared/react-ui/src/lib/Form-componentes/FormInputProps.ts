import { BaseTextFieldProps } from "@mui/material";
import { FieldErrors } from "react-hook-form";

export interface FormInputProps extends BaseTextFieldProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  multiple?: boolean;
  selectOptions?: any[] //usado para select
  showKeyLabel?: string; //usado para select
  onInputChange?: any; //usado para select
  multiline?: boolean; //usado para textarea
  defaultValue?: any;
  disabled?: boolean;
  erros?: FieldErrors;
  numberFormat?: boolean;
  prefix?: string;
}
