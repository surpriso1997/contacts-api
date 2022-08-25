import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ContactsModule } from 'src/modules/contacts/contacts.module';
import { UsersModule } from 'src/modules/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    ContactsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        console.log(process.env);
        return {
          type: 'postgres',
          // database: config.get<string>('POSTGRES_DB'),
          // password: config.get<string>('POSTGRES_PASSWORD'),
          // username: config.get<string>('POSTGRES_USER'),
          // host: config.get<string>('POSTGRES_HOST'),
          password: 'password',
          username: 'postgres',
          host: 'localhost',
          port: 7000,
          entities: [User],
          migrationsTableName: 'migration',
          migrationsRun: true,
          autoLoadEntities: true,
          ssl: false,
          synchronize: true,
        };
      },
    }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (cs: ConfigService) => ({
        secret: cs.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: 60 * 60 * 24,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
