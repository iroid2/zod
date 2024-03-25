//schemas/schema.ts
import { z } from "zod";
 
export const registerFormSchema = z.object({
 username:z.string({
    required_error:"user name is required"
 }).min(5,{
    message:"th username should have enough characters"
 }),
email:z.string().email(),
password:z.string({
    required_error:"the password is required"
}).min(4,{
    message:"the pasword should be more than 4"
})

});