import React from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "../TestPage.module.css";

export const ReactHookForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });

  const onSubmit = (values) => {
    props.addHookFieldToState(values);
    reset();
  };
  const HookResult = () => {
    return (
        props.hookMessage ?
      <div>
        <span className='pr-4'>{`Имя : ${props.hookMessage?.hookName}`}</span>
        <span className='pr-4'>{`Текст : ${props.hookMessage?.hookText}`}</span>
      </div>
      : 'Результат из State'
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <TextField
              fullWidth
              id="name"
              label="Имя"
              variant="outlined"
              size="small"
              error={errors.hookName ? true : false}
              {...register("hookName", {
                required: "Обязательно к заполнению",
                minLength: {
                  value: 2,
                  message: "Минимальная длина 2 символа",
                },
                maxLength: {
                  value: 20,
                  message: "Максимальная длина 20 символов",
                },
              })}
            />
            <div className={s.errorText}>{errors.hookName?.message}</div>
          </Grid>
          <Grid item md={4}>
            <TextField
              fullWidth
              id="text"
              label="Текст"
              variant="outlined"
              size="small"
              error={errors.hookText ? true : false}
              multiline
              {...register("hookText", {
                required: "Обязательно к заполнению",
                minLength: {
                  value: 2,
                  message: "Минимальная длина 2 символа",
                },
                maxLength: {
                  value: 20,
                  message: "Максимальная длина 20 символов",
                },
              })}
            />
            <div className={s.errorText}>{errors.hookText?.message}</div>
          </Grid>
          <Grid item md={4}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              className="w-100"
            >
              Отправить
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container className="pb-2">
        <HookResult />
      </Grid>
    </>
  );
};
