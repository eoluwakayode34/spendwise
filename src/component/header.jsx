import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  useDisclosure
} from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import Container from "./container";
import logo from '../assets/logo.png'

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀
 
// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      w="full"
      bg={'175, 255, 255, 0.5'}
      borderBottom={'1px solid rgba(255,169,0, 0.15)'}
      css={{ backdropFilter: "blur(60px); saturate('500%')" }}
      {...props}
      zIndex={5}
      pos="sticky"
      top={0}
    >
      <Container  >
        <Flex
          as="nav"
          justify="space-between"
          wrap="wrap"
          color="gray.900"
          py={5}
          px={{base: 4}}
          w="full"
          align={'center'}
     

          {...props}
        >

          <Flex align="center" >
          <Image src={logo} height={['35px','37px','40px','45px']} alt='safeeza logo'/>
          </Flex>


         
          {/*
       <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

     

     */}
          <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
            <HiMenuAlt3 fontSize={'2rem'} />
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
            fontWeight={600}
            fontSize={['14px']}
          >
   
            <Text fontSize={['15px']} fontFamily={'Dm Sans'} py={'10px'} px={'16px'} color={"#FEA900"}>FAQs</Text>
            <Text color={"#1b2caf"} py={'23px'} px={'16px'} fontSize={['15px']} fontFamily={'Dm Sans'}>Log in</Text>
            <Button bg="#1b2caf"  color="white" py={'23px'} px={'16px'} fontSize={['15px']} fontFamily={'Dm Sans'} fontWeight={500}>Sign Up</Button>
          </Stack>
 
        </Flex>

      </Container>
    </Flex>
  );
};

export default Header;
