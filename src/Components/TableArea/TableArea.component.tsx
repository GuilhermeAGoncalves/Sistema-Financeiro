import * as C from "./TableArea.style";
import { Register } from "../../Types/Register";
import { TableTr } from "../TableTr/TableTd.components";

type Props = {
  listRegister: Register[];
};

export const TableArea = ({ listRegister }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {listRegister.map((register, index) => (
          <TableTr key={index} register={register} />
        ))}
      </tbody>
    </C.Table>
  );
};
