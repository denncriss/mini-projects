<template>
  <section class="tasks-container">
    <!-- tarjeta de formulario para crear una tarea -->
    <CardTodoCreateOrUpdate
      :taskEdit="taskEdit"
      @add-task="addTask"
      @cancelEditTask="() => (taskEdit = {})" />
    <!-- card principal que envuelve tanto las tareas como el filtro -->
    <CardTodosBox>
      <!-- card que envuelve las tareas -->
      <CardTodosItemsBox v-if="filteredTasks.length > 0">
        <!-- tarea -->
        <TodoItem
          v-for="task in filteredTasks"
          :key="task.id"
          :task="task"
          :taskEdit="taskEdit"
          @toggle-task="toggleTask"
          @remove-task="removeTask"
          @update-task="(task) => (taskEdit = task)" />
      </CardTodosItemsBox>
      <!--card de tareas no encontradas-->
      <TodoNotFoundItem v-else :filterSelected="filterSelected" />
      <!--card de filtro de tareas-->
      <TodoFilter
        :notTasks="tasks.length == 0"
        :filterSelected="filterSelected"
        @change-filter-selected="(value) => (filterSelected = value)" />
    </CardTodosBox>
  </section>
</template>

<script setup>
  import TodoFilter from './components/TodoFilter.vue';
  import TodoNotFoundItem from './components/TodoNotFoundItem.vue';
  import TodoItem from './components/TodoItem.vue';
  import CardTodosItemsBox from './components/CardTodosItemsBox.vue';
  import CardTodosBox from './components/CardTodosBox.vue';
  import CardTodoCreateOrUpdate from './components/CardTodoCreateOrUpdate.vue';
  import { ref, computed, watch, onMounted } from 'vue';

  const tasks = ref([]);
  const filterSelected = ref('all');
  const taskEdit = ref({});

  // filtrar tareas por estado del filtro seleccionado
  const filteredTasks = computed(() => {
    if (filterSelected.value === 'active') return tasks.value.filter((task) => !task.completed);
    if (filterSelected.value === 'completed') return tasks.value.filter((task) => task.completed);
    return tasks.value;
  });
  // agregar una tarea
  const addTask = (task) => {
    const foundTask = tasks.value.find((item) => item.id === task.id);
    if (foundTask) return updateTask(task.id, task.name);
    tasks.value.push(task);
  };
  // completar/descompletar tarea
  const toggleTask = (id) => {
    tasks.value = tasks.value.map((task) => {
      if (task.id === id) task.completed = !task.completed;
      return task;
    });
  };
  // editar tarea
  const updateTask = (id, name) => {
    tasks.value = tasks.value.map((task) => {
      if (task.id === id) task.name = name;
      return task;
    });
    taskEdit.value = {};
  };
  // eliminar tarea
  const removeTask = (id) => {
    if (taskEdit.value.id === id) return;
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };
  // detectar cambios y guardar tareas en localStorage
  watch(
    () => [...tasks.value],
    () => {
      localStorage.setItem('tasks', JSON.stringify(tasks.value));
    }
  );
  // cargar tareas desde localStorage cuando se carga la pagina
  onMounted(() => {
    const tasksLocalStorage = localStorage.getItem('tasks');
    tasks.value = tasksLocalStorage ? JSON.parse(tasksLocalStorage) : [];
  });
</script>

<style scoped>
  .tasks-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 1rem 0;
    height: 100vh;
    max-height: 100vh;
  }
  @media (min-width: 768px) {
    .tasks-container {
      width: 28rem;
    }
  }
</style>
