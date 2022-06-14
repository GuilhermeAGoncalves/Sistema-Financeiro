import * as C from "./App.style";
import { Register } from "./Types/Register";
import { registers } from "./Data/registers";
import { Category } from "./Types/Category";
import { categories } from "./Data/categories";
import { useEffect, useState } from "react";
import { getCurrentMonth, filterListByMonth } from "./helpers/dataFilter";
import { TableArea } from "./components/TableArea/TableArea.component";
import { InfoArea } from "./components/InfoArea/InfoArea.components";

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

  return (
    <C.Container>
      <C.Header>
        <C.Title>Sistema Financeiro</C.Title>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Area de inserir */}

        <TableArea listRegister={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
