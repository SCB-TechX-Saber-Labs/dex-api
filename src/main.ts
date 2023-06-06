import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';
global['fetch'] = require('node-fetch');

async function bootstrap() {
  const appOptions = {cors: true};
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning();
  const options = new DocumentBuilder()
  .setTitle('Dex Backend API')
  .setDescription('Dex API description')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('/apis', app, document);

  const configService = app.get(ConfigService);
    await app.listen(configService.get('APP_PORT') ?? 3000);
}
bootstrap();
