import React from "react";
import { useForm } from "react-hook-form";
import ItemUpdate from "./itemUpdate";
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

export default function ListItem({
  id,
  fname,
  lname,
  email,
  avator,
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
    <form onSubmit={handleSubmit(handleUpdate)}>
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
        <Text w="200px" borderColor="gray.200">
          {avator}
        </Text>

        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<CloseIcon />}
          onClick={() => handleDelete(id)}
          backgroundColor="gray.200"
          _hover={{ bg: "teal.600" }}
          _focus={{ boxShadow: "outline" }}
        />
        <IconButton
          type="submit"
          colorScheme="blue"
          aria-label="Search database"
          icon={<EmailIcon />}
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
    </form>
  );
  // return (
  //   <div key={id}>
  //     <form onSubmit={handleSubmit(handleUpdate)}>
  //       <HStack>
  //         <Input {...register("id")} defaultValue={id} w="150px"></Input>
  //         <Input {...register("fname")} defaultValue={fname}></Input>
  //         <Input {...register("lname")} defaultValue={lname}></Input>
  //         <Input {...register("email")} defaultValue={email}></Input>
  //         <Input {...register("avator")} defaultValue={avator}></Input>
  //         <IconButton
  //           colorScheme="blue"
  //           aria-label="Search database"
  //           icon={<CloseIcon />}
  //           onClick={() => handleDelete(id)}
  //         />
  //         <IconButton
  //           type="submit"
  //           colorScheme="blue"
  //           aria-label="Search database"
  //           icon={<EmailIcon />}
  //           //onClick={() => handleUpdate()}
  //         />
  //       </HStack>
  //     </form>
  //   </div>
  // );
}
