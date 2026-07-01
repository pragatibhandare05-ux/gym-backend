import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // Register User
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    // Check if email already exists
    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });

    return {
      message: 'User registered successfully',
      user,
    };
  }

  // Login User
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    console.log('================ LOGIN DEBUG ================');
    console.log('Login Email:', email);

    // Find user by email
    const user = await this.usersService.findByEmail(email);

    console.log('User Found:', user);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    console.log('Password Match:', isPasswordValid);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Create JWT payload
    const payload = {
      sub: user._id.toString(),
      email: user.email,
      role: user.role,
    };

    console.log('JWT Payload:', payload);

    // Generate JWT token
    const accessToken = this.jwtService.sign(payload);

    return {
      message: 'Login successful',
      access_token: accessToken,
    };
  }
}