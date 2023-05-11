import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { SessionSerializer } from './session.serializer';

@Module({
  imports:[PrismaModule],
  providers: [AuthenticationService, LocalStrategy, LocalAuthGuard, SessionSerializer],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
