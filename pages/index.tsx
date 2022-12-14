import React from "react";
import { NextPage } from "next";
import useSWR, {Key, Fetcher }from "swr";
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

import ItemUserDetail from "./components/ItemUserDetail";
import InsertNewUser from "./components/InsertNewUser";

type Props =[ {
  id: String;
  fname: String;
  lname: String;
  email: String;
  avator: String;
  post: [{ postId: number; postTitle: String; postDescription: String }];
  handleUpdate: () => void;
  handleDelete: (id: String) => void;
  //post:any;

}];


//import InitialFocus from "./components/modal";

//import InitialFocus from "./components/modal_update";

//import { SearchIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";

//import component_modal from "./components/modal";

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000//api/getall");
//   const data = await res.json();

//   return {
//     props: { data: data },
//   };
// };

export default function Home(props) {
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

  /*********************List all*****/
  //const fetcher = (url) => fetch(url).then((res) => res.json());
  //const { data} = useSWR("/api/getall", fetcher, {
  //  refreshInterval: 1000,
  //});

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {data} = useSWR<Props>("/api/getall", fetcher, {
    refreshInterval: 1000,
  });

  console.log(data);

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
      //alert(JSON.stringify(body));
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
    <VStack borderWidth="1px" p="5px">
      <Text fontSize="6xl">Total: {data && data.length} record(s)</Text>
      <Stack
        borderWidth="1px"
        p="5px"
        spacing={10}
        border="1px"
        borderColor="gray.200"
        w="1000px"
        h="800px"
      >
        <VStack border="1px" borderColor="red.200" p="5px">
          {data &&
            data.map((item, index) => {
              //console.log("item==", item);

              return (
                <HStack
                  borderBottom="1px"
                  borderColor="blue.100"
                  spacing="5"
                  p="3px"
                  w="100%"
                  key={index}
                  _hover={{ backgroundColor: "gray.50" }}
                >
                  <ItemUserDetail
                    id={item.id}
                    fname={item.fname}
                    lname={item.lname}
                    email={item.email}
                    avator={item.avator}
                    post={item.post}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                  />
                </HStack>
              );
            })}
        </VStack>
        <VStack w="100%">
          <InsertNewUser onSubmit={onSubmit} />
        </VStack>
      </Stack>
    </VStack>
  );
}
