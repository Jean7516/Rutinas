
import translate from "translate";


translate.engine = "deepl";
translate.key = '28110751-c666-4690-9cae-91d092d0d37d:fx';


const Traductor =  async (data)=> {
  const spanish = await translate(data, { to: "es" });
 

  return (spanish);

  };

  export default Traductor

 
  