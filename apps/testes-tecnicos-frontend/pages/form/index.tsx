import {useForm} from 'react-hook-form';
import {Box, Button, Grid} from "@mui/material";
import {FormInputText} from "@mono/soteste";
import {FormInputSingleSwitch} from "../../../../libs/soteste/src/lib/swith/FormInputSingleSwitch.tsx";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {FormInputSelect} from "libs/react-ui/shared/src";
// import {FormInputSelect} from "@mono/react-ui/shared";

const schema = yup.object({
  descricao: yup.string().required('Informe a descricao.'),
  status: yup.boolean().required('Informe o status.'),
});

export default function App() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {descricao: 'dotse', status: true},
    resolver: yupResolver(schema),
  });
const tipoInformacaoList = [
    { id: 1, descricao: 'Percentual' },
    { id: 2, descricao: 'Numérico' },
    { id: 3, descricao: 'Decimal' },
  ];
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Box sx={{flexGrow: 1}}>

        <Grid container spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              alignContent="center"
              sx={{flexGrow: 1}}
              alignSelf={{xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'center'}}
              p={1}
        >
          <Grid item xs={12} sm={12} lg={12} textAlign={'center'}>
            <h1>primeiro nivel</h1>
          </Grid>
          <Grid item xs={11} sm={11} lg={11}>
            <FormInputText
              name="descricao"
              control={control}
              label="Descricao"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1} sm={1} lg={1}>
            <FormInputSingleSwitch
              name="status"
              label="Ativo"
              control={control}
              disable={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}  justifySelf={"center"} justifyContent={"center"} alignItems={"center"}>
            <FormInputSingleSwitch
              name="status2"
              label="Ativo"
              control={control}
              disable={false}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}  justifySelf={"center"} justifyContent={"center"} alignItems={"center"}>
            <FormInputSelect
              name='tipo_informacao'
              label='Tipo da Informação'
              control={control}
              selectOptions={tipoInformacaoList}
              showKeyLabel='descricao'
            />
          </Grid>
          <Grid item xs={6} sm={6} lg={6} textAlign={'center'}>
            <Button onClick={() => reset({descricao: '', status: false})}>reset</Button>
            <input type="submit"/>
          </Grid>
        </Grid>
      </Box>
    </form>

  );
}
