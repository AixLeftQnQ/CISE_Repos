import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config(); // 加载.env文件中的环境变量

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000; // 优先使用.env中的PORT，否则默认5000
  await app.listen(port);
  console.log(`Nest app running on port ${port}`); // 终端打印运行端口
}
bootstrap();