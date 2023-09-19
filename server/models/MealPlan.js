const mongoose = require('mongoose');

const { Schema } = mongoose;

const mealPlanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }
  ]
});

const MealPlan = mongoose.model('Mealplan', mealPlanSchema);

module.exports = MealPlan;
