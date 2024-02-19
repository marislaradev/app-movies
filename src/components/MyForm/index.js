import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { categories } from "../Category";
import styles from "./MyForm.module.css";

function validateYoutubeUrl(value) {
  let error;
  if (!value) {
    error = "A URL do YouTube é obrigatória";
  } else if (!/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/.test(value)) {
    error = "A URL do YouTube precisa ser válida";
  }
  return error;
}

function validateCategory(value) {
  let error;
  if (!value || value === "-") {
    error = "Escolha uma categoria";
  }
  return error;
}

function MyForm() {
  const initialValues = {
    url: "",
    category: ""
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Salvar os valores no localStorage com a chave 'videos'
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    localStorage.setItem("videos", JSON.stringify([...videos, values]));
    
    // Limpar os campos do formulário
    resetForm();
    
    // Resetar o estado de submissão do Formik
    setSubmitting(false);
  };

  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeo</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>URL do vídeo</label>
              <Field
                type="text"
                name="url"
                placeholder="Digite a URL do vídeo"
                validate={validateYoutubeUrl}
              />
              <ErrorMessage name="url" component="div" className="error" />
            </div>
            <div>
              <label>Categoria</label>
              <Field
                as="select"
                name="category"
                validate={validateCategory}
              >
                <option value="-">Selecione uma categoria</option>
                {categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </Field>
              <ErrorMessage name="category" component="div" className="error" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Cadastrar"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default MyForm;


