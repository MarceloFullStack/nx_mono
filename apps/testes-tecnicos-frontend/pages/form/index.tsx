import {useForm} from 'react-hook-form';
import {Box, Button, Grid} from "@mui/material";
// import {FormInputSingleSwitch} from "../../../../libs/soteste/src/lib/swith/FormInputSingleSwitch.tsx";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  FormInputSelect,
  FormInputSingleSwitch,
  FormInputText,
  FormAutocomplete,
  FormInputDate
} from "@mono/react-ui/shared";
import {useEffect} from "react";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";

const schema = yup.object({
  descricao: yup.string().required('Informe a descricao.'),
  status: yup.boolean().required('Informe o status.'),
});

export default function App() {
  const {
    control,
    register,
    watch,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {descricao: 'dotse', status: true, tipo_informacao: null, data_inicio: null},
    resolver: yupResolver(schema),
  });
  const tipoInformacaoList = [
    {id: 1, descricao: 'Percentual'},
    {id: 2, descricao: 'Numérico'},
    {id: 3, descricao: 'Decimal'},
  ];

  useEffect(() => {
    reset({descricao: 'dotse-reset', status: false, tipo_informacao: {id: 3, descricao: 'Decimal'}});
  }, [reset]);

  console.log('watch', format(watch('data_inicio') ?? Date.now(), "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {locale: ptBR}));
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
            <h1>primeiro nivel DotSe</h1>
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
          <Grid item xs={12} sm={12} lg={12} justifySelf={"center"} justifyContent={"center"} alignItems={"center"}>
            <FormInputSelect
              name='tipo_informacao'
              label='Tipo da Informação'
              control={control}
              selectOptions={tipoInformacaoList}
              showKeyLabel='descricao'
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} justifySelf={"center"} justifyContent={"center"} alignItems={"center"}>
            <FormAutocomplete
              control={control}
              id="organizacao"
              label="Organização"
              data={[{id: 1, descricao: 'dotse'}, {id: 2, descricao: 'dotse2'}]}
              dataLabel="descricao"
            />

            <Grid item xs={12} sm={12} md={6} xl={2}>
              <FormInputDate
                name="data_inicio"
                control={control}
                label="Componente de data"
              />
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} lg={6} textAlign={'center'}>
            <Button onClick={() => reset({descricao: '', status: false, tipo_informacao: null})}>reset</Button>
            <input type="submit"/>
          </Grid>
        </Grid>
      </Box>
    </form>

  );
}
