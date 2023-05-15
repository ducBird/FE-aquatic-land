import { ICategory } from "@/interfaces/ICategory";
import { axiosClient } from "@/libraries/axiosClient";

export async function getCategoriesData() {
  const response = await axiosClient.get("/categories");
  const categories = response.data;
  return categories;
}

// export const getStaticProps = async () => {
//   const response = await fetch("http://localhost:9000/categories");
//   const categories: ICategory[] = await response.json();
//   console.log("cate res", response);

//   return {
//     props: {
//       categories,
//     },
//     revalidate: 1,
//   };
// };
