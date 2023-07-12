import React from 'react';
import { Avatar, Flex, HStack, IconButton, Tooltip } from '@chakra-ui/react';
import {
  CommunityIcon,
  MenuIcon,
  NewChatIcon,
  StatusIcon,
} from '../assets/icons';

const iconData = [
  { icon: <CommunityIcon />, label: '社区聊天' },
  { icon: <StatusIcon />, label: '状态' },
  { icon: <NewChatIcon />, label: '新的聊天' },
  { icon: <MenuIcon />, label: '菜单' },
];

function CustomTooltip({ label, icon, ...rest }) {
  return (
    <Tooltip label={label} bg='#eae6df' color='red' fontSize='xs' {...rest}>
      <IconButton variant='ghost'>{icon}</IconButton>
    </Tooltip>
  );
}

const Header = (props) => {
  return (
    <Flex
      bg='#f0f2f5'
      justify='space-between'
      py='2'
      px='4'
      color='#54656f'
      borderRight='1px solid #f2f2f2'
      {...props}
    >
      <Avatar
        boxSize='40px'
        name='Clara Fiona'
        src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwZmVtYWxlJTIwaGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
      />
      <HStack spacing='3'>
        {iconData.map((item, index) => (
          <CustomTooltip key={index} label={item.label} icon={item.icon} />
        ))}
      </HStack>
    </Flex>
  );
};

export default Header;
