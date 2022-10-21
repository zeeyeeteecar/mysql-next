import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  VStack,
  Input,
  Stack,
  HStack,
  IconButton,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  EmailIcon,
  CloseIcon,
  EditIcon,
  DragHandleIcon,
} from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

type post = [{ postId: number; postTitle: String; postDescription: String }];

export default function ItemPostInfo({ post: post }) {
  console.log("post == ", post);

  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  const countPost: number = post.length;
  console.log("post.size:==", countPost);

  return (
    <Popover isOpen={isOpen} initialFocusRef={firstFieldRef}>
      <PopoverTrigger>
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<DragHandleIcon />}
          backgroundColor="gray.200"
          _hover={{ bg: "teal.600" }}
          _focus={{ boxShadow: "outline" }}
          //onClick={onOpen}
          onMouseOver={onOpen}
          onMouseLeave={onClose}
        />
      </PopoverTrigger>
      <PopoverContent w="500px">
        <PopoverArrow />
        <PopoverCloseButton onClick={onClose} />
        <PopoverHeader>Confirmation!=={countPost}</PopoverHeader>
        <PopoverBody backgroundColor="black.200">
          <VStack>
            {post &&
              post.map((post, index) => {
                return (
                  <HStack key={index}>
                    <Text w="50px">{post.id}</Text>
                    <Text w="100px">{post.title}</Text>
                    <Text w="150px">{post.description}</Text>
                  </HStack>
                );
              })}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );

  // return (
  //   <>
  //     <IconButton
  //       colorScheme="blue"
  //       aria-label="Search database"
  //       icon={<DragHandleIcon />}
  //       onClick={onOpen}
  //       onMouseOver={onOpen}
  //       onMouseLeave={onClose}
  //       backgroundColor="gray.200"
  //       _hover={{ bg: "teal.600" }}
  //       _focus={{ boxShadow: "outline" }}
  //     />

  //     <Modal
  //       initialFocusRef={initialRef}
  //       finalFocusRef={finalRef}
  //       isOpen={isOpen}
  //       onClose={onClose}
  //     >
  //       <ModalOverlay />

  //       <ModalContent>
  //         <ModalHeader>Create your account</ModalHeader>
  //         <ModalCloseButton />
  //         <ModalBody pb={6}>
  //           {post &&
  //             post.map((post, index) => {
  //               return (
  //                 <>
  //                   <VStack key={index}>
  //                     <Text>postId</Text>
  //                     <Text>{post.id}</Text>
  //                     <Text>{post.title}</Text>
  //                     <Text>{post.description}</Text>
  //                   </VStack>
  //                 </>
  //               );
  //             })}
  //         </ModalBody>

  //         <ModalFooter>
  //           <Button
  //             type="submit"
  //             colorScheme="blue"

  //             //onClick={() => handleUpdate()}
  //           />
  //           <Button onClick={onClose}>Cancel</Button>
  //         </ModalFooter>
  //       </ModalContent>
  //     </Modal>
  //   </>
  // );
}
