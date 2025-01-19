import React from 'react';

import MessagesIcon from '../../assets/icons/InActiveMessage/InActiveMessage.svg';
import MessagesFocusedIcon from '../../assets/icons/Message/Message.svg';
import UsersIcon from '../../assets/icons/InActiveUsers/InActiveUsers.svg';
import UsersFocusedIcon from '../../assets/icons/Users/Users.svg';
import CallsIcon from '../../assets/icons/InActivePhoneCall/InActivePhoneCall.svg';
import CallsFocusedIcon from '../../assets/icons/Phone Call/PhoneCall.svg';
import ProfileIcon from "../../assets/icons/InActiveUser/InActiveUser.svg";
import ProfileFocusedIcon from "../../assets/icons/User/User.svg";

const icons = {
  "messages": MessagesIcon,
  'messages-focused': MessagesFocusedIcon,
  "users": UsersIcon,
  'users-focused': UsersFocusedIcon,
  "calls": CallsIcon,
  'calls-focused': CallsFocusedIcon,
  "profile":ProfileIcon,
  "profile-focused":ProfileFocusedIcon
};

const TabBarIcon = ({icon}) => {
  const SelectedIcon = icons[icon?.toLowerCase()];
  if (!SelectedIcon) {
    console.warn(`Icon with name "${icon}" not found!`);
    return null;
  }

  return <SelectedIcon />;
};

export default TabBarIcon;
