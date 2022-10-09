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
    <div key={id}>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <HStack>
          <Input {...register("id")} defaultValue={id} w="150px"></Input>
          <Input {...register("fname")} defaultValue={fname}></Input>
          <Input {...register("lname")} defaultValue={lname}></Input>
          <Input {...register("email")} defaultValue={email}></Input>
          <Input {...register("avator")} defaultValue={avator}></Input>
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
        </HStack>
      </form>
    </div>
  );
}
