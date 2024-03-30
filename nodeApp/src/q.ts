// Zod maintians runtime validation 
// TypeScript inference maintians compiletime validation

import { z } from 'zod';
const express = require("express")

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// The 'updateBody' variable is assigned the type 'FinalUserSchema' inferred from the schema
// This ensures that the 'req.body' object matches the shape and types defined in the schema
type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req: any, res: any) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);