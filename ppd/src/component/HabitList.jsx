import HabitItem from './HabitItem';
import Toast from './toast';
import { ToastContext } from '../context/ToastContext';
import { useContext } from 'react';

function HabitList({ habits, setHabits, today, className }) {
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
            : [...h.history, today], // add
        };
      })
    );
  };
  return (
    <div className={className}>
      {habits && habits.length > 0 ? (
        habits.map((h) => (
          <HabitItem
            key={h.id}
            habit={h}
            callbacks={{
              onToggle: toggleHabitToday,
              onDelete: handleDelete,
            }}
          />
        ))
      ) : (
        <>
          <p>No tasks yet. Start building consistency</p>
        </>
      )}
    </div>
  );
}

export default HabitList;
