import React from 'react';
import ReactDatePicker from "react-datepicker";
import {Controller} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from 'date-fns/locale';
import {FormInputProps} from "./FormInputProps";

export const FormInputDate =
  ({
     name,
     control,
     label,
   }: FormInputProps) => {
      return (
        <>
          <label>{label}</label>
          <Controller
            control={control}
            name={name}
            render={({field}) => (
              <ReactDatePicker
                className="input"
                showTimeSelect={false}
                timeCaption="Hora"
                showMonthDropdown={true}
                todayButton="Hoje"
                withPortal
                shouldCloseOnSelect={false}
                isClearable={true}
                // dateFormat="MMMM d, yyyy h:mm aa"
                peekNextMonth
                showYearDropdown
                dropdownMode="select"
                locale={ptBR}
                timeInputLabel="Horário:"
                showTimeInput={true}
                timeIntervals={15}
                placeholderText="Selecione uma data"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
              />
            )}
          />
        </>
      );
    }
