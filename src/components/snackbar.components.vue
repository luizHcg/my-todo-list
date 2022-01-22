<template>
  <div>
    <v-snackbar v-model="Snackbar" color="primary">
      {{ text }}

      <template #action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="closeSnackbar"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">

import {Component, Emit, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class SnackbarComponents extends Vue {
  @Prop({ default: false, type: Boolean, required: true})
  private snackbar!: boolean

  private get Snackbar(): boolean {
    return this.snackbar
  }

  private set Snackbar(snackbar: boolean) {
    if (!snackbar)
      this.closeSnackbar()
  }

  private text = `Hello, I'm a snackbar`

  @Emit('showSnackbar')
  private closeSnackbar() {
    this.$emit('show-snackbar', false);
  }
}
</script>

<style scoped>

</style>
