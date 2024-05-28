const { data } = require("./class");
const { login } = require("./fungsi");

const import_data = new data()

login("hasil_import","1234")

import_data.name() //class -> method
import_data.user.name 