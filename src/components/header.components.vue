<template>
  <header>
    <v-app-bar dark dense color="primary" max-height="48">
      <v-app-bar-title v-text="$t('welcome')"/>
      <v-spacer/>
      <v-btn text @click="switchLang">
        <v-icon class="mdi mdi-translate" left/>
        <span v-text="$i18n.locale"/>
      </v-btn>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import ENUM_LANG from "~/controller/config/lang/enum-lang";

@Component
export default class HeaderComponents extends Vue {
  private switchLang(): void {
    this.$i18n.locale = this.$i18n.locale === ENUM_LANG.LOCALE_PT_BR ?
      ENUM_LANG.LOCALE_EN : ENUM_LANG.LOCALE_PT_BR
  }
}
</script>

<style scoped>

</style>
