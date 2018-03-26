'use strict';

const commands = require('./soapCommand');
const TamsResponse = require('../tamsResponse');

module.exports =  class TamsSoap{

  /**
    * Build a <code>TADSoap</code> instance to allow communication with the device via SOAP api.
    *
    * @param \SoapClient $soap_client <code>SoapClient</code> instance
    * @param array $soap_client_options options required by <code>SoapClient</code> class.
  */
  constructor(soapClient, soapClientOptions){
    this.soapClient = soapClient;
    this.soapClientOptions = soapClientOptions;
    this.XML_FAIL_RESPONSE = 'Fail!';
    this.XML_SUCCESS_RESPONSE = 'Succeed!';
    this.SOAP_VERSION = 'SOAP_1_1';
  }


  /**
    *
  */
  soapCommandsAvailable(options) {

    if (options['include_command_string'] && options['include_command_string']) return commands
    else return Object.keys(commands)
  }

    /**
     * Get a command, build the SOAP request and send it to device.
     *
     * @param mixed $soap_command command to be executed.
     * @param array $soap_command_args command arguments.
     * @return string response.
     */
    executeSoapCommand(soapCommand, soapCommandArgs, encoding)
    {
      let soapLocation = this.getSoapProviderOptions();
      let soapRequest = this.buildSoapRequest(soapCommand, soapCommandArgs, encoding);

      let response = typeof soapRequest == 'object' ? this.executeMultipleSoapRequests(soapRequest, soapLocation) : this.this.executeSingleSoapRequest(soapRequest, soapClient) ;

      return new TamsResponse(response, encoding);
    }

    /**
     * Returns params required by <b><code>SoapClient</code></b> class.
     *
     * @return array params list.
     */
    getSoapProviderOptions()
    {
      return this.soapClientOptions;
    }

    /**
     * Returns command SOAP definition.
     *
     * @param string $key SOAP command requested.
     * @return string SOAP definition.
    */
    getCommandString(key)
    {
        return soap_commands_available[$key];
    }
}




