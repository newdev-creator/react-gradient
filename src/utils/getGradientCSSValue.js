/**
 * Generates a CSS gradient value based on the provided gradient object.
 *
 * @param {Object} gradient - The gradient object containing colors, positions, and angle.
 * @returns {string} - CSS gradient value for use in styles.
 */
export default function getGradientCSSValue(gradient) {
  // Initialize an accumulator variable to build the gradient string
  const gradientValues = gradient.colors.reduce(
    // Use the reduce function to iterate over each color in the gradient
    (acc, obj, index) =>
      // Concatenate the color value and position to the accumulator
      acc +
      `${obj.value} ${obj.position}%${
        // Add a comma if it's not the last color in the array
        index + 1 !== gradient.colors.length ? "," : ""
      }`,
    // Start with an empty string as the initial value for the accumulator
    ""
  );

  // Return the complete linear-gradient CSS value using the gradient object properties
  return `linear-gradient(${gradient.angle}deg,${gradientValues});`;
}
