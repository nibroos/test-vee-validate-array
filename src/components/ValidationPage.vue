<template>
  <div>
    <form @submit.prevent="submitForm">
      <div v-for="(item, index) in items" :key="item.key">
        <label>
          Item {{ index + 1 }}:
          <input
            type="text"
            v-model="item.value"
            :class="{ 'is-invalid': $errors.has(`items.${index}.value`) }"
          />
        </label>
        <div class="invalid-feedback">
          {{ $errors.first(`items.${index}.value`) }}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
const items = ref([
  { key: 1, value: '' },
  { key: 2, value: '' },
  { key: 3, value: '' },
]);

const validationSchema = {
  items: {
    $each: {
      value: { required: true, min: 2 },
    },
  },
};

const { handleSubmit } = useForm({
  initialValues: { items: items.value },
  validationSchema,
});

function submitForm() {
  handleSubmit(async (values) => {
    console.log('Valid form submitted:', values);
  })();
}
</script>

<style>
.is-invalid {
  border-color: red;
}
.invalid-feedback {
  display: none;
}
.is-invalid + .invalid-feedback {
  display: block;
}
</style>
