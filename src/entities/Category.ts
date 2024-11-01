import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Budget } from './Budget';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @ManyToOne(() => User, user => user.accounts, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ManyToOne(() => Budget, budget => budget.categories, { onDelete: 'SET NULL', nullable: true })
  budget: Budget;

  @Column({ type: 'numeric', precision: 15, scale: 2, default: 0, nullable: true })
  amount_allocated: number;
    transactions: any;
}
