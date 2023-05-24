// import logo from './logo.svg';
import "./App.css";
import Expenseitem from "./components/Expenseitem";
import React,{useState} from "react";


const App=()=> {
  //Imperative way of write javascript
  // const para =document.createElement('p')
  // para.textContent="this is here boss"
  // document.getElementById('root').append(para)

  const  [startDate, setStartDate] = useState( setHours(setMinutes(new Date(), 30), 16)
  
    const  expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "tissue paper",
      amount: 9.12,
      date: new Date(2020, 8, 14),
    },
    {
      id: "e3",
      title: "magazine paper",
      amount: 900.12,
      date: new Date(2020, 10, 14),
    },
    {
      id: "e4",
      title: "booth paper",
      amount: 90.12,
      date: new Date(2020, 11, 14),
    },
  ]

  return (
    <>
    <div>
      <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
      <Expenseitem title={expenses[0].title} />
    </div>
    </>
  );
}

export default App;
