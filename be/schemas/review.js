const z = require('zod')

const reviewSchema = z.object({
  id: z.string().uuid(),
  reviewer: z.string().min(1, "Reviewer name is required"),
  rating: z.number().min(1).max(5), 
  message: z.string().optional(), 
});

module.exports = {
    reviewSchema
}
