import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPartnershipSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Partnership routes
  app.post("/api/partnerships", async (req, res) => {
    try {
      const validatedData = insertPartnershipSchema.parse(req.body);
      const partnership = await storage.createPartnership(validatedData);
      res.json(partnership);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid partnership data" });
    }
  });

  app.get("/api/partnerships", async (req, res) => {
    try {
      const partnerships = await storage.getPartnerships();
      res.json(partnerships);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Error fetching partnerships" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
