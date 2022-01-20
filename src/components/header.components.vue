<template>
  <header>
    <v-app-bar dark dense color="primary" max-height="48">
      <v-app-bar-nav-icon />
      <v-app-bar-title>
        <v-icon class="mdi mdi-clipboard-list-outline" left />
        <span v-text="$t($dictionary.MY_TODO_LIST)" />
      </v-app-bar-title>
      <v-spacer />
      <v-btn text @click="switchLang">
        <v-icon class="mdi mdi-translate" left />
        <span v-text="$i18n.locale" />
      </v-btn>

      <v-btn icon @click="switchTheme">
        <v-icon :class="`mdi mdi-${theme}`" />
      </v-btn>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ENUM_LANG from '~/controller/config/lang/dictionary/enum-lang'

@Component
export default class HeaderComponents extends Vue {
  private switchLang(): void {
    this.$i18n.locale =
      this.$i18n.locale === ENUM_LANG.LOCALE_PT_BR
        ? ENUM_LANG.LOCALE_EN
        : ENUM_LANG.LOCALE_PT_BR
  }

  private switchTheme(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  }

  private get theme(): string {
    return this.$vuetify.theme.dark ? 'weather-night' : 'weather-sunny'
  }
}
</script>
