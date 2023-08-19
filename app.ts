type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskList = Task[];

const addTask = (taskList: TaskList, task: Task): TaskList => {
  return [...taskList, task];
}

const completeTask = (taskList: TaskList, id: number): TaskList => {
  return taskList.map((task: Task) =>
    task.id == id ? { ...task, completed: true } : task
  );
}

const filterTasks = (taskList: TaskList, filter: boolean): TaskList => {
  return taskList.filter((task: Task) =>
    filter === task.completed
  );
}

const printTaskList = (taskList: TaskList): void => {
  taskList.map((task: Task) => {
    console.log(`Title: ${task.title} | Completed: ${task.completed}`);
  });
}

const runApp = (): void => {
  let tasks: TaskList = [
    { id: 1, title: "Completar taller de TypeScript", completed: false },
    { id: 2, title: "Estudiar programación funcional", completed: false },
    { id: 3, title: "Presentación sobre TypeScript", completed: true },
    { id: 4, title: "Leer libro de TypeScript avanzado", completed: false },
    { id: 5, title: "Resolver ejercicios de TypeScript", completed: false },
    { id: 6, title: "Hacer ejercicio", completed: true },
    { id: 7, title: "Comprar víveres", completed: false },
    { id: 8, title: "Llamar al médico", completed: false },
    { id: 9, title: "Limpiar la casa", completed: true },
    { id: 10, title: "Actualizar el CV", completed: false }
  ];

  const task1: Task = { id: 11, title: "Revisar documentacion Typescript", completed: false };
  const task2: Task = { id: 12, title: "Desarrollar FrontEnd", completed: false };
  const task3: Task = { id: 13, title: "Desarrollar FrontEnd 2", completed: false };

  tasks = addTask(tasks, task1);
  tasks = addTask(tasks, task2);
  tasks = addTask(tasks, task3);

  tasks = completeTask(tasks, 11);

  const completedTasks = filterTasks(tasks, true);
  console.log('\n List of completed tasks')
  printTaskList(completedTasks);

  console.log('\n TASKS LIST')
  printTaskList(tasks);
}

runApp();