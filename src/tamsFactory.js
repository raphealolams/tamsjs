'use strict'

//import Soap module
import soap from 'soap'

// import the tams client from its provider
// import the tams ZK techo library
import TamsSoap from './Providers/tamsClient';
import TamsZKLib from './Providers/tamsZKLib';
import Tams from './tams';


async function main() {

}
export default class TamsFactory{
  constructor(options = {}){
    this.options = options;
  }

  /**
  * Returns an <code><b>TAD\TAD</b></code> class instance.
  *
  * @return TAD class instance.
  */
  async getInstance(){
    let option = this.options;
    this.setOptions(this.getDefaultOptions() , option);

    let soapOptions = {
      location: `http://${options['ip']}/iWsService`,
      uri: `http://www.zksoftware/Service/message/`,
      connection_timeout: options['connection_timeout'],
      exceptions: false,
      trace: true
    };

    try {
      let soapConnection = await soap.createClientAsync(soapOptions)

      return new Tams(new TamsSoap(soapConnection, soapOptions), new TamsZKLib(options), options)
      console.log("Connected to the ZKTechco service")
	  } 
    catch (e) {
      console.log(e)
      console.log("Can't connect to ZKTechco service")
    }

    
  }

  /**
   * Returns a default values array used by tams classes.
   *
   * @return array default values.
  */
  getDefaultOptions(){
    let defaultOptions
    return defaultOptions = {
      ip: '169.254.0.1', 
      internalId: 1, 
      comKey: 0, 
      description: 'N/A', 
      connectionTimeout: 5,
      port: 80,
      updPort: 4370, 
      encoding: 'iso8859-1'
    };
  }

  /**
   * Set all array items to a known default values.
   *
   * @param array baseOptions default values
   * @param array options default values to be changed to a known values.
  */
  setOptions(baseOptions , option){
    for (let props in baseOptions) {
      if(option !== baseOptions){
        option[props] = baseOptions[props];
        option.props = props;
      }else{
        option = null;
      }
    }
    delete option.props;
    return option;
  }

}