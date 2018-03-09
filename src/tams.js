class Tams{

  constructor(options, soapProvider, zklibProvider){
    this.ip = options['ip'];
    this.internalId = Number(options['internalId'])
    this.comKey = Number(options['comKey'])
    this.description = options['description']
    this.connectionTimeout = Number(options['connectionTimeout'])
    this.encoding = options['encoding'].toLowerCase();
    this.udpPort = Number(options['udpPort'])

    this.tamsSoap = soapProvider;
    this.zklib = zklibProvider;
  }

  parseableArgs() {
    let parseableArgs = {
      comKey: 'comKey',
      pin: 'pin',
      time: 'time',
      template: 'template',
      name: 'name',
      password: 'password',
      group: 'group',
      privilege: 'privilege',
      card: 'card',
      pin2: 'pin2',
      tz: {
        tz1: 'tz1',
        tz2: 'tz2',
        tz3: 'tz3'
      },
      fingerId: 'fingerId',
      optionName: 'optionName',
      date: 'date',
      size: 'size',
      valid: 'valid',
      value: 'value' 
    }

    return parseableArgs
  } 

  /**
   * this method returns the device Ip
  */
  getIp(){
    return this.ip
  }

  /**
   * this method retuns the Internal ID
  */
 getInternalId(){
   return this.internalId
 }

  /**
  * 
  */
  getComKey(){
   return this.comKey
  }

  /**
    * Returns an array with a full list of commands available.
    * @return array list of commands available.
  */
 commandsAvailable(){

 }

  /**
    * Returns an array with SOAP commands list available.
    * @return array SOAP commands list.
  */
  soapCommandsAvailable(options)
  {
      // return TADSoap::get_commands_available($options);
  }


  /**
   * Returns an array with PHP_ZKLib commands available.
   * @return array PHP_ZHLib commands list.
  */
  zklibCommandsAvailable()
  {
      // return TADZKLib::get_commands_available();
  }


    /**
     * Returns valid commands arguments list.
     *
     * @return array arguments list.
    */
    getValidCommandsArgs()
    {
        return this.parseableArgs
    }

    /**
     * Tells if device is "online" to process commands requests.
     * @param string $ip device ip address
     * @param int $timeout seconds to wait for device.
     * @return boolean <b>true</b> if device is alive, <b>false</b> otherwise.
     */
    isDeviceOnline(ip, timeout = 1)
    {
      let handler = curl_init($ip);
      curl_setopt_array(handler, [ CURLOPT_TIMEOUT => timeout, CURLOPT_RETURNTRANSFER => true ]);
      let response = curl_exec(handler);
      curl_close(handler);

      return boolean(response)
    }


}

