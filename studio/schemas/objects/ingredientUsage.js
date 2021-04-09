export default {
  type: "object",
  name: "ingredientUsage",
  fields: [
    {
      type: "reference",
      name: "ingredient",
      to: [{type: "ingredient"}],
      weak: true
    },
    {
      type: "number",
      name: "amount"
    },
    {
      type: "string",
      name: "unit"
    },
    {
      type: "string",
      name: "nonspecific"
    }
  ],
  preview: {
    select: {
      title: "ingredient.title",
      unit: "unit",
      amount: "amount",
      nonspecific: "nonspecific"
    },
    prepare({title, unit = '', amount = '', nonspecific}) {
      return {
        title,
        subtitle: nonspecific || `${amount} ${unit}`
      }
    }
  }
}