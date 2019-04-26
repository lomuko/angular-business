import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [ProductsModule, ShoppingCartModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(this.logger).forRoutes('');
  }

  logger(req: Request, res, next) {
    const msg = `[${req.method.padEnd(6)}] ${req.url.padEnd(16)} ${JSON.stringify(
      req.body
    ).substring(0, 60)}`;
    console.log(msg);
    next();
  }
}
