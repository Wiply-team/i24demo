import "./CommentForm.scss";
import React, { useState } from "react";
import translations from "../translations";
import translate from "../../../../utilities/translate";
import CommentInput from "../../../../widgets/Form/CommentInput";
import Form from "../../../../widgets/Form";

// trans :: String -> String -> String
const trans = translate(translations);

// CommentForm :: Props -> React.Component
const CommentForm = ({
  submit,
  signIn,
  isSignedIn,
  isSending,
  threadId = null,
  locale,
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () =>
    isSignedIn ? submit(message, threadId, () => setMessage("")) : signIn();

  return (
    <Form onSubmit={handleSubmit}>
      <CommentInput
        label={trans(locale)("writeNewComment")}
        buttonLabel={trans(locale)("sendNewComment")}
        value={message}
        onChange={setMessage}
        disabled={isSending}
      />
    </Form>
  );
};

export default CommentForm;
