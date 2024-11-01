// src/controllers/userController.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User'; // Adjust the import path as needed
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'asffwrreyyyrufjjfbdg';

// Load environment variables from .env file
dotenv.config();

export const registerUser = async (req: Request, res: Response) => {
    const { username, first_name, last_name, email, password } = req.body;

    const userRepository = getRepository(User);
    const existingUser = await userRepository.findOne({ where: { email } });

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = userRepository.create({
        username,
        first_name,
        last_name,
        email,
        password_hash: hashedPassword,
    });

    await userRepository.save(newUser);
    res.status(201).json({ message: 'User registered successfully' });
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Omit sensitive information
    const { password_hash, ...userData } = user;
    res.status(200).json(userData);
};
