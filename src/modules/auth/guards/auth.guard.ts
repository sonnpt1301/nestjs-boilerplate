import {
    Injectable,
    UnauthorizedException,
    ForbiddenException,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'


@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') { }


@Injectable()
class PermissionGuard extends AuthGuard('jwt') {
  roles = [];
  constructor(roles?: string | string[]) {
      super()

      if (roles !== undefined) {
          this.roles =
        typeof roles === 'string' ? [roles] : roles
      }
  }

  handleRequest<TUser = any>(
      err: any,
      user: any,
      info: any,
      context: any,
      status?: any,
  ): TUser {
      if (!user) throw new UnauthorizedException()
      if (this.roles.length > 0) {
          console.log(user.role)
          if (user.role == 'admin')
              return user
          if (this.roles.indexOf(user.role) == -1) {
              throw new ForbiddenException()
          }

      }
      return user
  }
}
export const JwtPermissionGuard = (roles?: string | string[]): PermissionGuard => {
    return new PermissionGuard(roles)
}


