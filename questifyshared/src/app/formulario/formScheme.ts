import * as Yup from 'yup';

export interface FormProps {
  alt1: string;
  alt2: string;
  alt3: string;
  alt4: string;
  alt5: string;
}

export const formScheme: FormProps = {
  alt1: '',
  alt2: '',
  alt3: '',
  alt4: '',
  alt5: ''
};

// Corrigido o campo 'enunciado' para 'statement'
export const formValidationScheme = Yup.object().shape({
  alt1: Yup.string().trim().required('É obrigatório incluir este campo!'),
  alt2: Yup.string().trim().required('É obrigatório incluir este campo!'),
  alt3: Yup.string().trim().required('É obrigatório incluir este campo!'),
  alt4: Yup.string().trim().required('É obrigatório incluir este campo!'),
  alt5: Yup.string().trim().required('Campo vazio!')
});
