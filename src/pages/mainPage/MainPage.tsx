import CategoriesResipe from "../../Components/CategoriesResipe/CategoriesResipe";
import Header from "../../Components/Header/Header";
import ResipeAll from "../../Components/ResipeAll/ResipeAll";

export const MainPage = () => {
  return (
    <>
      <Header  />
      <CategoriesResipe />
      <ResipeAll/>
    </>
  );
};
