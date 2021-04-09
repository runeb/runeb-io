import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import siteSettings from "./documents/siteSettings";
import audiogram from "./documents/audiogram";
import ingredient from "./documents/ingredient";
import post from "./documents/post";
import recipe from "./documents/recipe";
import bodyText from "./objects/bodyText";
import mainImage from "./objects/mainimage";
import ingredientUsage from "./objects/ingredientUsage";
import recipeStep from "./objects/recipeStep";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    ingredient,
    recipeStep,
    ingredientUsage,
    siteSettings,
    mainImage,
    post,
    recipe,
    bodyText,
    audiogram,
  ]),
});
