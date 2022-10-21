import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import ItemUpdate from "./ItemUpdate";
import ShowPostInfo from "./ShowPostInfo";
import {
  Button,
  VStack,
  Input,
  Stack,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { EmailIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";

export default function ItemDetail({
  id,
  fname,
  lname,
  email,
  avator,
  post,
  handleUpdate,
  handleDelete,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <HStack>
        <Text w="40px" borderColor="gray.200">
          {id}
        </Text>
        <Text w="150px" borderColor="gray.200">
          {fname}
        </Text>
        <Text w="150px" borderColor="gray.200">
          {lname}
        </Text>
        <Text w="200px" borderColor="gray.200">
          {email}
        </Text>
        <Text w="100px" borderColor="gray.200">
          {avator}
        </Text>
       
        <ShowPostInfo post={post} />
        
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<CloseIcon />}
          onClick={() => handleDelete(id)}
          backgroundColor="gray.200"
          _hover={{ bg: "teal.600" }}
          _focus={{ boxShadow: "outline" }}
        />
        
        <ItemUpdate
          id={id}
          fname={fname}
          lname={lname}
          email={email}
          avator={avator}
          handleUpdate={handleUpdate}
        />
      </HStack>
    </>
  );

}
