import { NextPage } from "next";
import { useState } from "react";
import { Props } from "tsc/interfaces";
import Head from "next/head";
import Navbar from "components/Navbar";
import UserCardContainer from "containers/UserCardContainer";
import Form from "components/Form";

const Home: NextPage<Props> = ({ data }) => {
  const [isEditingUser, setIsEditingUser] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Prediko Test</title>
        <meta name="description" content="Hopefully a decent app!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light-grey w-screen h-screen overflow-hidden sm:flex">
        <Navbar />
        {isEditingUser ? (
          <Form handleGoBack={() => setIsEditingUser(false)} />
        ) : (
          <UserCardContainer
            users={data}
            handleAddUser={() => setIsEditingUser(true)}
          />
        )}
      </main>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("https://test-front-p6cqni7znq-uc.a.run.app/");
  const json = await res.json();
  return { data: json };
};

export default Home;
