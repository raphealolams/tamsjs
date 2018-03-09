import tamsClient from './Providers/tamsClient';

class TamsFactory{
  constructor(options = {}){
    this.options = options;
  }

  /**
  * Returns an <code><b>TAD\TAD</b></code> class instance.
  *
  * @return TAD class instance.
  */
  getInstance(){
    let option = this.options;
    this.setOptions(this.getDefaultOptions() , option);
    
  }

  /**
   * Returns a default values array used by tams classes.
   *
   * @return array default values.
  */
  getDefaultOptions(){
      let defaultOptions = {ip: '169.254.0.1', internalId: 1, comKey: 0, description: 'N/A', connectionTimeout: 5, port:                         80, updPort: 4370, encoding: 'iso8859-1'};
      return defaultOptions;
  }

  /**
   * Set all array items to a known default values.
   *
   * @param array baseOptions default values
   * @param array options default values to be changed to a known values.
  */
  setOptions(baseOptions , option){
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


}

export const tamsFactory = new TamsFactory();