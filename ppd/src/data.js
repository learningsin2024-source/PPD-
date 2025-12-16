export const tasks = [
  {
    id: 1,
    status: "done",
    title: "Read book",
  },
  {
    id: 2,
    status: "pending",
    title: "Watch Movies",
  },
  {
    id: 3,
    status: "done",
    title: "Picnic",
  },
];

export const habits = [
  {
    id: 1,
    status: "done",
    title: "Sober",
  },
  {
    id: 2,
    status: "done",
    title: "Jogging",
  },
];



const tasksCreated = tasks.length;
const tasksCompleted = tasks.filter(t => t.status === "done").length;
const tasksPending = tasks.filter(t => t.status === "pending").length;
const completionPercent = tasksCreated === 0 ? 0 : Math.round((tasksCompleted / tasksCreated) * 100);

const totalHabits = habits.length;
const habitsDoneToday = habits.filter(h => h.status === "done").length;
const habitsPending = habits.filter(h => h.status === "pending").length;
const habitStreak = "🔥"; 
