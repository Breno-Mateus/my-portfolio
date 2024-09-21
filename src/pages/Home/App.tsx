import Header from "../../sections/header"
import HeaderMobile from "../../sections/header-mobile"
import SectionMain from "../../sections/sectionmain"
import SectionAbout from "../../sections/sectionabout"
import SectionSkills from "../../sections/sectionskills"
import SectionProjects from "../../sections/sectionprojects"
import Footer from "../../sections/footer"
import { useState } from "react"

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  return (
    <>
    <HeaderMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
    <Header setMenuIsVisible={setMenuIsVisible}/>
    <SectionMain />
    <SectionAbout />
    <SectionSkills />
    <SectionProjects />
    <Footer />
    </>
  )
}

export default App
