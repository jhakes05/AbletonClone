import React from 'react'
import { Link, Box, Flex, Spacer ,Image,Divider} from "@chakra-ui/react";
const Nav = () => {
  return (
   <Box>
    {/* use this font next time: futura-pt */}
   <Flex className='text-lg font-semibold  gap-5 items-center p-3'>
    <Link>
    <Image boxSize='70px' objectFit='cover' src='https://th.bing.com/th/id/R.32caee02b01425ce1695e5a74fc09c68?rik=k0ugTS8rE7md%2fw&riu=http%3a%2f%2flogonoid.com%2fimages%2fableton-logo.png&ehk=JdR1r6FGyrUeWRCTmNfn1nGWndsdCO8vMNeeq%2fdKxQc%3d&risl=&pid=ImgRaw&r=0' alt='Dan Abramov' />
    </Link>
    <Link>
     Live
    </Link>
    <Link>
      Push
    </Link>
    <Link>
      Note
    </Link>
    <Link>
      Link
    </Link>
    <Link>
      Shop
    </Link>
    <Link>
      Packs
    </Link>
    <Link>
      Help
    </Link>
    <Link color={'#ff764d'}>
      More +
    </Link>
    <Spacer/>
    <Link color={'#0000ff'}>
      Try Live For Free
    </Link>
    <Link>
      log in or register
    </Link>
    </Flex>
    <Divider />
    </Box>

  )
}

export default Nav