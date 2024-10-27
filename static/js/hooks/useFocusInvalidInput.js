import { useEffect } from "react";

// useFocusInvalidInput :: _ -> _
const useFocusInvalidInput = (trigger) => {
  useEffect(() => {
    const invalidInput = document.querySelector('[aria-invalid="true"]');
    if (invalidInput) {
      invalidInput.focus();
    }
  }, [trigger]);
};

export default useFocusInvalidInput;
