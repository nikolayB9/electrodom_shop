<script>
export default {
  name: "Input",

  props: [
    'type',
    'id',
    'modelValue',
    'label',
    'placeholder',
    'required',
    'errors',
  ],

  emits: ['update:modelValue']
}
</script>

<template>
  <div class="mb-3">
    <label :for="id" class="form-label" :class="{ required: required }">{{ label }}</label>
    <input :type="type ?? 'text'"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           class="form-control"
           :class="{ 'is-invalid': errors }"
           :id="id"
           :placeholder="placeholder"
           :required="required ?? false">
    <template v-if="errors">
      <div v-for="error in errors" class="invalid-feedback">{{ error }}</div>
    </template>
  </div>
</template>

<style scoped>

</style>

