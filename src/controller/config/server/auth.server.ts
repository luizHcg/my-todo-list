import BaseServer from "~/controller/config/server/base";
import Auth from "~/model/dto/auth";
import ENUM_AUTH_ROUTER from '~/controller/routes'


class AuthServer extends BaseServer<Auth> {
  constructor() {
    super(ENUM_AUTH_ROUTER.AUTH);
  }
}

export default AuthServer
