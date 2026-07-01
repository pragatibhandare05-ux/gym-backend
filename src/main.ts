import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Helmet security headers
  app.use(helmet());

  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
);

  // Register global response interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());

  // Register global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);

  console.log(`🚀 Server is running on http://localhost:3000`);
}

bootstrap();