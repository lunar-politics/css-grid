import JustValidate from "just-validate";

const contactsFormValidation = new JustValidate('#contacts-form');
contactsFormValidation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Заполните e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#comment', [
    {
      rule: 'required',
      errorMessage: 'Напишите комментарий',
    },
  ])
  ;

  const aboutFormValidation = new JustValidate('.about-form');
  aboutFormValidation
  .addField('#ab-email', [
    {
      rule: 'required',
      errorMessage: 'Заполните e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);
