import { useState, useEffect, useContext } from 'react';

import Statscard from '../component/statscard';
import Progressbar from '../component/progressbar';
import ProfileHeader from '../component/profieheader';
import AddTaskForm from '../component/AddTaskForm.jsx';

import TaskList from '../component/TaskList.jsx';
import HabitList from '../component/HabitList.jsx';
import AddHabitForm from '../component/AddHabitForm.jsx';
import { TaskContext } from '../context/TaskContext.jsx';
import { HabitContext } from '../context/HabitContext.jsx';
import DashboardInsights from '../component/DashboardInsights.jsx';

function Dashboard() {
  return (
    <>
      <ProfileHeader />
      <div className="space-x-3.5 mb-3.5">
        <AddHabitForm />
        <AddTaskForm />
      </div>
      <DashboardInsights />
    </>
  );
}

export default Dashboard;
