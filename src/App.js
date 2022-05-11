import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Context from "./Hook/useContext/index"
import Prentice from "./prectissh/prectish";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/context" component={Context} />
     {/* <Route exact path="/chakra" component={Chakra} /> */}
         <Route exact path="/prentice" component={Prentice} />
        {/*   <Route exact path="/calcultate" component={Calcultate} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/useMemo" component={UseMemo} />
        <Route exact path="/useState" component={UseState} />
        <Route exact path="/useEffect" component={UseEffect} />
        <Route exact path="/fetchig" component={Fetchig} />
        <Route exact path="/reducer" component={Reducer} />
        <Route exact path="/callBack" component={CallBack} />
        <Route exact path="/useRef" component={UseRef} />
        <Route
          exact
          path="/useImperativeHandle"
          component={useImperativeHandle}
        />
        <Route exact path="/useDebugValue" component={UseDebugValue} />
        <Route exact path="/useDebugValue" component={UseDebugValue} />
        <Route exact path="/useDeferredValue" component={UseDeferredValue} />
        <Route exact path="/useTransition" component={UseTransition} />
        <Route exact path="/useId" component={UseId} />
        <Route
          exact
          path="/useSyncExternalStore"
          component={UseSyncExternalStore}
        /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
