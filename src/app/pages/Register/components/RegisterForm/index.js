import { useState } from "react";
import Button from "../../../../components/Button";
import InputImage from "../../../../components/InputImage";
import InputText from "../../../../components/InputText";
import "./styles.css";

const RegisterForm = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState({});

  const handleInputChange = (newValue) => {
    setFormValue({
      ...formValue,
      ...newValue,
    });
  };

  return (
    <div className="form-container">
      <InputImage
        className="input-image"
        onChange={(imageBase64) => handleInputChange({ photo: imageBase64 })}
      />
      <InputText
        placeholder="Nombre"
        value={formValue.name}
        onChange={(e) => handleInputChange({ name: e.target.value })}
      />
      <Button onClick={() => onSubmit(formValue)}>Guardar</Button>
    </div>
  );
};

export default RegisterForm;
