import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common'; // please create sepreate folder for guard  and move there

@Injectable()
export class ScoutGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('gaurd run successfully');

    try {
      const request = context.switchToHttp().getRequest();
      console.log('request>>>>>>>>>>>>>>>', request);
      console.log('request.headers>>>>>>>>>>>>>>>>>', request.params);

      const scoutrole = request.params.role;
      console.log('scoutrole>>>>>>>>>>>>>>>>>', scoutrole);

      if (scoutrole !== 'trainer') {
        throw new BadRequestException('Access denied. Trainer role required.');
      }

      return true;
    } catch (error) {
      const status = 500;
      const message = error.message || 'Internal server error';
      context.switchToHttp().getResponse().status(status).json({ message });
      return false;
    }
  }
}
