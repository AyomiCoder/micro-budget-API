import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Account } from './Account';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'varchar', length: 100 })
  first_name: string;

  @Column({ type: 'varchar', length: 100 })
  last_name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  password_hash: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  // Relationships
  @OneToMany(() => Account, account => account.user)
  accounts: Account[];
    budgets: any;
}
