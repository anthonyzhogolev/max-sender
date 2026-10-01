import { useCredetials } from "@hooks/useCredentials";
import { Button, Flex, Input, Typography, Panel } from "@maxhub/max-ui";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CredentialPage.module.css";

const CredentialPage = () => {
  const idInstanceRef = useRef<HTMLInputElement>(null);
  const apiTokenInstanceRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const { setCredentials } = useCredetials();
  const navigate = useNavigate();
  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idInstance = idInstanceRef.current?.value;
    const apiTokenInstance = apiTokenInstanceRef.current?.value;

    if (idInstance && apiTokenInstance) {
      setCredentials({ idInstance, apiTokenInstance });
      setError("");
      navigate("/");
    } else {
      setError("Введите значение");
    }
  };

  const handleChange = useCallback(() => {
    setError("");
  }, []);

  return (
    <Panel mode="secondary" centeredX centeredY className={styles.mainPanel}>
      <form onSubmit={handleLogin}>
        <Flex direction="column" gap={12}>
          <Input
            ref={idInstanceRef}
            mode="contrast"
            placeholder="idInstance"
            onChange={handleChange}
            name="idInstance"
            autoFocus 
          />
          <Input
            ref={apiTokenInstanceRef}
            mode="contrast"
            placeholder="apiTokenInstance"
            onChange={handleChange}
            name="apiTokenInstance"
          />
          <Typography.Label style={{ color: "red" }}>{error}</Typography.Label>
          <Button variant="primary" type="submit">
            Отправить
          </Button>
        </Flex>
      </form>
    </Panel>
  );
};

export default CredentialPage;
