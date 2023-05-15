import Header from "@/components/layout/Header";
import { ICategory } from "@/interfaces/ICategory";
import { getCategoriesData } from "./api/categories";

interface IApp {
  categories: ICategory[];
}

export async function getStaticProps() {
  const categories = await getCategoriesData();
  return {
    props: {
      categories,
    },
    revalidate: 10,
  };
}

export default function App({ categories }: IApp) {
  return (
    <main className="relative overflow-hidden font-roboto">
      <Header categories={categories} />
      <div className="h-screen bg-white"></div>
    </main>
  );
}
