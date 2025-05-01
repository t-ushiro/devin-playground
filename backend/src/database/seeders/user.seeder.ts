import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class UserSeeder {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async seed(): Promise<void> {
    const users = await this.userRepository.find();
    if (users.length === 0) {
      const salt = await bcrypt.genSalt();
      const password_hash = await bcrypt.hash('password123', salt);

      const demoUsers = [
        { email: 'user1@example.com', password_hash },
        { email: 'user2@example.com', password_hash },
        { email: 'user3@example.com', password_hash },
      ];

      await this.userRepository.save(demoUsers);
      console.log('Demo users seeded successfully');
    }
  }
}
