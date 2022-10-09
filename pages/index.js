import React from "react";
import useSWR from "swr";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Stack,
  VStack,
  HStack,
  SimpleGrid,
  Center,
  Text,
  Box,
  Input,
  Button,
  IconButton,
  useToast,
} from "@chakra-ui/react";

import ListItem from "./components/listItem";

//import InitialFocus from "./components/modal";

//import InitialFocus from "./components/modal_update";

//import { SearchIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";

//import component_modal from "./components/modal";

export default function Home() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [avator, setAvator] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const toast = useToast({
    position: "top",
    title: "record updated",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });

  /****************textbox OnChange  */
  const handleChange = (event) => {
    setFname(event.target.value);
    setLname(event.target.value);
    setEmail(event.target.value);
    setAvator(event.target.value);

    event.target.defaultValue = event.target.value;

    // 👇️ this is the input field itself
    console.log("value--", event);

    // 👇️ this is the new value of the input
    console.log("target--", event.target.value);
  };

  /*********************List all*****/
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/getall", fetcher, {
    refreshInterval: 1000,
  });

  //console.log(data, error);

  /*********************Add New*****/
  const onSubmit = async (data) => {
    console.log("data.lname---", data.lname);
    //alert(JSON.stringify(data));
    //data.preventDefault();
    try {
      const body = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        avator: data.avator,
      };
      //alert(JSON.stringify(body));
      await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**************************************/

  /**********************Delete********* */
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const body = {
        id: id,
      };
      alert(JSON.stringify(body));
      await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  };

  /***************************update********* */
  const handleUpdate = async (item) => {
    console.log(item.fname);
    console.log(item.lname);
    console.log(item.email);
    try {
      const body = {
        id: item.id,
        fname: item.fname,
        lname: item.lname,
        email: item.email,
        avator: item.avator,
      };
      alert(JSON.stringify(body));
      await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast({
        containerStyle: {
          border: "0",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack>
      <Text fontSize="6xl">Home</Text>
      <Stack
        columns={2}
        spacing={10}
        border="1px"
        borderColor="gray.200"
        w="1000px"
        h="800px"
      >
        <VStack border="1px" borderColor="gray.200">
          {data &&
            data.map((item, index) => {
              //setFname(item.fname);

              return (
                <HStack spacing="5" key={index}>
                  <ListItem
                    id={item.id}
                    fname={item.fname}
                    lname={item.lname}
                    email={item.email}
                    avator={item.avator}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                  />
                </HStack>
              );
            })}
        </VStack>
        <VStack w="300px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack>
              <Input {...register("fname")}></Input>
              <Input {...register("lname")}></Input>
              <Input {...register("email")}></Input>
              <Input {...register("avator")}></Input>
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
              <Stack></Stack>
            </VStack>
          </form>
        </VStack>
      </Stack>
    </VStack>
  );
}
