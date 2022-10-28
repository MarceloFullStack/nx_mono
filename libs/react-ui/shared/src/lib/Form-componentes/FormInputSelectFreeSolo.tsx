// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { Typography } from '@mui/material';
// import React from 'react';
// import { Controller, FieldErrors } from 'react-hook-form';
//
// interface FormInputProps {
//   name: string;
//   control: any;
//   label: string;
//   setValue?: any;
//   multiple?: boolean;
//   selectOptions?: any[]; //usado para select
//   showKeyLabel?: string; //usado para select
//   onInputChange?: any; //usado para select
//   multiline?: boolean; //usado para textarea
//   defaultValue?: any;
//   disabled?: boolean;
//   errros?: FieldErrors;
//   numberFormat?: boolean;
//   prefix?: string;
//   id?: string;
//   dataId?: string;
//   freeSolo?: boolean;
//   onClose?: Function;
// }
//
// export const FormInputSelectFreeSolo = ({
//   name,
//   control,
//   label,
//   showKeyLabel = '',
//   selectOptions = [],
//   multiple = false,
//   defaultValue = null,
//   id = 'id',
//   dataId = 'id',
//   freeSolo,
//   onClose,
//   ...props
// }: FormInputProps) => {
//
//   return (
//     <Controller
//       control={control}
//       name={name}
//       rules={{ required: false }}
//       defaultValue={defaultValue}
//       render={({
//         field: { ref, value, ...field },
//         fieldState: { error }
//       }) => (
//         <Autocomplete
//           {...field}
//           style={{ width: '100%' }}
//           id={id}
//           defaultValue={value}
//           onChange={(e, value) => field.onChange(value)}
//           onInputChange={(_, data) => {
//             if (data) field.onChange(data);
//           }}
//           onClose={(event: any) => {
//             onClose && onClose(event)
//           }}
//           placeholder="Selecionar"
//           forcePopupIcon={true}
//           freeSolo={freeSolo ?? false}
//           noOptionsText="Nenhum item retornado."
//           options={selectOptions}
//           getOptionLabel={(option: any) => option[showKeyLabel]?.toString() || ""}
//           multiple={multiple}
//           renderInput={(params: any) => (
//             <TextField
//               {...params}
//               {...props}
//               label={label}
//               style={{ width: '100%' }}
//               variant="outlined"
//               size="small"
//               error={!!error}
//               helperText={error ? error.message : null}
//             />
//           )}
//           renderOption={(option) => (
//             <Typography noWrap>{option[showKeyLabel]}</Typography>
//           )}
//         />
//       )}
//     />
//   );
// };
