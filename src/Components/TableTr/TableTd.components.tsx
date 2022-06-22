import * as C from "./TableTd.style";
import { Register } from "../../Types/Register";
import { formatDate } from "../../Helpers/dataFilter";
import { categories } from "../../Data/categories";

type Props = {
  register: Register;
};

export const TableTr = ({ register }: Props) => {
  return (
    <C.TableTr>
      <C.TableTd>{formatDate(register.date)}</C.TableTd>
      <C.TableTd>
        <C.Category color={categories[register.category].color}>
          {categories[register.category].title}
        </C.Category>
      </C.TableTd>
      <C.TableTd>{register.title}</C.TableTd>
      <C.TableTd>
        <C.Value
          color={categories[register.category].expense ? "red" : "green"}
        >
          R$ {register.value}
        </C.Value>
      </C.TableTd>
    </C.TableTr>
  );
};
