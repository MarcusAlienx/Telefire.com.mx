import { type User, type InsertUser, type Partnership, type InsertPartnership } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPartnership(partnership: InsertPartnership): Promise<Partnership>;
  getPartnerships(): Promise<Partnership[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private partnerships: Map<string, Partnership>;

  constructor() {
    this.users = new Map();
    this.partnerships = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPartnership(insertPartnership: InsertPartnership): Promise<Partnership> {
    const id = randomUUID();
    const partnership: Partnership = { 
      ...insertPartnership, 
      id,
      createdAt: new Date()
    };
    this.partnerships.set(id, partnership);
    return partnership;
  }

  async getPartnerships(): Promise<Partnership[]> {
    return Array.from(this.partnerships.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
}

export const storage = new MemStorage();
