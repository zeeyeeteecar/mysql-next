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
  useDisclosure,
  Button,
  VStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function InitialFocus({ item, handleUpdate }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger-{item.id}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{item.id} </PopoverHeader>
        <PopoverBody>
          fname : {item.fname} === lname : {item.lname}
          <form onSubmit={handleSubmit(handleUpdate)}>
            <VStack>
              <Input {...register("fname")} defaultValue={item.fname}></Input>
              <Input {...register("lname")} defaultValue={item.lname}></Input>
              <Input {...register("email")} defaultValue={item.email}></Input>
              <Input {...register("avator")} defaultValue={item.id}></Input>
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
              <Stack></Stack>
            </VStack>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default InitialFocus;
