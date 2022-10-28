import { useState } from 'react'
import logo from './assets/spendwise-logo.svg'
import { InputGroup, Flex, chakra, shouldForwardProp, Box, Image, InputRightElement, Input, Accordion,AccordionItem, AccordionButton,AccordionIcon,AccordionPanel } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion';
import Typewriter from 'typewriter-effect';


import {BsFacebook, BsTwitter, BsInstagram, BsFillCaretDownFill} from 'react-icons/bs'
import { FaMinus, FaPlus,  FaUserTie} from 'react-icons/fa'
import Button from './component/button'
import Header from './component/header'
import Container from './component/container'
import {Heading1, Heading2, PrimaryText, PrimaryHeading} from './component/typography'
import FeatureCard from './component/card'
import {HiOutlineArrowRight} from 'react-icons/hi'
import './App.css'

import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import feat1 from './assets/feat1.png'
import feat2 from './assets/feat2.png'
import feat3 from './assets/feat3.png'
import security from './assets/security.png'
import dashboard from './assets/dashboard.png'
import laptop from './assets/laptop.png'

const Card1Box = chakra(motion.image, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

function App() {

  return (
    <Flex w='full' flexDir={'column'} >
    <Header />
    <Flex flex={'1'} w='full' pos={"relative"}>
      <Container>
        <Flex w='100%' py={[1,3,5,12]} flexWrap='wrap' px={4}  >
          <Flex width={['100%']} flexDir={'column'} py={[1,3,5,12]}>
            <Flex justify={"center"} flexDir="column" justifyContent={"center"} align="center">

            <Heading1 textAlign="center" color={'#1b2caf'} fontSize={['36px','46px','50px','54px','64px']}>Expense management and payment solution for businesses.</Heading1>
            <PrimaryHeading lineHeight="27px" textAlign="center"  px={10} fontWeight={"bold"} >

Automatically categorize and control your business spend across multiple accounts.                
 </PrimaryHeading>
            </Flex>
            
            <Flex w='full'  py={[1,3,5,10]} >
    

          <Flex  flex="1" flexWrap='wrap' justify={'space-between'}  flexDir={['column','column','column','row']}   align={['center','center','center','center']} px={4} >
            <Flex width={['100%','80%','80%','50%']} flexDir={'column'} py={[1,3,5, 12]}  >
           
             
              {/* <Flex my={['1rem']}>
                <Box>

                  <Button>Book a consultation</Button>
                </Box>
              </Flex> */}

              <Flex bg="gray" my={[2,6]} align={"center"} borderLeft="6px solid #1b2caf" padding={1} borderRadius={0}>
              <PrimaryText lineHeight="27px" color={"white"} fontWeight={"bold"} p={[1,4]} >

              <Typewriter
  options={{
    strings: ['Get virtual & physical corporate car', 'Get Virtual USD and Naira    '],
    autoStart: true,
    loop: true,
  }}
/> </PrimaryText>
              </Flex>
              <Flex bg="#1b2caf" align={"center"} padding={1} borderRadius={30}>
                <Input 
                _placeholder={{
                  color: "white",
                  fontSize: ["12px","12px","16px"]
                }}
                background="transparent"
                placeholder="what's your work email" color={"white"}
                _focus={{
                  border: "none",
                  outline: "none",
                  shadow: "none",
                }}
                border={"none"} outline={"none"} shadow={"none"}/>
                <Button as={Flex} width={['40%','30%']} fontWeight={"bold"} bg='#FEA900'  color="#1b2caf" fontSize={["10px","10px","10px","16px"]} borderRadius={30}>
                  Get Started
                </Button>
              </Flex>
            </Flex>
     

          </Flex>
        </Flex>
          </Flex>
          {/* <Image
            src={showcase}
            pos={['relative', 'absolute', 'absolute', 'absolute']}
            top={[0]}
            right={0}
            objectFit={'fit'}
            mt={['1rem', '2rem', '3rem', '3rem']}
            height={['20rem', '100%', '100%', '100%']}
            width={['100%', '50%', '50%', '50%']}
            alt='spendwise image' /> */}
                   <Flex w={["100%","100%","100%","50%"]}  height={'100%'} p={6}>

<Image
  src={laptop}
  position={['relative','relative','relative','absolute']}
  objectFit={'fit'}
  mt={['2rem', '1rem', '1rem', '1rem']}
  width={['100%','100%','100%','50%']}
  right={0}
  zIndex={-1}
  top={[0,0,0,"35%"]}
  alt='spendwise image' />
</Flex>

        </Flex>
      </Container>
    </Flex>
    <Flex w='full' bg='#1b2caf' mt={['10rem']}>
      <Container>
        <Flex px={3} py={20} flexDir={'column'}  >
          <Flex flexDir={'column'} align={'center'} w={['100%']}>
            <Heading1 color={'white'} >Cool & Great Features.</Heading1>
            <PrimaryText color={'white'} >
            Here are some amazing features to help keep your business finance on track!

</PrimaryText>
          </Flex>

          <Flex flexWrap={'wrap'} justify={'center'}>
            <FeatureCard
              image={feat1}
              title={'Track Spending Across Categories, Set Budgets.'}
              subtitle={'Track both electronic and cash expenses across categories. Set budgets and spending limits.'
              }
              bgColor={'#F7EEFB'}
            />
            <FeatureCard
              image={feat2}
              title={'Personalized Business Advisory.'}
              subtitle={'Get real-time personalized advise on your business finance and cashflow. Coming soon...'}
              bgColor={'#FFEECF'}
            />
            <FeatureCard
                          image={feat3}
              title={'Access Credit Or Pay In Installments'}
              subtitle={'Get access to credit for your business or pay in installments for them. Coming soon...'}
              bgColor={'#CCF7E9'}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
    <Flex w='full' bg='#fff' py={10} >
      <Container>
        <Flex px={4} py={7} flexDir={'column'} >

          <Flex  flexWrap='wrap' justify={'space-between'}  flexDir={['column','column','column','row']}  align={['center','center','center','center']} px={4} >
          <Flex flex='1' flexDir={'column'} height={'100%'} p={6}>

          <Card1Box
        animate={{
          y: [-5,15,15,10, -5],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
      
      >
<Image
  src={card1}
  pr={[0,'2rem','3rem','4rem']}
  objectFit={'fit'}
  mt={['-2rem', '1rem', '1rem', '1rem']}
  width={['100%']}
  alt='spendwise image' />      </Card1Box>
          <Card1Box
        animate={{
          y: [5,15,15,10, 5],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
      
      >
<Image
  src={card2}
  pr={[0,'2rem','3rem','4rem']}
  objectFit={'fit'}
  mt={['-2rem', '1rem', '1rem', '1rem']}
  width={['100%']}
  alt='spendwise image' />      </Card1Box>


</Flex>
          
            <Flex flex='1'flexDir={'column'} py={12}>
              <Heading1 color={'#1b2caf'} pb={0} >
              Get The Spendwise
<Box color={'#FEA900'}>Business Debit Cards. </Box>           </Heading1>
              <PrimaryText lineHeight="27px"   fontWeight="bold" >

            The right corporate debit card for your business.
            
            </PrimaryText>


              <Flex flexDir={"column"} py={'2rem'}>
                <Flex flexDir={"column"}>
                  <Heading2 color="#1b2caf">1. All Expenses Under Control.</Heading2>
                  <PrimaryText>For one-time expenses or monthly subscriptions. Set individual limits and keep an eye on all costs. Automate expense monitoring.

</PrimaryText>

                </Flex >

                <Flex flexDir={"column"} py={'2rem'}>
                  <Heading2 color="#1b2caf">2. Unlimited Corporate Expense Cards.
</Heading2>
                  <PrimaryText>
                  Create unlimited number of virtual and physical cards, for all spending, and across any categories of choice within seconds.
</PrimaryText>

                </Flex>
                <Flex flexDir={"column"}>
                  <Heading2 color="#1b2caf">3. Corporate Cards For Employees.
</Heading2>
                  <PrimaryText>
                  Create unlimited cards for individual employees of choice. Control where employees cards can be used.

</PrimaryText>

                </Flex>
              </Flex>


              {/* <Flex my={['1rem']}>
                <Box>

                  <Button>Book a consultation</Button>
                </Box>
              </Flex> */}
            </Flex>
        

          </Flex>
        </Flex>
      </Container>
    </Flex>
    <Flex w='full' bg='#1b2caf' >
      <Container>
        <Flex px={3} py={40} flexDir={'column'}  >
          <Flex flexDir={'column'} align={'center'} w={['100%']}>
            <Heading1 color={'#FEA900'} align="center" >YOU ARE IN
GOOD COMPANY.</Heading1>
            <PrimaryText color={'white'} align='center' px={[10,200]}>

            Spendwise ensures all monetary operations are executed & monitored seamlessly, via the use of our unique & simple expense management tools that suits you & your business.
</PrimaryText>
          </Flex>

        
        </Flex>
      </Container>
    </Flex>
    <Flex w='full' bg='#fff' py={10} >
      <Container>
        <Flex px={4} py={10} flexDir={'column'} >

          <Flex  flexWrap='wrap' justify={'space-between'}  flexDir={['column','column','column','row']}  align={['center','center','center','center']} px={4} >
          <Flex flex='1'  height={'100%'} p={6}>

<Image
  src={dashboard}
  pr={[0,'2rem','3rem','4rem']}
  objectFit={'fit'}
  mt={['-2rem', '1rem', '1rem', '1rem']}
  width={['100%']}
  alt='spendwise image' />
</Flex>
          
            <Flex flex='1'flexDir={'column'} py={12}>
              <Heading1 color={'#1b2caf'} >
              Start Smart Spending With Spendwise, Today.                </Heading1>
              <PrimaryText lineHeight="27px" >

            <b style={{fontWeight: 'bold'}} >
            Connect your existing business bank accounts to SpendWise and create unlimited physical and virtual corporate cards for all types of expenses, merchants and teams. Track expenses in real time.
              </b>  

                   </PrimaryText>
              {/* <Flex my={['1rem']}>
                <Box>

                  <Button>Book a consultation</Button>
                </Box>
              </Flex> */}
            </Flex>
        

          </Flex>
        </Flex>
      </Container>
    </Flex>
    <Flex w='full' bg='#F2F5FE' py={10} >
      <Container>
        <Flex px={4} py={10} flexDir={'column'} >

          <Flex  flexWrap='wrap' justify={'space-between'}  flexDir={['column','column','column','row']}  align={['center','center','center','center']} px={4} >
            <Flex flex='1' flexDir={'column'} py={12} pr={[0,'2rem','2rem','2rem']}>
              <Heading1 color={'#1b2caf'} >
              Spendwise Security
                </Heading1>
              <PrimaryText lineHeight="27px" >

            <b style={{fontWeight: 'bold'}} >
            We are deliberate with security and diligently protect your financial information with industry-leading standards and technology. Our security features includes:

              </b>  

<br/><br/>

- Cross site scripting (XSS) protection<br/>

- Cross site request forgery (CSRF) protection<br/>

- SQL injection protection<br/>

- Clickjacking protection<br/>

- Spendwise proprietary walking dead token framework for security visibility.                     </PrimaryText>
              {/* <Flex my={['1rem']}>
                <Box>

                  <Button>Book a consultation</Button>
                </Box>
              </Flex> */}
            </Flex>
            <Flex flex='1'  height={'100%'} p={6}>

            <Image
              src={security}

              objectFit={'fit'}
              mt={['-2rem', '1rem', '1rem', '1rem']}
              width={['100%']}
              alt='spendwise image' />
            </Flex>

          </Flex>
        </Flex>
      </Container>
    </Flex>


    <Flex py={'4rem'}>
    <Container >
        <Flex  flexDir={"column"} w="full" px={[".8rem","3rem","5rem","6rem","7rem"]}>
        <Heading1 color={'#1b2caf'} mb={5} align='center' >
        Frequently Asked Questions

                </Heading1>
        <Flex flex="1" justifyContent={"space-between"}>
            <PrimaryText color="#1b2caf">Browse FAQs</PrimaryText>
            <PrimaryText color="#1b2caf" textDecoration="underline">View all FAQs</PrimaryText>
        </Flex>
        <Accordion  w="full" allowMultiple>


<AccordionItem my="1rem">
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton bg="#fff" color="#1b2caf" borderRadius={3} border={'1.5px solid #1b2caf'}  _hover={{
          bg: "primary.500",
          color: "#1b2caf"
      }}
      
  
      >
        <Box flex='1' fontWeight={"bold"}  textAlign='left'>
          <PrimaryText color="#1b2caf" >
          Popular Questions              </PrimaryText>
        </Box>
        {isExpanded ? (
          <FaMinus fontSize='12px' />
        ) : (
          <FaPlus fontSize='12px' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}    py="2rem" bg="#1b2caf"
      px="3rem"  border="2px solid primary" ringColor={"#1b2caf"} ringOffset={3} borderRadius={0} borderBottomRightRadius={20} > 
    <PrimaryText color="white">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis accusantium amet iste officiis quas commodi velit eveniet, rerum possimus atque nobis cumque ullam, voluptate dolore repudiandae, neque sint cum maiores!
      </PrimaryText>

    </AccordionPanel>
  </>
)}
</AccordionItem>
<AccordionItem my="1rem">
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton bg="#fff" color="#1b2caf" borderRadius={3} border={'1.5px solid #1b2caf'}  _hover={{
          bg: "primary.500",
          color: "#1b2caf"
      }}
      
  
      >
        <Box flex='1' fontWeight={"bold"}  textAlign='left'>
          <PrimaryText color="#1b2caf" >
          Popular Questions              </PrimaryText>
        </Box>
        {isExpanded ? (
          <FaMinus fontSize='12px' />
        ) : (
          <FaPlus fontSize='12px' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}    py="2rem" bg="#1b2caf"
      px="3rem"  border="2px solid primary" ringColor={"#1b2caf"} ringOffset={3} borderRadius={0} borderBottomRightRadius={20} > 
    <PrimaryText color="white">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis accusantium amet iste officiis quas commodi velit eveniet, rerum possimus atque nobis cumque ullam, voluptate dolore repudiandae, neque sint cum maiores!
      </PrimaryText>

    </AccordionPanel>
  </>
)}
</AccordionItem>
<AccordionItem my="1rem">
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton bg="#fff" color="#1b2caf" borderRadius={3} border={'1.5px solid #1b2caf'}  _hover={{
          bg: "primary.500",
          color: "#1b2caf"
      }}
      
  
      >
        <Box flex='1' fontWeight={"bold"}  textAlign='left'>
          <PrimaryText color="#1b2caf" >
          Popular Questions              </PrimaryText>
        </Box>
        {isExpanded ? (
          <FaMinus fontSize='12px' />
        ) : (
          <FaPlus fontSize='12px' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}    py="2rem" bg="#1b2caf"
      px="3rem"  border="2px solid primary" ringColor={"#1b2caf"} ringOffset={3} borderRadius={0} borderBottomRightRadius={20} > 
    <PrimaryText color="white">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis accusantium amet iste officiis quas commodi velit eveniet, rerum possimus atque nobis cumque ullam, voluptate dolore repudiandae, neque sint cum maiores!
      </PrimaryText>

    </AccordionPanel>
  </>
)}
</AccordionItem>
<AccordionItem my="1rem">
{({ isExpanded }) => (
  <>
    <h2>
      <AccordionButton bg="#fff" color="#1b2caf" borderRadius={3} border={'1.5px solid #1b2caf'}  _hover={{
          bg: "primary.500",
          color: "#1b2caf"
      }}
      
  
      >
        <Box flex='1' fontWeight={"bold"}  textAlign='left'>
          <PrimaryText color="#1b2caf" >
          Popular Questions              </PrimaryText>
        </Box>
        {isExpanded ? (
          <FaMinus fontSize='12px' />
        ) : (
          <FaPlus fontSize='12px' />
        )}
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}    py="2rem" bg="#1b2caf"
      px="3rem"  border="2px solid primary" ringColor={"#1b2caf"} ringOffset={3} borderRadius={0} borderBottomRightRadius={20} > 
    <PrimaryText color="white">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis accusantium amet iste officiis quas commodi velit eveniet, rerum possimus atque nobis cumque ullam, voluptate dolore repudiandae, neque sint cum maiores!
      </PrimaryText>

    </AccordionPanel>
  </>
)}
</AccordionItem>

</Accordion>

        </Flex>
</Container>
    </Flex>

    <Flex w="full" pb={["3rem","3.5rem","4rem","4.5rem","5rem"]}>





</Flex>
    <Flex w='full' bg='#00156D' py={10} >
      <Container>
        <Flex px={4} py={10} flexDir={'column'} >
          

          <Flex  flexWrap='wrap' justify={'space-between'}  flexDir={['column','column','column','row']}  align={['center']} px={4} >
            <Flex  flexDir={'column'} py={12} pr={[0,'2rem','2rem','2rem']}>
              <Image src={logo}  w={['10rem','10rem', '15rem','20rem']}/>
               
              <PrimaryText  color='white'>
               
              Expense management and payment solution for businesses.

  </PrimaryText>

<InputGroup bg='white' fontSize={'14px'} mt='1.4rem' borderRadius={12}  overflow='hidden' >
 
  <Input placeholder='Your email address' />
  <InputRightElement bg='#FEA900' children={<HiOutlineArrowRight fontSize={'1.3rem'} p={4} color='white' />} />
</InputGroup>
            
            </Flex>
            <Flex  >

           
            <Flex flexDir={'column'} px={6}>
              <PrimaryText fontSize={['14px']} fontWeight={'500'} color={'white'}>Security</PrimaryText>
              <PrimaryText fontSize={['14px']} fontWeight={'500'} color={'white'}>About</PrimaryText>
              <PrimaryText fontSize={['14px']} fontWeight={'500'} color={'white'}>Contact Us</PrimaryText>
            </Flex>
            <Flex flexDir={'column'}>
              <PrimaryText fontSize={['14px']} fontWeight={'500'} color={'white'}>Resources</PrimaryText>
              <PrimaryText fontSize={['14px']} fontWeight={'500'} color={'white'}>Terms of services</PrimaryText>
              <PrimaryText fontSize={['14px']} fontWeight={'500'}  color={'white'}>Privacy Policy</PrimaryText>
            </Flex>
            </Flex>

          </Flex>
          <Flex  flexWrap='wrap' justify={'space-between'}  flexDir={['column','column','column','row']}  align={['center']} px={4} >
            <Flex  flexDir={'column'} py={12} pr={[0,'2rem','2rem','2rem']}>
              <Flex align={'center'}>

               {/* <Image src={trademark} pr='.5rem' /> */}
              <PrimaryText  color='white'>
              © 2022 Spendwise. All Rights Reserved.</PrimaryText>
              </Flex>


            </Flex>
            <Flex  >

           
            <Flex px={4}>
             <BsFacebook color='#FEA900' />

            </Flex>
            <Flex px={4}>
             <BsTwitter color='#FEA900' />

            </Flex>
            <Flex px={4}>
             <BsInstagram color='#FEA900' />

            </Flex>
            
            </Flex>

          </Flex>
        </Flex>
      </Container>
    </Flex>
  </Flex>
  )
}

export default App
