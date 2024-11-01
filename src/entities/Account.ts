import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  account_id: number;

  @ManyToOne(() => User, user => user.accounts, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'varchar', length: 100 })
  account_type: string;

  @Column({ type: 'numeric', precision: 15, scale: 2, default: 0.00 })
  balance: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
    transactions: any;
}
