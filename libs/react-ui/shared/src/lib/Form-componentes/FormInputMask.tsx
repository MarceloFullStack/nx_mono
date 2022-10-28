// import { TextField } from '@mui/material';
// import React from 'react';
// import { Controller } from 'react-hook-form';
// import InputMask from 'react-input-mask';
//
// interface FormInputMask {
//   control: any;
//   name: string;
//   mask: string;
//   label: string;
//   disabled?: boolean;
// }
//
// export function FormInputMask({
//   control,
//   name,
//   mask,
//   label,
//   disabled = false,
// }: FormInputMask) {
//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field, field: { value }, fieldState: { error } }) => (
//         <InputMask {...field} mask={mask} value={value} disabled={disabled}>
//           {() => (
//             <TextField
//               size="small"
//               fullWidth
//               label={label}
//               error={!!error}
//               helperText={error ? error.message : null}
//
//             />
//           )}
//         </InputMask>
//       )}
//     />
//   );
// }
