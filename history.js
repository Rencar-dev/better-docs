exports.handlers = {
  newDoclet: function ({ doclet }) {
    if (doclet.tags && doclet.tags.length > 0) {
      const historyTag = doclet.tags.find((tag) => tag.title === "history");
      if (historyTag) {
        doclet.history = historyTag.value;
      }
    }
  },
};
