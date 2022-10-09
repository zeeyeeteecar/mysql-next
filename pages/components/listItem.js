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
} from "@chakra-ui/react";
import { EmailIcon, CloseIcon } from "@chakra-ui/icons";

export default function ListItem({ item, handleUpdate, handleDelete }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div key={item.id}>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <HStack>
          <Input {...register("id")} defaultValue={item.id} w="150px"></Input>
          <Input {...register("fname")} defaultValue={item.fname}></Input>
          <Input {...register("lname")} defaultValue={item.lname}></Input>
          <Input {...register("email")} defaultValue={item.email}></Input>
          <Input {...register("avator")} defaultValue={item.avator}></Input>
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<CloseIcon />}
            onClick={() => handleDelete(item.id)}
          />
          <IconButton
            type="submit"
            colorScheme="blue"
            aria-label="Search database"
            icon={<EmailIcon />}
            //onClick={() => handleUpdate()}
          />
          <Button type="submit" colorScheme="blue"></Button>
        </HStack>
      </form>
    </div>
  );
}
