import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: Observable<any>): Observable<any> {
    return next.pipe(tap(() => console.log(`${context.getClass().name}`)));
  }
}
