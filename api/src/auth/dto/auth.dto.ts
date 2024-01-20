// auth.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'User password' })
  password: string;

  @ApiProperty({ example: 'John Doe', description: 'User name' })
  name: string;
}

export class LoginDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'User password' })
  password: string;
}

export class RequestPasswordResetDto {
  @ApiProperty({ description: 'User email', example: 'user@example.com' })
  email: string;
}

export class ResetPasswordDto {
  @ApiProperty({ description: 'Reset token', example: 'abcdef123456' })
  token: string;

  @ApiProperty({ description: 'New password', example: 'newPassword123' })
  newPassword: string;
}
