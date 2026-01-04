import { useState, createContext } from "react";


 export const HabitContext = createContext();

 function HabitProvider ({children}) {

const today = new Date().toISOString().slice(0, 10);


//Habits data
const [habits, setHabits] = useState([
  {
    id: Date.now(),
    title: "Working out",
    history: [today],
  },
  {
    id: Date.now() + 1,
    title: "Reading",
    history: [today],
  },
  {
    id: Date.now() + 2,
    title: "Meditation",
    history: [],
  }
]);

const addHabit = (title) => {

  const newHabit =  {
    id: Date.now(),
    title, 
    history: [today],
  }

  setHabits([...habits, newHabit])
}



//computed Habit 

const totalHabits = habits.length
const habitDoneToday = habits.filter((h) => h.history.includes(today)).length
const activeStreakCount = habits.filter((h) => h.history.includes(today)).length 
const habitCompletion = (habitDoneToday / totalHabits) * 100;



// streak 
const DAY_MS = 24 * 60 * 60 * 1000;
const toDate = (d) => new Date(d);
const addDays = (date, days) =>
  new Date(date.getTime() + days * DAY_MS)
    .toISOString()
    .slice(0, 10);

const getCurrentStreak = (history, today) => {
  if (!history.includes(today)) return 0;

  let streak = 1;
  let currentDate = today;

  while (true) {
    const prevDate = addDays(new Date(currentDate), -1);
    if (history.includes(prevDate)) {
      streak++;
      currentDate = prevDate;
    } else {
      break;
    }
  }

  return streak;
};

//Active Habit count


const getActiveHabitsCount = (habits, today) =>
  habits.filter((h) => h.history.includes(today)).length;

    return (
        <>
        
        <HabitContext.Provider value = {{habits, setHabits, today, totalHabits, getActiveHabitsCount, getCurrentStreak, activeStreakCount, habitCompletion, addHabit, habitDoneToday}}>

        {children}

        </HabitContext.Provider>
        </>
    )
 }


 export default HabitProvider