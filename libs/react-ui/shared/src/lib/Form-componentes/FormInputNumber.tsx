// //import { replaceApostrophe }  from '@dotse-monorepo/shared/utils';
//
// import TextField from '@material-ui/core/TextField';
// import React from 'react';
// import { Controller, FieldErrors } from 'react-hook-form';
// import NumberFormat from 'react-number-format';
//
// interface FormInputProps {
//   name: string;
//   control: any;
//   label: string;
//   setValue?: any;
//   multiple?: boolean;
//   defaultValue?: any;
//   disabled?: boolean;
//   errros?: FieldErrors;
//   prefix?: string;
//   decimalScale?: number;
//   thousandSeparator?: string | boolean;
//   allowNegative?: boolean;
//   maxValue?: number,
//   minValue?: number,
//   fixedDecimalScale?: boolean
// }
//
// export const FormInputNumber = ({
//   name,
//   control,
//   label,
//   defaultValue = '',
//   decimalScale = 2,
//   prefix,
//   thousandSeparator = '.',
//   allowNegative = false,
//   maxValue=99999999,
//   minValue=0,
//   fixedDecimalScale=false
// }: FormInputProps) => {
//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field, field: { value }, fieldState: { error } }) => (
//         <NumberFormat
//           {...field}
//           prefix={prefix}
//           mask="_"
//           variant="outlined"
//           customInput={TextField}
//           label={label}
//           size="small"
//           style={{ width: '100%' }}
//           decimalSeparator={','}
//           thousandSeparator={thousandSeparator}
//           decimalScale={decimalScale}
//           allowNegative={allowNegative}
//           fixedDecimalScale={fixedDecimalScale}
//           error={!!error}
//           helperText={error ? error.message : null}
//           isAllowed={(values) => {
//             const { formattedValue, floatValue } = values;
//             if (floatValue == null) {
//               return formattedValue === '';
//             } else {
//               return floatValue <= maxValue && floatValue >= minValue;
//             }
//           }}
//         />
//       )}
//     />
//   );
// };
