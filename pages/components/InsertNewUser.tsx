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
import { EmailIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";

export const InsertNewUser = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack>
        <Input {...register("fname")}></Input>
        <Input {...register("lname")}></Input>
        <Input {...register("email")}></Input>
        <Input {...register("avator")}></Input>
        <Button type="submit" colorScheme="blue" w="300px">
          Submit
        </Button>
        <Stack></Stack>
      </HStack>
    </form>
  );
};
export default InsertNewUser;
