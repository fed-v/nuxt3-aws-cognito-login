<template>
    <!-- inputContainers encapsulate input tags, label tags and error messages -->
    <div class="input-container">

        <label class="input-label" :for="name">{{ label }}</label>

        <!-- The default value of this Input can be passed via v-model. When the value is changed, it will emit its value to the parent -->
        <Field class="form-input" :rules="rules" :class="error" :type="type" :id="name" :name="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <ErrorMessage class="error-msg" :name="name" />
        
    </div>
</template>

<script setup>
    const props = defineProps({
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        rules: {
            type: String,
            required: false,
        },
        error: {
            type: String,
            required: false,
        },
        modelValue: {
            type: String,
            required: false,
        },
        
    });

    // Emit an update:modelValue custom event with the new value of the v-model that was bound when this Component was called
    defineEmits(['update:modelValue']);

    // Source: https://vuejs.org/guide/components/v-model.html

</script>

<style lang="less" scoped>
    @import '../assets/styles/less/constants.less';
    @import '../assets/styles/less/buttons.less';
    @import '../assets/styles/less/forms.less';
</style>