import { useState, createContext } from "react";
const Context = createContext();

function ContextProvider(props) {
  //   const [phoneNumber, setPhoneNumber] = useState("91");
  //   const [name, setName] = useState("ewvfwe");

  //   return (
  //     <Context.Provider value={{ phoneNumber, name, setPhoneNumber, setName }}>
  //       {props.children}
  //     </Context.Provider>
  //   );
  // }

  const context1InitialState = {
    name: null,
    phoneNumber: null,
    city: null,
  };

  const [loginInfo, setLoginInfo] = useState(context1InitialState);

  function setName(name) {
    const newState = { ...loginInfo, name };
    setLoginInfo(newState);
  }
  function setPhoneNumber(phoneNumber) {
    const newState = { ...loginInfo, phoneNumber };
    setLoginInfo(newState);
  }
  function setCity(city) {
    const newState = { ...loginInfo, city };
    setLoginInfo(newState);
  }
  const context1Setters = {
    setName,
    setPhoneNumber,
    setCity,
  };
  return (
    <Context.Provider value={{ ...loginInfo, ...context1Setters }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
