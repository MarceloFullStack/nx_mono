// import DateFnsUtils from '@date-io/date-fns';
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
// import { ptBR } from 'date-fns/locale';
// import React from 'react';
// import { Controller } from 'react-hook-form';
// import { FormInputProps } from './FormInputProps';
// const DATE_FORMAT = 'dd/MM/yyyy';
//
// export const FormInputDate = ({
//   name,
//   disabled = false,
//   control,
//   label,
//   defaultValue = null,
// }: FormInputProps) => {
//   return (
//     <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
//       <Controller
//         name={name}
//         control={control}
//         defaultValue={defaultValue}
//         render={({ field, fieldState: { error } }) => (
//           <KeyboardDatePicker
//             disabled={disabled}
//             fullWidth
//             inputVariant="outlined"
//             size="small"
//             id={`date-${Math.random()}`}
//             // placeholder="ex: DD/MM/AAAA"
//             label={label} //label={field?.value ? '' : label}
//             style={{ width: '100%' }}
//             // rifmFormatter={(val) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, '')}
//             // refuse={/[^[a-zA-Z0-9-]*$]+/gi}
//             autoOk
//             KeyboardButtonProps={{
//               'aria-label': 'change date',
//             }}
//             format="dd/MM/yyyy"
//             invalidDateMessage={'Data inválida'}
//             maxDateMessage={'Data excedeu a data máxima!'}
//             error={!!error}
//             helperText={error ? error.message : null}
//             {...field}
//           />
//         )}
//       />
//     </MuiPickersUtilsProvider>
//   );
// };
