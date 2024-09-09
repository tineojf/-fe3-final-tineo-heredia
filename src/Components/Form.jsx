import { useState } from "react";

const Form = () => {
  const [formulario, setFormulario] = useState({
    name: "",
    email: "",
  });

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (e) => {
    const llave = e.target.name;
    const valor = e.target.value;

    if (llave == "nombre") {
      setErrorName(valor.length > 5 ? "" : "Se requiere longitud mayor a 5");
      setFormulario({ ...formulario, name: valor });
    } else if (llave == "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mensaje = emailRegex.test(valor) ? "" : "Email invalido";
      setErrorEmail(mensaje);
      setFormulario({ ...formulario, email: valor });
    } else {
      throw new Error("Algo falló");
    }
  };

  const handleSubmit = (e) => {
    setSuccessMessage("");
    e.preventDefault();

    if ((errorName == "") & (errorEmail == "")) {
      setSuccessMessage(
        ` Gracias ${formulario.name}, te contactaremos cuando antes vía mail`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={handleInput}
          value={formulario.name}
        />
        <p>{errorName}</p>

        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInput}
          value={formulario.email}
        />
        <p>{errorEmail}</p>

        <button type="submit">Enviar</button>
      </form>

      <h2>{successMessage}</h2>
    </div>
  );
};

export default Form;
