<template>
  <div id="mtdl-sign-in-page">
    <v-card class="mtdl-sign-in-component" width="380" min-height="404">
      <v-toolbar dark color="primary" dense flat>
        <v-toolbar-title v-text="$t('welcome')" />
      </v-toolbar>

      <v-form :ref="refNameForm" v-model="validFormLogin" @submit.prevent="signIn(form.validate())">
        <v-container fluid>
          <v-row>
            <v-col>
              <v-text-field
                v-model="AUTH_MODEL.email"
                prepend-inner-icon="mdi-account-outline"
                :label="$t('email')"
                outlined
                dense
                :rules="[RULES.NO_EMPTY(AUTH_MODEL.email)]"
                required
              />
            </v-col>
          </v-row>

          <v-row class="pt-0 mt-0">
            <v-col>
              <v-text-field
                v-model="AUTH_MODEL.password"
                type="password"
                prepend-inner-icon="mdi-lock-outline"
                :label="$t(DICTIONARY.PASSWORD)"
                outlined
                dense
                :rules="[RULES.NO_EMPTY(AUTH_MODEL.password)]"
                required
              />
            </v-col>
          </v-row>

          <v-row class="pt-0 mt-0">
            <v-col>
              <v-btn color="primary" type="submit" block>
                <span v-text="$t(DICTIONARY.SIGN_IN)" />
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-divider />
              <v-btn class="mt-6" text block>
                <span v-text="$t(DICTIONARY.CLICK_HERE_TO_REGISTER)" />
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Ref } from 'nuxt-property-decorator'
import AuthData from '~/views/data/auth.data'

const formRef = 'form-login-ref';

@Component
export default class SignInComponents extends AuthData {
 private validFormLogin = true;

 @Ref(formRef)
 private form!: HTMLFormElement;

 private refNameForm = formRef
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
