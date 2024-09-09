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
    setSuccessMessage("");

    const llave = e.target.name;
    const valor = e.target.value;

    if (llave == "name") {
      setErrorName(valor.length > 5 ? "" : "Length greater than 5 is required");
      setFormulario({ ...formulario, name: valor });
    } else if (llave == "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mensaje = emailRegex.test(valor) ? "" : "Invalid email";
      setErrorEmail(mensaje);
      setFormulario({ ...formulario, email: valor });
    } else {
      throw new Error("Algo falló");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((errorName == "") & (errorEmail == "")) {
      setSuccessMessage(
        ` Gracias ${formulario.name}, te contactaremos cuando antes vía mail`
      );
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} style={{ height: "30vh" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputText"
            name="name"
            onChange={handleInput}
            value={formulario.name}
          />
          <p className="txt-error">{errorName}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleInput}
            value={formulario.email}
          />
          <p className="txt-error">{errorEmail}</p>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <p className="text-center mt-5" style={{ fontWeight: "bold" }}>
        {successMessage}
      </p>
    </div>
  );
};

export default Form;
