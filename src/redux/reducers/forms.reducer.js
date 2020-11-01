
const initialState = {
  loginControl: [
    {
      id: 'form_email',
      type: 'email',
      placeholder: 'Электронная почта'
    },
    {
      id: 'form_password',
      type: 'password',
      placeholder: 'Пароль'
    },
  ],
  regControl: [
    {
      id: 'form_name',
      type: 'text',
      placeholder: 'Имя'
    },
    {
      id: 'form_email',
      type: 'email',
      placeholder: 'Электронная почта'
    },
    {
      id: 'form_password',
      type: 'password',
      placeholder: 'Пароль'
    },
    {
      id: 'form_password_repeat',
      type: 'password',
      placeholder: 'Повторите пароль'
    },
  ]
}

export const formsControl = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}