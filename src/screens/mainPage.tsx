import { LeftLateralMenu } from "../components/leftLateralMenu/leftLateralMenu";
import { Navbar } from "../components/navbar/navbar";

export const MainPage = () => {
  return (
    <>
      <Navbar
        name="hugo desiderio"
        photo="https://i.pinimg.com/564x/33/e1/48/33e14820f2380d450f4b98f3780e3546.jpg"
      />
      <LeftLateralMenu
        name="hugo Desiderio"
        photo="https://i.pinimg.com/564x/33/e1/48/33e14820f2380d450f4b98f3780e3546.jpg"
      />
    </>
  );
};
