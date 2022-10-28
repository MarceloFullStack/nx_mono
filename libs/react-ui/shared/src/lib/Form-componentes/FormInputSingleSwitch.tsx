// import { FormControl, FormLabel, Switch } from '@material-ui/core';
// import FormGroup from '@material-ui/core/FormGroup';
// import React from 'react';
// import { Controller } from 'react-hook-form';
// import { FormInputProps } from './FormInputProps';
//
// interface FormInputSingleSwitchProps {
//   name: string;
//   control: any;
//   label: string;
//   defaultValue?: any;
//   onCustomChange?: Function;
//   disable?: boolean;
// }
//
// export const FormInputSingleSwitch = ({
//   name,
//   control,
//   label,
//   defaultValue,
//   onCustomChange,
//   disable = false,
// }: FormInputSingleSwitchProps) => {
//   return (
//     <FormGroup
//       row
//       // style={{
//       //   position: 'relative',
//       //   top: '26px',
//       //   display: 'flex',
//       //   flexWrap: 'nowrap',
//       // }}
//     >
//       <FormControl component="fieldset">
//         <FormLabel
//           component="legend"
//           style={{
//             width: '150%',
//             float: 'left',
//           }}
//         >
//           {label}
//           <Controller
//             control={control}
//             name={name}
//             render={({
//               field,
//               field: { onChange, value },
//               fieldState: { error },
//               formState,
//             }) => (
//               (
//                 <Switch
//                   // {...field}
//                   onChange={(a, b) => {
//                     if (disable != true) {
//                       if (value != b) onChange(a, b);
//                       if (onCustomChange) onCustomChange(a, b);
//                     }
//                   }}
//                   // inputRef={register}
//                   checked={value}
//                   style={{ color: 'primary' }}
//                   // disable={disable}
//                 />
//               )
//             )}
//           />
//         </FormLabel>
//       </FormControl>
//     </FormGroup>
//   );
// };
