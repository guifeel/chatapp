import {
  AbsoluteCenter,
  Center,
  Flex,
  Box,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { EncryptedIcon, GeneralIcon } from '../assets/icons';

export function RightPanel(props) {
  return (
    <Center
      bg='#f0f2f5'
      borderBottom='6px solid #43c960'
      position='relative'
      {...props}
      w='70%'
    >
      <Flex
        direction='column'
        textAlign='center'
        color='#41525d'
        align='center'
      >
        <GeneralIcon />
        <Box pt='8'>
          <Heading fontWeight='light'>来一起聊天吧</Heading>
          <Text fontSize='sm' mt='4'>
            即使你不在线也能发送或接收消息。 <br />
            如果同时在线，可支持多达4台设备和1部手机。
          </Text>
        </Box>
        <AbsoluteCenter axis='horizontal' bottom='10' flex='1' mt='10'>
          <HStack justifyItems='baseline' color='#8696a0'>
            <EncryptedIcon />
            <Text fontSize='sm' fontWeight='medium'>
              端到端数据加密
            </Text>
          </HStack>
        </AbsoluteCenter>
      </Flex>
    </Center>
  );
}
