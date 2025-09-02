import Footer from "./component/footer"
import Nav from "./component/nav"
import SecFirst from "./component/secfirst"
import SecFouth from "./component/secfouth"
import SecSecond from "./component/secsecond"
import SecThird from "./component/secthird"

const Page = () => {
  return (
    <div>
      <Nav></Nav>
      <SecFirst></SecFirst>
      <SecSecond/>
      <SecThird></SecThird>
      <SecFouth/>
      <Footer/>
    </div>
  )
}

export default Page
