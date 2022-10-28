// import { generateNumberAleatory, isLiteralObject, is_null } from '@dotse-monorepo/shared/utils';
// import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
// import ListSubheader from '@mui/material/ListSubheader';
// import Popper from '@mui/material/Popper';
// import { styled, useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { isEmpty } from 'lodash';
// import * as React from 'react';
// import { Control, Controller } from 'react-hook-form';
// import { ListChildComponentProps, VariableSizeList } from 'react-window';
//
// const LISTBOX_PADDING = 8; // px
//
// export interface FormAutocompleteProps {
//   id: string;
//   label: string;
//   control: Control<any>;
//   dataId?: string;
//   dataLabel?: string;
//   data: Array<object>;
//   multiple?: boolean;
// }
//
// export default function FormAutocomplete({
//   id,
//   label,
//   control,
//   dataId = 'id',
//   dataLabel = 'descricao',
//   data,
//   multiple = false,
// }: FormAutocompleteProps) {
//   function renderRow(props: ListChildComponentProps) {
//     const { data, index, style } = props;
//     const dataSet = data[index];
//     const inlineStyle = {
//       ...style,
//       top: (style.top as number) + LISTBOX_PADDING,
//     };
//
//     if (dataSet.hasOwnProperty('group')) {
//       return (
//         <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
//           {dataSet.group}
//         </ListSubheader>
//       );
//     }
//
//     return (
//       <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
//         {dataSet[1][dataLabel]}
//       </Typography>
//     );
//   }
//
//   const OuterElementContext = React.createContext({});
//
//   const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
//     const outerProps = React.useContext(OuterElementContext);
//     return <div ref={ref} {...props} {...outerProps} />;
//   });
//
//   function useResetCache(data: any) {
//     const ref = React.useRef<VariableSizeList>(null);
//     React.useEffect(() => {
//       if (ref.current != null) {
//         ref.current.resetAfterIndex(0, true);
//       }
//     }, [data]);
//     return ref;
//   }
//
//   // Adapter for react-window
//   const ListboxComponent = React.forwardRef<
//     HTMLDivElement,
//     React.HTMLAttributes<HTMLElement>
//   >(function ListboxComponent(props, ref) {
//     const { children, ...other } = props;
//     const itemData: React.ReactChild[] = [];
//     (children as React.ReactChild[]).forEach(
//       (item: React.ReactChild & { children?: React.ReactChild[] }) => {
//         itemData.push(item);
//         itemData.push(...(item.children || []));
//       }
//     );
//
//     const theme = useTheme();
//     const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
//       noSsr: true,
//     });
//     const itemCount = itemData.length;
//     const itemSize = smUp ? 36 : 48;
//
//     const getChildSize = (child: React.ReactChild) => {
//       if (React.isValidElement(child) && child.type === ListSubheader) {
//         return 48;
//       }
//
//       return itemSize;
//     };
//
//     const getHeight = () => {
//       if (itemCount > 8) {
//         return 8 * itemSize;
//       }
//       return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
//     };
//
//     const gridRef = useResetCache(itemCount);
//
//     return (
//       <div ref={ref} id={`id_${generateNumberAleatory()}`}>
//         <OuterElementContext.Provider value={other}>
//           <VariableSizeList
//             itemData={itemData}
//             height={getHeight() + 2 * LISTBOX_PADDING}
//             width="100%"
//             ref={gridRef}
//             outerElementType={OuterElementType}
//             innerElementType="ul"
//             itemSize={(index: any) => getChildSize(itemData[index])}
//             overscanCount={5}
//             itemCount={itemCount}
//           >
//             {renderRow}
//           </VariableSizeList>
//         </OuterElementContext.Provider>
//       </div>
//     );
//   });
//
//   const StyledPopper = styled(Popper)({
//     [`& .${autocompleteClasses.listbox}`]: {
//       boxSizing: 'border-box',
//       '& ul': {
//         padding: 0,
//         margin: 0,
//       },
//     },
//   });
//
//   function getData() {
//     try {
//       let propData = [];
//
//       if (isLiteralObject(data)) propData = [data];
//       else propData = data;
//
//       const datares = !isEmpty(propData)
//         ? propData
//             .filter(
//               (item: any) => !is_null(item[dataId]) && !is_null(item[dataLabel])
//             )
//             .sort(function (a: any, b: any) {
//               var textA = a[dataId];
//               var textB = b[dataId];
//               return textA < textB ? -1 : textA > textB ? 1 : 0;
//             })
//         : [];
//       return datares;
//     } catch (err) {
//       console.log(err);
//       return [];
//     }
//   }
//
//   return (
//     <Controller
//       control={control}
//       name={id}
//       rules={{ required: false }}
//       render={({
//         field,
//         field: { onChange, value },
//         fieldState: { error },
//         ...props
//       }) => (
//         <Autocomplete
//           id={id}
//           fullWidth
//           noOptionsText="Nenhum item retornado."
//           onChange={(event: any, item: any) => {
//             onChange(item);
//           }}
//           value={value}
//           disableListWrap
//           PopperComponent={StyledPopper}
//           ListboxComponent={ListboxComponent}
//           options={getData()}
//           multiple={multiple}
//           size="small"
//           getOptionLabel={(option: any) =>
//             `${option[dataLabel]}`
//           }
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label={label}
//               error={!!error}
//               helperText={error ? error.message : null}
//             />
//           )}
//           renderOption={(props, option) => [props, option] as React.ReactNode}
//           {...props}
//         />
//       )}
//     />
//   );
// }
