import {IbaseModel} from '~/model/import/ibase-model'

class Auth implements IbaseModel {
  id?: string
  name?: string
  age?: number
  email?: string
  password?: string
}

export default Auth
