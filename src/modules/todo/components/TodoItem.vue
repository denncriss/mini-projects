<template>
  <div
    class="task-item"
    :class="{ 'task-completed': task.completed }"
    @click="$emit('toggleTask', task.id)">
    <IconCheckbox class="task-icon" :active="task.completed" />
    <span class="task-text">{{ task.name }}</span>
    <div class="btn-actions-box">
      <button
        v-if="task?.id !== taskEdit?.id"
        class="btn-icon btn-icon__edit"
        @click.stop="$emit('updateTask', task)">
        <IconUpdate class="icon-actions" />
      </button>
      <button v-else class="btn-icon btn-icon__close" @click.stop="$emit('updateTask', {})">
        <IconClose class="icon-actions" />
      </button>
      <button class="btn-icon btn-icon__remove" @click.stop="$emit('removeTask', task.id)">
        <IconDelete class="icon-actions" />
      </button>
    </div>
  </div>
</template>

<script setup>
  import IconCheckbox from './icon/IconCheckbox.vue';
  import IconUpdate from './icon/IconUpdate.vue';
  import IconDelete from './icon/IconDelete.vue';
  import IconClose from './icon/IconClose.vue';
  defineProps(['task', 'taskEdit']);
  defineEmits(['toggleTask', 'removeTask', 'updateTask']);
</script>

<style scoped>
  .task-item {
    background: var(--secondary500-25);
    box-shadow: inset 0 0 0.5rem var(--secondary500-25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 0.8rem;
    cursor: pointer;
    border-radius: 0.2rem;
    transition: all 0.2s ease-in-out;
  }
  .task-item:hover {
    background: var(--secondary500-50);
  }
  .task-icon {
    margin-right: 0.5rem;
  }
  .task-text {
    flex: 1;
  }
  .task-completed {
    text-decoration: line-through;
    color: var(--secondary200);
    opacity: 0.7;
  }
  .icon-actions {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
  }
  .btn-actions-box {
    padding-left: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .btn-icon {
    background: var(--secondary500);
    color: var(--secondary100);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .btn-icon__edit {
    background: var(--warning-10);
    color: var(--warning);
  }
  .btn-icon__edit:hover {
    background: var(--warning-30);
  }
  .btn-icon__remove {
    background: var(--danger-10);
    color: var(--danger);
  }
  .btn-icon__remove:hover {
    background: var(--danger-30);
  }
  .btn-icon__close {
    background: var(--danger-10);
    color: var(--danger);
  }
  .btn-icon__close:hover {
    background: var(--danger-30);
  }
</style>
