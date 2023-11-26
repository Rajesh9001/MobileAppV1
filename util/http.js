import axios from "axios";
const users = {
  name: "Raj1",
  phone: "9182141058",
  email: "Hi@gmail.com",
};

export function storeUser() {
  axios.post(
    "https://firstapp-abfb9-default-rtdb.firebaseio.com/users.json",
    users
  );
}
