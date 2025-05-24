import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
