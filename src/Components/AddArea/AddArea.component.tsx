// @flow
import { useState } from "react";
import { Register } from "../../Types/Register";
import * as C from "./AddArea.style";
import { getFullDate } from "../../Helpers/dataFilter";
import { categories } from "../../Data/categories";

type Props = {
  onAddRegister: (register: Register) => void;
};

export const AddArea = ({ onAddRegister }: Props) => {
  const [addName, setAddName] = useState("");
  const [addDate, setAddDate] = useState("");
  const [addCategory, setAddCategory] = useState("");
  const [addValue, setAddValue] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const clearInput = () => {
    setAddName("");
    setAddDate("");
    setAddCategory("");
    setAddValue(0);
  };

  const handleAddRegister = () => {
    let erros: string[] = [];

    if (isNaN(new Date(addDate).getTime())) {
      erros.push("Data Invalida!");
    }

    if (!categoryKeys.includes(addCategory)) {
      erros.push("Categoria Invalida!");
    }

    if (addName === "") {
      erros.push("Nome Invalido");
    }

    if (addValue <= 0) {
      erros.push("Valor invalido");
    }
    if (erros.length === 0) {
      let newRegister: Register = {
        date: getFullDate(addDate),
        category: addCategory,
        title: addName,
        value: addValue,
      };

      onAddRegister(newRegister);
      clearInput();
    }
  };

  return (
    <C.Container>
      <C.LabelInput>
        <C.LabelName>Data:</C.LabelName>
        <C.Input
          type="date"
          value={addDate}
          onChange={(e) => setAddDate(e.target.value)}
        />
      </C.LabelInput>

      <C.LabelInput>
        <C.LabelName>Nome:</C.LabelName>
        <C.Input
          type="text"
          placeholder="Nome"
          value={addName}
          onChange={(e) => setAddName(e.target.value)}
        />
      </C.LabelInput>

      <C.LabelInput>
        <C.LabelName>Categoria:</C.LabelName>
        <C.Select
          value={addCategory}
          onChange={(e) => setAddCategory(e.target.value)}
        >
          <option></option>
          {categoryKeys.map((key, index) => (
            <option key={index} value={key}>
              {categories[key].title}
            </option>
          ))}
        </C.Select>
      </C.LabelInput>

      <C.LabelInput>
        <C.LabelName>Valor:</C.LabelName>
        <C.Input
          type="number"
          value={addValue}
          onChange={(e) => setAddValue(parseInt(e.target.value))}
        />
      </C.LabelInput>
      <C.LabelInput>
        <C.LabelName>&nbsp;</C.LabelName>

        <C.Button onClick={handleAddRegister}>Adicinar</C.Button>
      </C.LabelInput>
    </C.Container>
  );
};
