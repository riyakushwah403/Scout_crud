import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from 'rxjs'
import { tap, finalize } from 'rxjs/operators'

@Injectable()
export class LoginInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        console.log("Before request processing...");

        return next
            .handle()
            .pipe(
                tap(() => console.log("After request processing..."))
            )
            .pipe(
                finalize(() => {
                    const response = context.switchToHttp().getResponse();
                  
                })
            );
    }
}
