<template>
  <form class="tasks-container-create" @submit.prevent="addTask">
    <input
      placeholder="escribe la nueva tarea"
      class="input-task"
      v-model.trim="task.name"
      type="text" />
    <div class="buttons">
      <button
        class="btn-icon"
        :class="[
          { disabled: (task.name == '') | (task.name === taskEditLocal) },
          { edit: buttonName === 'actualizar' },
          { success: buttonName === 'guardar' },
        ]">
        <IconSave class="btn-icon__svg" />
      </button>
    </div>
  </form>
</template>

<script setup>
  import { ref, watch, computed } from 'vue';
  import IconSave from './icons/IconSave.vue';

  const props = defineProps(['taskEdit']);
  const emit = defineEmits(['add-task', 'cancelEditTask']);
  const taskEditLocal = ref(null);

  const task = ref({
    id: null,
    name: '',
    completed: false,
  });
  const isEditing = ref(false);

  const buttonName = computed(() => {
    if (isEditing.value) return 'actualizar';
    if (!isEditing.value) return 'guardar';
    return '';
  });

  watch(
    () => props.taskEdit,
    () => {
      if (props.taskEdit.id) {
        task.value = { ...props.taskEdit };
        taskEditLocal.value = props.taskEdit.name;
        isEditing.value = true;
      } else {
        clearTask();
      }
    }
  );

  const addTask = () => {
    if (task.value.name === '') return;
    task.value.id = task.value.id ?? new Date().getTime();
    emit('add-task', task.value);
    clearTask();
  };
  const clearTask = () => {
    isEditing.value = false;
    taskEditLocal.value = null;
    task.value = {
      id: null,
      name: '',
      completed: false,
    };
  };
</script>

<style scoped>
  /*  */
  .tasks-container-create {
    width: 30rem;
    width: 100%;
    padding: 0.5rem;
    background-color: var(--secondary400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    display: flex;
  }
  .input-task {
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.3rem;
    border: none;
    background-color: transparent;
    color: white;
    font-family: var(--font);
    font-size: 1rem;
  }
  .input-task::placeholder {
    color: var(--secondary200);
  }
  .input-task:focus {
    outline: none;
  }
  .btn {
    align-items: center;
    border: none;
    cursor: pointer;
    display: flex;
    font-family: var(--font);
    font-size: 0.9rem;
    font-weight: 600;
    justify-content: center;
    margin-left: auto;
    width: 100%;
  }
  .success:hover {
    box-shadow: 0px 0px 10px 2px var(--primary);
  }
  .edit:hover {
    box-shadow: 0px 0px 10px 2px var(--warning);
    transition: all 0.3s ease-in-out;
  }
  .btn-icon.success {
    background-color: var(--primary);
  }
  .btn-icon.edit {
    background-color: var(--warning);
  }
  .buttons {
    display: flex;
    gap: 0;
    /* overflow: hidden; */
  }

  .btn-icon {
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    color: var(--secondary500);
    font-size: 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    border-radius: 0.4rem;
  }
  .btn-icon__svg {
    width: 1.7rem;
  }
  .disabled {
    pointer-events: none;
    opacity: 0.8;
    color: var(--secondary300);
  }
</style>
