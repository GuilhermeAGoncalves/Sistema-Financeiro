import * as C from "./App.style";
import { Register } from "./Types/Register";
import { registers } from "./Data/registers";
import { categories } from "./Data/categories";
import { useEffect, useState } from "react";
import { getCurrentMonth, filterListByMonth } from "./Helpers/dataFilter";
import { TableArea } from "./Components/TableArea/TableArea.component";
import { InfoArea } from "./Components/InfoArea/InfoArea.components";
import { AddArea } from "./Components/AddArea/AddArea.component";

function App() {
  const [listRegister, setListRegister] = useState(registers);
  const [filteredList, setFilteredList] = useState<Register[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(listRegister, currentMonth));
  }, [listRegister, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let register of filteredList) {
      if (categories[register.category].expense) {
        expenseCount += register.value;
      } else {
        incomeCount += register.value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const addRegister = (register: Register) => {
    const newList = [...listRegister];
    newList.push(register);
    setListRegister(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.Title>Descontrole Financeiro</C.Title>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <AddArea onAddRegister={addRegister} />

        <TableArea listRegister={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
