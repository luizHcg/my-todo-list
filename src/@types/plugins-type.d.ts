import {EnumWord} from "~/controller/config/lang/dictionary/enum-word";

declare module 'vue/types/vue' {
  interface Vue {
    $dictionary: EnumWord;
  }
}
