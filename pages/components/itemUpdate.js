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
import { EmailIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ItemUpdate({
  id,
  fname,
  lname,
  email,
  avator,
  handleUpdate,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<EditIcon />}
        onClick={onOpen}
      />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <form onSubmit={handleSubmit(handleUpdate)}>
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack>
                <Input {...register("id")} value={id} w="150px"></Input>
                <Input {...register("fname")} defaultValue={fname}></Input>
                <Input {...register("lname")} defaultValue={lname}></Input>
                <Input {...register("email")} defaultValue={email}></Input>
                <Input {...register("avator")} defaultValue={avator}></Input>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="blue"

                //onClick={() => handleUpdate()}
              />
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
