import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Loading from "../Components/Loading";

const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      {navigation.state === "loading" && <Loading></Loading>}
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
