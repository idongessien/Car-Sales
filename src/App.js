import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, deleteFeature } from "./actions/index";
/* import {carReducer, initialState} from './reducers/carReducer'
 */
const App = props => {
  const dispatch = useDispatch();
  /*   const[state,dispatch]=useReducer(carReducer, initialState);
   */
  const reduxHookState = useSelector(state => {
    return {
      additionalPrice: state.additionalPrice,
      car: state.car,
      additionalFeatures: state.additionalFeatures
    };
  });

  const removeFeature = item => {
    // dispatch an action here to remove an item
    //props.deleteFeature(item);
    dispatch({ type: "DELETE_FEATURE", payload: item });
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };
  console.log("StateToProps", props);
  console.log("redux hook state", reduxHookState);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          buyItem={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, {
  addFeature: addFeature,
  deleteFeature: deleteFeature
})(App);
