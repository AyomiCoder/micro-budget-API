import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Account } from './Account';
import { Category } from './Category';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  transaction_id: number;

  @ManyToOne(() => Account, account => account.transactions, { onDelete: 'CASCADE' })
  account: Account;

  @ManyToOne(() => Category, category => category.transactions, { onDelete: 'SET NULL', nullable: true })
  category: Category;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'numeric', precision: 15, scale: 2 })
  amount: number;

  @CreateDateColumn({ type: 'timestamp' })
  transaction_date: Date;
}
