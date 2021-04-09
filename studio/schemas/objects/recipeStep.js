export default {
  type: "object",
  name: "recipeStep",
  fields: [
    {
      name: "title",
      type: "string"
    },
    {
      name: "minutes",
      type: "number"
    },
    {
      name: "text",
      type: "array",
      of: [{type: "block"}]
    },
  ]
}