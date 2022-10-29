// import DateFnsUtils from '@date-io/date-fns';
// import {
//   KeyboardDateTimePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
// import { ptBR } from 'date-fns/locale';
// import React from 'react';
// import { Controller } from 'react-hook-form';
// import { FormInputProps } from './FormInputProps';
// const DATE_FORMAT = 'dd/MM/yyyy';
//
// export const FormInputDateTime = ({
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
//           <KeyboardDateTimePicker
//             disabled={disabled}
//             inputVariant="outlined"
//             id={`date-time-${Math.random()}`}
//             label={ label}
//             style={{ width: '100%' }}
//             autoOk
//             KeyboardButtonProps={{
//               'aria-label': 'change date',
//             }}
//             size="small"
//             format="yyyy/MM/dd hh:mm"
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
