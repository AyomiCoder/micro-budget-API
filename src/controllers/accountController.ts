// src/controllers/accountController.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Account } from '../entities/Account'; // Adjust import as needed

export const createAccount = async (req: Request, res: Response) => {
    const { userId, account_type, balance } = req.body;

    const accountRepository = getRepository(Account);
    const newAccount = accountRepository.create({
        user_id: userId,
        account_type,
        balance,
    });

    await accountRepository.save(newAccount);
    res.status(201).json(newAccount);
};

export const getAccountById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const accountRepository = getRepository(Account);
    const account = await accountRepository.findOne(id);

    if (!account) {
        return res.status(404).json({ message: 'Account not found' });
    }

    res.status(200).json(account);
};

export const updateAccount = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { balance, account_type } = req.body;

    const accountRepository = getRepository(Account);
    const account = await accountRepository.findOne(id);

    if (!account) {
        return res.status(404).json({ message: 'Account not found' });
    }

    account.balance = balance !== undefined ? balance : account.balance;
    account.account_type = account_type || account.account_type;

    await accountRepository.save(account);
    res.status(200).json(account);
};

export const deleteAccount = async (req: Request, res: Response) => {
    const { id } = req.params;

    const accountRepository = getRepository(Account);
    const result = await accountRepository.delete(id);

    if (result.affected === 0) {
        return res.status(404).json({ message: 'Account not found' });
    }

    res.status(200).json({ message: 'Account deleted successfully' });
};
