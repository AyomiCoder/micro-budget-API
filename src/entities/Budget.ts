import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from './User';
import { Category } from './Category';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  budget_id: number;

  @ManyToOne(() => User, user => user.budgets, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'numeric', precision: 15, scale: 2 })
  total_amount: number;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @OneToMany(() => Category, category => category.budget)
  categories: Category[];
}
