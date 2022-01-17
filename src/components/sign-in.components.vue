<template>
  <div id="mtdl-sign-in-page">
    <v-card class="mtdl-sign-in-component" width="380" min-height="404">
      <v-toolbar dark color="primary" dense flat>
        <v-toolbar-title v-text="$t('welcome')" />
      </v-toolbar>

      <v-form>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-text-field
                prepend-inner-icon="mdi-account-outline"
                :label="$t('email')"
                outlined
                dense
              />
            </v-col>
          </v-row>

          <v-row class="pt-0 mt-0">
            <v-col>
              <v-text-field
                type="password"
                prepend-inner-icon="mdi-lock-outline"
                :label="$t('password')"
                outlined
                dense
              />
            </v-col>
          </v-row>

          <v-row class="pt-0 mt-0">
            <v-col>
              <v-btn color="primary" type="submit" block>
                <span v-text="$t('signIn')" />
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-divider />
              <v-btn class="mt-6" text block>
                <span v-text="$t('clickHereToRegister')" />
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import AuthData from '~/views/data/auth.data'

@Component
export default class SignInComponents extends AuthData {

}
</script>

<style lang="scss" scoped>
#mtdl-sign-in-page {
  width: 100vw;
  height: calc(100vh - 48px);
  box-sizing: border-box;

  .mtdl-sign-in-component {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 48px));
  }
}
</style>
