import PropTypes from "prop-types";
import ConfirmForm from "./ConfirmForm";
import WordsForm from "./WordsForm";

const RenderFormCreate = ({ handleStepNext, activeStep, words }) => {
  let component;
  console.log(activeStep)
  switch (activeStep) {
    case 0:
      component = <WordsForm handleStepNext={handleStepNext} words={words} />;
      break;
    default:
      component = <ConfirmForm handleStepNext={handleStepNext} words={words} />;
  }
  return <>{component}</>;
};
RenderFormCreate.propTypes = {
  handleStepNext: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  words: PropTypes.array,
};

export default RenderFormCreate;
