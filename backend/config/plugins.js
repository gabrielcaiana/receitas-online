module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        recipe: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  // ...
});
