<template>
    <div class="separator">
        <slot></slot>
    </div>
</template>

<script setup>
   
</script>

<style scoped>

    .separator {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 34px 0;
    }
      
    .separator::before,
    .separator::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #000;
    }
      
    .separator:not(:empty)::before {
        margin-right: 16px;
    }
      
    .separator:not(:empty)::after {
        margin-left: 16px;
    }

</style>