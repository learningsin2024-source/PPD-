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
    <div className="space-y-12">
      {/* ===================== OVERVIEW ===================== */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Overview</h2>

        {/* Task Metrics */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Tasks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Habit Metrics */}
        <div>
          <h3 className="text-lg font-medium mb-3">Habits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </section>

      {/* ===================== INSIGHTS ===================== */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Insights</h2>

        <div className="space-y-4">
          {/* Most Productive Day */}
          <div className="p-4 rounded-lg bg-white shadow flex items-center gap-3">
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

          {/* Today vs Yesterday */}
          <div className="p-4 rounded-lg bg-white shadow flex items-center gap-3">
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
        </div>
      </section>

      {/* ===================== PROGRESS ===================== */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Progress</h2>

        <div className="space-y-4">
          <Progressbar
            value={
              totalTasks === 0 ? 0 : (completedTasksCount / totalTasks) * 100
            }
            color="bg-green-500"
            label="Tasks Completed"
            showpercent={true}
          />

          <Progressbar
            value={totalHabits === 0 ? 0 : (habitDoneToday / totalHabits) * 100}
            color="bg-blue-500"
            label="Habits Done Today"
            showpercent={true}
          />
        </div>
      </section>

      {/* ===================== ACTIVITY ===================== */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Activity</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Habits */}
          <div>
            <h3 className="text-center font-medium mb-3">Habits</h3>
            <HabitList habits={habits} setHabits={setHabits} today={today} />
          </div>

          {/* Tasks */}
          <div>
            <h3 className="text-center font-medium mb-3">Tasks</h3>
            <TaskList tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardInsights;
