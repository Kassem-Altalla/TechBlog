export function createPageUrl(page, params = {}) {
  switch (page) {
    case "Home":
      return "/";

    case "Articles":
      if (params.category) return `/articles/${params.category}`;
      return "/articles";

    case "Post":
      if (!params.slug) throw new Error("Post requires slug");
      return `/articles/${params.slug}`;

    case "Contact":
      return "/contact";

    case "Products":
      return "/products";

    case "ProductDetails":
      if (!params.id) throw new Error("ProductDetails requires id");
      return `/products/${params.id}`;

    default:
      return "/";
  }

  
}


export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
