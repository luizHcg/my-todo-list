import {EnumWord} from '~/controller/config/lang/dictionary/enum-word'

export default (context: any, inject: any) => {
  const dictionary = EnumWord;

  inject('dictionary', dictionary);
  context.$dictionary = dictionary;
}
