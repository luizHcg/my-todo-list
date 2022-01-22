import { Vue } from 'nuxt-property-decorator'
import { ENUM_WORD } from '~/controller/config/lang/dictionary/enum-word'

abstract class Data extends Vue {
  protected DICTIONARY = ENUM_WORD

  protected RULES = {
    NO_EMPTY: (v: any) => !!v || this.$t(this.DICTIONARY.REQUIRED_FIELD)
  }
}

export default Data
