import { z } from 'zod';

export const AddNewEmployeeSchema = z.object({
  title: z.string().nonempty("Product title is required"),
  description: z.string().nonempty("Description is required"),
  price: z.coerce.number().min(1, "Price is required and must be greater than 0"),
  discountPercentage: z.coerce.number().optional(),        
  stock: z.coerce.number().min(1, "Stock quantity is required and must be greater than 0"), 
  availabilityStatus: z.string().nonempty("Availability status is required"), 
  category: z.string().nonempty("Category is required"),
  brand: z.string().optional(),
  warrantyInformation: z.string().optional(),
  shippingInformation: z.string().optional(),
});
