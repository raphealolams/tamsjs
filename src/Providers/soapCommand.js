'use strict'

export default commands = {
  'getDate': '<GetDate><ArgComKey>%com_key%</ArgComKey></GetDate>',
  'getAttendanceLog': '<GetAttLog><ArgComKey>%com_key%</ArgComKey><Arg><PIN>%pin%</PIN></Arg></GetAttLog>',
  'getUserInfo':'<GetUserInfo><ArgComKey>%com_key%</ArgComKey><Arg><PIN>%pin%</PIN></Arg></GetUserInfo>',
  'getAllUserInfo': '<GetAllUserInfo><ArgComKey>%com_key%</ArgComKey></GetAllUserInfo>',
  'getUserTemplate':  '<GetUserTemplate><ArgComKey>0</ArgComKey><Arg><PIN>%pin%</PIN><FingerID>%finger_id%</FingerID></Arg></GetUserTemplate>',
  'getCombination': '<GetCombination><ArgComKey>%com_key%</ArgComKey></GetCombination>',
  'getOption': '<GetOption><ArgComKey>%com_key%</ArgComKey><Arg><Name>%option_name%</Name></Arg></GetOption>',
  'setUserInfo': [
    '<DeleteUser><ArgComKey>%com_key%</ArgComKey><Arg><PIN>%pin%</PIN></Arg></DeleteUser>', '<SetUserInfo><ArgComKey>%com_key%</ArgComKey><Arg><Name>%name%</Name><Password>%password%</Password><Group>%group%</Group><Privilege>%privilege%</Privilege><Card>%card%</Card><PIN2>%pin%</PIN2><TZ1>%tz1%</TZ1><TZ2>%tz2%</TZ2><TZ3>%tz3%</TZ3></Arg></SetUserInfo>'
  ],
  'setUserTemplate': '<SetUserTemplate><ArgComKey>%com_key%</ArgComKey><Arg><PIN>%pin%</PIN><FingerID>%finger_id%</FingerID><Size>%size%</Size><Valid>%valid%</Valid><Template>%template%</Template></Arg></SetUserTemplate>',
  'deleteUser': '<DeleteUser><ArgComKey>%com_key%</ArgComKey><Arg><PIN>%pin%</PIN></Arg></DeleteUser>',
  'deleteTemplate': '<DeleteTemplate><ArgComKey>%com_key%</ArgComKey><Arg><PIN>%pin%</PIN></Arg></DeleteTemplate>',
  'deleteUserPassword': '<ClearUserPassword><ArgComKey>%com_key%</ArgComKey><Arg><PIN>%pin%</PIN></Arg></ClearUserPassword>',
  'deleteData': '<ClearData><ArgComKey>%com_key%</ArgComKey><Arg><Value>%value%</Value></Arg></ClearData>',
  'refreshDB': '<RefreshDB><ArgComKey>%com_key%</ArgComKey></RefreshDB>',
}