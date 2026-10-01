import { Button, Flex, Input, Typography } from "@maxhub/max-ui";
import { useRef } from "react";
import { useDialogContext } from "../../hooks/useDialogContext";

export const PhoneForm = () => {
  const { setPhoneNumber } = useDialogContext();
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneRef.current && phoneRef.current?.value !== "") {
      setPhoneNumber(phoneRef.current?.value.replace(/\D/g, ""));
    } else {
      alert("Введите номер телефона");
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ flex: 1 }}
      gap={22}
    >
      <form onSubmit={handleSubmit}>
        <Typography.Headline>Введите номер телефона</Typography.Headline>
        <Flex direction="row" gap={22}>
          <Input
            placeholder="Номер телефона"
            ref={phoneRef}
            name="phoneNumber"
            autoFocus
          />
          <Button variant="primary" type="submit">
            Далее
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
