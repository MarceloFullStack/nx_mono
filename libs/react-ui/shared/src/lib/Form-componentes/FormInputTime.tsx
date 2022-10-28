// import DateFnsUtils from '@date-io/date-fns';
// import {
//   TimePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
// import { ptBR } from 'date-fns/locale';
// import React from 'react';
// import { Controller } from 'react-hook-form';
// import { FormInputProps } from './FormInputProps';
// const DATE_FORMAT = 'dd/MM/yyyy';
//
// export const FormInputTime = ({
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
//           <TimePicker
//             disabled={disabled}
//             inputVariant="outlined"
//             id={`time-${Math.random()}`}
//             label={field?.value ? '' : label}
//             style={{ width: '100%' }}
//             minutesStep={10}
//             ampm={false}
//             size="small"
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
