
const API_URL = "https://openapi.programming-hero.com/api/bazardor";

export async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const result = await response.json();

   
    const products = Array.isArray(result)
      ? result
      : Array.isArray(result.data)
        ? result.data
        : Array.isArray(result.products)
          ? result.products
          : [];

    return products;
  } catch (error) {
    console.error("Products API error:", error);
    return [];
  }
}
