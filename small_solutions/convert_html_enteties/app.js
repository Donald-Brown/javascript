const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
};

const convertHTML = str => str.split("").map(entity => entities[entity] || entity).join("");

console.log(convertHTML("Dolce & Gabbana"));