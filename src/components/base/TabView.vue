<script setup lang="ts">
import Tabs from './Tabs.vue';

</script>

<template>
    <div>
        <Tabs>
          <template #tab-0>
            <p>This is the details content.</p>
          </template>
          <template #tab-1>
            <p>This is the fit content.</p>
          </template>
          <template #tab-2>
            <p>This is the material and care instructions content.</p>
          </template>
          <template #tab-3>
            <p>This is the sustainability content.</p>
          </template>
        </Tabs>
      </div>
</template>
