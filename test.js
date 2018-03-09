
  // let defaultOptions = {ip: '169.254.0.1' ,  internalId: 1 , comKey: 0 , description: 'N/A' , connectionTimeout: 5 , port: 80  , updPort: 4370 , encoding: 'iso8859-1'}
  // for (const prop in defaultOptions) {
  //   console.log(`${prop} = ${defaultOptions[prop]}`);
  // }


  

    function getInstance(){
      let options = {};
      const value = setOptions(getDefaultOptions(), options);
      return value;
    }

    function getDefaultOptions(){
     let defaultOptions = {ip: '169.254.0.1', internalId: 1, comKey: 0, description: 'N/A', connectionTimeout: 5, port:                         80, updPort: 4370, encoding: 'iso8859-1'};
  
      return defaultOptions;
    }
  

    function setOptions(baseOptions , option){
      for (const prop in baseOptions) {
        if(option !== baseOptions){
          option[prop] = baseOptions[prop];
          option.prop = prop;
        }else{
          option = null;
        }
      }
      delete option.prop;
      return option;
    }

    const result = getInstance()
    console.log(result);

   

  
    
  
  
  