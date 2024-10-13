import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tutorials from "./languagesTutorials/Tutorials";
import HTML_Introduction from "./languagesTutorials/htmlTutorial/HTML_Introduction";
import HTML_Editors from "./languagesTutorials/htmlTutorial/HTML_Editors";
import HTML_Headings from './languagesTutorials/htmlTutorial/HTML_Headings'
import Problems from "./components/Problems";
import SignUp from "./components/SignUp";
import ForgotPass from "./components/ForgotPass";
import Profile from "./components/Profile";
import Pid from "./problems/[Pid]";
import twoSum from "./problems/ProblemList/two-sum";
import { reverseLinkedList } from "./problems/ProblemList/reverse-linked-list";
import { jumpGame } from "./problems/ProblemList/jump-game";
import { validParentheses } from "./problems/ProblemList/valid-parentheses";
import { search2DMatrix } from "./problems/ProblemList/search-a-2d-matrix";
import Quiz from "./QuizPages/Quiz";
import { CSS_Data, C_Data, HTML_Data, JS_Data, Java_Data } from "./QuizPages/assets/HTML_Data";
import CSS_Introduction from './languagesTutorials/CSSTutorial/CSS_Introduction'
import CSS_Tutorials from './languagesTutorials/CSS_Tutorials'
import CSS_Syntax from "./languagesTutorials/CSSTutorial/CSS_Syntax";
import CSS_Selectors from "./languagesTutorials/CSSTutorial/CSS_Selectors";
import How_To_Add_CSS from "./languagesTutorials/CSSTutorial/How_To_Add_CSS";
import CSS_Comments from "./languagesTutorials/CSSTutorial/CSS_Comments";
import CSS_Colors from "./languagesTutorials/CSSTutorial/CSS_Colors";
import CSS_Backgrounds from "./languagesTutorials/CSSTutorial/CSS_Backgrounds";
import CSS_Borders from "./languagesTutorials/CSSTutorial/CSS_Borders";
import CSS_Margins from "./languagesTutorials/CSSTutorial/CSS_Margins";
import CSS_Padding from "./languagesTutorials/CSSTutorial/CSS_Padding";
import JS_Tutorials from './languagesTutorials/JS_Tutorials'
import JS_Introduction from "./languagesTutorials/JavaScriptTutorial/JS_Introduction";
import Java_Tutorials from "./languagesTutorials/Java_Tutorials";
import Java_Introduction from "./languagesTutorials/JavaTutorial/Java_Introduction";
import JS_Where_To from "./languagesTutorials/JavaScriptTutorial/JS_Where_To";
import Java_Get_Started from "./languagesTutorials/JavaTutorial/Java_Get_Started";
import C_intro from "./languagesTutorials/CTutorial/C_intro";
import C_Tutorials from "./languagesTutorials/C_Tutorials";
import C_Get_Started from "./languagesTutorials/CTutorial/C_Get_Started";
import C_Syntax from "./languagesTutorials/CTutorial/C_Syntax";
import C_Output from "./languagesTutorials/CTutorial/C_Output";
import CPP_Tutorials from "./languagesTutorials/CPP_Tutorials";
import Admin from "./components/Admin";


function App() {
  const [color, setColor] = useState("dark");
  const [problemPage,setProblemPage] = useState(false);
  const [navstate,setNavState] = useState(false);
  const [adminActive, setAdminActive] = useState(false);
  const changeThem = () => {
    if (color === "dark") {
      setColor("light");
    } else if (color === "light") {
      setColor("dark");
    }
  };
  
  const setFalse=()=>{
    setNavState(false)
  }
  const setTrue=()=>{
    setNavState(true)
  }
  return (
    <div className={`${color === "dark" ? "bg-slate-700" : ""} `}>
      <BrowserRouter>
      <Navbar
        them={color}
        isThem={changeThem}
        problemPage={problemPage}
        navState={navstate}
        navFalse={setFalse}
        adminActive={adminActive}
      />
     <Routes>
      
      <Route path="/" element={<Home them={color}/>} them={color}>
        <Route index path="/" element={<Login setAdminActive={setAdminActive} them={color}/>}></Route>
        <Route path='signup' element={<SignUp them={color}/>}/>
        <Route path='forgot' element={<ForgotPass them={color}/>}/>
        <Route path="profile" element={<Profile them={color} />}/>
      </Route>

      {/* -----------------------------------------------HTML Navbar --------------------------------- */}
      <Route  path='/HTML_Tutorials' element={<Tutorials  />}>
        <Route path='' element={<HTML_Introduction dark={color}/>}/>
        <Route path='HTML_Editors' element={<HTML_Editors dark={color}/>}/>
        <Route path='HTML_Headings' element={<HTML_Headings dark={color}/>}/>
      </Route> 
      <Route path={`/HTML_Tutorials/HTML_Qize`} element={<Quiz data={HTML_Data} />} />

      {/* ------------------------------CSS Navbar ---------------------------------------------------------- */}
      <Route  path='/CSS_Tutorials' element={<CSS_Tutorials  />}>
        <Route path='' element={<CSS_Introduction dark={color}/>}/>
        <Route path="CSS_Syntax" element={<CSS_Syntax dark={color}/>}/>
        <Route path="CSS_Selectors" element={<CSS_Selectors dark={color}/>}/>
        <Route path="How_To_Add_CSS" element={<How_To_Add_CSS dark={color}/>}/>
        <Route path="CSS_Comments" element={<CSS_Comments dark={color}/>}/>
        <Route path="CSS_Colors" element={<CSS_Colors dark={color}/>}/>
        <Route path="CSS_Backgrounds" element={<CSS_Backgrounds dark={color}/>}/>
        <Route path="CSS_Borders" element={<CSS_Borders dark={color}/>}/>
        <Route path="CSS_Margins" element={<CSS_Margins dark={color}/>}/>
        <Route path="CSS_Padding" element={<CSS_Padding dark={color}/>}/>
      </Route>
      <Route path={`/CSS_Tutorials/CSS_Qize`} element={<Quiz data={CSS_Data} />} />
      {/* ------------------------------JS Navbar ---------------------------------------------------------- */}
      <Route  path='/JS_Tutorials' element={<JS_Tutorials  />}>
        <Route path='' element={<JS_Introduction dark={color}/>}/>
        <Route path='JS_Where_To' element={<JS_Where_To dark={color}/>}/>
      </Route>
      <Route path={`/JS_Tutorials/JS_Qize`} element={<Quiz data={JS_Data} />} />

      {/* ------------------------------Java Navbar ---------------------------------------------------------- */}
      <Route  path='/Java_Tutorials' element={<Java_Tutorials  />}>
        <Route path='' element={<Java_Introduction dark={color}/>}/>
        <Route path='Java_Get_Started' element={<Java_Get_Started dark={color}/>}/>
      </Route>
      <Route path={`/Java_Tutorials/Java_Qize`} element={<Quiz data={Java_Data} />} />


      {/* ------------------------------C Navbar ---------------------------------------------------------- */}
      <Route  path='/C_Tutorials' element={<C_Tutorials />}>
        <Route path='' element={<C_intro dark={color}/>}/>
        <Route path='C_Get_Started' element={<C_Get_Started dark={color}/>}/>
        <Route path='C_Syntax' element={<C_Syntax dark={color}/>}/>
        <Route path='C_Output' element={<C_Output dark={color}/>}/>
      </Route>
      <Route path={`/C_Tutorials/C_Qize`} element={<Quiz data={C_Data} />} />

      {/* ------------------------------CPP Navbar ---------------------------------------------------------- */}
      <Route  path='/CPP_Tutorials' element={<CPP_Tutorials />}>
        <Route path='' element={<C_intro dark={color}/>}/>
      </Route>
      <Route path={`/C_Tutorials/C_Qize`} element={<Quiz data={C_Data} />} />





      <Route path="/Problems" element={<Problems them={color} ProblemState={problemPage} changeState={()=>{
        problemPage?setProblemPage(false):setProblemPage(true)
      }} />} >
        {/* <Route path="/Problems/two-sum" element={<Pid setnavTrue={setTrue} />}/> */}
      </Route>
      <Route  path='/Compiler' element={<CodeEditor/>}></Route>
      <Route path={`/Problems/two-sum`} element={<Pid  setnavTrue={setTrue}  problemQ={twoSum} />}>
      </Route>
      <Route path={`/Problems/reverse-linked-list`} element={<Pid  setnavTrue={setTrue}  problemQ={reverseLinkedList} />}></Route>
      <Route path={`/Problems/jump-game`} element={<Pid  setnavTrue={setTrue}  problemQ={jumpGame} />}></Route>
      <Route path={`/Problems/valid-parentheses`} element={<Pid  setnavTrue={setTrue}  problemQ={validParentheses} />}></Route>
      <Route path={`/Problems/search-a-2d-matrix`} element={<Pid  setnavTrue={setTrue}  problemQ={search2DMatrix} />}></Route>
      <Route path="admin" element={<Admin setAdminActive={setAdminActive} adminActive={adminActive} /> }></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
