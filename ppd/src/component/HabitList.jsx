
import HabitItem from "./HabitItem"

function HabitList({habits, setHabits, today}){



  const handleDelete = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

const toggleHabitToday = (habitId) => {


  setHabits(
    habits.map((h) => {
      if (h.id !== habitId) return h;

      const doneToday = h.history.includes(today);

      return {
        ...h,
        history: doneToday
          ? h.history.filter((date) => date !== today) // remove
          : [...h.history, today],                     // add
      };
    })
  );
};   return (

<div>
      {habits && habits.length > 0 ? (
        habits.map((h) => (
          <HabitItem
            key={h.id}
            habit={h}
           callbacks={{ onToggle: toggleHabitToday, onDelete: handleDelete }}
        
          />
        ))
      ) : (
        <p>No Habits yet.</p>
      )}
    </div>
    )
}

export default HabitList