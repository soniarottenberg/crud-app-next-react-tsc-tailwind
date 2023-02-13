import { useCallback, useState } from "react";
import { FormProps } from "tsc/interfaces";
import SelectInput from "commons/SelectInput";
import TextInput from "commons/TextInput";
import { Role } from "tsc/enums";
import Arrow from "commons/Arrow";
import Title from "commons/Title";
import Button from "commons/Button";
import { useRouter } from "next/navigation";

const Form = ({ handleGoBack }: FormProps) => {
  const router = useRouter();
  const [values, setValues] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        role: values.role,
      };

      if (
        data.first_name === "" ||
        data.last_name === "" ||
        data.email === "" ||
        data.role === ""
      ) {
        return alert("Seems like some fields are empty...");
      }

      const response = await fetch(
        "https://test-front-p6cqni7znq-uc.a.run.app/",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      )
        .then(() => router.refresh())
        .catch((err) => console.log("err", err));
    },
    [values]
  );

  return (
    <div className="pl-4 pt-12 w-full sm:h-full h-auto">
      <form
        id="form"
        onSubmit={(e) => handleSubmit(e)}
        className="sm:h-full h-auto"
      >
        <div className="bg-white rounded-l p-4">
          <div className="flex justify-between items-center pl-4">
            <div className="flex justify-between items-center">
              <div onClick={() => handleGoBack()}>
                <Arrow arrowDirection={"left"} />
              </div>
              <div className="ml-10">
                <Title title={"Add new user"} />
              </div>
            </div>
            <Button label={"save and add"} type={"submit"} />
          </div>
        </div>
        <div className="bg-white rounded-l p-8 mt-8 sm:h-full h-auto">
          <div className="font-bold drop-shadow-[4px_4px_4px_rgba(0,0,0,0.4)] mb-6">
            User information
          </div>
          <div className="grid grid-cols-1 gap-x-20 gap-y-4 sm:grid-cols-2 xl:grid-cols-3 ">
            <TextInput
              type={"text"}
              name={"firstName"}
              value={values.firstName}
              title={"FIRST NAME"}
              placeholder={"insert first name"}
              onChange={(firstname) =>
                setValues((prevState) => ({
                  ...prevState,
                  firstName: firstname,
                }))
              }
            />
            <TextInput
              type={"text"}
              name={"lastName"}
              value={values.lastName}
              title={"LAST NAME"}
              placeholder={"insert last name"}
              onChange={(lastname) =>
                setValues((prevState) => ({ ...prevState, lastName: lastname }))
              }
            />
            <TextInput
              type={"email"}
              name={"email"}
              value={values.email}
              title={"EMAIL"}
              placeholder={"insert email address"}
              onChange={(email) =>
                setValues((prevState) => ({ ...prevState, email: email }))
              }
            />
            <SelectInput
              name={"role"}
              value={values.role}
              title={"ROLE"}
              placeholder={"select role"}
              options={Role}
              onChange={(role) =>
                setValues((prevState) => ({
                  ...prevState,
                  role: role.target.value,
                }))
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
