import { useContext } from 'react';

import { TaskContext } from '../context/TaskContext';
import { HabitContext } from '../context/HabitContext';
import Statscard from './statscard';
import Progressbar from './progressbar';
import HabitList from './HabitList';
import TaskList from './TaskList';

function DashboardInsights() {
  const {
    tasks,
    setTasks,
    totalTasks,
    completedTasksCount,
    pendingTasks,
    completionPercentage,
    todayVsYesterdayInsight,
    mostProductiveDayInsight,
  } = useContext(TaskContext);

  const {
    habits,
    setHabits,
    today,
    totalHabits,
    activeStreakCount,
    habitDoneToday,
  } = useContext(HabitContext);

  return (
    <>
      <div>
        <div>
          <h2>Task Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <Statscard icon="📝" title="Tasks Created" trend={totalTasks} />
            <Statscard
              icon="✅"
              title="Tasks Completed"
              trend={completedTasksCount}
            />
            <Statscard icon="⏳" title="Tasks Pending" trend={pendingTasks} />
            <Statscard
              icon="📊"
              title="Completion %"
              trend={`${completionPercentage.toFixed(0)}%`}
            />
          </div>
        </div>
        <div>
          <h2>Habit Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <Statscard icon="📋" title="Total Habits" trend={totalHabits} />
            <Statscard icon="✅" title="Done Today" trend={habitDoneToday} />
            <Statscard
              icon="🔥"
              title="Active Streaks"
              trend={activeStreakCount}
            />
            <Statscard
              icon="📈"
              title="Completion %"
              trend={`${
                totalHabits === 0
                  ? 0
                  : ((habitDoneToday / totalHabits) * 100).toFixed(0)
              }%`}
            />
          </div>
        </div>
        <div className="my-4 p-4 rounded-lg bg-white shadow flex items-center gap-3">
          <span className="text-2xl">📅</span>

          <div>
            <p className="font-medium text-gray-800">
              {mostProductiveDayInsight.message}
            </p>

            {mostProductiveDayInsight.day && (
              <p className="text-sm text-gray-500">
                Completed {mostProductiveDayInsight.count} task(s) on{' '}
                {mostProductiveDayInsight.day}
              </p>
            )}
          </div>
        </div>
        <div className="my-4 p-4 rounded-lg bg-white shadow flex items-center gap-3">
          <span className="text-2xl">
            {todayVsYesterdayInsight.trend === 'up' && '⬆️'}
            {todayVsYesterdayInsight.trend === 'down' && '⬇️'}
            {todayVsYesterdayInsight.trend === 'same' && '➖'}
          </span>

          <p
            className={`font-medium ${
              todayVsYesterdayInsight.trend === 'up'
                ? 'text-green-600'
                : todayVsYesterdayInsight.trend === 'down'
                ? 'text-red-600'
                : 'text-gray-600'
            }`}
          >
            {todayVsYesterdayInsight.message}
          </p>
        </div>
        <Progressbar
          value={(completedTasksCount / totalTasks) * 100}
          color="bg-green-500"
          label="Tasks Completed"
          showpercent={true}
        />{' '}
        <br />
        <Progressbar
          value={(habitDoneToday / totalHabits) * 100}
          color="bg-blue-500"
          label="Habits Done Today"
          showpercent={true}
        />{' '}
        <br />
        <div className="space-y-3.5 r mb-2.5">
          <br />
          <h3 className="text-center ">HABITS</h3>
          <HabitList
            habits={habits}
            setHabits={setHabits}
            today={today}
            className="bg-white text-black shadow  rounded border-none p-4 m-3"
          />
          <br />
          <h3 className="text-center">TASKS</h3>
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            ClassName="bg-white text-black shadow  rounded border-none p-4 m-3"
          />
        </div>
      </div>
    </>
  );
}

export default DashboardInsights;
