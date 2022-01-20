<template>
  <header>
    <v-app-bar dark dense color="primary" max-height="48">
      <v-app-bar-title>
        <v-container fluid>
          <v-row class="pa-0 ma-0">
            <v-col class="pa-0 ma-0">
              <v-img
                :src="require('~/static/img/to-do32x.png')"
                height="auto"
                width="32"
                alt="logo"
                class="mr-4"
              />
            </v-col>

            <v-col class="pa-0 ma-0">
              <span v-text="$t(DICTIONARY.MY_TODO_LIST)" />
            </v-col>
          </v-row>
        </v-container>
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
import { Component } from 'nuxt-property-decorator'
import ENUM_LANG from '~/controller/config/lang/dictionary/enum-lang'
import Data from '~/views/data'

@Component
export default class HeaderComponents extends Data {
  private switchLang(): void {
    console.log(this.DICTIONARY.CLICK_HERE_TO_REGISTER)
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
