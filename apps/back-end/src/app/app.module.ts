import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestDataModule } from '../test-data/test-data.module';

@Module({
  imports: [TestDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
