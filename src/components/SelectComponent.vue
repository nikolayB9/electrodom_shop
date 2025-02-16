<script>
export default {
  name: "SelectComponent",

  props: [
    'modelValue',
    'values',
    'id',
    'label',
    'errors',
    'withName',
  ],

  emits: ['update:modelValue']
}
</script>

<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <select :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="form-select"
            :class="{ 'is-invalid': errors }"
            :id="id">
      <template v-if="withName">
        <option v-for="item in values" :value="item.value">{{ item.name }}</option>
      </template>
      <template v-if="!withName">
        <option v-for="value in values" :value="value">{{ value }}</option>
      </template>
    </select>
    <template v-if="errors">
      <div v-for="error in errors" class="invalid-feedback">{{ error }}</div>
    </template>
  </div>
</template>

<style scoped>

</style>
