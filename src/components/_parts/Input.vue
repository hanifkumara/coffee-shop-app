<template>
  <div class="form-group">
    <label v-bind:for="name">{{ label }}</label>
    <input v-bind:type="type" v-bind:value="value || ''" class="form-control" v-bind:class="{ underlined: formStyle === 'underlined' }" v-bind:name="name" v-bind:id="name" v-bind:placeholder="placeholder" @input="activate" autocomplete="off">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['name', 'label', 'type', 'placeholder', 'formStyle', 'value'],
  methods: {
    activate (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>
.form-group .form-control, .form-group label {
  display: block;
}
.form-group label {
  margin-bottom: .5em;
  font-weight: bold;
  color: inherit;
}
.form-group .form-control {
  padding: .5em 1em .5em 1em;
  font-size: 1.2em;
  outline: none;
  display: block;
  border: 1px solid #4F5665;
  border-radius: 10px;
  width: 100%;
}
.form-group .form-control.underlined {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #4F5665;
}
</style>
