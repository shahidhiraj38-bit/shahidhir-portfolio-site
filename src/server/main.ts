import "reflect-metadata";
import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller("health")
class HealthController {
  @Get()
  status() {
    return { status: "ok", app: "shahidhir consultation api" };
  }
}

@Module({
  controllers: [HealthController]
})
class AppModule {}

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ? Number(process.env.PORT) : 4000);
}

if (require.main === module) {
  bootstrap();
}
