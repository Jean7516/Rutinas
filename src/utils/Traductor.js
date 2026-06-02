
import translate from "translate";


translate.engine = "deepl";
translate.key = process.env.REACT_APP_TRANSLATE_API_KEY;


const Traductor =  async (data)=> {
  const spanish = await translate(data, { to: "es" });
 

  return (spanish);

  };

  export default Traductor

 
  
